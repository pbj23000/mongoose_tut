var animalSchema = new Schema({ name: String, type: String});

animalSchema.methods.findSimilarTypes = function(cb) {
  return this.model('Animal').find({ type: this.type }, cb);
}

var Animal = mongoose.model('Animal', animalSchema);

var dog = new Animal({ type: 'dog' });

dog.findSimilarTypes(function(err, dogs) {
  console.log(dogs);  // woof
});

animalSchema.statics.findByName = function(name, cb) {
  this.find({ name: new RegExp(name, 'i') }, cb);
}

var Animal = mongoose.model('Animal', animalSchema);
Animal.findByName('fido', function(err, animals) {
  console.log(animals);
});

animalSchema.index({ name: 1, type: -1 });

animalSchema.set('autoIndex', false);
