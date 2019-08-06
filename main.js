const greetings=require('./greeting.js');
const introductions=require('./intro.js');
const fs = require('fs');

greetings.greetingEnglish();
greetings.greetingJapanese();
greetings.greetingSpanish();
greetings.greetingIcelandic();


introductions.introEnglish();
introductions.introJapanese();
introductions.introSpanish();
introductions.introIcelandic();


fs.writeFile('basic_node_app_answers.txt', 'utf8', (err) => {
    if (err) throw err;
    console.log('node answers file has been created');
  });