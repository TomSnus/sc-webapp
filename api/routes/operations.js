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
    console.log('image id ' + req.query.id)
   // docker.container.start(req.query.id);
    // docker.createContainer({ Image: req.query.id, Cmd: ['/bin/bash'], name: req.query.id }, function (err, container) {
    //     container.start(function (err, data) {
    //         //...
    //     });
    // });
    var auxContainer;
        docker.createContainer({
        Image: req.query.id,
        }).then(function(container) {
        auxContainer = container;
        return auxContainer.start();
         });
});

router.get('/commit', function (req, res, next) {
    console.log('container id ' + req.query.id)
   // docker.container.start(req.query.id);
    // docker.createContainer({ Image: req.query.id, Cmd: ['/bin/bash'], name: req.query.id }, function (err, container) {
    //     container.start(function (err, data) {
    //         //...
    //     });
    // });
    var auxContainer;
        docker.getContainer(req.query.id).commit({
        container: req.query.id,
        repo: "test:repo",
        tag: "test",
        comment: "test:comment",
        author: "test:author"
        }).then(function(data) {
            console.log('Image created');
        });
});

module.exports = router;