/* global client */
/* eslint-env mocha */

module.exports = {
  elements: {
    username: 'input[type=text]',
    password: 'input[type=password]',
    login_button: 'button[name=login]'
  },
  commands: [
    {
      login: () => {
        return this.api.pause(1000);
      }
    }
  ]
};
