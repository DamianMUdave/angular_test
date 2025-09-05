"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class GamesControllers {
    list(req, res) {
        res.send('Listando juegos');
    }
}
const gamesControllers = new GamesControllers();
exports.default = gamesControllers;
//# sourceMappingURL=gamesControllers.js.map