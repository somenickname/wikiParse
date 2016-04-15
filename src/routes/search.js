var express = require('express');
var router = express.Router();
var wikipedia = require("wikipedia-js");

router.route('/')
    .get(function (req, res) {
        var query = req.query.message;
        var options = {query: query, format: "html", summaryOnly: true};
        wikipedia.searchArticle(options, function (err, htmlWikiText) {
            if (err) {
                console.log("An error occurred[query=%s, error=%s]", query, err);
                return;
            }
            res.json({
                htmlWikiText: htmlWikiText,
                query: query
            });
        });
    });

module.exports = router;
