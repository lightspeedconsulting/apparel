buildEmail = function(to, from, customerId, orderIdArr) {
  customerMeasurements = getCustomerMeasurements(customerId);

  var htmlText = '';
  htmlText = htmlText.concat(
    //openBody(),
    openTable(),
    measurementsTable(customerMeasurements),
    closeTable(),
    styleChoicesTable(orderIdArr)
    //,closeBody()
    );

  var emailObject =
  {
    to: to,
    from: from,
    subject: 'Email Subject',
    html: htmlText
  };
  return Emails.insert(emailObject);
};

measurementsTable = function(customerMeasurements) {
  return buildTable(customerMeasurements);
};

styleChoicesTable = function(orderIdArr) {
  console.log(orderIdArr);
  orderTable = '';
  _.each(orderIdArr, function(value, key, list) {
    styleChoiceHash = getStyleChoices(value);
    orderTable =  orderTable + '<hr>' + openTable() +  
      orderHeader(value) +
      buildStyleChoiceTable(styleChoiceHash) + closeTable();
      console.log(value);
      console.log(orderTable);
  });
  return orderTable;
};

buildStyleChoiceTable = function(tableHash) {
  table = '';
  _.each(tableHash, function(value, key, list) {
    table = table +
      fullTableRow(key, value, getStyleChoiceImage(value) );
  });
  return table;
};

orderHeader = function(orderId){
  itemType = getOrderItemType(orderId);
  orderDate = getOrderDate(orderId);
  return opentr().concat(
     openth(),itemType,closeth(),
     openth(),orderDate,closeth(),
     closetr());
};

buildTable = function(tableHash) {
  table = '';
  _.each(tableHash, function(value, key, list) {
    table = table + fullTableRow(key, value);
  });
  return table;
};

fullTableRow = function(key, value, image) {
  var mtr = '';
  mtr = mtr.concat(
    opentr(),
    opentd(),key,closetd(),
    opentd(),value,closetd());
  if(image) {
    mtr = mtr.concat(
      opentd(),styleChoiceImageTag(image),closetd()
    );
  }
  mtr = mtr.concat(
    closetr()
    );
  return mtr;
};

openBody = function() {return '<body>';};
closeBody = function() {return '</body>';};
openTable = function() {return '<table>';};
closeTable = function() {return '</table>';};
openth = function() {return '<th>';};
closeth = function() {return '</th>';};
opentr = function() {return '<tr>';};
closetr = function() {return '</tr>';};
opentd = function() {return '<td>';};
closetd = function() {return '</td>';};
//styleChoiceImageTag = function(image) {return '<img src="public/styleChoices/' + image + '">'}
styleChoiceImageTag = function(image) {return '<img src="styleChoices/' + image + '">';};
