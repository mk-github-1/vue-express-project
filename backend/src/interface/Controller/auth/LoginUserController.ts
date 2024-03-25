import 'reflect-metadata'
import { Request, Response, NextFunction } from 'express'
import { injectable, inject } from 'inversify'
import { ILoginUserService } from '@/application/auth/LoginUser/ILoginUserService'
import { LoginUserDto } from '@/application/auth/LoginUser/LoginUserDto'

@injectable()
export class LoginUserController /* implements IGenericController */ {
  private loginUserService: ILoginUserService

  constructor(@inject('LoginUserService') loginUserService: ILoginUserService) {
    this.loginUserService = loginUserService
  }

  // GET
  async get(request: Request, response: Response, next: NextFunction) {
    try {
      // Request paramが不正でないかvalidationを実施する
      const keys: string[] = request.body.keys

      let loginUserDtos = []

      if (!keys) {
        loginUserDtos = await this.loginUserService.find()
      } else {
        const loginUserDto = await this.loginUserService.findOne(keys)
        loginUserDtos.push(loginUserDto)
      }

      response.json(loginUserDtos)
      // next()
    } catch (error: any) {
      // エラーを次のミドルウェアに渡す
      next(error)
    }
  }

  // POST
  async post(request: Request, response: Response, next: NextFunction) {
    try {
      // Request bodyのvalidationを実施する
      const loginUserDto: LoginUserDto = request.body

      await this.loginUserService.create(loginUserDto)
      next()
    } catch (error: any) {
      next(error)
    }
  }

  // PATCH or Sort
  async patch(request: Request, response: Response, next: NextFunction) {
    try {
      // Request bodyのvalidationを実施する
      // PATCHは配列でデータを渡す
      const loginUserDtos: LoginUserDto[] = request.body
      // const mode: number = request.body.mode
      const mode: number = 0

      // update or sort
      // ★★★★★ 厳密等価演算子 === をprettierで制御したい
      if (mode == 0) {
        const loginUserDto = loginUserDtos[0]
        await this.loginUserService.update(loginUserDto)
      }

      // LoginUserでは使用しない
      if (mode === 1) {
        await this.loginUserService.sort(loginUserDtos)
      }

      next()
    } catch (error: any) {
      next(error)
    }
  }

  // DELETE
  async delete(request: Request, response: Response, next: NextFunction) {
    try {
      // Request bodyのvalidationを実施する
      const loginUserDto: LoginUserDto = request.body

      await this.loginUserService.delete(loginUserDto)
      next()
    } catch (error: any) {
      next(error)
    }
  }
}
