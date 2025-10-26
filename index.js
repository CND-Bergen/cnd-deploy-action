const core = require('@actions/core');

try {
  console.log('Hello World');
  core.info('Hello World');
} catch (error) {
  core.setFailed(error.message);
}
