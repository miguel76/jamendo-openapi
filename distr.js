const fs = require('fs');
const yaml = require('js-yaml');

try {
  var jamendoSpecYaml = fs.readFileSync('src/jamendo.yaml', 'utf8');
  fs.writeFile('distr/jamendo.yaml', jamendoSpecYaml);
  var jamendoSpec = yaml.safeLoad(jamendoSpecYaml);
  fs.writeFile('distr/jamendo.json', JSON.stringify(jamendoSpec, null, 2));
} catch (e) {
  console.log(e);
}
