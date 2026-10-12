# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Verdant Living — a frontend-only demo e-commerce site for a fictional premium garden/planter brand, built with Next.js App Router. There is no backend, auth, payments, or real order processing; all commerce state lives in the browser (localStorage) and all catalogue content is static seed data in `data/`.

## Commands

```bash
npm run dev          # start dev server (Turbopack) on :3000 (falls back to another port if busy)
npm run build         # production build (Turbopack) — also runs the TypeScript check
npm run start         # serve the production build
npm run lint          # eslint (flat config: eslint-config-next core-web-vitals + typescript)
npx tsc --noEmit      # type-check only, faster than a full build
```

There is no test runner configured (no `test` script, no test files) — don't invent one unless asked.

## Architecture

**Data layer is the source of truth.** Everything the UI renders — products, collections, nav structure, journal articles — comes from typed static data in `data/` (`products.ts`, `collections.ts`, `navigation.ts`, `articles.ts`), typed via `types/index.ts`. There is no API/fetch layer; pages import directly from `data/`. When adding a product, collection, or article, add it there — components should stay data-agnostic.

**Routing mirrors `data/` 1:1.** Dynamic routes (`app/products/[slug]`, `app/collections/[slug]`, `app/journal/[slug]`) use `generateStaticParams()` sourced from the corresponding `data/` file and call `notFound()` for unknown slugs. All three collections are handled by the single `app/collections/[slug]/page.tsx`, not separate pages per collection.

**Global providers wrap everything in `app/layout.tsx`**: `CartProvider` → `ToastProvider` → `Header`/`Footer`/`CartDrawer`. `CartProvider` (`context/cart-context.tsx`) persists cart state to `localStorage` under `verdant-living-cart`, hydrating in a `useEffect` (not a lazy `useState` initializer, to avoid SSR/client hydration mismatches) and exposing drawer open/close state alongside cart mutations. `useWishlist` (`hooks/use-wishlist.ts`) follows the same localStorage-hydration pattern independently. `ToastProvider` (`context/toast-context.tsx`) is a minimal global toast queue used for "added to cart" feedback.

**Filtering/sorting is URL-driven, not component state.** `components/collections/product-grid.tsx` reads filters out of `useSearchParams()`, computes results via the pure functions in `lib/filter-products.ts` (`applyFilters`, `getFacets`), and writes changes back with `router.replace(?...)`. This makes filter state shareable/bookmarkable and keeps the filtering logic unit-testable in isolation from React. Any page using `ProductGrid` must wrap it in `<Suspense>` (required by Next for `useSearchParams` in a page that isn't fully dynamic).

**Images**: all photography is hotlinked from `images.unsplash.com` via `lib/images.ts` (`img(id, width)` helper + the `IMAGES` id map). Remote image loading is only allowed for that one host — see `images.remotePatterns` in `next.config.ts`. When adding a new photo, verify the Unsplash photo ID actually resolves (`curl -I https://images.unsplash.com/photo-<id>`) before using it — invalid IDs fail silently as broken images.

**Design tokens** live in `app/globals.css` as Tailwind v4 `@theme` CSS variables (no `tailwind.config.js` — this project uses Tailwind v4's CSS-first config). Brand colors (`forest`, `olive`, `ivory`, `sand`, `terracotta`, `charcoal`) and fonts (`--font-serif` = Cormorant Garamond, `--font-sans` = DM Sans, loaded via `next/font/google` in `app/layout.tsx`) are defined there — use the Tailwind color/font utilities (`bg-forest`, `font-serif`, etc.), not raw hex values, in new components.

**Component organization** under `components/`: `ui/` (generic primitives — Button, Drawer, Accordion, Reveal, etc.), `layout/` (header/footer/nav/mega-menu), `home/` (homepage-only sections), `products/` (card/gallery/options/carousel, reused across home, collections, and product detail), `collections/` (filter panel + grid), `cart/`, `forms/` (newsletter, contact, commercial enquiry — all client components using `zod` validation; the two multi-field forms use `react-hook-form` + `@hookform/resolvers/zod`, simpler ones use plain `useState`), `legal/` (shared template for the three static policy pages).

**No real backend is implied anywhere.** Newsletter/contact/commercial-enquiry forms simulate a network delay then show success state explicitly labeled "Demo mode — nothing was actually sent." The cart's Checkout button shows an inline notice rather than navigating to a fake payment flow. The account icon opens a small popover stating sign-in isn't implemented. Preserve this pattern — don't make demo actions look like they hit a real backend.

**`AGENTS.md`** at the repo root is auto-generated/overwritten by `next dev` itself (see the comment inside it) — don't bother manually editing it beyond what's already there.
