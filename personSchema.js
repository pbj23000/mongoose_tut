var personSchema = new Schema({
  name: {
    first: String,
    last: String
  }
});

var Person = mongoose.model('Person', personSchema);

var bad = new Person({
  name: { first: 'Walter', last: 'White' }
});

console.log(bad.name.first + ' ' + bad.name.last); // Walter White

personSchema.virtual('name.full').get(function() {
  return this.name.first + ' ' + this.name.last;
});

console.log('%s is insane', bad.name.full); // Walter White is insane

person.Schema.virtual('name.full').set(function(name) {
  var split = name.split(' ');
  this.name.first = split[0];
  this.name.last = split[1];
});

mad.name.full = 'Breaking Bad';
console.log(mad.name.first); // Breaking

var Person = mongoose.model('Person', yourSchema);

// find each person with a last name matching 'Ghost', selecting the 'name' and 'occupation' fields
Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', function(err, person) {
  if (err) return handleError(err);
  console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation); // Space Ghost is a talk show host.
});

// find each person with a last name matching 'Ghost'
var query = Person.findOne({ 'name.last': 'Ghost' });

// selecting the 'name' and 'occupation' fields
query.select('name occupation');

// execute the query at a later time
query.exec(function(err, person) {
  if (err) return handleError(err);
  console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation);
});


// Extreme!
Person
.find({ occupation: /host/ })
.where('name.last').equals('Ghost')
.where('age').gt(17).lt(66)
.where('likes').in(['vaporizing', 'talking'])
.limit(10)
.sort('-occupation)
.select('name occupation')
.exec(callback);


