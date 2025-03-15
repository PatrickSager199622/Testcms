        // Dynamische Produktdaten
        const products = [
            {
                name: "kaltbelag",
                price: "9.99 €",
                expiry: "2024-12-01",
                image: "https://via.placeholder.com/150",
                link: "/products/product_21053.html"
            },
            {
                name: "Produkt 2",
                price: "19.99 €",
                expiry: "2024-12-02",
                image: "https://via.placeholder.com/150",
                link: "#produkt2"
            },
            {
                name: "Produkt 3",
                price: "29.99 €",
                expiry: "2024-12-03",
                image: "https://via.placeholder.com/150",
                link: "#produkt3"
            },
            {
                name: "Produkt 4",
                price: "39.99 €",
                expiry: "2024-12-04",
                image: "https://via.placeholder.com/150",
                link: "#produkt4"
            },
            {
              name: "Produkt 5",
              price: "39.99 €",
              expiry: "2024-12-04",
              image: "https://via.placeholder.com/150",
              link: "#produkt5"
            },
            {
              name: "Produkt 6",
              price: "39.99 €",
              expiry: "2024-12-04",
              image: "https://via.placeholder.com/150",
              link: "#produkt6"
            },
            {
              name: "Produkt 7",
              price: "39.99 €",
              expiry: "2024-12-04",
              image: "https://via.placeholder.com/150",
              link: "#produkt7"
            },
            {
              name: "Produkt 8",
              price: "39.99 €",
              expiry: "2024-12-04",
              image: "https://via.placeholder.com/150",
              link: "#produkt8"
            },
            {
              name: "Produkt 9",
              price: "39.99 €",
              expiry: "2024-12-04",
              image: "https://via.placeholder.com/150",
              link: "#produkt9"
            },
            {
              name: "Produkt 10",
              price: "39.99 €",
              expiry: "2024-12-04",
              image: "https://via.placeholder.com/150",
              link: "#produkt10"
            },
            {
                name: "Produkt 11",
                price: "49.99 €",
                expiry: "2024-12-05",
                image: "https://via.placeholder.com/150",
                link: "#produkt11"
            }
        ];
  
        function renderProductList(filter = "") {
            const resultsContainer = document.querySelector("#searchResults .product-container");
            resultsContainer.innerHTML = ""; // Vorherige Ergebnisse leeren
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(filter.toLowerCase())
            );
  
            filteredProducts.forEach(product => {
                const productDiv = document.createElement("a"); // Produkt wird zum Link
                productDiv.className = "product";
                productDiv.href = product.link;
  
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <strong>${product.name}</strong>
                        <span>Preis: ${product.price}</span>
                        <span>Ablaufdatum: ${product.expiry}</span>
                    </div>`;
                resultsContainer.appendChild(productDiv);
            });
  
            if (filteredProducts.length === 0) {
                resultsContainer.innerHTML = "<div>Keine Ergebnisse gefunden</div>";
            }
  
            document.getElementById("searchResults").style.display = "block"; // Suchergebnisse anzeigen
        }
  
        // Event Listener für den Suchbalken
        document.getElementById("searchInput").addEventListener("input", (event) => {
            renderProductList(event.target.value); // Filter anwenden
        });
  
        // Beim Klicken auf das Suchfeld alle Produkte anzeigen
        document.getElementById("searchInput").addEventListener("focus", () => {
            renderProductList(); // Alle Produkte anzeigen
        });
  
        // Beim Klicken außerhalb der Suche das Ergebnis schließen
        document.addEventListener("click", function(event) {
            const searchInput = document.getElementById("searchInput");
            const resultsContainer = document.getElementById("searchResults");
            const closeArea = document.querySelector(".logo");
  
            // Schließt die Suchergebnisse, wenn auf `logo` geklickt wird
            if (closeArea.contains(event.target)) {
                resultsContainer.style.display = "none";
            } else if (!searchInput.contains(event.target) && !resultsContainer.contains(event.target)) {
                resultsContainer.style.display = "none";
            }
        });