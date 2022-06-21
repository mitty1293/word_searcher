# word_searcher
## Overview
Web app to search English words using regular expressions. 

Access XXXXX, type or paste your input data and press the search button.
## Self hosting
```
git clone https://github.com/mitty1293/word_searcher.git
docker build -t word_searcher ./word_searcher/
docker run -itd -p <host-port>:80 --name word_searcher word_searcher
```
Go to `http://host-ip:host-port`.
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
