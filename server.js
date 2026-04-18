import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const db = await mysql.createConnection(process.env.DATABASE_URL);

app.post("/api/sql", async (req, res) => {
  try {
    const [rows] = await db.execute(req.body.query, req.body.params || []);
    res.json({ success: true, data: rows });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});

// Servir le frontend buildé
app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));