import { Pool } from "pg";

const pool = new Pool({
  user: "your_user",
  host: "your_host",
  database: "your_database",
  password: "your_password",
  port: 5432, // Varsayılan PostgreSQL portu
});

export default pool;
