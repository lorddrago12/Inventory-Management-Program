# 📦 Inventory Management Program

> A simple, lightweight JavaScript inventory system to manage your products with ease — no dependencies required.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-None-blue?style=for-the-badge)

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [API Reference](#-api-reference)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🧾 About

**Inventory Management Program** is a clean, minimal JavaScript utility for tracking product stock. It handles duplicate detection, case-insensitive lookups, and automatic cleanup — all with straightforward console feedback so you always know what's happening.

---

## ✨ Features

- ➕ **Add products** — Adds new items or updates quantity if they already exist
- ➖ **Remove products** — Reduces stock safely with guard checks
- 🔍 **Case-insensitive search** — `"Apple"`, `"APPLE"`, and `"apple"` all refer to the same product
- 🧹 **Auto-cleanup** — Products with zero quantity are removed from inventory automatically
- 📢 **Console logging** — Clear feedback messages for every operation
- 🚫 **Zero dependencies** — Pure vanilla JavaScript, no installs needed

---

## 🚀 Getting Started

### Prerequisites

All you need is a JavaScript runtime:
- [Node.js](https://nodejs.org/) (v14+) for running locally, **or**
- Any modern browser console

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lorddrago12/Inventory-Management-Program.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd Inventory-Management-Program
   ```

3. **Run the program**
   ```bash
   node index.js
   ```

That's it — no `npm install` needed! 🎉

---

## 💻 Usage

```js
// Add products
addProduct({ name: "Apple", quantity: 10 });
// → "apple added to inventory"

addProduct({ name: "apple", quantity: 5 });
// → "apple quantity updated"  (now 15 total)

// Remove products
removeProduct("Apple", 4);
// → "Remaining apple pieces: 11"

removeProduct("Apple", 100);
// → "Not enough apple available, remaining pieces: 11"

removeProduct("Mango", 1);
// → "mango not found"

// Remove all remaining stock — product gets deleted automatically
removeProduct("Apple", 11);
// → "Remaining apple pieces: 0"  ✅ entry removed from array
```

---

## 📖 API Reference

### `addProduct(product)`

Adds a product to inventory. If it already exists, updates the quantity instead.

| Parameter | Type | Description |
|-----------|------|-------------|
| `product` | `Object` | `{ name: string, quantity: number }` |

**Returns:** `true`

---

### `removeProduct(name, quantity)`

Removes a given quantity of a product. Fails gracefully if the product doesn't exist or stock is insufficient.

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | `string` | Name of the product |
| `quantity` | `number` | Units to remove |

**Returns:** `true` on success, `false` on failure

---

### `findProductIndex(productName)` *(internal)*

Finds the index of a product in the inventory array using case-insensitive matching.

**Returns:** `number` — index of the product, or `-1` if not found

---

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how you can help:

1. **Fork** the repository
2. **Create** a new branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make** your changes and commit them
   ```bash
   git commit -m "feat: add your feature description"
   ```
4. **Push** to your branch
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open** a Pull Request 🚀

---

### 💡 Ideas for Contributions

- [ ] Add a `listInventory()` function to display all products
- [ ] Add input validation (e.g. negative quantities, empty names)
- [ ] Add support for product categories or prices
- [ ] Write unit tests (Jest / Vitest)
- [ ] Add persistent storage (JSON file or localStorage)

---

### 🐛 Reporting Bugs

Found a bug? Please [open an issue](https://github.com/your-username/inventory-management/issues) with:
- A clear description of the problem
- Steps to reproduce it
- Expected vs actual behavior

---

<p align="center">Made with ❤️ — feel free to ⭐ this repo if you found it useful!</p>
