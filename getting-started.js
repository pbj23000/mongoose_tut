var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/goosetut');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() { 
  // yay!
});

var kittySchema = mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function() {
  
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

var fluffy = new Kitten({ name: 'Fluffy' });
fluffy.speak(); // 'Meow name is Fluffy'

fluffy.save(function(err, fluffy) {
  if (err) // TODO handle err
  fluffy.speak();
});

Kitten.find(function(err, kittens) {
  if (err) // TODO handle err
  console.log(kittens);
});

Kitten.find({ name: /^Fluff/ }, function(err, kitten) {
  console.log(kitten);
});


