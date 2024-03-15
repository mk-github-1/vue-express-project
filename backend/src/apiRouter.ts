// ■ 追加: index.tsでマウントするルータを別ファイル化しています
import express from 'express'

// 1.auth
import { authApiController } from './api/auth/authApiController'

// 2.master
import { userApiController } from './api/master/userApiController'

// 3.transaction

export const apiRouter = () => {
  const router = express.Router()

  // ルート名は複数系にする

  // 1.auth
  router.use('/auths', authApiController())

  // 2.master
  router.use('/users', userApiController())
  // (例)
  // router.use("/groups", groupApiController());

  // 3.transaction
  // (例)
  // router.use("/managements", managementApiController());

  return router
}
