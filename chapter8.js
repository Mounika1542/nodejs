/**********************************************************************
 * Node.js – Chapter 8
 * REST APIs, Controllers & Clean Architecture (Single File Version)
 *
 * In Chapter 7, we learned:
 * - Middleware
 * - Basic routing
 * - Error handling
 *
 * In Chapter 8, we learn:
 * - What is a REST API
 * - HTTP methods (GET, POST, PUT, DELETE)
 * - Controller concept (logically, even in one file)
 * - How real backend APIs are structured
 *
 * NOTE:
 * This is written in ONE FILE for learning simplicity.
 **********************************************************************/

const express = require("express");
const app = express();

/**********************************************************************
 * GLOBAL MIDDLEWARE
 **********************************************************************/

// Parse JSON request body
app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toLocaleString()}`);
  next();
});

/**********************************************************************
 * CONTROLLERS (Business Logic)
 * Normally these go in /controllers folder
 * Here we keep them in the same file for Chapter 8
 **********************************************************************/

/**
 * USER CONTROLLER
 */
// GET all users
const getUsers = (req, res) => {
  res.json([
    { id: 1, name: "Mounika" },
    { id: 2, name: "Keerthi" }
  ]);
};
