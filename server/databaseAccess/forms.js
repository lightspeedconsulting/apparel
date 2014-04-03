addForm = function(item, placeholder, type, position) {
  return Forms.insert(
    { item: item,
      placeholder: placeholder,
      position: position,
      type: type});
}
