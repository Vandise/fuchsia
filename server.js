var gutil = require('gulp-util');
var watch = require('watch');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = null;
var exec = require('child_process').exec;

var grammarCmd = 'node node_modules/.bin/jacob -t src/fuchsia/system/fasm/v1/grammar/tokens.jacoblex -l src/fuchsia/system/fasm/v1/lexer.js -g src/fuchsia/system/fasm/v1/grammar/grammar.jacobgram -p src/fuchsia/system/fasm/v1/parser.js';

function compileGrammer() {
  exec(grammarCmd, function(error, stdout, stderr) {
    gutil.log(error, stdout, stderr);
  });
}

if (process.env.NODE_ENV === 'production') {
  webpackConfig = require("./webpack.production.config.js");
} else {
  webpackConfig = require("./webpack.config.js");
}

var devServer = new WebpackDevServer(webpack(webpackConfig), {
  contentBase: './public/',
  hot: true,
  watchOptions: {
    aggregateTimeout: 100
  },
  noInfo: true
});
devServer.listen(9090, "0.0.0.0", function(err) {
  if (err) {
    throw new gutil.PluginError("webpack-dev-server", err);
  }
  gutil.log("[webpack-dev-server]", "http://localhost:9090");
});

compileGrammer();

watch.createMonitor('src/fuchsia/system/fasm/v1/grammar/', function(m) {
  m.on("changed", function() {
    gutil.log('[Lang Compile]', "Fasm");
    compileGrammer();
  });
});