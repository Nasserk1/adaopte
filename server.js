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

// Gestion de la connexion DB plus robuste
let db;
async function connectDB() {
    try {
        db = await mysql.createConnection(process.env.DATABASE_URL);
        console.log("Connecté à la base de données MySQL");
    } catch (err) {
        console.error("Erreur de connexion DB:", err.message);
    }
}
connectDB();

app.post("/api/sql", async (req, res) => {
    if (!db) return res.status(500).json({ success: false, error: "DB non connectée" });
    try {
        const [rows] = await db.execute(req.body.query, req.body.params || []);
        res.json({ success: true, data: rows });
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
});

// Servir le frontend buildé
// IMPORTANT : Assure-toi que le dossier 'dist' existe sur Render après le build
app.use(express.static(path.join(__dirname, "dist")));

app.get(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});