'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1517232442514_1104';

  // add your config here
  config.middleware = ['errorHandler'];
  config.errorHandler = {
    match: '/api',
  }
  config.security = {
    csrf: {
      enable: false
    }
  }
  return config;
};
