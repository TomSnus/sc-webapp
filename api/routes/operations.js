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

//router.get('/createContainer', function (req, res, next) {
router.get('/createContainer/:id/:name/:domainname/:hostname/:ports', function (req, res, next) {
    console.log('image id ' + req.params.id)
    console.log('domainname ' + req.params.domainname)
    console.log('hostname ' + req.params.hostname)
    console.log('ports ' + req.params.ports)

    var auxContainer;
         docker.createContainer({
         Image: req.params.id,
         Name: req.params.name,
         Domainname: req.params.domainname,
         Hostname: req.params.hostname,
         ExposedPorts: {"43306/tcp": {} }
         }).then(function(container) {
         auxContainer = container;
         return auxContainer.start();
          });
});

router.post('/createContainer', function (req, res) {
    res.send({'sucess':'Container ' + req.body.image +' started'});
});

router.get('/createImage/:id/:feature/', function (req, res, next) {
    console.log('image id ' + req.params.id)
    console.log('feature ' + req.params.feature)
    var auxImage;
    docker.createImage({fromImage: req.params.id, repo: req.params.feature, tag: req.params.feature}).then(function(image){
        auxImage = image;
        return auxImage;
    });
});

router.get('/commit/:id/:repo/:tag/:comment/:author', function (req, res, next) {
    console.log('container id ' + req.params.id)
    console.log('container tag ' + req.params.repo)

   // docker.container.start(req.query.id);
    // docker.createContainer({ Image: req.query.id, Cmd: ['/bin/bash'], name: req.query.id }, function (err, container) {
    //     container.start(function (err, data) {
    //         //...
    //     });
    // });
    var auxContainer;
        docker.getContainer(req.params.id).commit({
        container: req.params.id,
        repo: req.params.repo,
        tag: req.params.tag,
        comment: req.params.comment,
        author: req.params.author
        }).then(function(data) {
            console.log('Image created');
        });
});

module.exports = router;