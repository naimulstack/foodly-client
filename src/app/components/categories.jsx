import Link from "next/link";
import {
  Pizza,
  Sandwich,
  Beef,
  Utensils,
  Drumstick,
  CakeSlice,
  Coffee,
  Salad,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

const icons = {
  pizza: Pizza,
  sandwich: Sandwich,
  beef: Beef,
  utensils: Utensils,
  drumstick: Drumstick,
  "cake-slice": CakeSlice,
  coffee: Coffee,
  salad: Salad,
};

export default async function Category() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`,
    { cache: "no-store" }
  );

  const categories = await response.json();

  return (
    <section className="max-w-7xl mx-auto px-5 py-12 lg:px-8">

      <div className="mb-8 text-center">
        <p className="font-semibold text-green-600 text-2xl">
          Explore Foods
        </p>

        <h2 className="mt-2 text-3xl font-bold text-gray-900">
          Popular Food Categories
        </h2>

        <p className="mt-3 text-gray-500 text-xl">
          Discover your favorite food from our popular categories.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">

        {categories.map((category) => {
          const Icon = icons[category.icon];

          return (
            <Link href={`/foods/${category.slug}`} key={category._id}>
              <Card className="group cursor-pointer border-gray-100 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-lg">

                <CardContent className="flex flex-col items-center gap-4 p-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-[#22C55E] transition group-hover:scale-110">
                    <Icon size={30} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-center text-sm font-semibold text-gray-800 group-hover:text-green-700">
                    {category.name}
                  </h3>

                </CardContent>
              </Card>
            </Link>
          );
        })}

      </div>
    </section>
  );
}