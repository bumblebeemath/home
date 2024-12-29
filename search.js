// Data for products
const products = [
    {name: "COASTAL CLOUDS DELTA 8 APPLE WATERMELON GUMMIES - 2CT", img: "p1.jpg", price: "$40.00"},
    {name: "COASTAL CLOUDS HHC PINEAPPLE GUMMIES - 2CT", img: "p2.jpg", price: "$40.00"},
    {name: "MUSHY MAGIC MUSHROOM VAPORIZER - 2200MG", img: "p3.jpg", price: "$57.00"},
    {name: "MUNCHIES LIL RIPPER ZAPPED HHC VAPORIZER - 2000MG", img: "p4.jpg", price: "$45.00"},
    {name: "EXTRAX DELTA 9 + THC-P VAPORIZER - 2000MG", img: "p5.jpg", price: "$40.00"},
    {name: "TYSON LCD 7500 NIC VAPE - FRUIT FLAVORS", img: "p6.jpg", price: "$40.00"},
    {name: "MUNCHIES DELTA 9 COCOA FUDGE CEREAL CRUNCHIES - 500MG", img: "p7.jpg", price: "$50.00"},
    {name: "MUNCHIES DELTA 9 CINNAMON BRULEE CEREAL CRUNCHIES - 500MG", img: "p8.jpg", price: "$50.00"},
    {name: "MUNCHIES DELTA 9 DOUBLE RAINBOW CEREAL CRUNCHIES - 500MG", img: "p9.jpg", price: "$50.00"},
    {name: "HALF BAKD PRIMO THC-P BLUE MILK CARTRIDGE - 1000MG", img: "p10.jpg", price: "$50.00"},
    {name: "SLUSH JUICE DELTA 8 + THC-P VAPORIZER - 4000MG", img: "p11.jpg", price: "$60.00"},
    {name: "PORTABLE TWO TONE CARB BONG - 5IN", img: "p12.jpg", price: "$40.00"},
    {name: "COOKIES HONEY BUN THC-A FLOWER - 1G", img: "p13.jpg", price: "$40.00"},
    {name: "COOKIES FISH SCALE THC-A FLOWER - 1G", img: "p14.jpg", price: "$40.00"},
    {name: "COOKIES LAUGHING GAS THC-A FLOWER - 1G", img: "p15.jpg", price: "$40.00"},
    {name: "SMAKD SNOW CAPS INDICA THC-A FLOWER - 7G", img: "p16.jpg", price: "$100.00"},
    {name: "GEEKD THC-A FLOWER - 2G", img: "p17.jpg", price: "$50.00"},
    {name: "HALF BAKD PURI FRYD WHITE TRUFFLE THC-A FLOWER - 1G", img: "p18.jpg", price: "$40.00"},
    {name: "DOZO EXOTIC GARRY PAYTON THC-A FLOWER - 4.2G", img: "p19.jpg", price: "$70.00"},
    {name: "COOKIES OCEAN BEACH THC-A FLOWER - 1G", img: "p20.jpg", price: "$40.00"},
    {name: "PS BLACK MARKET VAPORIZER STARTER KIT", img: "p21.jpg", price: "$60.00"},
    {name: "ZOTICA GREEN HULK GRAPE APE THC-A VAPORIZER - 6000MG", img: "p22.jpg", price: "$70"},
    {name: "DOZO THC LIQUID DIAMONDS VAPORIZER - 5000MG", img: "p23.jpg", price: "$90.00"},
    {name: "DOZO DIAMOND SAUCE LIVE ROSIN THC-A VAPORIZER - 5000MG", img: "p24.jpg", price: "$80.00"},
    {name: "PRESSURE UZI BLEND VAPORIZER - 3500MG", img: "p25.jpg", price: "$50.00"},
    {name: "PRESSURE LIVE RESIN THC-A VAPORIZER - 6000MG", img: "p26.jpg", price: "$85.00"},
    {name: "TRE HOUSE THC-A LIVE ROSIN VAPORIZER - 3500MG", img: "p27.jpg", price: "$60.00"},
    {name: "HALF BAKD PRIMO THC-P VAPORIZER - 2000MG", img: "p28.jpg", price: "$120.00"},
    {name: "BUGATTI B5 THC-A BLEND VAPORIZER - 5000MG", img: "p29.jpg", price: "$80.00"},
    {name: "CAKE DELTA 10 VAPORIZER - 3000MG", img: "p30.jpg", price: "$60.00"},
    {name: "STNR TO THE MOON THC-A VAPORIZER - 3000MG", img: "p31.jpg", price: "$91.00"},
    {name: "DELTA PEX LIQUID DIAMONDS THC-A BLEND VAPORIZER + THC-A EDIBLES", img: "p32.jpg", price: "$100.00"},
    {name: "LOOSE CHANGE THC-P VAPORIZER - 1000MG", img: "p33.jpg", price: "$60.00"},
    {name: "LITTY THC-A LIQUID DIAMONDS VAPORIZER - 5000MG", img: "p34.jpg", price: "$80.00"},
    {name: "DIAMOND HEIGHTS THC-A VAPORIZER - 3000MG", img: "p35.jpg", price: "$70.00"},
    {name: "DONT TRIP TRIPPY DIAMONDS SHROOMBACCAS BREAKFAST VAPORIZER - 5000MG", img: "p36.jpg", price: "$90.00"},
    {name: "DISCO MAGIC MUSHROOM GRAVITY GUMMIES - 2000MG", img: "p37.jpg", price: "GRASS PASS ONLY"},
    {name: "TRE HOUSE MAGIC MUSHROOM BLUE RASPBERRY GUMMIES", img: "p38.jpg", price: "GRASS PASS ONLY"},
    {name: "DREAM DOSE STRAWBERRY STARDUST MUSHROOM GUMMIES", img: "p39.jpg", price: "$50.00"},
    {name: "DREAMER MAGIC MUSHROOM ASSORTED FLAVOR GUMMIES - 300MG (6CT)", img: "p40.jpg", price: "Grass Pass GOLD"},
    {name: "DELTA MUNCHIES THC-A DIAMOND SAUCE - 1000MG", img: "p41.jpg", price: "$90.00"},
    {name: "TRE HOUSE DELTA 8 + 9 BUSSIN BERRY SYRUP - 1000MG", img: "p42.jpg", price: "Grass Pass PLATINUM"},
    {name: "COOKIES ROSE APPLE THC-A DIAMOND WAX DAB - 1G", img: "p43.jpg", price: "$90.00"},
    {name: "KOI CBD MENTHOL ROLL-ON GEL - 500MG", img: "p44.jpg", price: "$70.00"},
    {name: "UNIVERSITY THC-A LIVE RESIN BATTER - 2G", img: "p45.jpg", price: "Grass Pass"},
    {name: "MELLOW FELLOW THC-A BUDDER - 2000MG", img: "p46.jpg", price: "$90.00"},
    {name: "SMAKD THC-A LIVE ROSIN DAB - 2G", img: "p47.jpg", price: "$70.00"},
    {name: "za", img: "p.jpg", price: "$"},
    {name: "za", img: "p.jpg", price: "$"},
    {name: "za", img: "p.jpg", price: "$"},
    {name: "za", img: "p.jpg", price: "$"},
    {name: "za", img: "p.jpg", price: "$"},
    {name: "za", img: "p.jpg", price: "$"},
    {name: "za", img: "p.jpg", price: "$"},
    {name: "za", img: "p.jpg", price: "$"},
    {name: "za", img: "p.jpg", price: "$"},
    {name: "za", img: "p.jpg", price: "$"},
    {name: "za", img: "p.jpg", price: "$"},
    {name: "za", img: "p.jpg", price: "$"},
    {name: "za", img: "p.jpg", price: "$"},
    {name: "za", img: "p.jpg", price: "$"},
    {name: "za", img: "p.jpg", price: "$"},
    {name: "za", img: "p.jpg", price: "$"},
    {name: "za", img: "p.jpg", price: "$"},
    {name: "za", img: "p.jpg", price: "$"},
    

    {name: "za za", img: "p7.jpg", price: "smoking"}
];

// Function to handle adding products to the cart
function addToCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (!cart.includes(productName)) {
        cart.push(productName);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

// Function to filter products based on the search input
function filterProducts() {
    const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
    const productListContainer = document.querySelector('.product-list');
    const noResultsMessage = document.getElementById('no-results-message');
    productListContainer.innerHTML = ""; // Clear current product list

    if (searchInput === "") {
        return; // Don't display anything if search input is empty
    }

    // Filter products based on the search input (case-insensitive)
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchInput);
    });

    // Display filtered products or show a "no results" message
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.setAttribute('data-name', product.name);

            productElement.innerHTML = `
                <img src="${product.img}" alt="${product.name}" class="product-img">
                <h2>${product.name}</h2>
                <p>${product.price}</p>
                <button class="add-to-cart" onclick="addToCart('${product.name}')">Add to cart</button>
            `;
            productListContainer.appendChild(productElement);
        });
        noResultsMessage.style.display = "none"; // Hide "no results" message if there are matches
    } else {
        noResultsMessage.style.display = "block"; // Show "no results" message if no matches
    }
}
