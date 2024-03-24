import express from 'express'
import { container } from '@/config/inversify/inversify.config'
import { TYPES } from '@/config/inversify/types'
import { AuthenticationController } from '@/interface/Controller/auth/AuthenticationController'

export const authenticationRouter = () => {
  const router = express.Router()
  const authenticationController = container.get<AuthenticationController>(TYPES.AuthenticationController)

  router
    .route('/')
    .get(authenticationController.get.bind(AuthenticationController))
    .post(authenticationController.post.bind(AuthenticationController))
    .patch(authenticationController.patch.bind(AuthenticationController))

  return router
}
