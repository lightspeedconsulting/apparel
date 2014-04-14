Template.takePicture.events({
  'change #photoInput': function(e) {
    e.preventDefault(); 
    
    console.log("uploading photo");
    var files = e.target.files; 
    //TODO: this can be made cleaner with a Collection FS Utility method
    //FS.Utility.eachFile, but since it's so new worried about API
    //changing
    FS.Utility.eachFile(e, function(file) {
      Images.insert(file, function(error, fileObj) {
        if(error) {
          throwError(error.reason);
        }
        console.log(fileObj);
      });
    });
  }
});
