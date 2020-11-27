var express = require('express');
var router = express.Router();

const app = express();
var Docker = require('dockerode');
var fs = require('fs');

var socket = process.env.DOCKER_SOCKET || '/var/run/docker.sock';
var stats = fs.statSync(socket);

if (!stats.isSocket()) {
  throw new Error('Are you sure the docker is running?');
}

var docker = new Docker({
  socketPath: socket
});

router.get('/', function (req, res, next) {
  let allContainers = true
  if (req.query.showRunning === 'true')
    allContainers = false;
  docker.listContainers({
    all: allContainers,
    filters: {name: [req.query.filter]}
  }).then(res.send.bind(res));
});

module.exports = router;
