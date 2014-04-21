function insertFiles(files, e, view) {
    FS.Utility.eachFile(e, function(file) {
      var newFile = new FS.File(file);
      newFile.metadata = {customerId: Session.get('currentCustomer'),
        view: view};
      Images.insert(newFile, function(error, fileObj) {
        if(error) {
          throwError(error.reason);
        }
      });
    });
}

//TODO: this code needs to be DRY
Template.takePicture.events({
  'change #photoInputFront': function(e) {
    e.preventDefault(); 
    
    var files = e.target.files; 
    insertFiles(files, e, "Front");
  },
  'change #photoInputSide': function(e) {
    e.preventDefault(); 
    
    var files = e.target.files; 
    insertFiles(files, e, "Side");
  },
  'change #photoInputBack': function(e) {
    e.preventDefault(); 
    
    var files = e.target.files; 
    insertFiles(files, e, "Back");
  }
});

Template.takePicture.helpers({
  images: function(view) {
    return Images.find({"metadata.view": view, 
      "metadata.customerId": Session.get('currentCustomer')}, 
      {sort: {updatedAt: -1}, limit: 1});
  }
});


