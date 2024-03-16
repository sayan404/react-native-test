var upstreamTransformer = require('@react-native/metro-babel-transformer');
    var postCSSTransformer = require('react-native-postcss-transformer');
    
    module.exports.transform = function ({src, filename, options}) {
      if (filename.endsWith('.css')) {
        return postCSSTransformer.transform({src, filename, options});
      } else {
        return upstreamTransformer.transform({src, filename, options});
      }
    };
    