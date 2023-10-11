var express = require("express");
const router = express.Router();
const Faculty = require("../models/Faculty");

router.get("/login", (req, res) => {
  res.render("faculty/login");
});
router.post("/login", async (req, res) => {

    const newFaculty = new Faculty(req.body);
  
    try {
      const savedFaculty = await newFaculty.save();
      res.status(200).json(savedFaculty);
      return res.end();
    
    } catch (err) {
      res.status(500).json(err);
    }
    
    
  });
  
  
  //UPDATE Faculty
  
  router.put("/faculty/:id", async (req, res) => {
    try {
      const updatedFaculty = await Faculty.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedFaculty);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  

module.exports = router;

  

