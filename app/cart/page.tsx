import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CartPageContent } from "@/components/cart/cart-page-content";

export default function CartPage() {
  return (
    <div className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-10 sm:py-14">
      <Breadcrumbs items={[{ label: "Cart" }]} />
      <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mt-4 mb-10">
        Your Cart
      </h1>
      <CartPageContent />
    </div>
  );
}
