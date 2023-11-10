import { write, writeFile } from "fs/promises";
import pool from "../../../utils/db";
import { NextResponse } from "next/server";

let client = await pool.connect();

export const GET = async (req) => {
  const { rows } = await client.query("SELECT * FROM users");
  return NextResponse.json(rows, { status: 200 });
};

export const POST = async (req, res) => {
  const payload = await req.formData();
  const getUsername = payload.get("username");
  const getFile = payload.get("file");
  console.log(getFile);
  const byteData = await getFile.arrayBuffer();

  const buffer = Buffer.from(byteData);
  const getEmail = payload.get("email");
  if (!getEmail || !getUsername) {
    return NextResponse.json(
      { error: "require filed not found", success: false },
      { status: 400 }
    );
  } else {
    const newUser = await client.query(
      "INSERT INTO users (username, email, image) VALUES ($1, $2, $3) RETURNING *",
      [getUsername, getEmail, buffer]
    );
    return NextResponse.json(
      { result: "new user created", user: newUser.rows[0], success: true },
      { status: 201 }
    );
  }
};
