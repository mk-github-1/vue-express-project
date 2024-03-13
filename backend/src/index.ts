// ■ 修正
// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
import express, { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

// ■ 削除
// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");

// ■ 修正
// var app = express();
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ルーターのマウント
import { employeeApiController } from "./api/master/employeeApiController";
app.use("/api/employees", employeeApiController());

// ■ 削除
// app.use(express.static(path.join(__dirname, "public")));
// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// ■ 追加 APIアクセス用のルートハンドラ
app.get("/api", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "200 OK" });
});

// ■ 変更 catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// ■ 変更 error handler
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page (view engineを使用しないのでjsonで返す)
  const httpStatusCode = (err as any).status || 500;
  res
    .status(httpStatusCode)
    .json({ message: httpStatusCode + " " + err.message });
});

// ■ 追加 ポート指定
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
