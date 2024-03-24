/*
 * IRepositoryの共通インタフェース(メソッド定義のみ)
 * ※該当しないものはIGenericRepositoryを継承するインタフェースにメソッドを追加してください
 */
export interface IGenericRepository<T> {
  find(): Promise<T[]>
  findOne(keys: string[]): Promise<T>
  create(item: T): Promise<T>
  update(keys: string[], item: T): Promise<T>
  delete(keys: string[]): Promise<string>
  sort<T extends { key: string; value: number }>(lists: T[]): Promise<number>
}
