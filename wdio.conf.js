exports.config = {
  user: '',
  key: '*',
  runner: 'local',
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
},
  sync: false,
  logLevel: 'silent',
  deprecationWarnings: true,
  bail: 0,
  baseUrl: 'https://portal.kobiton.com',
  hostname: 'api.kobiton.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  reporters: ['spec'],
  port: 4723,
  maxInstances: 3,
  beforeTest: () => {
    const chai = require('chai')
    const chaiWebdriver = require('chai-webdriverio').default
    chai.use(chaiWebdriver(browser))
    global.assert = chai.assert
  },
  afterTest: function (test, context, { error, result, duration, passed, retries }) 
  {
    
  } 
}
