"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexControllers = void 0;
const express_1 = require("express");
class IndexControllers {
    index(req, res) {
        res.send('Hello');
    }
}
exports.indexControllers = new IndexControllers();
//# sourceMappingURL=indexControllers.js.map