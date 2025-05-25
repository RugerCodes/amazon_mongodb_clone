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