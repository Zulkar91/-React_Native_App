import express from "express";
import cors from "cors";
import pkg from "pg";

const { Pool } = pkg;

const app = express();
const port = 5001;

// PostgreSQL connection
const pool = new Pool({
  connectionString: "postgres://recipeuser:recipepass@localhost:5433/recipedb",
});

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Recipe backend is running!");
});

// Get favorites by user ID
app.get("/api/favorites/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM favorites WHERE user_id = $1",
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching favorites:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add a recipe to favorites
app.post("/api/favorites", async (req, res) => {
  const { user_id, recipe_id, title } = req.body;
  try {
    await pool.query(
      "INSERT INTO favorites (user_id, recipe_id, title) VALUES ($1, $2, $3)",
      [user_id, recipe_id, title]
    );
    res.status(201).json({ message: "Recipe added to favorites" });
  } catch (err) {
    console.error("Error adding to favorites:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Remove a recipe from favorites
app.delete("/api/favorites", async (req, res) => {
  const { user_id, recipe_id } = req.body;
  try {
    await pool.query(
      "DELETE FROM favorites WHERE user_id = $1 AND recipe_id = $2",
      [user_id, recipe_id]
    );
    res.status(200).json({ message: "Recipe removed from favorites" });
  } catch (err) {
    console.error("Error removing from favorites:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

