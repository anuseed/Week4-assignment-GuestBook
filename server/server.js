import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import pg from "pg";
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

const app = express();
app.use(express.json());

app.use(cors());

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`server is running in PORT ${PORT}`);
});

app.get("/", (request, response) => {
  response.json({ message: "You are looking at my root route" });
});

app.get("/userComments", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM userComments");
    res.json(results.rows);
  } catch (err) {
    console.error("Error executing query", err);
  }
});

app.post("/submitUserComment", async function (request, response) {
  const { user_name, comment } = request.body;
  console.log(user_name);
  console.log(comment);
  console.log(request.body);
  try {
    await db.query(
      `INSERT INTO userComments(user_name,comment) VALUES ($1, $2)`,
      [user_name, comment]
    );
    response.status(200).json({ success: true });
  } catch (error) {
    response.status(500).json({ success: false });
    console.log("/submittedUserComment had an error", error);
  }
});
