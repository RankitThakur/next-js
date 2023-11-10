import pool from "../../../../utils/db";
import { NextResponse } from "next/server";

let client = await pool.connect();

//get one user data
export const GET = async (req, res) => {
  console.log("id", res.params.id);
  const id = res.params.id;
  const result = await client.query("SELECT * FROM users WHERE user_id = $1", [
    id,
  ]);
  console.log(result);
  const data =
    result.length === 0
      ? { data: "No data Found", success: false }
      : { data: result.rows[0], success: false };
  return NextResponse.json([data], { status: 200 });
};

export const PUT = async (req, res) => {
  const payload = await req.json();
  payload.id = res.params.id;
  try {
    if (!payload.username || !payload.age || !payload.email) {
      return NextResponse.json(
        { result: { error: "", success: false } },
        { status: 400 }
      );
    } else {
      await client.query(
        "UPDATE users SET username = $1, email = $2 WHERE user_id = $3 RETURNING *",
        [payload.username, payload.email, payload.id]
      );

      return NextResponse.json(
        { result: payload, success: true },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const DELETE = async (req, res) => {
  const id = res.params.id;
  try {
    const result = await client.query(
      "DELETE FROM users WHERE user_id = $1 RETURNING *",
      [id]
    );
    const deletedData = result.rows[0];
    if (!deletedData) {
      return NextResponse.json(
        { error: "User not found", success: false },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { result: "user delete", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { result: { error: "", success: false } },
      { status: 400 }
    );
  }
};
