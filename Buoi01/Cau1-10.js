// ===========================
// CÂU 1: Khai báo Constructor Function Product
// ===========================
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

console.log("=== CÂU 1: Constructor Function Product đã được khai báo ===\n");

// ===========================
// CÂU 2: Tạo mảng products gồm ít nhất 5 sản phẩm, thuộc ít nhất 2 danh mục
// ===========================
const products = [
    new Product(1, "iPhone 15", 999, 10, "Electronics", true),
    new Product(2, "MacBook Pro", 2499, 5, "Electronics", true),
    new Product(3, "AirPods Pro", 249, 0, "Accessories", false),
    new Product(4, "Magic Mouse", 79, 15, "Accessories", true),
    new Product(5, "iPad Air", 599, 8, "Electronics", true),
    new Product(6, "Apple Watch", 399, 12, "Accessories", true),
    new Product(7, "USB-C Cable", 19, 0, "Accessories", true)
];

console.log("=== CÂU 2: Mảng products ===");
console.log(products);
console.log("\n");

// ===========================
// CÂU 3: Tạo mảng mới chỉ chứa name và price của mỗi sản phẩm
// ===========================
const nameAndPrice = products.map(product => ({
    name: product.name,
    price: product.price
}));

console.log("=== CÂU 3: Mảng chỉ chứa name và price ===");
console.log(nameAndPrice);
console.log("\n");

// ===========================
// CÂU 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
// ===========================
const inStockProducts = products.filter(product => product.quantity > 0);

console.log("=== CÂU 4: Sản phẩm còn hàng trong kho ===");
console.log(inStockProducts);
console.log("\n");

// ===========================
// CÂU 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30 hay không
// ===========================
const hasExpensiveProduct = products.some(product => product.price > 30);

console.log("=== CÂU 5: Có sản phẩm giá trên 30? ===");
console.log(hasExpensiveProduct ? "Có" : "Không");
console.log("\n");

// ===========================
// CÂU 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán hay không
// ===========================
const accessoriesProducts = products.filter(product => product.category === "Accessories");
const allAccessoriesAvailable = accessoriesProducts.every(product => product.isAvailable === true);

console.log("=== CÂU 6: Tất cả sản phẩm Accessories có đang được bán? ===");
console.log(allAccessoriesAvailable ? "Có" : "Không");
console.log(`(Có ${accessoriesProducts.length} sản phẩm Accessories)`);
console.log("\n");

// ===========================
// CÂU 7: Tính tổng giá trị kho hàng (price × quantity)
// ===========================
const totalInventoryValue = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);

console.log("=== CÂU 7: Tổng giá trị kho hàng ===");
console.log(`$${totalInventoryValue.toLocaleString()}`);
console.log("\n");

// ===========================
// CÂU 8: Dùng for...of để duyệt mảng products và in ra:
// Tên sản phẩm - Danh mục - Trạng thái
// ===========================
console.log("=== CÂU 8: Duyệt mảng bằng for...of ===");
for (const product of products) {
    const status = product.isAvailable ? "Có sẵn" : "Không có sẵn";
    console.log(`${product.name} - ${product.category} - ${status}`);
}
console.log("\n");

// ===========================
// CÂU 9: Dùng for...in để:
// - In ra tên thuộc tính
// - In ra giá trị tương ứng
// ===========================
console.log("=== CÂU 9: Duyệt thuộc tính bằng for...in (sản phẩm đầu tiên) ===");
console.log("--- Tên các thuộc tính: ---");
for (const key in products[0]) {
    console.log(key);
}

console.log("\n--- Giá trị tương ứng: ---");
for (const key in products[0]) {
    console.log(`${key}: ${products[0][key]}`);
}
console.log("\n");

// ===========================
// CÂU 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
// ===========================
const availableAndInStock = products
    .filter(product => product.isAvailable && product.quantity > 0)
    .map(product => product.name);

console.log("=== CÂU 10: Danh sách tên sản phẩm đang bán và còn hàng ===");
console.log(availableAndInStock);
console.log("\n");

// ===========================
// TỔNG KẾT
// ===========================
console.log("=== HOÀN THÀNH TẤT CẢ 10 CÂU ===");
