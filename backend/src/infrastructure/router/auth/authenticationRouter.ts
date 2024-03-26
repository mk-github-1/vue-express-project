import 'reflect-metadata'
import express from 'express'
import { container } from '@/config/inversify/inversify.config'
import { TYPES } from '@/config/inversify/types'
import { AuthenticationController } from '@/interface/Controller/auth/AuthenticationController'

export const authenticationRouter = () => {
  const router = express.Router()
  const authenticationController = container.get<AuthenticationController>(TYPES.AuthenticationController)

  router
    .route('/:keys')
    .get(authenticationController.get.bind(authenticationController))
    
  router
    .route('/')
    .post(authenticationController.post.bind(authenticationController))
    .patch(authenticationController.patch.bind(authenticationController))

  return router
}
