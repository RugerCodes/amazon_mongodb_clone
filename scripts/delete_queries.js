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