Session.set('currentStyleChoice', 'cuffs');

Template.styleChoices.styleChoiceGrouping = function () {
  sci = StyleChoices.find({clothingType: this.type});

  styleChoiceGroupArray = [];

  sci.forEach(function(sc) {
    styleChoiceGroupArray.push(sc.grouping);
  })

  styleChoiceGroupArray = _.uniq(styleChoiceGroupArray);

  return styleChoiceGroupArray;
}

Template.styleChoices.styleChoice = function () {
  return StyleChoices.find({clothingType: this.type, grouping: Session.get('currentStyleChoice')});
}

Template.styleChoices.events = ({
  'click button': function(e) {
    e.preventDefault();
    Session.set('currentStyleChoice', e.currentTarget.id);
  }
})