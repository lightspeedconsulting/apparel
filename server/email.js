buildEmail = function(to, from, customerId, orderIdArr) {
  customerMeasurements = getCustomerMeasurements(customerId);

  var htmlText = '';
  htmlText = htmlText.concat(
    openBody(),
    customerImages(customerId),
    openTable(),
    measurementsTable(customerMeasurements),
    closeTable(),
    styleChoicesTable(orderIdArr),
    closeBody()
    );

  var safeHtmlText = '';
  safeHtmlText = safeHtmlText.concat(
    openBody(),
    safeCustomerImages(customerId),
    openTable(),
    measurementsTable(customerMeasurements),
    closeTable(),
    safeStyleChoicesTable(orderIdArr),
    closeBody()
    );

  var emailObject =
  {
    to: to,
    from: from,
    subject: 'Email Subject',
    html: htmlText,
    safeHtml: safeHtmlText
  };
  return Emails.insert(emailObject);
};

customerImages = function(customerId) {
  var frontSrc = getCustomerImage(customerId,'Front').url({auth: false})
  var backSrc = getCustomerImage(customerId,'Back').url({auth: false})
  var sideSrc = getCustomerImage(customerId,'Side').url({auth: false})
  return imageTag(frontSrc)
    + imageTag(backSrc)
    + imageTag(sideSrc)
}

safeCustomerImages = function(customerId) {
  var frontSrc = getCustomerImage(customerId,'Front').url({auth: false})
  var backSrc = getCustomerImage(customerId,'Back').url({auth: false})
  var sideSrc = getCustomerImage(customerId,'Side').url({auth: false})
  return safeImageTag(frontSrc)
    + safeImageTag(backSrc)
    + safeImageTag(sideSrc)
}

measurementsTable = function(customerMeasurements) {
  return buildTable(customerMeasurements);
};

styleChoicesTable = function(orderIdArr) {
  orderTable = '';
  _.each(orderIdArr, function(value, key, list) {
    styleChoiceHash = getStyleChoices(value);
    orderTable =  orderTable + '<hr>' + openTable() +
      orderHeader(value) +
      buildStyleChoiceTable(styleChoiceHash) + closeTable();
  });
  return orderTable;
};

safeStyleChoicesTable = function(orderIdArr) {
  orderTable = '';
  _.each(orderIdArr, function(value, key, list) {
    styleChoiceHash = getStyleChoices(value);
    orderTable =  orderTable + '<hr>' + openTable() +
      orderHeader(value) +
      safeBuildStyleChoiceTable(styleChoiceHash) + closeTable();
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

safeBuildStyleChoiceTable = function(tableHash) {
  table = '';
  _.each(tableHash, function(value, key, list) {
    table = table +
      safeFullTableRow(key, value, getStyleChoiceImage(value) );
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

safeFullTableRow = function(key, value, image) {
  var mtr = '';
  mtr = mtr.concat(
    opentr(),
    opentd(),key,closetd(),
    opentd(),value,closetd());
  if(image) {
    mtr = mtr.concat(
      opentd(),safeStyleChoiceImageTag(image),closetd()
    );
  }
  mtr = mtr.concat(
    closetr()
    );
  return mtr;
};

getCustomerImage = function (customerId, view) {
  return Images.findOne({"metadata.view": view,
    "metadata.customerId": customerId},
    {sort: {updatedAt: -1}, limit: 1});
}


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

styleChoiceImageTag = function(image) {return '<img src="' + process.env.ROOT_URL + 'styleChoices/' + image + '"><br>';};
safeStyleChoiceImageTag = function(image) {return '<img src="' + 'styleChoices/' + image + '"><br>';};

imageTag = function(image) {return '<img src="' + process.env.ROOT_URL + image + '"><br>';};
safeImageTag = function(image) {return '<img src="' + image + '"><br>';};
