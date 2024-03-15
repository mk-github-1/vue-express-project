// ■ フォルダ移動、ファイル変更: backend/app.js -> backend/src/index.ts

// ■ 修正: TypeScript化のため
// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
import express, { Request, Response, NextFunction } from 'express'
import createError from 'http-errors'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import { apiRouter } from './apiRouter'

// ■ 削除: APIとして利用するため
// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");

// ■ 修正: TypeScript化のため
// var app = express();
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// ■ 削除: APIとして利用するため、publicは不要、ルーター変更
// app.use(express.static(path.join(__dirname, "public")));
// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// ■ 追加: APIアクセス用のルートハンドラ
app.get('/api', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: '200 OK' })
})

// ■ 追加: API用ルーターをマウント
app.use('/api', apiRouter())

// ■ 追加: エラーハンドラ ※Express.js viewありのものよりコピー、TypeScript化
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404))
})

app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  const httpStatusCode = (err as any).status || 500
  res.status(httpStatusCode).json({ message: httpStatusCode + ' ' + err.message })
})

// ■ 追加: ポート設定がなかったので追加、これで起動できる
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

module.exports = app
