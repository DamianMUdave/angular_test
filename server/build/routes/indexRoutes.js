"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = require("../controllers/indexControllers");
class indexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', indexControllers_1.indexControllers.index);
    }
}
const indexRoutesInstance = new indexRoutes();
exports.default = indexRoutesInstance.router;
//# sourceMappingURL=indexRoutes.js.map