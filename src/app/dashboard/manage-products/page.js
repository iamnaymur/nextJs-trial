import ManageProduct from "./ManageProduct";
import getAllProducts from "@/utils/getAllProducts";

export const metadata = {
  title: "Manage Products | Dashboard | Next hero",
  description: "Next Hero",
};
const ManageProductsPage = () => {
  const products = getAllProducts();

  return (
    <div className="w-full mt-10">
      <h1 className="mb-5 text-2xl font-semibold">Manage All products here.</h1>
      <ManageProduct products={products} />
    </div>
  );
};

export default ManageProductsPage;
