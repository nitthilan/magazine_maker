# Magazine Maker

- Eases the publishing of articles into a magazine like format
- User can define his own styling for the kind of magazine he wants

# Build

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
