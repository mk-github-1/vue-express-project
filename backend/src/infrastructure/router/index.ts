// ■ 追加: index.tsでマウントするルータを別ファイル化しています
import express from 'express'

// auth
import { authenticationRouter } from '@/infrastructure/router/auth/authenticationRouter'
import { loginUserRouter } from '@/infrastructure/router/auth/loginUserRouter'

// master

// transaction

export default () => {
  const router = express.Router()

  // ルート名は複数系にする

  /* auth **************************************************/
  router.use('/authentications', authenticationRouter())
  router.use('/loginUsers', loginUserRouter())

  /* master **************************************************/
  // (例) router.use("/groups", GroupController());

  /* transaction **************************************************/
  // (例) routes.use("/managements", ManagementController());

  /* transaction(etc) **************************************************/

  return router
}
