/*
 Resolve will be a recursive function to generate html for the email
taking a series of nested associative arrays.
e.g.
<body>
  <p>
    <b>
      text1
    </b>
  </p>
  <p>
    text2
  </p>
  <img src=<src>>
</body>

resolve([{body: [
  {p: [{b: 'text1'}]},
  {p: 'text2'}]
}])
*/
resolve = function(baseArray) {
  bodyText = ''

  //if the input is a string we are at the deepest level in the hash
  if(_.isString(baseArray)) {
    bodyText = bodyText + baseArray
  }
  //IMG checking here
  else {
    _.each(baseArray, function(value, key, list) {
      //Value is an array of objects 1 element long
      tag = _.keys(value)[0] //<--- Tag for this object
      content = _.values(value)[0] //<--- content for this object

      bodyText = bodyText + openTag(tag)
      bodyText = bodyText + resolve(content)
      bodyText = bodyText + closeTag(tag)
    })
  }
  return bodyText;
}

var openTag = function (str) {
  return "<" + str + ">";
}

var closeTag = function (str) {
  return "</" + str + ">";
}
