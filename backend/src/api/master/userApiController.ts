import express, { Request, Response, NextFunction } from 'express'
import { User } from '../../domain-model/entity/auth/LoginUser'
import { CustomException } from '../../domain-model/CustomException'

// UserApiController
export default () => {
  const router = express.Router()

  // middleware that is specific to this router
  router.use((request: Request, response: Response, next: NextFunction) => {
    console.log('Time: ', Date.now())
    next()
  })

  // GET /api/users
  router.get('/', async (request: Request<number>, response: Response, next: NextFunction) => {
    // Requestのvalidation実施

    // 例外処理
    // next(new CustomException(400, '', 'warning'))

    // 1件 or 複数件
    if (request.query.id) {
      // const user = await userService.findById(request.query.id);
      // if (!user) throw new exceptionor('404 Not Found');
      // response.json(user);
      response.json({ message: 'GET user by ID' })
    } else {
      // const users = await userService.findAll();
      // response.json(users);
      response.json({ message: 'GET users' })
    }
  })

  // POST /api/users
  router.post('/', async (request: Request, response: Response, next: NextFunction) => {
    // Requestのvalidation実施

    // 例外処理
    // next(new CustomException(400, '', 'warning'))

    // const user = await userService.create(request.body);
    // response.json(user);
    response.json({ message: 'POST user' })
  })

  // PATCH /api/users/:id
  router.patch('/:id', async (request: Request, response: Response, next: NextFunction) => {
    // Requestのvalidation実施

    // 例外処理
    // next(new CustomException(400, '', 'warning'))

    // const user = await userService.update(request.params.id, request.body, { new: true });
    // if (!user) throw new exceptionor('404 Not Found');
    // response.json(user);
    response.json({ message: 'PATCH user' })
  })

  // DELETE /api/users/:id
  router.delete('/:id', async (request: Request, response: Response, next: NextFunction) => {
    // Requestのvalidation実施

    // 例外処理
    // next(new CustomException(400, '', 'warning'))

    // await userService.delete(request.params.id);
    response.json({ message: 'DELETE user' })
  })

  // GET /api/users/sort
  router.get('/sort', async (request: Request, response: Response, next: NextFunction) => {
    // Requestのvalidation実施

    // 例外処理
    // next(new CustomException(400, '', 'warning'))

    // const sortedusers = await user.find().sort({ /* ソート条件 */ });
    // response.json(sortedusers);
    response.json({ message: 'SORT users' })
  })

  return router
}
