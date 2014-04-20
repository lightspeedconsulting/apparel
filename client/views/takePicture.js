Template.takePicture.events({
  'change #photoInput': function(e) {
    e.preventDefault(); 
    
    console.log("uploading photo");
    var files = e.target.files; 
    //TODO: this can be made cleaner with a Collection FS Utility method
    //FS.Utility.eachFile, but since it's so new worried about API
    //changing
    FS.Utility.eachFile(e, function(file) {
      var newFile = new FS.File(file);
      newFile.metadata = {customer: Session.get('currentCustomer'),
        view: 'Front'};
      Images.insert(newFile, function(error, fileObj) {
        if(error) {
          throwError(error.reason);
        }
      });
    });
  }
});

Template.takePicture.helpers({
  images: function() {
    return Images.find();
  }
});
