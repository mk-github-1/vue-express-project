import express, { Request, Response, NextFunction } from "express";
import { User } from "../../domain-model/entity/auth/User";

export const userApiController = () => {
  const router = express.Router();
  // GET /api/users
  router.get(
    "/",
    async (
      request: Request<number>,
      response: Response,
      next: NextFunction
    ) => {
      try {
        // 1件 or 複数件
        if (request.query.id) {
          // const user = await userService.findById(request.query.id);
          // if (!user) throw new exceptionor('404 Not Found');
          // response.json(user);
          response.json({ message: "GET user by ID" });
        } else {
          // const users = await userService.findAll();
          // response.json(users);
          response.json({ message: "GET users" });
        }
      } catch (exception: any) {
        next(exception);
      }
    }
  );

  // middleware that is specific to this router
  router.use((request: Request, response: Response, next: NextFunction) => {
    console.log("Time: ", Date.now());
    next();
  });

  // POST /api/users
  router.post(
    "/",
    async (request: Request, response: Response, next: NextFunction) => {
      try {
        // const user = await userService.create(request.body);
        // response.json(user);
        response.json({ message: "POST user" });
      } catch (exception: any) {
        next(exception);
      }
    }
  );

  // PATCH /api/users/:id
  router.patch(
    "/:id",
    async (request: Request, response: Response, next: NextFunction) => {
      try {
        // const user = await userService.update(request.params.id, request.body, { new: true });
        // if (!user) throw new exceptionor('404 Not Found');
        // response.json(user);
        response.json({ message: "PATCH user" });
      } catch (exception: any) {
        next(exception);
      }
    }
  );

  // DELETE /api/users/:id
  router.delete(
    "/:id",
    async (request: Request, response: Response, next: NextFunction) => {
      try {
        // await userService.delete(request.params.id);
        response.json({ message: "DELETE user" });
      } catch (exception: any) {
        next(exception);
      }
    }
  );

  // GET /api/users/sort
  router.get(
    "/sort",
    async (request: Request, response: Response, next: NextFunction) => {
      try {
        // const sortedusers = await user.find().sort({ /* ソート条件 */ });
        // response.json(sortedusers);
        response.json({ message: "SORT users" });
      } catch (exception: any) {
        next(exception);
      }
    }
  );

  return router;
};
