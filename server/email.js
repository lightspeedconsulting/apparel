buildEmail = function(to, from, customerId, orderIdArr) {
  console.log(customerId)
  customerMeasurements = getCustomerMeasurements(customerId);
  //console.log(customerMeasurements);

  var htmlText = ''
  htmlText = htmlText.concat(
    openBody()
    ,openTable()
    ,measurementsTable(customerMeasurements)
    ,closeTable()
    ,closeBody()
    )


  console.log(htmlText)

  return emailObject =
  {
    to: to,
    from: from,
    subject: 'Email Subject',
    html: htmlText
  }
}

measurementsTable = function(customerMeasurements) {
  table = ''
  _.each(customerMeasurements, function(value, key, list) {
    table = table + measurementsTableRow(key, value);
  })
  return table
}

measurementsTableRow = function(key, value) {
  var mtr = ''
  mtr = mtr.concat(
    opentr()
    ,opentd(),key,closetd()
    ,opentd(),value,closetd()
    ,closetr()
    )
  return mtr
}

openBody = function() {return '<body>'}
closeBody = function() {return '</body>'}
openTable = function() {return '<table>'}
closeTable = function() {return '</table>'}
opentr = function() {return '<tr>'}
closetr = function() {return '</tr>'}
opentd = function() {return '<td>'}
closetd = function() {return '</td>'}
