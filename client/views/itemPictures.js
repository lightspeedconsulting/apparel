//TODO: Both of these functions are similar to those in takePicture
//We should refactor them and the ones in takePicture to take in a
//selector parameter and then place the single functions in a
//js helper folder on the client
//I'm also worried that we are going to have overlap with the function names in
// takePicture.js
function insertItemFiles(e, view) {
  FS.Utility.eachFile(e, function(file) {
    var newFile = new FS.File(file);
    newFile.metadata = {customerId: Session.get('currentCustomer'),
      view: Session.get('itemId')};
    Images.insert(newFile, function(error, fileObj) {
      if(error) {
        throwError(error.reason);
      }
    });
  });
}

function removeImages(view) {
  //TODO: note that Minimongo doesn't yet support findAndModify, so
  //we have to do this clunky approach
  var image = Images.findOne({"metadata.view": view,
    "metadata.customerId": Session.get('currentCustomer')},
    {sort: {updatedAt: -1}, limit: 1});

    Images.remove(image._id);

  //TODO: ideally we would wait to batch submit the images, but
  //I couldn't think of a good way to store the event until a user
  //pressed a submit button
  Meteor.call('removeImage', image.id, function(error, imageId) {
    if(error) {
      throwError(error.reason);
    }
  });
}
Template.itemPictures.events({
  'change #itemPicture': function(e) {
    e.preventDefault();

    insertItemFiles(e, Session.get('currentCustomer'));
  },
  // 'click #removeItem': function(e) {
  //   e.preventDefault();

  //   removeImages("Front");
  // },
  // 'click #doneItemPictures': function(e) {
  //   e.preventDefault();

  //   Router.go('itemMenu');
  //   throwError("Photos successfully added to item", "alert-success");
  // },
  // 'click #addAnotherPicture': function(e) {
  //   e.preventDefault();

  //   Router.go('itemPictures');
  //   throwError("Photo Added", "alert-success");
  // },
});

Template.itemPictures.helpers({
  images: function() {
    return Images.find({"metadata.view": Session.get('itemId'),
      "metadata.customerId": Session.get('currentCustomer')},
      {sort: {updatedAt: -1}});
  }
});
