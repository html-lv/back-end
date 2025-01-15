import pgPromise from "pg-promise";
const pg = pgPromise({});
export const db = pg("postgres://postgres:mysecurepassword@localhost:5433/mydatabase");