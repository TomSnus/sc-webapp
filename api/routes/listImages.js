var express = require('express');
var router = express.Router();

const app = express();
var Docker = require('dockerode');
var fs = require('fs');

var socket = process.env.DOCKER_SOCKET || '/var/run/docker.sock';
var stats = fs.statSync(socket);
var docker = new Docker({ socketPath: socket });


if (!stats.isSocket()) {
  throw new Error('Are you sure the docker is running?');
}

router.get('/', function (req, res, next) {
  console.log(docker.listImages());
  docker.listImages().then(res.send.bind(res));
});

module.exports = router;

