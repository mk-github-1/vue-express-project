/*
 * Controller(API)の共通インタフェース(メソッド定義のみ)
 * Controller(API)はHTTPメソッドのうち、GET、POST、PATCH、DELETEのみを使用
 */
import { Request, Response, NextFunction } from 'express'

export interface IGenericController {
  get(request: Request, response: Response, next: NextFunction): Promise<Response>
  post(request: Request, response: Response, next: NextFunction): Promise<Response>
  patch(request: Request, response: Response, next: NextFunction): Promise<Response>
  del(request: Request, response: Response, next: NextFunction): Promise<Response>
}
