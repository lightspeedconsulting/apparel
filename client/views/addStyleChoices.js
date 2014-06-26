var attributes;

//TODO: both of the below 2 functions are duplicate code from takePicture.js
//and should be refactored to one function accessible everywhere client side
function insertFiles(files, e, view) {
    FS.Utility.eachFile(e, function(file) {
      var newFile = new FS.File(file);
      newFile.metadata = {
        view: view,
        clothingType: attributes.clothingType,
        caption: attributes.caption,
        grouping: attributes.grouping
      };
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
  var image = Images.findOne({"metadata.view": view}, 
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

Template.addStyleChoices.rendered = function() {
 
  Session.set('isOtherSelected', false);
  Session.set('exposeImageInformation', false);
  Session.set('styleInfoSubmitted', false);
  //TODO: repeated code from StyleChoices.js, should refator it
  //Note: except that here it's this.data.type instead of this.type
  sci = Images.find({'metadata.clothingType': this.data.type});

  styleChoiceGroupArray = [];

  sci.forEach(function(sc) {
    styleChoiceGroupArray.push(sc.metadata.grouping);
  });

  styleChoiceGroupArray = _.uniq(styleChoiceGroupArray);
  console.log(styleChoiceGroupArray);

  $('#styleChoiceGrouping').append($("<option></option>")
    .attr("value", '').text('-'));
  styleChoiceGroupArray.forEach(function(sc) {
    $('#styleChoiceGrouping').append($("<option></option>")
      .attr("value", sc).text(sc));
  });
    $('#styleChoiceGrouping').append($("<option></option>")
      .attr("value", 'Other').text('Other'));

};

Template.addStyleChoices.helpers({
  'isOtherSelected': function() {
    return Session.get('isOtherSelected');
  },
  'exposeOtherInformation': function() {
    return Session.get('exposeImageInformation');
  },
  'styleInfoSubmitted': function() {
    return Session.get('styleInfoSubmitted');
  }
});

Template.addStyleChoices.events({
  'change #styleChoicePicture': function(e) {
    e.preventDefault(); 
    
    console.log(attributes);
    var files = e.target.files; 
    var grouping = '';

    if(Session.get('isOtherSelected')) {
      grouping = $('#newStyleGrouping').val();
    } else {
      grouping = $('#styleChoiceGrouping').val();
    }
    attributes = {
      clothingType: this.type,
      caption: $('#caption').val(),
      grouping: grouping
      
    };

    insertFiles(files, e, "StyleChoice");
    Session.set('styleInfoSubmitted', true);
  }, 
  'click #removeImage': function(e) {
    e.preventDefault();
    removeImages("StyleChoice");    
    $('#styleChoicePicture').val('');
  },
  'change #styleChoiceGrouping': function(e) {
    var selectValue = $(e.target).val();

    if(selectValue === 'Other') {
      Session.set('isOtherSelected', true);
    } else { 
      Session.set('isOtherSelected', false);
      Session.set('exposeImageInformation', true);
    }
  },
  'keyup #newStyleGrouping': function(e) {
      Session.set('exposeImageInformation', true);
  },
  'click #done': function(e) {
    e.preventDefault();

    Session.set('displayAddStyleChoice',false);
  }
});
