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
    autoClean: true

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
    res.send('POST request');
    console.log(req.files.formData.path)
    var path = req.files.formData.path+': /tmp';
    var auxContainer;
         docker.createContainer({
         Image: 'c26440cd79ea',
         Name: 'maria-demo',
         Domainname: 'domain',
         Volumes: {path: { }  },
         Hostname: 'hostname',
         ExposedPorts: {"43306/tcp": {} }
         }).then(function(container) {
         auxContainer = container;
         return auxContainer.start();
          });
  });
module.exports = router;