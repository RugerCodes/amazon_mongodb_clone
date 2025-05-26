// === USERS ===
db.users.find({ "name": "Jeffrey Coleman" });
db.users.find({ "name": "Ronald Butler" });
db.users.find({ "name": "Robert Burnett" });
db.users.find({ "name": "Aaron Coleman" });
db.users.find({ "name": "Shannon Martinez" });
db.users.find({ "name": "Cynthia Thomas" });
db.users.find({ "name": "Michael Rhodes" });
db.users.find({ "name": "Jennifer Taylor" });
db.users.find({ "name": "Joshua Smith" });
db.users.find({ "name": "Linda Sharp" });
db.users.find({ "address.state": "KS" });
db.users.find({ "address.state": "MA" });
db.users.find({ "address.state": "MN" });
db.users.find({ "address.state": "NE" });
db.users.find({ "address.state": "SC" });
// === PRODUCTS===
db.products.find({ "name": "Four" });
db.products.find({ "name": "Suffer" });
db.products.find({ "name": "Out" });
db.products.find({ "name": "Create" });
db.products.find({ "name": "Else" });
db.products.find({ "name": "Security" });
db.products.find({ "name": "Accept" });
db.products.find({ "name": "Cup" });
db.products.find({ "name": "Fund" });
db.products.find({ "name": "Fly" });
// === ORDERS===
db.orders.find({ "status": "Cancelled" });
db.orders.find({ "status": "Delivered" });
db.orders.find({ "status": "Shipped" });
db.orders.find({ "status": "Pending" });
db.orders.find({ "shipping_address.city": "Thompsonbury" });
db.orders.find({ "shipping_address.city": "West Yvonneville" });
db.orders.find({ "shipping_address.city": "Mariamouth" });
db.orders.find({ "shipping_address.city": "Howardstad" });
db.orders.find({ "shipping_address.city": "Vegatown" });
// === COUPONS ===
db.coupons.find({ "code": "ebqh10" });
db.coupons.find({ "code": "yZVb64" });
db.coupons.find({ "code": "pmkY51" });
db.coupons.find({ "code": "kjoe89" });
db.coupons.find({ "code": "jhqS03" });
// === CATERGORIES===
db.categories.find({ "name": "Before" });
db.categories.find({ "name": "Value" });
db.categories.find({ "name": "Picture" });
db.categories.find({ "name": "Newspaper" });
db.categories.find({ "name": "Spring" });
db.categories.find({ "name": "Head" });
db.categories.find({ "name": "Me" });
db.categories.find({ "name": "Everything" });
db.categories.find({ "name": "Radio" });
db.categories.find({ "name": "Record" });
db.reviews.find({ "title": "Strong officer." });