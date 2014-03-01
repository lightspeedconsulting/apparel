//place publications here
Meteor.publish('tracker', function() {
  return Tracker.find();
});