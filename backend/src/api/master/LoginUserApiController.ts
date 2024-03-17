import express, { Request, Response, NextFunction } from 'express'
// import { LoginloginUser } from '../../domain-model/entity/auth/LoginloginUser'

// loginUserApiController
export default () => {
  const router = express.Router()

  // middleware that is specific to this router
  router.use((request: Request, response: Response, next: NextFunction) => {
    console.log('Time: ', Date.now())
    next()
  })

  // GET /api/loginUsers
  router.get('/', async (request: Request<number>, response: Response, next: NextFunction) => {
    // Requestのvalidation実施

    // 例外処理
    // next(new CustomException(400, '', 'warning'))

    // 1件 or 複数件
    if (request.query.id) {
      // const loginUser = await loginUserService.findById(request.query.id);
      // if (!loginUser) throw new exceptionor('404 Not Found');
      // response.json(loginUser);
      response.json({ message: 'GET loginUser by ID' })
    } else {
      // const loginUsers = await loginUserService.findAll();
      // response.json(loginUsers);
      response.json({ message: 'GET loginUsers' })
    }
  })

  // POST /api/loginUsers
  router.post('/', async (request: Request, response: Response, next: NextFunction) => {
    // Requestのvalidation実施

    // 例外処理
    // next(new CustomException(400, '', 'warning'))

    // const loginUser = await loginUserService.create(request.body);
    // response.json(loginUser);
    response.json({ message: 'POST loginUser' })
  })

  // PATCH /api/loginUsers/:id
  router.patch('/:id', async (request: Request, response: Response, next: NextFunction) => {
    // Requestのvalidation実施

    // 例外処理
    // next(new CustomException(400, '', 'warning'))

    // const loginUser = await loginUserService.update(request.params.id, request.body, { new: true });
    // if (!loginUser) throw new exceptionor('404 Not Found');
    // response.json(loginUser);
    response.json({ message: 'PATCH loginUser' })
  })

  // DELETE /api/loginUsers/:id
  router.delete('/:id', async (request: Request, response: Response, next: NextFunction) => {
    // Requestのvalidation実施

    // 例外処理
    // next(new CustomException(400, '', 'warning'))

    // await loginUserService.delete(request.params.id);
    response.json({ message: 'DELETE loginUser' })
  })

  // GET /api/loginUsers/sort
  router.get('/sort', async (request: Request, response: Response, next: NextFunction) => {
    // Requestのvalidation実施

    // 例外処理
    // next(new CustomException(400, '', 'warning'))

    // const sortedloginUsers = await loginUser.find().sort({ /* ソート条件 */ });
    // response.json(sortedloginUsers);
    response.json({ message: 'SORT loginUsers' })
  })

  return router
}
