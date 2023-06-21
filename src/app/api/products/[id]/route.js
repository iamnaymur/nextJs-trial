import db from "@/db.json";
import { NextResponse } from "next/server";

export const GET = (request, { params }) => {
  const product = db.products.find((product) => product.id === +params.id);
  if (product) {
    return NextResponse.json(product);
  }
  return NextResponse.json(
    {
      message: "PRODUCT NOT FOUND",
    },
    {
      status: 404,
    }
  );
};
//*Update api
export const PATCH = async (request, { params }) => {
  const body = await request.json();
  const index = db.products.findIndex((product) => product.id === +params.id);
  db.products[index] = { ...db.products[index], ...body };
  return NextResponse.json(
    {
      message: "PRODUCT UPDATED SUCCESSFUL",
    },
    {
      status: 404,
    }
  );
};
//*delete api
export const DELETE = async (request, { params }) => {
  db.products = db.products.filter((product) => product.id !== +params.id);
  return NextResponse.json({
    message: "PRODUCT DELETED SUCCESSFUL",
  });
};
