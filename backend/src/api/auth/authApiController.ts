import express, { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken'

// AuthApiController
export default () => {
  const router = express.Router()

  // GET /api/auths
  router.get(
    '/',
    async (
      request: Request<any, any, { email: string; password: string }>,
      response: Response,
      next: NextFunction
    ) => {
      // Requestのvalidation実施

      // 例外処理
      // next(new CustomException(400, '', 'warning'))

      // ログイン処理
      const { email, password } = request.body

      /*
        const loggingInUser = await UserRepository.findOne({
          where: {
            email: payload.email,
          },
        });

        if (!loggingInUser) throw new Error();
        const isPasswordCorrect = await bcrypt.compare(password, loggingInUser.password);
   
        if (!isPasswordCorrect) throw new Error();
         */
      const isPasswordCorrect = await bcrypt.compare(password, 'xxx')

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
  )

  // POST /api/auths
  router.post('/', async (request: Request, response: Response, next: NextFunction) => {
    // Requestのvalidation実施

    // 例外処理
    // next(new CustomException(400, '', 'warning'))

    // authServiceでuserRepositoryを使い、ユーザーを新規登録する
    // const user = await authService.create(request.body);
    // response.json(user);
    response.json({ message: 'POST user' })
  })

  return router
}
