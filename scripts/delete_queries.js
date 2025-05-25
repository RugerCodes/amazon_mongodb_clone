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