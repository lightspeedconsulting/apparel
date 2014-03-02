//place publications here
Meteor.publish('tracker', function() {
  return Tracker.find();
});

Meteor.publish('errors', function() {
  return Tracker.find();
});