buildEmail = function(to, from, customerId, orderIdArr) {
  customerMeasurements = getCustomerMeasurements(customerId);
  var customerId = customerId;

  var htmlText = '';
  htmlText = htmlText.concat(
    openBody(),
    customerImages(customerId),
    openTable(),
    measurementsTable(customerMeasurements),
    closeTable(),
    styleChoicesTable(orderIdArr, customerId),
    closeBody()
    );

  var safeHtmlText = '';
  safeHtmlText = safeHtmlText.concat(
    openBody(),
    safeCustomerImages(customerId),
    openTable(),
    measurementsTable(customerMeasurements),
    closeTable(),
    safeStyleChoicesTable(orderIdArr, customerId),
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
  var frontSrc = getCustomerImages(customerId,'Front')[0].url({auth: false})
  var backSrc = getCustomerImages(customerId,'Back')[0].url({auth: false})
  var sideSrc = getCustomerImages(customerId,'Side')[0].url({auth: false})
  return imageTag(frontSrc)
    + imageTag(backSrc)
    + imageTag(sideSrc)
}

safeCustomerImages = function(customerId) {
  var frontSrc = getCustomerImages(customerId,'Front')[0].url({auth: false})
  var backSrc = getCustomerImages(customerId,'Back')[0].url({auth: false})
  var sideSrc = getCustomerImages(customerId,'Side')[0].url({auth: false})
  return safeImageTag(frontSrc)
    + safeImageTag(backSrc)
    + safeImageTag(sideSrc)
}

measurementsTable = function(customerMeasurements) {
  return buildTable(customerMeasurements);
};

styleChoicesTable = function(orderIdArr, customerId) {
  orderTable = '';
  _.each(orderIdArr, function(value, key, list) {
    styleChoiceHash = getStyleChoices(value);
    orderTable =  orderTable + '<hr>' + openTable() +
      orderHeader(value) +
      buildStyleChoiceTable(styleChoiceHash) + closeTable() +
      orderImages(value, customerId);
  });
  return orderTable;
};

safeStyleChoicesTable = function(orderIdArr, customerId) {
  orderTable = '';
  _.each(orderIdArr, function(value, key, list) {
    styleChoiceHash = getStyleChoices(value);
    orderTable =  orderTable + '<hr>' + openTable() +
      orderHeader(value) +
      safeBuildStyleChoiceTable(styleChoiceHash) + closeTable() +
      safeOrderImages(value, customerId);
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

orderImages = function(itemId, customerId) {
  images = getCustomerImages(customerId, itemId);
  imageTags = '';

  _.each(images, function(image) {
    imageTags = imageTags + imageTag(image.url({auth: false}))
  });

  return imageTags;
}

safeOrderImages = function(itemId, customerId) {
  images = getCustomerImages(customerId, itemId);
  imageTags = '';

  _.each(images, function(image) {
    imageTags = imageTags + safeImageTag(image.url({auth: false}))
  });

  return imageTags;
}

getCustomerImages = function (customerId, view) {
  return Images.find({"metadata.view": view,
    "metadata.customerId": customerId},
    {sort: {updatedAt: -1}}).fetch();
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

imageTag = function(image) {return '<img class="img-responsive" src="' + process.env.ROOT_URL + image + '"><br>';};
safeImageTag = function(image) {return '<img class="img-responsive" src="' + image + '"><br>';};
