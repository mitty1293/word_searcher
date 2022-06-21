FROM httpd:2.4
COPY html/index.html /usr/local/apache2/htdocs/
COPY html/default.css /usr/local/apache2/htdocs/
COPY js/main.js /usr/local/apache2/htdocs/
COPY js/word_searcher.js /usr/local/apache2/htdocs/