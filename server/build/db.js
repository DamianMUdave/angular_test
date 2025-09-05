"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = require("promise-mysql");
const keys_1 = require("./keys");
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
pool.getConnection()
    .then((connection) => {
    pool.releaseConnection(connection);
    console.log('DB is connected');
});
exports.default = pool;
//# sourceMappingURL=db.js.map