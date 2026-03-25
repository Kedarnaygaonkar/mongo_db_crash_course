use('eCommerce');

// db.products.find({"name" : "Wireless Mouse"});
db.products.find({ category: "Electronics" })