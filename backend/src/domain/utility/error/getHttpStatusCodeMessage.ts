/*
 * HTTPステータスコードに対応したメッセージを返却
 *
 */
export const getHttpStatusCodeMessage = (httpStatusCode: number): string => {
  switch (httpStatusCode) {
    // 不正なリクエスト
    case 400:
      return '400 Bad Request'
    // 閲覧禁止
    case 403:
      return '403 Forbidden'
    // Not found
    case 404:
      return '404 Not Found'
    // データの競合
    case 409:
      return '409 Conflict'
    // 以外(サーバーエラー)
    default:
      return '500 Internal Server Error'
  }
}
