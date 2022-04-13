var express = require("express");
var path = require("path");
var router = express.Router();

router.use(express.static(path.join(__dirname, '/client/build')));
router.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

module.exports = router;