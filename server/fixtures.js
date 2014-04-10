String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

Customers.remove({});
addCustomer('Tyler', 'Sheffels')
addCustomer('Duncan', 'Renfrow')
addCustomer('Josh', 'A')
addCustomer('Tim', 'B')
addCustomer('TARK', 'MCMAINS')
addCustomer('Brendan', 'Nolan')
addCustomer('John', 'Doe')
addCustomer('Jim', 'Raynor')
addCustomer('Mike', 'Hunt')
jb = addCustomer('James', 'Bond')
addCustomer('Sean', 'Connery')
addCustomer('Woody', 'Allen')
addCustomer('Brad', 'Pitt')
addCustomer('Jennifer', 'Aniston')
addCustomer('Angelina', 'Jolie')
addCustomer('Jenna', 'Jameson')
addCustomer('Jonnie', 'Depp')
addCustomer('Greg', 'Silverberg')
addCustomer('Clark', 'Kent')
addCustomer('Bruce', 'Wayne')
addCustomer('Bruce', 'Willis')
addCustomer('Lil', 'Wayne')


Forms.remove({});


addForm('Collar', 'Collar', 'number')
addForm('Chest', 'Chest', 'number')
addForm('Waist', 'Waist', 'number')
addForm('Front Chest', 'Front Chest', 'number')
addForm('Chest with Arms', 'Chest with Arms', 'number')
addForm('Back Chest', 'Back Chest', 'number')
addForm('Shoulders', 'Shoulders', 'number')
addForm('Half Shoulder', 'Half Shoulder', 'number')
addForm('Sleeves', 'Sleeves', 'number')
addForm('Bicep', 'Bicep', 'number')
addForm('Armpit', 'Armpit', 'number')
addForm('Front Length', 'Front Length', 'number')
addForm('Vest Length', 'Vest Length', 'number')
addForm('Waist', 'Waist', 'number')
addForm('Hips', 'Hips', 'number')
addForm('Length', 'Length', 'number')
addForm('Thigh', 'Thigh', 'number')
addForm('Knee', 'Knee', 'number')
addForm('Calf', 'Calf', 'number')
addForm('Bottom', 'Bottom', 'number')
addForm('U Rise', 'U Rise', 'number')
addForm('Front Rise', 'Front Rise', 'number')
addForm('Inseam', 'Inseam', 'number')

addMeasurementsToCustomer(jb,
{'Collar': 15,
'Chest': 15,
'Waist': 15,
'Front Chest': 15,
'Chest with Arms': 15,
'Back Chest': 15,
'Shoulders': 15,
'Half Shoulder': 15,
'Sleeves': 15,
'Bicep': 15,
'Armpit': 15,
'Front Length': 15,
'Vest Length': 15,
'Waist': 15,
'Hips': 15,
'Length': 15,
'Thigh': 15,
'Knee': 15,
'Calf': 15,
'Bottom': 15,
'U Rise': 15,
'Front Rise': 15,
'Inseam': 15} );


StyleChoices.remove({});
addStyleChoice('cuffStyle1','images/cuffStyle.png', 'shirts', 'cuffs')
addStyleChoice('cuffStyle2','images/cuffStyle.png', 'shirts', 'cuffs')
addStyleChoice('cuffStyle3','images/cuffStyle.png', 'shirts', 'cuffs')
addStyleChoice('cuffStyle4','images/cuffStyle.png', 'shirts', 'cuffs')
addStyleChoice('cuffStyle5','images/cuffStyle.png', 'shirts', 'cuffs')
addStyleChoice('cuffStyle6','images/cuffStyle.png', 'shirts', 'cuffs')
addStyleChoice('cuffStyle7','images/cuffStyle.png', 'shirts', 'cuffs')

addStyleChoice('collarStyle1','images/collarStyle.png', 'shirts', 'collars')
addStyleChoice('collarStyle2','images/collarStyle.png', 'shirts', 'collars')
addStyleChoice('collarStyle3','images/collarStyle.png', 'shirts', 'collars')
addStyleChoice('collarStyle4','images/collarStyle.png', 'shirts', 'collars')
addStyleChoice('collarStyle5','images/collarStyle.png', 'shirts', 'collars')
addStyleChoice('collarStyle6','images/collarStyle.png', 'shirts', 'collars')
addStyleChoice('collarStyle7','images/collarStyle.png', 'shirts', 'collars')


Orders.remove({});
Orders.insert({ customerName: 'Tyler', orderDate: '04/09/14', itemName: 'Shirt'});
Orders.insert({ customerName: 'Duncan', orderDate: '04/08/14', itemName: 'Shirt'});
Orders.insert({ customerName: 'Brendan', orderDate: '04/07/14', itemName: 'Suit'});
