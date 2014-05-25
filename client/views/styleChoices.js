Session.set('currentStyleChoice', 'cuffs');
Session.set('styleChoiceHash', {});

Template.styleChoices.rendered = function() {
  Session.set('displayAddStyleChoice', false);
};

Template.styleChoices.helpers({
  'displayAddStyleChoice': function() {
    return Session.get('displayAddStyleChoice');
  }
});
Template.styleChoices.styleChoiceGrouping = function () {
  sci = Images.find({'metadata.clothingType': this.type});

  styleChoiceGroupArray = [];

  sci.forEach(function(sc) {
    styleChoiceGroupArray.push(sc.metadata.grouping);
  });

  styleChoiceGroupArray = _.uniq(styleChoiceGroupArray);

  return styleChoiceGroupArray;
};

Template.styleChoices.styleChoice = function () {
  return Images.find({'metadata.clothingType': this.type, 
    'metadata.grouping': Session.get('currentStyleChoice')});
};

Template.styleChoices.selectedChoice = function () {
  return _.values(Session.get('styleChoiceHash'));
};

Template.styleChoices.events = ({
  'click button.list-item': function(e) {
    e.preventDefault();
    Session.set('currentStyleChoice', e.currentTarget.id);
  },

  'click img.thumbnail': function(e) {
    e.preventDefault();
    $("img.thumbnail").removeClass('active');
    var current = e.currentTarget.id;
    $("#" + current).addClass('active');

    //TODO Find a cleaner way to do this
    sc = Session.get('styleChoiceHash');
    sc[Session.get('currentStyleChoice')] = current;
    Session.set('styleChoiceHash', sc);
  },

  'click #submitChoices': function(e) {
    e.preventDefault();
    Session.set('clothingType', this.type);
    Router.go('itemMenu');
  },
  'click #addStyleChoice': function(e) {
    e.preventDefault();
    
    Session.set('displayAddStyleChoice', true);
  }
});

