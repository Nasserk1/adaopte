import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";

const app = express();
app.use(cors());
app.use(express.json());

// Connexion Railway
const db = await mysql.createConnection(process.env.DATABASE_URL);

// Exemple de route API
app.post("/api/sql", async (req, res) => {
  try {
    const [rows] = await db.execute(req.body.query, req.body.params || []);
    res.json({ success: true, data: rows });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});

// IMPORTANT : pas de app.listen() sur Vercel
export default app;
