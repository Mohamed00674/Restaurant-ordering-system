const { defineConfig } = require('@vue/cli-service')
// const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/Restaurant-ordering-system  /" : "/",

});

// module.exports = {
//   outputDir: path.resolve(__dirname, '../backend/public'),
//   devServer: {
//     proxy: {
//       '/': {
//         target: 'http://localhost:8081'
//       }
//     }
//   }
// }
