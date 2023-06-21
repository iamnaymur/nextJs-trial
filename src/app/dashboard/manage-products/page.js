import ManageProduct from "./ManageProduct";
import getAllProducts from "@/utils/getAllProducts";

export const metadata = {
  title: "Manage Products | Dashboard | Next hero",
  description: "Next Hero",
};
const ManageProductsPage =async () => {
  const products =await getAllProducts();
  console.log(
    "🚀 ~ file: page.js:10 ~ ManageProductsPage ~ products:",
    products
  );

  return (
    <div className="w-full mt-10">
      <h1 className="mb-5 text-2xl font-semibold">Manage All products here.</h1>
      <ManageProduct products={products}></ManageProduct>
    </div>
  );
};

export default ManageProductsPage;
