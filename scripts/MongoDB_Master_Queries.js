// === FIND QUERIES ===
// === USERS ===
db.users.find({ "name": { $regex: /^J/i } });
db.users.find({ "email": { $regex: /@gmail\.com$/ } });
db.users.find({ "address.city": "Brooklyn" });
db.users.find({ "address.state": { $in: ["NY", "CA"] } });
db.users.find({ "created_at": { $exists: true } });
// === PRODUCTS ===
db.products.find({ "price": { $lt: 50 } });
db.products.find({ "stock": { $gt: 25 } });
db.products.find({ "on_sale": true });
db.products.find({ "description": { $regex: /wireless/i } });
db.products.find({ "category_id": { $exists: true } });
// === ORDERS ===
db.orders.find({ "status": "Delivered" });
db.orders.find({ "total": { $gte: 100 } });
db.orders.find({ "items.product_id": { $exists: true } });
db.orders.find({ "shipping_address.state": "CA" });
db.orders.find({ "created_at": { $gte: "2023-01-01" } });
// === REVIEWS ===
db.reviews.find({ "rating": 5 });
db.reviews.find({ "title": { $regex: /great/i } });
db.reviews.find({ "comment": { $regex: /fast shipping/i } });
db.reviews.find({ "product_id": { $exists: true } });
db.reviews.find({ "user_id": { $exists: true } });
// === WISHLISTS ===
db.wishlists.find({ "priority": "high" });
db.wishlists.find({ "pinned": true });
db.wishlists.find({ "added_at": { $exists: true } });
db.wishlists.find({ "product_id": { $exists: true } });
db.wishlists.find({ "user_id": { $exists: true } });
// === COUPONS ===
db.coupons.find({ "discount": { $gt: 10 } });
db.coupons.find({ "type": "percentage" });
db.coupons.find({ "stackable": true });
db.coupons.find({ "expiry_date": { $exists: true } });
db.coupons.find({ "minimum_order_amount": { $lte: 100 } });
// === CATEGORIES ===
db.categories.find({ "popular": true });
db.categories.find({ "active": true });
db.categories.find({ "name": { $regex: /^E/i } });
db.categories.find({ "_id": { $exists: true } });
db.categories.find({ "popular": { $in: [true, false] } });

// === UPDATE QUERIES ===
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

// === DELEETE QUERIES ===
// === USERS ===
db.users.deleteOne({ "address.city": "Queens" });
db.users.deleteOne({ "phone": "+1-800-555-0000" });
// === PRODUCTS ===
db.products.deleteOne({ "on_sale": false });
db.products.deleteOne({ "price": { $lt: 15 } });
// === ORDERS ===
db.orders.deleteOne({ "status": "Cancelled" });
db.orders.deleteOne({ "total": { $lt: 10 } });
// === REVIEWS ===
db.reviews.deleteOne({ "rating": 1 });
db.reviews.deleteOne({ "title": { $regex: /poor/i } });
// === WISHLISTS ===
db.wishlists.deleteOne({ "priority": "low" });
db.wishlists.deleteOne({ "pinned": false });
// === COUPONS ===
db.coupons.deleteOne({ "discount": { $lt: 5 } });
db.coupons.deleteOne({ "stackable": false });
// === CATEGORIES ===
db.categories.deleteOne({ "active": false });
db.categories.deleteOne({ "popular": false });
db.orders.deleteOne({ "total": { $lt: 11 } });
db.orders.deleteOne({ "total": { $lt: 23 } });
db.orders.deleteOne({ "total": { $lt: 37 } });
db.orders.deleteOne({ "total": { $lt: 21 } });
db.orders.deleteOne({ "total": { $lt: 7 } });
db.orders.deleteOne({ "total": { $lt: 17 } });
db.orders.deleteOne({ "total": { $lt: 49 } });
db.orders.deleteOne({ "total": { $lt: 12 } });
db.orders.deleteOne({ "total": { $lt: 22 } });
db.orders.deleteOne({ "total": { $lt: 48 } });
db.orders.deleteOne({ "total": { $lt: 29 } });
db.orders.deleteOne({ "total": { $lt: 25 } });
db.orders.deleteOne({ "total": { $lt: 24 } });
db.orders.deleteOne({ "total": { $lt: 11 } });
db.orders.deleteOne({ "total": { $lt: 30 } });
db.orders.deleteOne({ "total": { $lt: 37 } });
db.orders.deleteOne({ "total": { $lt: 47 } });
db.orders.deleteOne({ "total": { $lt: 15 } });
db.orders.deleteOne({ "total": { $lt: 31 } });
db.orders.deleteOne({ "total": { $lt: 8 } });
db.orders.deleteOne({ "total": { $lt: 22 } });
db.orders.deleteOne({ "total": { $lt: 25 } });
db.orders.deleteOne({ "total": { $lt: 25 } });
db.orders.deleteOne({ "total": { $lt: 22 } });
db.orders.deleteOne({ "total": { $lt: 32 } });
db.orders.deleteOne({ "total": { $lt: 11 } });
db.orders.deleteOne({ "total": { $lt: 35 } });
db.orders.deleteOne({ "total": { $lt: 36 } });
db.orders.deleteOne({ "total": { $lt: 20 } });