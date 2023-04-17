module.exports = app => {
    const tickets = require("../controllers/ticket.controller.js");
    
    
    var router = require("express").Router();
    
    router.post("/", tickets.create);
    
    router.get("/", tickets.findAll);
    
    router.get("/published", tickets.findAllPublished);
    
    router.get("/:id", tickets.findOne);
    
    router.put("./id", tickets.update);
    
    router.delete("./id:", tickets.delete);
    
    router.delete("/", tickets.deleteAll);
    
    app.use('/api/tickes', router);
};
