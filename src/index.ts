/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
import * as functions from "firebase-functions";
import {connect} from "./config";
import {Eq} from "./entity/Eq";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const getEqs = functions.https.onRequest(async (req, res) => {
  const connection = await connect();
  const EqRepo = connection.getRepository(Eq);
  
  const allEq = await EqRepo.find();
  res.send(allEq);
});

export const createEq = functions.https.onRequest(async (req, res) => {
  const {eq, ans} = req.body;
  try {
    const connection = await connect();
    const repo = connection.getRepository(Eq);
    const newEq = new Eq();
    newEq.equation = eq;
    newEq.ans = ans;
    const savedEq = await repo.save(newEq);
    res.send(savedEq);
  } catch (error) {
    res.send(error);
  }
});
