Template.customer.events({
  'keyup #customerSearch': function(e) {
    Session.set("searchQuery", e.currentTarget.value)
  }
})