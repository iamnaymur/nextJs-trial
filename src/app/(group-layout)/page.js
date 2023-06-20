import PopularProducts from "@/components/HomePage/PopularProducts";
import Categories from "@/components/HomePage/categories";
import { Suspense } from "react";

//~setting the ISR for 5 seconds here.
export const revalidate = 5;
const HomePage = () => {
  return (
    <main>
      <Categories />
      <Suspense
        fallback={
          <h1 className="text-center font-semibold text-2xl">Loading....</h1>
        }
      >
        <PopularProducts />
      </Suspense>
    </main>
  );
};

export default HomePage;
