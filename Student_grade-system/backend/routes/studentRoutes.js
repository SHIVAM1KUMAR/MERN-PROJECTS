const express = require("express");
const router = express.Router();
const school = require("../classes/School");

router.post("/add", async (req, res) => {
  const { name, rollNumber, grades } = req.body;
  const result = await school.addStudent(name, rollNumber, grades);
  res.json(result);
});

router.delete("/remove/:rollNumber", async (req, res) => {
  const result = await school.removeStudent(parseInt(req.params.rollNumber));
  res.json(result);
});

router.get("/result/:name", async (req, res) => {
  const student = await school.getStudentByName(req.params.name);
  if (student) res.json(student);
  else res.status(404).json({ message: "Student not found" });
});

router.get("/highest", async (req, res) => {
  const topStudent = await school.getHighestAverageStudent();
  if (topStudent) res.json(topStudent);
  else res.status(404).json({ message: "No students available" });
});

module.exports = router;
