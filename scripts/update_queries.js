// === USERS ===
db.users.updateOne({ "address.state": "NY" }, { $set: { "phone": "+1-212-555-1234" } });
db.users.updateOne({ "email": { $regex: /@yahoo\.com$/ } }, { $set: { "address.city": "Bronx" } });
// === PRODUCTS ===
db.products.updateOne({ "stock": 0 }, { $set: { "on_sale": true } });
db.products.updateOne({ "price": { $gt: 100 } }, { $inc: { "price": -10 } });
// === ORDERS ===
db.orders.updateOne({ "status": "Pending" }, { $set: { "status": "Processing" } });
db.orders.updateOne({ "total": { $lt: 30 } }, { $set: { "shipping_address.city": "UpdatedCity" } });
// === REVIEWS ===
db.reviews.updateOne({ "rating": 3 }, { $set: { "rating": 4 } });
db.reviews.updateOne({ "title": { $regex: /bad/i } }, { $set: { "flagged": true } });
// === WISHLISTS ===
db.wishlists.updateOne({ "priority": "low" }, { $set: { "priority": "medium" } });
db.wishlists.updateOne({ "pinned": false }, { $set: { "pinned": true } });
// === COUPONS ===
db.coupons.updateOne({ "type": "fixed" }, { $set: { "type": "percentage" } });
db.coupons.updateOne({ "discount": { $lt: 20 } }, { $set: { "discount": 25 } });
// === CATEGORIES ===
db.categories.updateOne({ "popular": false }, { $set: { "popular": true } });
db.categories.updateOne({ "active": false }, { $set: { "active": true } });
db.products.updateOne({ "stock": { $lt: 5 } }, { $inc: { "stock": 5 } });
db.products.updateOne({ "stock": { $lt: 6 } }, { $inc: { "stock": 6 } });
db.products.updateOne({ "stock": { $lt: 7 } }, { $inc: { "stock": 7 } });
db.products.updateOne({ "stock": { $lt: 8 } }, { $inc: { "stock": 5 } });
db.products.updateOne({ "stock": { $lt: 9 } }, { $inc: { "stock": 6 } });
db.products.updateOne({ "stock": { $lt: 10 } }, { $inc: { "stock": 7 } });
db.products.updateOne({ "stock": { $lt: 11 } }, { $inc: { "stock": 5 } });
db.products.updateOne({ "stock": { $lt: 12 } }, { $inc: { "stock": 6 } });
db.products.updateOne({ "stock": { $lt: 13 } }, { $inc: { "stock": 7 } });
db.products.updateOne({ "stock": { $lt: 14 } }, { $inc: { "stock": 5 } });
db.products.updateOne({ "stock": { $lt: 5 } }, { $inc: { "stock": 6 } });
db.products.updateOne({ "stock": { $lt: 6 } }, { $inc: { "stock": 7 } });
db.products.updateOne({ "stock": { $lt: 7 } }, { $inc: { "stock": 5 } });
db.products.updateOne({ "stock": { $lt: 8 } }, { $inc: { "stock": 6 } });
db.products.updateOne({ "stock": { $lt: 9 } }, { $inc: { "stock": 7 } });
db.products.updateOne({ "stock": { $lt: 10 } }, { $inc: { "stock": 5 } });
db.products.updateOne({ "stock": { $lt: 11 } }, { $inc: { "stock": 6 } });
db.products.updateOne({ "stock": { $lt: 12 } }, { $inc: { "stock": 7 } });
db.products.updateOne({ "stock": { $lt: 13 } }, { $inc: { "stock": 5 } });
db.products.updateOne({ "stock": { $lt: 14 } }, { $inc: { "stock": 6 } });
db.products.updateOne({ "stock": { $lt: 5 } }, { $inc: { "stock": 7 } });
db.products.updateOne({ "stock": { $lt: 6 } }, { $inc: { "stock": 5 } });
db.products.updateOne({ "stock": { $lt: 7 } }, { $inc: { "stock": 6 } });
db.products.updateOne({ "stock": { $lt: 8 } }, { $inc: { "stock": 7 } });
db.products.updateOne({ "stock": { $lt: 9 } }, { $inc: { "stock": 5 } });
db.products.updateOne({ "stock": { $lt: 10 } }, { $inc: { "stock": 6 } });
db.products.updateOne({ "stock": { $lt: 11 } }, { $inc: { "stock": 7 } });
db.products.updateOne({ "stock": { $lt: 12 } }, { $inc: { "stock": 5 } });
db.products.updateOne({ "stock": { $lt: 13 } }, { $inc: { "stock": 6 } });