const base = (id: string) => `https://images.unsplash.com/photo-${id}`;

export function img(id: string, width = 1200) {
  return `${base(id)}?w=${width}&q=80&auto=format&fit=crop`;
}

export const IMAGES = {
  hero: "1598902108854-10e335adac99",
  categoryPlanters: "1560184897-ae75f418493e",
  categorySoil: "1544947950-fa07a98d237f",
  categoryDecor: "1416339442236-8ceb164046f8",
  story: "1600566753190-17f0baa2a6c3",
  commercial: "1604762524889-3e2fcc145683",
  commercialAlt: "1524758631624-e2822e304c36",
  about1: "1495602787267-96ab76127c2a",
  about2: "1521334884684-d80222895322",
  journal1: "1519336056116-bc0f1771dec8",
  journal2: "1461988091159-192b6df7054f",
  journal3: "1583160247711-2191776b4b91",
  detailA: "1600121848594-d8644e57abab",
  detailB: "1416879595882-3373a0480b5b",
  detailC: "1485955900006-10f4d324d411",
} as const;
