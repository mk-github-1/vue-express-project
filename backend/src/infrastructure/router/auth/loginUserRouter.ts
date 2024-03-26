import 'reflect-metadata'
import express from 'express'
// import { StatusCodes } from "http-status-codes";
import { container } from '@/config/inversify/inversify.config'
import { TYPES } from '@/config/inversify/types'
import { LoginUserController } from '@/interface/Controller/auth/LoginUserController'

export const loginUserRouter = () => {
  const router = express.Router()
  const loginUserController = container.get<LoginUserController>(TYPES.LoginUserController)

  router
    .route('/:keys')
    .get(loginUserController.get.bind(LoginUserController))

  router
    .route('/')
    .get(loginUserController.get.bind(LoginUserController))
    .post(loginUserController.post.bind(LoginUserController))
    .patch(loginUserController.patch.bind(LoginUserController))

  router
    .route('/:keys')
    .delete(loginUserController.delete.bind(LoginUserController))

  return router
}
