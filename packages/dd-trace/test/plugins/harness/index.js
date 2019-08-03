'use strict'

const executeJest = require('./jest')
const executeLab = require('./lab')
const executeMocha = require('./mocha')
const executeTap = require('./tap')
const executeCustom = require('./custom')

function executeTest (testConfig, executionPath) {
  const options = { cwd: executionPath, stdio: [0, 1, 2] }

  // Run the test framework harness
  switch (testConfig.testType) {
    case 'jest':
      executeJest(testConfig.testArgs, options)
      break
    case 'lab':
      executeLab(testConfig.testArgs, options)
      break
    case 'mocha':
      executeMocha(testConfig.testArgs, options)
      break
    case 'tap':
      executeTap(testConfig.testArgs, options)
      break
    case 'custom':
      executeCustom(testConfig, options)
      break
    default:
      throw new Error(`'${testConfig.testType}' is an unsupported test framework`)
  }
}

module.exports = executeTest