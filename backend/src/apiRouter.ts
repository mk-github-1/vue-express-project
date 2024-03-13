import express from "express";
import { userApiController } from "./api/auth/userApiController";

// index.tsのルータのマウントを別ファイルにしています
// ルート名は複数系にする
export const apiRouter = () => {
  const router = express.Router();

  // ※Express.jsではControllerを共通化できるかもしれない

  // 1.auth
  router.use("/users", userApiController());

  // 2.master
  // (例)
  // router.use("/groups", groupApiController());

  // 3.transaction
  // (例)
  // router.use("/managements", managementApiController());

  return router;
};
