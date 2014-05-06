Template.uploadStyles.helpers({
  //TODO: this is almost a repeat of the functionality in styleChoices
  //should DRY this out
  styleChoiceGrouping: function() {
   sci = StyleChoices.find();

    styleChoiceGroupArray = [];

    sci.forEach(function(sc) {
      styleChoiceGroupArray.push(sc.grouping);
    });

    styleChoiceGroupArray = _.uniq(styleChoiceGroupArray);

    return styleChoiceGroupArray;
 }
});

Template.uploadStyles.events({
  'click #addStyleGroup': function(e) {
    e.preventDefault();

  }
});
