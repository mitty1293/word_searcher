# word_searcher
正規表現を使って英単語を検索するCLIツールです。
## Setup
```
docker-compose up -d
```
## 使い方
```
docker exec -it word_searcher node ./dist/main.js [regular expression]
```
### Example
```
docker exec -it word_searcher node ./dist/main.js t.d..
tidal
today
toddy
```
```
docker exec -it word_searcher node ./dist/main.js tiiiii
No words matching the pattern were found.
```
## 辞書について
以下を使用しています。<br>
https://github.com/kujirahand/EJDict

そのままのフォーマットでは、日本語の意味を含んでいたりカンマで区切られたりしています。
```
英単語1 \t 意味1
英単語2 \t 意味2
英単語3 \t 意味3
...
```
```
英単語, 英単語, 英単語 \t 意味
```
日本語は不要でカンマを改行としたいので、`cut`や`tr`で英単語のみを取り出しています。
```
cut -f 1 ejdict-hand-utf8.txt | tr ',' '\n' > ejdict-hand-utf8-english-only.txt
```