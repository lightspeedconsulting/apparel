addStyleChoice = function (caption, path, clothingType, grouping) {
  StyleChoices.insert({caption: caption,
                       path: path,
                       clothingType: clothingType,
                       grouping: grouping});
}

getStyleChoiceImage = function (caption) {
  return StyleChoices.findOne({caption: caption}).path
}