import Link from "next/link";

const SingleCategory = ({ category }) => {
  const { id, name } = category;
  return (
    <Link href={`/products?categoryId=${id}`}>
      <h1 className="border p-3 rounded border-blue-600 hover:bg-slate-300">{name}</h1>
    </Link>
  );
};

export default SingleCategory;
