const express = require("express");
const router = express.Router();
const { fetchDoctorsById } = require("../services/doctorsService");


router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await fetchDoctorsById(id);
    res.json(item);
  } catch (err) {
    res.status(404).json({ error: "Item not found" });
  }
});

module.exports = router;