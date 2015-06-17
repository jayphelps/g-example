var fs = require('fs');
var path = require('path');
var glob = require('glob');
var mkdirp = require('mkdirp');
var graffiti = require('graffiti');

function readFile(path) {
  return fs.readFileSync(path, 'utf8');
}

function writeFile(path, content) {
  fs.writeFileSync(path, content, 'utf8');
}

mkdirp.sync('dist');

writeFile('dist/index.html', readFile('src/index.html'));
writeFile('dist/graffiti-runtime.js', readFile('bower_components/graffiti/dist/graffiti-runtime.js'));

glob('src/**/*/', function (err, files) {
  files.forEach(function (dir) {
    var tagName = path.basename(dir);
    var jsPath = path.join(dir, tagName + '.js');
    var cssPath = path.join(dir, tagName + '.css');
    var hbsPath = path.join(dir, tagName + '.hbs');

    var out = graffiti.compile({
      name: tagName,
      js: readFile(jsPath),
      css: readFile(cssPath),
      hbs: readFile(hbsPath),
    });

    writeFile('dist/' + tagName + '.js', out);
  });
})