# vue|-express|-project

## 概要

Vue3 (create|-vue) と Express.js で構成した Web アプリのテンプレート

## 実行環境

・NVM を使用して Node.js v20 をインストールし実行できる

・GitHub 用に sqlite3 を使用しているため DB の準備は不要

・./vscode/launch.json の設定で、VS Code のデバッグ機能を利用して実行できる。

準備中、backend はまだデバッグで停止しない

GitHub 上にゴミフォルダが残っている

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

|- vue-express-project
　|- backend
　|　|- src
　|　|　|- config
　|　|　|　|- inversify.config.ts
　|　|　|　|- Types.ts
　|　|　|- application (2.アプリケーション)
　|　|　|　|- domain-name
　|　|　|　|　|- dto
　|　|　|　|　|- service
　|　|　|　|　|- service interface
　|　|　|- domain : (1.ドメイン層)
　|　|　|　|- constant
　|　|　|　|　|- domain-name
　|　|　|　|　|　|- repository interface
　|　|　|　|　|　|- value object
　|　|　|　|　|　|- logic
　|　|　|　|- utility
　|　|　|- infrastructure (3-2.インフラストラクチャー層)
　|　|　|　|- entity
　|　|　|　|- repository
　|　|　|　|- router
　|　|　|- interface : (3-1.インタフェース層(コントローラー))
　|　|　|　|- controller
　|　|　|- data-source.ts: TypeORM 設定  
　|　|　|- index.ts: アプリケーション実行本体(Express.js)
　|　|- .eslintrc.cjs : ESLint 設定 (構文チェック)  
　|　|- .prettierrc.json : prettier 設定 (コード整形)  
　|　|- package|-lock.json  
　|　|- package.json : npm 設定、利用パッケージ  
　|　|- tsconfig.json : TypeScript 設定
　|- frontend
　　準備中
