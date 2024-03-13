import express, { Request, Response, NextFunction } from "express";

export const employeeApiController = () => {
  const router = express.Router();

  // middleware that is specific to this router
  router.use((request: Request, response: Response, next: NextFunction) => {
    console.log("Time: ", Date.now());
    next();
  });

  // GET /api/employees
  router.get(
    "/",
    async (request: Request, response: Response, next: NextFunction) => {
      try {
        // 1件 or 複数件
        if (request.query.id) {
          // const employee = await employeeService.findById(request.query.id);
          // if (!employee) throw new exceptionor('404 Not Found');
          // response.json(employee);
          response.json({ message: "GET employee by ID" });
        } else {
          // const employees = await employeeService.findAll();
          // response.json(employees);
          response.json({ message: "GET employees" });
        }
      } catch (exception: any) {
        next(exception);
      }
    }
  );

  // POST /api/employees
  router.post(
    "/",
    async (request: Request, response: Response, next: NextFunction) => {
      try {
        // const employee = await employeeService.create(request.body);
        // response.json(employee);
        response.json({ message: "POST employee" });
      } catch (exception: any) {
        next(exception);
      }
    }
  );

  // PATCH /api/employees/:id
  router.patch(
    "/:id",
    async (request: Request, response: Response, next: NextFunction) => {
      try {
        // const employee = await employeeService.update(request.params.id, request.body, { new: true });
        // if (!employee) throw new exceptionor('404 Not Found');
        // response.json(employee);
        response.json({ message: "PATCH employee" });
      } catch (exception: any) {
        next(exception);
      }
    }
  );

  // DELETE /api/employees/:id
  router.delete(
    "/:id",
    async (request: Request, response: Response, next: NextFunction) => {
      try {
        // await employeeService.delete(request.params.id);
        response.json({ message: "DELETE employee" });
      } catch (exception: any) {
        next(exception);
      }
    }
  );

  // GET /api/employees/sort
  router.get(
    "/sort",
    async (request: Request, response: Response, next: NextFunction) => {
      try {
        // const sortedEmployees = await Employee.find().sort({ /* ソート条件 */ });
        // response.json(sortedEmployees);
        response.json({ message: "SORT employees" });
      } catch (exception: any) {
        next(exception);
      }
    }
  );

  return router;
};
