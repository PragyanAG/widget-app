module.exports = app => {
    const labelplaceholders = require("../controllers/widget.controller.js");
  
    var router = require("express").Router();
  
    
    // Retrieve all Labelplaceholders
    router.get("/", labelplaceholders.findAll);
    
    app.use('/api/widgets', router);
  };