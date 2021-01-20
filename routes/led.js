const express = require("express");
const router = express.Router();

var gpio = require('rpi-gpio');
gpio.setup(12, gpio.DIR_OUT);

router.post("/on", (req, res, next) => {
    gpio.write(12, true, function(err) {
        if (err) throw err;
        res.json({ resp: "Led en pin 12 encendido" });
    });
    res.json({ resp: "Led en pin 12 encendido - Fin post" });
 });

 router.post("/off", (req, res, next) => {
    gpio.write(12, false, function(err) {
        if (err) throw err;
        res.json({ resp: "Led en pin 12 apagado" });
    });
    res.json({ resp: "Led en pin 12 apagado - Fin post" });
 });