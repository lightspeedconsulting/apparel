Template.searchResult.events({
  'click a': function(e) {
    Session.set('currentCustomer', this._id)
  }
})