const express = require("express");
const cors = require("cors");

const { BadRequestError, errorHandler } = require("./app/error");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const setupRestaurantRoutes = require("./app/routes/restaurant.route");
setupRestaurantRoutes(app); 
const setupMenuRoutes = require("./app/routes/menu.routes");
setupMenuRoutes(app); 

app.get('/', function(req, res){
    res.json({ message: 'Chào mừng đến với website tìm kiếm nhà hàng' });
});

app.use((req, res, next) => {
    next(new BadRequestError(404, "Không tìm thấy tài nguyên"));
});

app.use((err, req, res, next) => {
    errorHandler.handleError(err, res);
});

module.exports = app;