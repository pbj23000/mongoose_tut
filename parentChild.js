var childSchema = new Schema({ name: 'string' });

var parentSchema = new Schema({ 
  children: [childSchema]
})

var Parent = mongoose.model('Parent', parentSchema);
var parent = new Parent({ children: [{ name: 'Matt' }, { name: 'Sarah' }] });
parent.children[0].name = 'Matthew';
parent.save(callback);

childSchema.pre('save', function(next) {
  if ('invalid' == this.name) return next(new Error('#sadpanda'));
  next();
});

var parent = new Parent({ children: [{ name: 'invalid' }] });
parent.save(function(err) {
  console.log(err.message); // #sadpanda
});

var doc = parent.children.id(id);

var Parent = mongoose.model('Parent');
var parent = new Parent;

// create a comment
parent.children.push({ name: 'Liesl' });
var subdoc = parent.children[0];
console.log(subdoc); // { _id: 'xxx001', name: 'Liesl' }
subdoc.isNew; // true

parent.save(function(err) {
  if (err) return handleError(err);
  console.log('Success');
});

var newdoc = parent.children.create({ name: 'Aaron' });

var doc = parent.children.id(id).remove();
parent.save(function(err) {
  if (err) return handleError(err);
  console.log('the sub-doc was removed');
});

var parentSchema = new Schema({
  children: [{ name: 'string' }]
});

