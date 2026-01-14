const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.json({
      message: "Please enter a use keyword."
    });
  }

  try {
    // 1️⃣ Call Python API FIRST
    const mlRes = await axios.post("http://localhost:8000/predict", {
      text: message
    });

    // 2️⃣ If dataset match found
    if (mlRes.data.found) {
      return res.json({
        message: `🌿 Recommended Plant: *${mlRes.data.common_name}*`
      });
    }

    // 3️⃣ Wikipedia fallback
    const headers = {
      "User-Agent": "Plant-Chatbot/1.0"
    };

    const wikiRes = await axios.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(message)}`,
      { headers }
    );

    return res.json({
      message: wikiRes.data.extract || "No information found."
    });

  } catch (err) {
    console.error("Chat error:", err.message);
    return res.json({
      message: "Something went wrong."
    });
  }
});

module.exports = router;
