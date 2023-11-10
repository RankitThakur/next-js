// export const user = [
//   {
//     name: "test",
//     age: 23,
//     id: 1,
//     last_name: "test2",
//     mobile_number: "1234567899",
//     city: "noida",
//   },
//   {
//     name: "test2",
//     age: 23,
//     id: 2,
//     last_name: "test2",
//     mobile_number: "1234567899",
//     city: "noida",
//   },
//   {
//     name: "test3",
//     age: 23,
//     id: 3,
//     last_name: "test2",
//     mobile_number: "1234567899",
//     city: "noida",
//   },
//   {
//     name: "test4",
//     age: 23,
//     id: 4,
//     last_name: "test2",
//     mobile_number: "1234567899",
//     city: "noida",
//   },
// ];

import { Pool } from "pg";

const pool = new Pool({
  user: "root",
  host: "localhost",
  database: "test",
  password: "root",
  port: 5432, // Your PostgreSQL port
});

export default pool;
