var superagent = require("superagent");
var cheerio = require('cheerio');

var url = "http://www.jianshu.com/u/309baf0877d2";

superagent
    .get(url)
    .end(function(req, res){
        var $ = cheerio.load(res.text);
        $('#list-container > ul > li > .content > .title').each(function(index, item){
            var txt = $(this).text();
            console.log(txt);
        })
    });