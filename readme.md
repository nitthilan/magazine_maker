# Magazine Maker

- Eases the publishing of articles into a magazine like format
- User can define his own styling for the kind of magazine he wants

## Pre-requisites
- Mongodb has to be installed and running in the port 27017
- install nodejs, git, bower, forever, grunt cli
- refer "script to run to setup"

## Build

- Backend: Node js based server (Restify)
- Frontend: Angular webapp
- steps
    - cd /backend
    - sudo npm install
    - cd ../frontend
    - sudo npm install
    - bower install
    - grunt
    - cd ../backend
    - node app/setup/main.js | ./node_modules/.bin/bunyan

- Pitfalls:
    - create a config_secret.js file in /backend/setup/config_secret.js
    - Add the following to the file:
    module.exports = {
      development:{
        smtp_username:"xyz@gmail.com",
        smtp_password:"password",
      },
      test:{
      },
      production:{
      }
    }

## script to run every build

cd ~/workspace/magazine_maker/frontend
sudo npm install
bower install
grunt
cd ../backend
sudo npm install
node app/setup/main.js | ./node_modules/.bin/bunyan

## script to run to setup node, mongo

###Installing git
sudo apt-get install -y git

###Installing nodejs
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install -y nodejs
### Installing build tools
sudo apt-get install -y build-essential

### Installing grunt, bower and forever cli
sudo npm install -g grunt-cli
sudo npm install -g bower
sudo npm install -g forever

### Installing mongodb
### http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
sudo apt-get install -y mongodb-org
