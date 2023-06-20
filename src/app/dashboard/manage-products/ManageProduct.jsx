import ManageSingleProduct from "./ManageSingleProduct";

const ManageProduct = ({ products }) => {
  return (
    <div>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="border border-slate-400">Title</th>
            <th className="border border-slate-400">Price</th>
            <th className="border border-slate-400">Update</th>
            <th className="border border-slate-400">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ManageSingleProduct
              key={product.id}
              product={product}
            ></ManageSingleProduct>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
