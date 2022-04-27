const express = require("express");
const menus = require("../controllers/menu.controller");
module.exports = function(app){
    const router = express.Router();
    router.post("/", menus.create);
    router.get("/", menus.findAll);
    router.get("/favorite", menus.findAllTrend);
    router.get("/:id", menus.findOne);
    router.put("/:id", menus.update);
    router.delete("/:id", menus.delete);
    router.delete("/", menus.deleteAll);
    app.use("/api/menu", router);
};