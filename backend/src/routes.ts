// ■ 追加: index.tsでマウントするルータを別ファイル化しています
import express from 'express'

// 1.auth
import AuthApiController from './api/auth/AuthApiController'

// 2.master
import LoginUserApiController from './api/master/LoginUserApiController'

// 3.transaction

export default () => {
  const router = express.Router()

  // ルート名は複数系にする

  // 1.auth
  router.use('/auths', AuthApiController())

  // 2.master
  router.use('/loginUsers', LoginUserApiController())
  // (例)
  // router.use("/groups", groupApiController());

  // 3.transaction
  // (例)
  // router.use("/managements", managementApiController());

  return router
}
