import 'reflect-metadata'
import { Request, Response, NextFunction } from 'express'
import { injectable, inject } from 'inversify'
import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { IAuthenticationService } from '@/application/auth/Authentication/IAuthenticationService'
import { AuthenticationDto } from '@/application/auth/Authentication/AuthenticationDto'

// @injectable()
export class AuthenticationController {
  private authenticationService: IAuthenticationService

  constructor(/* @inject('AuthenticationService') */ authenticationService: IAuthenticationService) {
    this.authenticationService = authenticationService
  }

  // GET
  async get(request: Request<any, any, { email: string; password: string }>, response: Response, next: NextFunction) {
    // Requestのvalidation実施

    // ログイン処理
    // ※Serviceに移動する
    const { email, password } = request.body
    let keys = [email, password]
    const loggingInUser = await this.authenticationService.findOne(keys)

    if (!loggingInUser) throw new Error()
    const isPasswordCorrect2 = await bcrypt.compare(password, loggingInUser.password)

    if (!isPasswordCorrect2) throw new Error()

    const isPasswordCorrect3 = await bcrypt.compare(password, 'xxx')

    const jwtPayload = {
      id: 0 // loggingInUser.id,
    }

    const token = sign(jwtPayload, 'JWT_SECRET_KEY', {
      expiresIn: '1h'
    })

    // sendで返すか、jsonで返すか
    /*
        response.cookie("token", token, {
          httpOnly: true,
          secure: true,
        });
         */

    // response.send(loggingInUser.id);
    response.json({ id: '', token: token })
  }

  // POST
  async post(request: Request, response: Response, next: NextFunction) {
    try {
      // Request bodyのvalidationを実施する
      const authenticationDto: AuthenticationDto = request.body

      await this.authenticationService.create(authenticationDto)
      next()
    } catch (error: any) {
      next(error)
    }
  }

  // PATCH
  async patch(request: Request, response: Response, next: NextFunction) {
    try {
      // Request bodyのvalidationを実施する
      const authenticationDto: AuthenticationDto = request.body

      await this.authenticationService.update(authenticationDto)
      next()
    } catch (error: any) {
      next(error)
    }
  }
}
