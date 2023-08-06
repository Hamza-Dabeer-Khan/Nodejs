"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/charging-stations", function (_req, res) {
    res.send([
        {
            id: 1,
            name: "Charging Station 1",
            location: "123 Main Street",
            status: "Available",
        },
        {
            id: 2,
            name: "Charging Station 2",
            location: "456 Elm Street",
            status: "In Use",
        },
    ]);
});
app.post("/charging-stations", function (req, res) {
    var data = req.body;
    console.log(req.body);
    var chargingStation = {
        id: Math.random(),
        name: data.name,
        location: data.location,
        status: "Available",
    };
    res.send(chargingStation);
});
app.listen(3000, function () {
    console.log("REST API is running on port 3000");
});
//# sourceMappingURL=main.js.map