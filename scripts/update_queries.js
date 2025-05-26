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