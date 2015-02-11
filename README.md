tana3n.black
============

[![Build Status](https://travis-ci.org/RecoTwExplorer/tana3n.black.svg?branch=master)](https://travis-ci.org/RecoTwExplorer/tana3n.black)

[@tana3n](https://twitter.com/tana3n) の黒歴史ツイートを表示します。それだけ。

## 動作環境

Internet Explorer 10 以上、Google Chrome、Firefox 上で動作することを確認していますが、これを保障するものではありません。

## ビルド

このプロジェクトは TypeScript を使用しているため動作の確認にはビルド作業が必要です。  
Node.js v0.10 上で `gulp` を実行することでビルドでき、その結果は `/dest/*` 以下に出力されます。

```
$ # node未導入の場合
$ # sudo apt-get install nodejs-legacy
$ # yum?知りません。
$ npm install
$ npm install -g gulp
$ gulp
```

## ソースコード

このアプリケーションは MIT ライセンスのもとに GitHub 上で公開されています：  
[https://github.com/RecoTwExplorer/tana3n.black](https://github.com/RecoTwExplorer/tana3n.black)  
バグ報告ないしプルリクエスト等はこのレポジトリにお願いいたします。

## 使用サービス

このアプリケーションは Twitter のユーザーアイコン表示のために次の Web サービスを使用しています：  
[Profile Image API For Twitter■140note](http://140note.hitonobetsu.com/apipage/profileimage)

==================================
© Chitoku 2015. Powered by RecoTw.
