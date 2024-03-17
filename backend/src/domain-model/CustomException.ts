// エラークラスを継承したCustomExceptionクラス
export class CustomException extends Error {
  httpStatusCode: number
  logLevel: string

  constructor(httpStatusCode: number, message: string, logLevel: string) {
    super(message)
    this.httpStatusCode = httpStatusCode
    this.logLevel = logLevel
    // Object.setPrototypeOf(this, CustomException.prototype)
  }
}

/*
export interface ICustomException extends Error {
  httpStatusCode: number
  logLevel: string
}
 */
