// -------------------------------------------
// Node.js Chapter 7 - Express Router & Middleware (Single File Version)
// -------------------------------------------

const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// -------------------------------------------
// Custom Logger Middleware
// -------------------------------------------
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toLocaleString()}`);
  next();
});

// -------------------------------------------
// USERS ROUTES
// -------------------------------------------

// GET all users
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Mounika" },
    { id: 2, name: "Keerthi" }
  ]);
});

// POST a new user
app.post("/api/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  res.json({
    message: "User created successfully",
    user: { name }
  });
});

// -------------------------------------------
// PRODUCTS ROUTES
// -------------------------------------------

// GET all products
app.get("/api/products", (req, res) => {
  res.json([
    { id: 101, product: "Laptop" },
    { id: 102, product: "Mobile" }
  ]);
});

// POST a new product
app.post("/api/products", (req, res) => {
  const { product } = req.body;

  if (!product) {
    return res.status(400).json({ message: "Product name is required" });
  }

  res.json({
    message: "Product added successfully",
    product: { product }
  });
});

// -------------------------------------------
// ERROR HANDLING MIDDLEWARE
// -------------------------------------------
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ message: "Internal Server Error" });
});

// -------------------------------------------
// START SERVER
// -------------------------------------------
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
