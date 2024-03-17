export const getErrorMessage = (statusCode: number): string => {
  switch (statusCode) {
    case 400:
      return '400 Bad Request'
    case 403:
      return '403 Forbidden'
    case 404:
      return '404 Not Found'
    case 409:
      return '409 Conflict'
    default:
      return '500 Internal Server Error'
  }
}
