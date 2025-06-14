const products = [
  { name: "Phone", category: "electronics", price: 499, rating: 4.5 },
  { name: "Shirt", category: "clothing", price: 29, rating: 4.1 },
  { name: "Laptop", category: "electronics", price: 899, rating: 4.8 },
  { name: "Jeans", category: "clothing", price: 49, rating: 4.2 }
];

function renderProducts(list) {
  const ul = document.getElementById("productList");
  ul.innerHTML = "";
  list.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.name} - $${p.price} - Rating: ${p.rating}`;
    ul.appendChild(li);
  });
}

function applyFilters() {
  let filtered = [...products];
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortFilter").value;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filtered);
}

document.getElementById("categoryFilter").onchange = applyFilters;
document.getElementById("sortFilter").onchange = applyFilters;

renderProducts(products);
