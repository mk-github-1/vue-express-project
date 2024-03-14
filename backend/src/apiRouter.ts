import express from "express";
import { userApiController } from "./api/master/userApiController";
import { authApiController } from "./api/auth/authApiController";

// index.tsでマウントするルータを別ファイル可しています
// ルート名は複数系にする
export const apiRouter = () => {
  const router = express.Router();

  // ※Express.jsではControllerを共通化できるかもしれない

  // 1.auth
  router.use("/auths", authApiController());

  // 2.master
  router.use("/users", userApiController());
  // (例)
  // router.use("/groups", groupApiController());

  // 3.transaction
  // (例)
  // router.use("/managements", managementApiController());

  return router;
};
