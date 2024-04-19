var ghpages = require('gh-pages');
// only gh-page branch work
ghpages.publish('./backend/public', function (err) {
  console.log('Deploy finished !!');
  console.log('Open app at https://n1340t.github.io/art-of-bubble-tea/');
  if (err) {
    console.log(err);
  }
});