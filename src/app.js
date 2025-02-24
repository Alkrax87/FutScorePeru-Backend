require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios");

const app = express();

// CORS
const corsOptions = {
  origin: "*",
  methods: ["GET"],
};

app.use(cors(corsOptions));

// Middelware
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/*", async (req, res) => {
  try {
    const route = req.originalUrl;

    const response = await axios({
      method: req.method,
      url: process.env.apiUrl + route,
      headers: {
        "x-api-key": process.env.apiKey,
      },
      data: req.body,
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    const status = error.response?.status || 500;
    const errorMessage = error.response?.data || { error: "Internal Server Error" };

    res.status(status).json(errorMessage);
  }
});

module.exports = app;