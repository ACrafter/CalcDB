"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEq = exports.getEqs = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
const functions = require("firebase-functions");
const config_1 = require("./config");
const Eq_1 = require("./entity/Eq");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.getEqs = functions.https.onRequest(async (req, res) => {
    const connection = await config_1.connect();
    const EqRepo = connection.getRepository(Eq_1.Eq);
    const allEq = await EqRepo.find();
    res.send(allEq);
});
exports.createEq = functions.https.onRequest(async (req, res) => {
    const { eq, ans } = req.body;
    try {
        const connection = await config_1.connect();
        const repo = connection.getRepository(Eq_1.Eq);
        const newEq = new Eq_1.Eq();
        newEq.equation = eq;
        newEq.ans = ans;
        const savedEq = await repo.save(newEq);
        res.send(savedEq);
    }
    catch (error) {
        res.send(error);
    }
});
//# sourceMappingURL=index.js.map