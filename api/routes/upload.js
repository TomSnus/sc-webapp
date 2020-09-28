var express = require('express');
var router = express.Router();
const os = require("os");

const app = express();
const formData = require('express-form-data');
var Docker = require('dockerode');
var fs = require('fs');

var socket = process.env.DOCKER_SOCKET || '/var/run/docker.sock';
var stats = fs.statSync(socket);
var docker = new Docker({ socketPath: socket });

const options = {
    uploadDir: os.tmpdir(),
    autoClean: false
  };

router.use(formData.parse(options));
router.use(formData.format());
router.use(formData.stream());
router.use(formData.union());

if (!stats.isSocket()) {
  throw new Error('Are you sure the docker is running?');
}

router.get('/', function (req, res, next) {
  console.log(req.params)
});

router.post('/', function (req, res) {
    res.send('POST request to the homepage');
    console.log(req.files)
  });
module.exports = router;