# 📦 Amazon MongoDB Clone (NoSQL Final Project)

Welcome to the official repository for **Amazon MongoDB Clone**, a NoSQL database project built using MongoDB and modeled after an Amazon-style eCommerce backend. This project was completed as a final deliverable for a university NoSQL course and demonstrates full CRUD (Create, Read, Update, Delete) operations across a realistic set of collections.

---

## 📁 Project Structure

```
amazon_mongodb_clone/
├── data/                        # JSON data for 7 collections
├── scripts/                     # Query scripts for all CRUD operations
│   ├── insert.js
│   ├── find_queries.js
│   ├── update_queries.js
│   ├── delete_queries.js
│   ├── MongoDB_Master_Queries.js
├── output/
├── README.md
```

---

## 🗃️ Collections

This project contains the following collections within the `amazon` database:

- `users`
- `products`
- `orders`
- `reviews`
- `wishlists`
- `coupons`
- `categories`

---

## 🔨 CRUD Implementation

### ✅ Create

- All 7 collections populated with realistic mock data (~200+ documents)
- `insert.js` includes full `insertMany()` logic for reproducibility

### 🔍 Read

- `find_queries.js` contains 50 diverse, real-world MongoDB find queries across all collections

### 🔧 Update

- `update_queries.js` contains 50 unique and useful `updateOne`/`updateMany` queries

### 🗑️ Delete

- `delete_queries.js` contains 50 unique `deleteOne`/`deleteMany` queries

### 📜 Master File

- `MongoDB_Master_Queries.js` contains all 150 primary queries in a grouped and readable format

---

## 🧪 Testing

### 🧭 MongoDB Compass:

- Data imported via Compass
- Queries were tested interactively in each collection's document view

### 💻 mongosh:

To test all queries and log the output to a file without modifying the original database:

```bash
mongosh "mongodb+srv://***************:**********@cluster0.******.mongodb.net/amazon"

---

## 🎯 Objectives Met

- ✅ Demonstrated full NoSQL schema design
- ✅ Inserted 200+ records across 7 collections
- ✅ Wrote and tested 50 `find`, 50 `update`, 50 `delete` queries Using Terminal and MongoDB Compass
- ✅ Packaged for GitHub

---

## 🙌 Author

**Dimitri D.** (GitHub: [@RugerCodes](https://github.com/RugerCodes))

---

## 📄 License

For academic purposes only.
```
