Template.results.searchResults = function() {
  var keyword = Session.get("searchQuery");
  // TODO: Unit test this....
  if(!_.isUndefined(keyword) && !(keyword === "")){
    var query = new RegExp( keyword, 'i' );
    var results = Customers.find( { $or: [{'firstName': query},
                                         {'lastName': query},
                                         {'fullName': query}]
                                  },
                                  {limit: 5}
                                );
    return results.fetch();
  }
  return false;
};

Template.results.created = function() {
  Session.set("customerButtonClicked", false);
};

Template.results.addCustomerClicked = function() {
  return Session.get("customerButtonClicked");
};

Template.results.events({
  'click #addCustomer': function(e) {
    e.preventDefault();
    Session.set("customerButtonClicked",true);
  }
});
