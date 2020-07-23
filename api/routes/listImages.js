var express = require('express');
var router = express.Router();

const app = express();
var Docker = require('dockerode');
var fs     = require('fs');

var socket = process.env.DOCKER_SOCKET || '/var/run/docker.sock';
var stats  = fs.statSync(socket);

if (!stats.isSocket()) {
  throw new Error('Are you sure the docker is running?');
}

var docker = new Docker({ socketPath: socket });

docker.listImages({all: true}, function(err, images) {
    console.log('ALL: ' + images.entries);
  });

  router.get('/', function(req, res, next) {
    res.json(
      [{
        'Id': 'sha256:e216a057b1cb1efc11f8a268f37ef62083e70b1b38323ba252e25ac88904a7e8',
        'ParentId': '',
        'RepoTags':
          [
            'ubuntu:12.04',
            'ubuntu:precise'
          ],
        'RepoDigests':
          [
            'ubuntu@sha256:992069aee4016783df6345315302fa59681aae51a8eeb2f889dea59290f21787'
          ],
        'Created': 1474925151,
        'Size': 103579269,
        'VirtualSize': 103579269,
        'SharedSize': 0,
        'Labels': {},
        'Containers': 2
      }, {
        'Id': 'sha256:e216a057b1cb1efc11f8a268f37ef62083e70b1b38323ba252e25ac88904a7e8',
        'ParentId': '',
        'RepoTags':
          [
            'ubuntu:12.04',
            'ubuntu:precise'
          ],
        'RepoDigests':
          [
            'ubuntu@sha256:992069aee4016783df6345315302fa59681aae51a8eeb2f889dea59290f21787'
          ],
        'Created': 1474925151,
        'Size': 103579269,
        'VirtualSize': 103579269,
        'SharedSize': 0,
        'Labels': {},
        'Containers': 2
      }, {
        'Id': 'sha256:e216a057b1cb1efc11f8a268f37ef62083e70b1b38323ba252e25ac88904a7e8',
        'ParentId': '',
        'RepoTags':
          [
            'ubuntu:12.04',
            'ubuntu:precise'
          ],
        'RepoDigests':
          [
            'ubuntu@sha256:992069aee4016783df6345315302fa59681aae51a8eeb2f889dea59290f21787'
          ],
        'Created': 1474925151,
        'Size': 103579269,
        'VirtualSize': 103579269,
        'SharedSize': 0,
        'Labels': {},
        'Containers': 2
      }, {
          'Id': 'sha256:e216a057b1cb1efc11f8a268f37ef62083e70b1b38323ba252e25ac88904a7e8',
          'ParentId': '',
          'RepoTags': 
      [
          'ubuntu:12.04',
          'ubuntu:precise'
      ],
      'RepoDigests': 
          [
              'ubuntu@sha256:992069aee4016783df6345315302fa59681aae51a8eeb2f889dea59290f21787'
          ],
          'Created': 1474925151,
          'Size': 103579269,
          'VirtualSize': 103579269,
          'SharedSize': 0,
          'Labels': { },
          'Containers': 2
      },]
    );
});

module.exports = router;

