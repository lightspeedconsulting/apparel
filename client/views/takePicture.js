Template.takePicture.events({
  'click #sendPhoto': function(e) {
    e.preventDefault(); 
    
    var files = e.files; 
    console.log("Files: " + files);
    //TODO: this can be made cleaner with a Collection FS Utility method
    //FS.Utility.eachFile, but since it's so new worried about API
    //changing
    for (var i = 0, ln = files.length; i < ln; i++) {
      Images.insert(files[i], function(error, fileObj) {
        if(error) {
         throwError(error.reason);
        }
        console.log(fileObj._id);
      });
    }
  },
  'change #photoInput': function(e) {
    e.preventDefault(); 
    
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
