var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank', schema);

var Tank = mongoose.model('Tank', yourSchema);

var small = new Tank({ size: 'small' });
small.save(function(err) {
  if (err) return handleError(err);
  // saved
})

// or

Tank.create({ size: 'small' }, function(err, small) {
  if (err) return handleError(err);
  // saved
})

mongoose.connect('localhost', 'gettingstarted');

Tank.find({ size: 'small' }).where('createdDate').gt(oneYearAgo).exec(callback);

Tank.remove({ size: 'large' }, function(err) {
  if (err) return handleError(err);
  // removed
})

Tank.findById(id, function(err, tank) {
  if (err) return handleError(err);

  tank.size = 'large';
  tank.save(function(err) {
    if (err) return handleError(err);
    res.send(tank);
  });
});

Tank.update({ _id: id }, { $set: { size: 'large' }}, callback);

Tank.findByIdAndUpdate(id, { $set: { size: 'large' }}, function(err, tank) {
  if (err) return handleError(err);
  res.send(tank);
});


