Session.set('currentStyleChoice', 'cuffs');
Session.set('styleChoiceHash', {});

Template.styleChoices.styleChoiceGrouping = function () {
  sci = StyleChoices.find({clothingType: this.type});

  styleChoiceGroupArray = [];

  sci.forEach(function(sc) {
    styleChoiceGroupArray.push(sc.grouping);
  });

  styleChoiceGroupArray = _.uniq(styleChoiceGroupArray);

  return styleChoiceGroupArray;
};

Template.styleChoices.styleChoice = function () {
  return StyleChoices.find({clothingType: this.type, grouping: Session.get('currentStyleChoice')});
};

Template.styleChoices.selectedChoice = function () {
  return _.values(Session.get('styleChoiceHash'));
};

Template.styleChoices.events = ({
  'click button.list-item': function(e) {
    e.preventDefault();
    Session.set('currentStyleChoice', e.currentTarget.id);
  },

  'click a.thumbnail': function(e) {
    e.preventDefault();
    $("a.thumbnail").removeClass('active');
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
  }
});

