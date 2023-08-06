import express from "express";
import bodyParser from "body-parser";


const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/charging-stations", (_req, res) => {
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



app.post("/charging-stations", (req, res) => {
    const data = req.body;
    console.log(req.body);
    const chargingStation = {
        id: Math.random(),
        name: data.name,
        location: data.location,
        status: "Available",
    };

    res.send(chargingStation);
});

app.listen(3000, () => {
    console.log("REST API is running on port 3000");
});