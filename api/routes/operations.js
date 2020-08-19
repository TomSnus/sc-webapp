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

router.get('/createContainer', function (req, res, next) {
    console.log('test' + req.query.id)
   // docker.container.start(req.query.id);
    // docker.createContainer({ Image: req.query.id, Cmd: ['/bin/bash'], name: req.query.id }, function (err, container) {
    //     container.start(function (err, data) {
    //         //...
    //     });
    // });
    var auxContainer;
        docker.createContainer({
        Image: req.query.id,
        AttachStdin: true,
        AttachStdout: true,
        AttachStderr: true,
        Tty: true,
        Cmd: ['/bin/bash', '-c', 'tail -f /var/log/dmesg'],
        OpenStdin: true,
        StdinOnce: false
        }).then(function(container) {
        auxContainer = container;
        return auxContainer.start();
         });
});

module.exports = router;