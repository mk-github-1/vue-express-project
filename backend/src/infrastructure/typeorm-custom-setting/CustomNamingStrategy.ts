import * as pluralize from 'pluralize'
import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm'
import { snakeCase } from 'typeorm/util/StringUtils'

/*
 * TypeORMで生成するテーブルの命名規則をカスタマイズ(DefaultNamingStrategyを継承し一部のみカスタマイズ)
 *
 */
export class CustomNamingStrategy extends DefaultNamingStrategy {
  /*
   * テーブル名:
   * DefaultNamingStrategyを使用せずに設定する
   * @Entity()に接頭辞 "m_"、"t_" を付加した上で、手動でスネークケース、かつ末尾を複数形にする
   * (例) TopCategory -> m_top_categories
   * (例) ログイン認証関係は接頭辞を付加しない　LoginUser -> login_users
   */

  /*
   * カラム名:
   * 継承したDefaultNamingStrategyのcolumnNameメソッドをオーバライドし、自動でスネークケースにする
   * (例) firstName -> first_name
   */
  columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string {
    return customName ? customName : snakeCase(propertyName)
  }

  /*
   * 以外で必要になったものは、継承したDefaultNamingStrategyのメソッドをオーバライドして追加する
   *
   */
}
