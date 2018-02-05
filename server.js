const port = process.env.PORT || 3000;
const express = require('express');
const bodyParser = require('body-parser');

const err = require('./middleware/clientErrorHandler');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(err.clientErrorHandler);

app.post('/', (req, res) => {
  console.log(req.body);
  try {
    var arr = req.body.payload;
    var arr = arr.filter(arr => arr.drm == true);
    var arr = arr.filter(arr => arr.episodeCount > 0);
    var filteredarr = arr.map((arr) => {
      return {
        "image": arr.image.showImage,
        "slug": arr.slug,
        "title": arr.title,
      };
    });
    var resJson = {
      response: filteredarr
    };
    res.status(200).json(resJson);
  } catch (error) {
    res.status(400).json(err.errJSON);
  }
});

app.listen(port, () => {
  console.log('server started on port', port);
})
