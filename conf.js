// conf.js
exports.config = {
  framework: 'jasmine',
  getPageTimeout: 20000,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  maxSessions: 20,
  multiCapabilities: [{ 
    'browserName': 'chrome',
    'shardTestFiles': true,
    'maxInstances': 20
  },{
    'browserName' : 'firefox',
    'shardTestFiles': true,
    'maxInstances': 20
  }],
  specs: ['spec.js']
}


