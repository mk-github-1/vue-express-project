// ■ フォルダ移動、ファイル変更: backend/app.js -> backend/src/index.ts

// ■ 修正: TypeScript化のため
// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
import express, { Request, Response, NextFunction } from 'express'
// import createError from 'http-errors'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import routes from './infrastructure/router'
import { CustomException } from './domain/utility/error/CustomException'
import { getHttpStatusCodeMessage } from './domain/utility/error/getHttpStatusCodeMessage'
import { AppDataSource } from './data-source'

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

// ■ 追加: API用ルーターをマウント
app.use('/api', routes())

// ■ 追加: APIアクセス用のルートハンドラ
app.get('/api', (request: Request, response: Response, nextFunction: NextFunction) => {
  response.json({ message: '200 OK' })
})

// ■ 追加: 共通の成功時の処理
app.use((request: Request, response: Response, next: NextFunction) => {
  response.status(200).json({ message: '200 OK' })
})

// ■ 追加: 共通の例外時の処理
app.use((error: CustomException, request: Request, response: Response, nextFunction: NextFunction) => {
  const httpStatusCode = (error as CustomException).httpStatusCode || 500
  const message = getHttpStatusCodeMessage(httpStatusCode)

  // ログ出力（任意）
  console.error(error.stack)

  // エラーレスポンスをjsonデータで返す
  response.status(httpStatusCode).json({ message: message })
})

// ■ 追加: ポート設定がなかったので追加、これで起動できる
const httpPort: number = 3000 // process.env.PORT ||
app.listen(httpPort, () => {
  console.log(`Server is running on port ${httpPort}`)
})

// ■ 追加: データベース接続を確立する
// mysqlは3306、postresqlは5423、sqliteはダミー番号で指定
const dbPort: number = 5000
app.listen(dbPort, () => {
  try {
    AppDataSource.initialize()
    console.log(`Data Source has been initialized on port ${httpPort}`)
  } catch (error: any) {
    console.error('Error during Data Source initialization:', error)
    throw error
    // process.exit(1);
  }
})

module.exports = app
