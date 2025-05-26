// === FIND QUERIES ===
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
// === UPDATE QUERIES ===
// === USERS ===
db.users.updateOne({ "name": "Jeffrey Coleman" }, { $set: { "active": true } });
db.users.updateOne({ "name": "Ronald Butler" }, { $set: { "active": true } });
db.users.updateOne({ "name": "Robert Burnett" }, { $set: { "active": true } });
db.users.updateOne({ "name": "Aaron Coleman" }, { $set: { "active": true } });
db.users.updateOne({ "name": "Shannon Martinez" }, { $set: { "active": true } });
db.users.updateOne({ "name": "Cynthia Thomas" }, { $set: { "active": true } });
db.users.updateOne({ "name": "Michael Rhodes" }, { $set: { "active": true } });
db.users.updateOne({ "name": "Jennifer Taylor" }, { $set: { "active": true } });
db.users.updateOne({ "name": "Joshua Smith" }, { $set: { "active": true } });
db.users.updateOne({ "name": "Linda Sharp" }, { $set: { "active": true } });
db.users.updateMany({ "address.state": "KS" }, { $set: { "zone": "northeast" } });
db.users.updateMany({ "address.state": "MA" }, { $set: { "zone": "northeast" } });
db.users.updateMany({ "address.state": "MN" }, { $set: { "zone": "northeast" } });
db.users.updateMany({ "address.state": "NE" }, { $set: { "zone": "northeast" } });
db.users.updateMany({ "address.state": "SC" }, { $set: { "zone": "northeast" } });
// === PRODUCTS ===
db.products.updateOne({ "name": "Create" }, { $set: { "featured": true } });
db.products.updateOne({ "name": "Ability" }, { $set: { "featured": true } });
db.products.updateOne({ "name": "Wrong" }, { $set: { "featured": true } });
db.products.updateOne({ "name": "Myself" }, { $set: { "featured": true } });
db.products.updateOne({ "name": "Decide" }, { $set: { "featured": true } });
db.products.updateOne({ "name": "Cup" }, { $set: { "featured": true } });
db.products.updateOne({ "name": "Four" }, { $set: { "featured": true } });
db.products.updateOne({ "name": "Discuss" }, { $set: { "featured": true } });
db.products.updateOne({ "name": "Else" }, { $set: { "featured": true } });
db.products.updateOne({ "name": "End" }, { $set: { "featured": true } });
// === ORDERS ===
db.orders.updateMany({ "status": "Cancelled" }, { $set: { "priority": "standard" } });
db.orders.updateMany({ "status": "Delivered" }, { $set: { "priority": "standard" } });
db.orders.updateMany({ "status": "Shipped" }, { $set: { "priority": "standard" } });
db.orders.updateMany({ "status": "Pending" }, { $set: { "priority": "standard" } });
db.orders.updateOne({ "shipping_address.city": "Thompsonbury" }, { $set: { "delivered": true } });
db.orders.updateOne({ "shipping_address.city": "West Yvonneville" }, { $set: { "delivered": true } });
db.orders.updateOne({ "shipping_address.city": "Mariamouth" }, { $set: { "delivered": true } });
db.orders.updateOne({ "shipping_address.city": "Howardstad" }, { $set: { "delivered": true } });
db.orders.updateOne({ "shipping_address.city": "Vegatown" }, { $set: { "delivered": true } });
// === REVIEWS===
db.reviews.updateOne({ "title": "Strong officer." }, { $set: { "flagged": false } });
db.reviews.updateOne({ "title": "Each themselves cup." }, { $set: { "flagged": false } });
db.reviews.updateOne({ "title": "Conference director." }, { $set: { "flagged": false } });
db.reviews.updateOne({ "title": "Agree drug capital." }, { $set: { "flagged": false } });
db.reviews.updateOne({ "title": "Learn." }, { $set: { "flagged": false } });
// === COUPONS ===
db.coupons.updateMany({ "code": "ebqh10" }, { $set: { "active": true } });
db.coupons.updateMany({ "code": "yZVb64" }, { $set: { "active": true } });
db.coupons.updateMany({ "code": "pmkY51" }, { $set: { "active": true } });
db.coupons.updateMany({ "code": "kjoe89" }, { $set: { "active": true } });
db.coupons.updateMany({ "code": "jhqS03" }, { $set: { "active": true } });

// === DELEETE QUERIES ===
// === USERS ===
db.users.deleteOne({ "name": "Jeffrey Coleman" });
db.users.deleteOne({ "name": "Ronald Butler" });
db.users.deleteOne({ "name": "Robert Burnett" });
db.users.deleteOne({ "name": "Aaron Coleman" });
db.users.deleteOne({ "name": "Shannon Martinez" });
db.users.deleteOne({ "name": "Cynthia Thomas" });
db.users.deleteOne({ "name": "Michael Rhodes" });
db.users.deleteOne({ "name": "Jennifer Taylor" });
db.users.deleteOne({ "name": "Joshua Smith" });
db.users.deleteOne({ "name": "Linda Sharp" });
db.users.deleteMany({ "address.city": "East Miguelville" });
db.users.deleteMany({ "address.city": "North Ronaldton" });
db.users.deleteMany({ "address.city": "Jasonview" });
db.users.deleteMany({ "address.city": "East Luismouth" });
db.users.deleteMany({ "address.city": "Thompsonborough" });
// === PRODUCTS ===
db.products.deleteOne({ "name": "Create" });
db.products.deleteOne({ "name": "Ability" });
db.products.deleteOne({ "name": "Wrong" });
db.products.deleteOne({ "name": "Myself" });
db.products.deleteOne({ "name": "Decide" });
db.products.deleteOne({ "name": "Cup" });
db.products.deleteOne({ "name": "Four" });
db.products.deleteOne({ "name": "Discuss" });
db.products.deleteOne({ "name": "Else" });
db.products.deleteOne({ "name": "End" });
// === ORDERS ===
db.orders.deleteMany({ "status": "Cancelled" });
db.orders.deleteMany({ "status": "Delivered" });
db.orders.deleteMany({ "status": "Shipped" });
db.orders.deleteMany({ "status": "Pending" });
db.orders.deleteOne({ "shipping_address.state": "NE" });
db.orders.deleteOne({ "shipping_address.state": "TN" });
db.orders.deleteOne({ "shipping_address.state": "SC" });
db.orders.deleteOne({ "shipping_address.state": "LA" });
db.orders.deleteOne({ "shipping_address.state": "VA" });
// === REVIEWS ===
db.reviews.deleteOne({ "title": "Strong officer." });
db.reviews.deleteOne({ "title": "Each themselves cup." });
db.reviews.deleteOne({ "title": "Conference director." });
db.reviews.deleteOne({ "title": "Agree drug capital." });
db.reviews.deleteOne({ "title": "Learn." });
// === WISHLIST ===
db.wishlists.deleteMany({ "priority": "high" });
db.wishlists.deleteMany({ "priority": "low" });
db.wishlists.deleteMany({ "priority": "medium" });