const loaderUtils = require('loader-utils');

module.exports = function (source) {
    const options = loaderUtils.getOptions(this);
    const results= source.replace('hello', options.name);
    this.callback(null,results)
};
