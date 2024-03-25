# vue-express-project

## 概要

Vue3 (create-vue) と Express.js で構成した Web アプリのテンプレート

## 実行環境

・NVMを使用してNode.js v20をインストールし実行できる

・GitHub用にsqlite3を使用しているためDBの準備は不要

・./vscode/launch.jsonの設定で、VS Codeのデバッグ機能を利用して実行できる。

準備中、backendはまだデバッグで停止しない

GitHub上にゴミフォルダが残っている

## backend

・初心者にもわかりやすいものを作成する

・GitHub のソースはそのまま動くように、ファイル DB の sqlite3 にしている。postgresql や mysql にもつながるか検証する
GitHub にはログインユーザーが入っているデータを入れる必要がある

・プロジェクト構成にはクリーンアーキテクチャを適用しているが、可能な限り複雑にならないように作成

・認証機能を作成する

## frontend

・.vue ファイルは使用せず、.tsx ファイルを使用する ※VS Code のプロジェクトツリーには React アイコンが表示されるが Vue.
js である

・共通テンプレートを CSS Grid などで作成する、ATOMIC デザインを意識はするがその構成には全ては準じない

・ログイン画面を作成する、ログイン後の画面遷移をする

・LoginUser をメンテナンスする画面を作成する

## プロジェクト構成
| :--- | :---: | ---: | :---: | ---: | ---: |
| vue-express-project | | | | | |
| | | | |- inversify.config.ts |  |
| | | | |- Types.ts | |
| | | | | |
| | |- domain : 1.ドメイン層 | | | |
| | | |- auth | | |
| | | | |- LoginUser | |
| | | | |- ILoginUserRepository.ts | |
| | | | |- LoginUser.ts | |
| | | | |- LoginUserLogic.ts | |
| | | |- constant | | |
| | | |- master | | |
| | | |- transaction | | |
| | |- utility | | | |
| | | |- error : Express.js での backend のエラー処理を共通化 | | |
| | | | |- CustomException.ts | |
| | | | |- getHttpStatusCodeMessage.ts | |
| | | |- generic-interface : メソッド名を共通化するためだけの共通インタフェース | | |
| | | | |- IGenericController.ts | |
| | | | |- IGenericService.ts | |
| | | | |- IGenericRepository.ts | |
| | | | | | |
| | |- infrastructure : 3-2.インフラストラクチャー層 | | | |
| | | |- entity : TypeORM の Entity = DB のテーブル | | |
| | | | |- auth | |
| | | | | |- LoginUserEntity.ts |
| | | | | |- LoginUserRoleEntity.ts |
| | | | | |- RikeEntity.ts |
| | | | |- master | |
| | | | |- transaction | |
| | | | | | |
| | | |- repository | | |
| | | | |- auth | |
| | | | | |- LoginUser |
| | | | | |- ILoginUserRepository.ts |
| | | | |- master | |
| | | | |- transaction | |
| | | | | | |
| | |- router : ルーター(API エンドポイント)の設定 | | |
| | | |- auth | | |
| | | | |- authenticationRouter.ts | |
| | | | |- loginUserRouter.ts | |
| | | |- master | | |
| | | |- transaction | | |
| | | |- index.ts : ルーター本体 | | |
| | | | | | |
| | |- interface : 3-1.インタフェース層(コントローラー) | | | |
| | | |- controller | | |
| | | | |- auth | |
| | | | | |- AuthenticationController.ts |
| | | | | |- LoginUserController.ts |
| | | | |- master | |
| | | | |- transaction | |
| | | | | | |
| | |- data-source.ts : TypeORM 設定 | | | |
| | |- index.ts : アプリケーション実行本体(Express.js) | | | |
| | | | | | |
| |- tests : ※後で | | | | |
| | | | | | |
| |- TypeORM_command.txt : TypeORM コマンドで使用するコマンド | | | | |
| |- .eslintrc.cjs : ESLint 設定 (構文チェック) | | | | |
| |- .prettierrc.json : prettier 設定 (コード整形) | | | | |
| |- package-lock.json | | | | |
| |- package.json : npm 設定、利用パッケージ | | | | |
| |- tsconfig.json : TypeScript 設定 | | | | |
| | | | | | |
|- frontend | | | | | |
| |- .vscode : Vue デフォルト | | | | |
| |- e2e : Vue デフォルト | | | | |
| |- node_modules : npm でインストールした node モジュール(関連モジュールも入る) | | | | |
| |- public | | | | |
| | |- favicon.ico | | | |
| |- src | | | | |
| | |- assets | | | |
| | | |- scss | | |
| | | | |- bootstrap-custom.scss | |
| | | |- base.css | | |
| | | |- logo.svg | | |
| | | |- main.css | | |
| | |- components | | | |
| | |- router : ルーターの設定 | | | |
| | | |- index.ts | | |
| | |- stores : ストアの設定 | | | |
| | | |- counter.ts | | |
| | |- views : 画面の設定 | | | |
| | | |- common | | |
| | | | |- FooterView.tsx | |
| | | | |- HeaderView.tsx | |
| | | | |- SidebarView.tsx | |
| | | |- AboutView.tsx | | |
| | | |- HomeView.tsx | | |
| | |- App.tsx : メイン画面 | | | |
| | |- main.ts : アプリケーション実行本体(Vue.js) | | | |
| | | | | | |
| | |- tests | | | |
| | | | | | |
| |- .eslintrc.cjs : ESLint 設定 (構文チェック) | | | | |
| |- .prettierrc.json : prettier 設定 (コード整形) | | | | |
| |- env.d.ts | | | | |
| |- index.html | | | | |
| |- package-lock.json | | | | |
| |- package.json : npm 設定、利用パッケージ | | | | |
| |- playwright.config.ts | | | | |
| |- tsconfig.app.json | | | | |
| |- tsconfig.json : TypeScript メイン設定 | | | | |
| |- tsconfig.node.json | | | | |
| |- tsconfig.vitest.json | | | | |
| |- vite.config.ts : Vite メイン設定 | | | | |
| |- vitest.config.ts | | | | |
| | | | | | |
|- .gitattributes | | | | | |
|- .gitignore | | | | | |
|- LISENSE | | | | | |
|- README.md | | | | | |
