/*
import express, { Request, Response, NextFunction } from 'express'
import { CustomException } from '@/domain/utility/error/CustomException'
import { LoginUserDto } from '@/application/auth/LoginUser/LoginUserDto'
import { loginUserService } from '@/application/auth/LoginUser/LoginUserService'

export const LoginUserController = () => {
  const router = express.Router()

  router.use(async (request: Request, response: Response, next: NextFunction) => {
    await console.log('Time: ', Date.now())
    next()
  })

  // GET /api/loginUsers
  router.get('/', async (request: Request, response: Response, next: NextFunction) => {
    try {
      // Requestのvalidation実施
      const account: string = request.body.account

      // 1件 or 複数件
      const loginUserDtos = await loginUserService().find(account)
      if (!loginUserDtos.length) {
        next(new CustomException(404, '', 'error'))
      }

      response.json(loginUserDtos)
    } catch (error: any) {
      // エラーを次のミドルウェアに渡す
      next(error)
    }
  })

  // POST /api/loginUsers
  router.post('/', async (request: Request, response: Response, next: NextFunction) => {
    try {
      // Requestのvalidation実施
      const loginUserDto: LoginUserDto = request.body

      await loginUserService().create(loginUserDto)
      next()
    } catch (error: any) {
      next(error)
    }
  })

  // PATCH /api/loginUsers/:account
  router.patch('/:account', async (request: Request, response: Response, next: NextFunction) => {
    try {
      // Requestのvalidation実施
      const account: string = request.body.account
      const loginUserDto: LoginUserDto = request.body

      await loginUserService().update(account, loginUserDto)
      next()
    } catch (error: any) {
      next(error)
    }
  })

  // DELETE /api/loginUsers/:account
  router.delete('/:account', async (request: Request, response: Response, next: NextFunction) => {
    try {
      // Requestのvalidation実施
      const account: string = request.body.account

      await loginUserService().del(account)
      next()
    } catch (error: any) {
      next(error)
    }
  })

  // GET /api/loginUsers/sort
  router.get('/sort', async (request: Request, response: Response, next: NextFunction) => {
    try {
      // Requestのvalidation実施
      const key: string = request.body.account

      await loginUserService().sort(key)
      next()
    } catch (error: any) {
      next(error)
    }
  })

  return router
}
*/
