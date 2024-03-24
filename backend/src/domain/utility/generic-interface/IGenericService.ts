/*
 * IServiceの共通インタフェース(メソッド定義のみ)
 * ※該当しないものはIGenericServiceを継承するインタフェースにメソッドを追加してください
 */
export interface IGenericService<T> {
  find(): Promise<T[]>
  findOne(keys: string[]): Promise<T>
  create(item: T): Promise<T>
  update(item: T): Promise<T>
  delete(item: T): Promise<string>
  sort(lists: T[]): Promise<number>
}
