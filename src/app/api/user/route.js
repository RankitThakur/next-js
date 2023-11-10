import { NextResponse } from "next/server";
import { user } from "../../../utils/db";

export const GET = (req) => {
  const data = user;
  console.log("getdata", data);
  return NextResponse.json(data, { status: 200 });
};
