"use strict";
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.config = void 0;
const typeorm_1 = require("typeorm");
require("reflect-metadata");
exports.config = {
    name: "test",
    type: "mysql",
    host: "mysql-64736-0.cloudclusters.net",
    port: 17925,
    username: "admin",
    password: "qD9RIw8X",
    database: "Equations",
    synchronize: true,
};
exports.connect = async () => {
    let connection;
    try {
        connection = typeorm_1.getConnection(exports.config.name);
    }
    catch (err) {
        connection = await typeorm_1.createConnection(exports.config);
    }
    return connection;
};
//# sourceMappingURL=config.js.map