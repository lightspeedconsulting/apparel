Template.measurements.formItems = function (){
  return Forms.find()
}

Template.measurements.events({
  'clicked #submitMeasurements': function(e) {
    e.preventDefault();

    customerId = Session.get('currentCustomer');

  }
})