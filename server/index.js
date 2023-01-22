const express = require('express');
const spacy = require('spacy');
const bodyParser = require('body-parser');
const _ = require('lodash');

const app = express();
// const nlp = spacy.load('de_core_news_sm');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post('/lemmatize', (req, res) => {
  const inputText = req.body.inputText;
  console.log(inputText);
  // const doc = nlp(inputText);
  // const lemmas = doc.map((token) => token.lemma_);
  // const frequencyTable = _.countBy(lemmas);
  // res.json(frequencyTable);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
