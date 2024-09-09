const productData = [
    {
        "id": 1,
        "name": "Vegetable Seeds",
        "description": "Powerful laptop for work and entertainment",
        "price": 999,
        "category": "Seeds",
        "image": "https://images.unsplash.com/photo-1642769359258-40b4378a7de9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 2,
        "name": "Saplings ",
        "description": "High-performance smartphone with advanced features",
        "price":  99,
        "category": "Saplings",
        "image": "https://images.unsplash.com/photo-1529123276648-af6cfff88c20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 3,
        "name": "Manure & Fertilizers",
        "description": "Comfortable cotton t-shirt for everyday wear",
        "price": 1.99,
        "category": "Manure & Fertilizers",
        "image": "https://media.geeksforgeeks.org/wp-content/uploads/20220926163013/Fertilizers.png"
    },
    {
        "id": 4,
        "name": "Pots & Planters",
        "description": "Lightweight running shoes for optimal performance",
        "price":  9.99,
        "category": "Pots & Planters",
        "image": "https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 5,
        "name": "Gardening Tools ",
        "description": "Premium over-ear headphones with noise cancellation",
        "price":  9,
        "category": "Gardening Tools",
        "image": "https://images.unsplash.com/photo-1661712663315-d851d40bcf07?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 6,
        "name": "Watering Equipment",
        "description": "Stylish watch with leather strap and quartz movement",
        "price": 10,
        "category": "Watering Equipment",
        "image": "https://dbgarden.pl/wp-content/uploads/2022/03/nawadnianie_ogrodu.jpg"
    },
    {
        "id": 7,
        "name": "Soil & Compost",
        "description": "Durable backpack with multiple compartments",
        "price": 59,
        "category": "Soil & Compost",
        "image": "https://images.unsplash.com/photo-1688633767821-3469dc5076bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 8,
        "name": "Pesticides & Herbicides",
        "description": "Polarized sunglasses for UV protection",
        "price": 39,
        "category": "Pesticides & Herbicides",
        "image": "https://i.pinimg.com/564x/9f/77/c7/9f77c73c0eabed3b640579d12dc9370b.jpg"
    },
    {
        "id": 9,
        "name": "Liquid fertilizers",
        "description": "Adjustable LED desk lamp for studying and working",
        "price": 29,
        "category": "Plant Nutrients",
        "image": "https://i.pinimg.com/564x/ab/6c/39/ab6c39eaadfa847943bf894be3708c79.jpg"
    },
    {
        "id": 10,
        "name": "Stakes",
        "description": "Ergonomic wireless mouse with customizable buttons",
        "price": 39,
        "category": "Plant Support Systems",
        "image": "https://images.unsplash.com/10/mason-jars.jpg?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 11,
        "name": "Organic Pesticides",
        "description": "Programmable coffee maker for brewing delicious coffee",
        "price": 7,
        "category": "Organic Pesticides ",
        "image": "https://i.pinimg.com/564x/30/7a/58/307a581e94b22b09792e1dc9a5f00e45.jpg"
    },
    {
        "id": 12,
        "name": "Biopesticides",
        "description": "High-quality yoga mat for comfortable practice",
        "price": 29,
        "category": "Organic Pesticides ",
        "image": "https://i.pinimg.com/564x/e0/26/4f/e0264fed5e278772ead6ebf28cc66304.jpg"
    },
    {
        "id": 13,
        "name": "Clay",
        "description": "Ergonomic gaming chair with lumbar support",
        "price": 199,
        "category": "Pots & Planters",
        "image": "https://i.pinimg.com/564x/15/63/54/15635420054158515ed7e72425bafa4e.jpg"
    },
    {
        "id": 14,
        "name": "Sprinklers",
        "description": "Compact digital camera with high-resolution sensor",
        "price": 299,
        "category": "Irrigation Systems",
        "image": "https://i.pinimg.com/564x/ef/40/4f/ef404f0bb8749904fb31c0ad663b3d85.jpg"
    },
    {
        "id": 15,
        "name": "Shade cloths",
        "description": "Portable Bluetooth speaker with powerful sound",
        "price": 49,
        "category": "Greenhouses & Shade Nets",
        "image": "https://i.pinimg.com/564x/1b/46/82/1b4682605bc342b6bedec874491b7ab6.jpg"
    },
    {
        "id": 16,
        "name": "Neem oil",
        "description": "Waterproof hiking boots for outdoor adventures",
        "price": 19,
        "category": "Organic Pesticides",
        "image": "https://i.pinimg.com/564x/86/28/75/862875e97873ea79b6bad1f2f0397157.jpg"
    },
    {
        "id": 17,
        "name": "Gardening Books & Guides",
        "description": "Insulated winter jacket for cold weather",
        "price": 149,
        "category": "Gardening Books & Guides",
        "image": "https://images.unsplash.com/photo-1607473129014-0afb7ed09c3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 18,
        "name": "Slow-release granules",
        "description": "True wireless earbuds with long battery life",
        "price": 89,
        "category": "Plant Nutrients",
        "image": "https://i.pinimg.com/564x/08/4f/4b/084f4b9978b4e43987e8a8fac129202e.jpg"
    },
    {
        "id": 19,
        "name": "Plant care guides",
        "description": "Lightweight cycling helmet for safety and comfort",
        "price": 59,
        "category": "Gardening Books & Guides",
        "image": "https://i.pinimg.com/564x/bc/b8/0e/bcb80eecfa67ddf8b80d1ed7e39030b7.jpg"
    },
    {
        "id": 20,
        "name": "Garden soil",
        "description": "Compact portable charger for charging devices on the go",
        "price": 29,
        "category": "Soil & Compost",
        "image": "https://i.pinimg.com/564x/59/e4/1c/59e41c652dd24ef1cf09d9bed70695b9.jpg"
    },
    // {
    //     "id": 21,
    //     "name": "Wireless Keyboard",
    //     "description": "Slim wireless keyboard with quiet keys",
    //     "price": 49,
    //     "category": "Electronics",
    //     "image": "https://m.media-amazon.com/images/I/71gR-IwIv-L.jpg"
    // },
    // {
    //     "id": 22,
    //     "name": "Sneakers",
    //     "description": "Stylish sneakers with cushioned sole",
    //     "price": 59,
    //     "category": "Footwear",
    //     "image": "https://m.media-amazon.com/images/I/71I2QrobMRS._AC_UY1000_.jpg"
    // },
    // {
    //     "id": 23,
    //     "name": "Smartwatch",
    //     "description": "Feature-rich smartwatch with heart rate monitor",
    //     "price": 179,
    //     "category": "Electronics",
    //     "image": "https://www.cnet.com/a/img/resize/770007077c38361ca13ef0b0aa4c208f88fa2053/hub/2023/09/20/9e9b8e2b-04ee-4087-b819-c99ec8bbc980/apple-watch-ultra-2-7.jpg?auto=webp&fit=crop&height=1200&width=1200"
    // },
    // {
    //     "id": 24,
    //     "name": "Leather Wallet",
    //     "description": "Genuine leather wallet with multiple card slots",
    //     "price": 39,
    //     "category": "Accessories",
    //     "image": "https://5.imimg.com/data5/OF/GH/MY-7610375/handmade-men-s-short-leather-wallet.jpg"
    // },
    // {
    //     "id": 25,
    //     "name": "Wireless Headphones",
    //     "description": "Comfortable wireless headphones with long battery life",
    //     "price": 129,
    //     "category": "Electronics",
    //     "image": "https://m.media-amazon.com/images/I/41JACWT-wWL._AC_UF1000,1000_QL80_.jpg"
    // },
    // {
    //     "id": 26,
    //     "name": "Running Shorts",
    //     "description": "Lightweight running shorts for performance and comfort",
    //     "price": 29,
    //     "category": "Clothing",
    //     "image": "https://m.media-amazon.com/images/I/61Li8F17jKL._AC_UY1100_.jpg"
    // },
    // {
    //     "id": 27,
    //     "name": "Travel Backpack",
    //     "description": "Versatile travel backpack with anti-theft features",
    //     "price": 89,
    //     "category": "Accessories",
    //     "image": "https://m.media-amazon.com/images/I/61ZJYAj3nHL._AC_UY1100_.jpg"
    // },
    // {
    //     "id": 28,
    //     "name": "Stainless Steel Water Bottle",
    //     "description": "Durable stainless steel water bottle for hydration on the go",
    //     "price": 19,
    //     "category": "Fitness & Sports",
    //     "image": "https://www.bigbasket.com/media/uploads/p/xxl/40300041-4_1-bb-home-frost-stainless-steel-water-bottle-with-steel-cap-metallic-pink.jpg"
    // },
    // {
    //     "id": 29,
    //     "name": "Desktop Monitor",
    //     "description": "High-resolution desktop monitor for productivity",
    //     "price": 249,
    //     "category": "Electronics",
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIJqpJ8gAvalN8sGEk5j0MMCjrOUo_QWNsw&s"
    // },
    // {
    //     "id": 30,
    //     "name": "Bluetooth Headphones",
    //     "description": "Wireless Bluetooth headphones with deep bass",
    //     "price": 89,
    //     "category": "Electronics",
    //     "image": "https://m.media-amazon.com/images/I/516WC9VNHVL._AC_UF1000,1000_QL80_.jpg"
    // },
    // {
    //     "id": 31,
    //     "name": "Fitness Tracker",
    //     "description": "Fitness tracker with activity and sleep monitoring",
    //     "price": 99,
    //     "category": "Electronics",
    //     "image": "https://m.media-amazon.com/images/I/61Bugm3Wo+L.jpg"
    // },
    // {
    //     "id": 32,
    //     "name": "Electric Toothbrush",
    //     "description": "Rechargeable electric toothbrush with multiple modes",
    //     "price": 49,
    //     "category": "Personal Care",
    //     "image": "https://m.media-amazon.com/images/I/716A4lE041L._AC_UF1000,1000_QL80_.jpg"
    // },
    // {
    //     "id": 33,
    //     "name": "Suitcase",
    //     "description": "Lightweight suitcase with 360-degree spinner wheels",
    //     "price": 129,
    //     "category": "Accessories",
    //     "image": "https://assets.ajio.com/medias/sys_master/root/20230321/jDtq/6419baf4aeb26924e3e79c1c/-473Wx593H-465946368-purple-MODEL.jpg"
    // },
    // {
    //     "id": 34,
    //     "name": "Electric Kettle",
    //     "description": "Fast-boiling electric kettle with auto shut-off",
    //     "price": 29,
    //     "category": "Home Decor",
    //     "image": "https://images-cdn.ubuy.co.in/634114f86dc4e63f73489134-topwit-electric-kettle-hot-water-kettle.jpg"
    // },
    // {
    //     "id": 35,
    //     "name": "Office Chair",
    //     "description": "Ergonomic office chair with adjustable height",
    //     "price": 139,
    //     "category": "Home Decor",
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp2VB5SGltq7BcoWxp1IykElgcdnHSC5B7nw&s"
    // },
    // {
    //     "id": 36,
    //     "name": "Digital Watch",
    //     "description": "Digital watch with stopwatch and backlight",
    //     "price": 49,
    //     "category": "Accessories",
    //     "image": "https://m.media-amazon.com/images/I/71NZfNlllIL._AC_UY1000_.jpg"
    // },
    // {
    //     "id": 37,
    //     "name": "LED Flashlight",
    //     "description": "Bright LED flashlight with adjustable focus",
    //     "price": 19,
    //     "category": "Home Decor",
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQekME5MUMufpFqOZnc8Y9e7ZJexpcgcM2YeA&s"
    // },
    // {
    //     "id": 38,
    //     "name": "Mountain Bike",
    //     "description": "Durable mountain bike with suspension fork",
    //     "price": 399,
    //     "category": "Fitness & Sports",
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-0xR2s7hxS3otELhUejP4O0xsHpx5GTngA&s"
    // },
    // {
    //     "id": 39,
    //     "name": "4K Television",
    //     "description": "Ultra HD 4K television with smart features",
    //     "price": 499,
    //     "category": "Electronics",
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkvsVmXovKoFQP_E4zv7ePyREON3ZAsm2GA&s"
    // },
    // {
    //     "id": 40,
    //     "name": "Portable Blender",
    //     "description": "Compact portable blender for smoothies",
    //     "price": 34.99,
    //     "category": "Home Decor",
    //     "image": "https://m.media-amazon.com/images/I/71vR2A86DuL._AC_UF894,1000_QL80_.jpg"
    // },
    // {
    //     "id": 41,
    //     "name": "VR Headset",
    //     "description": "Virtual reality headset for immersive experiences",
    //     "price": 299,
    //     "category": "Electronics",
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFETiEJNSHsT27qy7TuZo2hpabcOoKP2-L_Q&s"
    // },
    // {
    //     "id": 42,
    //     "name": "Leather Boots",
    //     "description": "Stylish leather boots with durable sole",
    //     "price": 119,
    //     "category": "Footwear",
    //     "image": "https://assets.ajio.com/medias/sys_master/root/20230921/HdkP/650c2c32ddf7791519eeac1f/-473Wx593H-464890556-tan-MODEL.jpg"
    // },
    // {
    //     "id": 43,
    //     "name": "Electric Shaver",
    //     "description": "Rechargeable electric shaver with precision blades",
    //     "price": 59,
    //     "category": "Personal Care",
    //     "image": "https://images-cdn.ubuy.co.in/64b80498a0304351cb1b94c6-braun-series-3-310s-rechargeable-wet-dry.jpg"
    // },
    // {
    //     "id": 44,
    //     "name": "Camping Tent",
    //     "description": "Spacious camping tent for outdoor adventures",
    //     "price": 149,
    //     "category": "Fitness & Sports",
    //     "image": "https://rukminim2.flixcart.com/image/850/1000/kkbh8cw0/tent/o/a/e/4-person-tent-for-camping-waterproof-outdoor-tent-tent-house-original-imafzpagtyfftgvg.jpeg?q=90&crop=false"
    // },
    // {
    //     "id": 45,
    //     "name": "Bluetooth Keyboard",
    //     "description": "Portable Bluetooth keyboard for typing on the go",
    //     "price": 39,
    //     "category": "Electronics",
    //     "image": "https://m.media-amazon.com/images/I/71jtu-DdLYL.jpg"
    // },
    // {
    //     "id": 46,
    //     "name": "Wireless Charger",
    //     "description": "Fast wireless charger for Qi-enabled devices",
    //     "price": 29,
    //     "category": "Electronics",
    //     "image": "https://www.cnet.com/a/img/resize/941c469fbd36d1dca137fed325100179c2bc6dfa/hub/2023/02/28/9da2e9c7-d07d-45cb-89d1-18c7013249e5/anker-315-wireless-charger.png?auto=webp&fit=crop&height=576&width=768"
    // },
    // {
    //     "id": 47,
    //     "name": "Travel Mug",
    //     "description": "Insulated travel mug for hot and cold beverages",
    //     "price": 14.99,
    //     "category": "Home Decor",
    //     "image": "https://m.media-amazon.com/images/I/61O5eUqNZML._AC_UF894,1000_QL80_.jpg"
    // },
    // {
    //     "id": 48,
    //     "name": "Bluetooth Tracker",
    //     "description": "Compact Bluetooth tracker for finding lost items",
    //     "price": 24.99,
    //     "category": "Electronics",
    //     "image": "https://www.safewise.com/app/uploads/2021/02/Bluetooth-Trackers-Testing.jpg"
    // },
    // {
    //     "id": 49,
    //     "name": "Kitchen Scale",
    //     "description": "Digital kitchen scale for precise measurements",
    //     "price": 19,
    //     "category": "Home Decor",
    //     "image": "https://images.meesho.com/images/products/51871962/k5ony_512.webp"
    // },
    // {
    //     "id": 50,
    //     "name": "Electric Scooter",
    //     "description": "Foldable electric scooter for convenient commuting",
    //     "price": 299,
    //     "category": "Fitness & Sports",
    //     "image": "https://bd.gaadicdn.com/processedimages/ola-electric/s1-pro/source/s1-pro664af02c3f229.jpg"
    // },
    // {
    //     "id": 51,
    //     "name": "Ski Jacket",
    //     "description": "Waterproof ski jacket with thermal insulation",
    //     "price": 199,
    //     "category": "Clothing",
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXvvml9iLjlO0dXfh0VcgJOxizzT-T5hnF4Q&s"
    // },
    // {
    //     "id": 52,
    //     "name": "Electric Skillet",
    //     "description": "Non-stick electric skillet for versatile cooking",
    //     "price": 49,
    //     "category": "Home Decor",
    //     "image": "https://images-cdn.ubuy.co.in/665a50b562ea19066408dc1f-mainstays-12-round-nonstick-electric.jpg"
    // },
    // {
    //     "id": 53,
    //     "name": "Smart Light Bulb",
    //     "description": "Wi-Fi enabled smart light bulb with adjustable brightness",
    //     "price": 19,
    //     "category": "Electronics",
    //     "image": "https://images-cdn.ubuy.co.in/633b62280037f40d8b49b5cb-smart-light-bulb-wifi-light-bulb-color.jpg"
    // },
    // {
    //     "id": 54,
    //     "name": "Wireless Router",
    //     "description": "High-speed wireless router for reliable internet",
    //     "price": 89,
    //     "category": "Electronics",
    //     "image": "https://m.media-amazon.com/images/I/41kHxeOdw+L._AC_UF1000,1000_QL80_.jpg"
    // },
    // {
    //     "id": 55,
    //     "name": "Hair Dryer",
    //     "description": "Powerful hair dryer with multiple heat settings",
    //     "price": 29,
    //     "category": "Personal Care",
    //     "image": "https://source.unsplash.com/random/400x400?hair-dryer"
    // },
    // {
    //     "id": 56,
    //     "name": "Laptop Stand",
    //     "description": "Adjustable laptop stand for ergonomic setup",
    //     "price": 34.99,
    //     "category": "Electronics",
    //     "image": "https://source.unsplash.com/random/400x400?laptop-stand"
    // },
    // {
    //     "id": 57,
    //     "name": "Cordless Vacuum",
    //     "description": "Lightweight cordless vacuum for easy cleaning",
    //     "price": 149,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/random/400x400?cordless-vacuum"
    // },
    // {
    //     "id": 58,
    //     "name": "Rain Jacket",
    //     "description": "Waterproof rain jacket with breathable fabric",
    //     "price": 89.99,
    //     "category": "Clothing",
    //     "image": "https://source.unsplash.com/random/400x400?rain-jacket"
    // },
    // {
    //     "id": 59,
    //     "name": "Soundbar",
    //     "description": "High-quality soundbar for enhanced audio experience",
    //     "price": 199.99,
    //     "category": "Electronics",
    //     "image": "https://source.unsplash.com/random/400x400?soundbar"
    // },
    // {
    //     "id": 60,
    //     "name": "Garden Hose",
    //     "description": "Flexible garden hose with adjustable nozzle",
    //     "price": 29.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/random/400x400?garden-hose"
    // },
    // {
    //     "id": 61,
    //     "name": "Smart Thermostat",
    //     "description": "Energy-saving smart thermostat with remote control",
    //     "price": 149.99,
    //     "category": "Electronics",
    //     "image": "https://source.unsplash.com/random/400x400?smart-thermostat"
    // },
    // {
    //     "id": 62,
    //     "name": "Cookware Set",
    //     "description": "Non-stick cookware set for versatile cooking",
    //     "price": 99.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/random/400x400?cookware-set"
    // },
    // {
    //     "id": 63,
    //     "name": "Instant Camera",
    //     "description": "Instant camera for capturing and printing memories",
    //     "price": 79.99,
    //     "category": "Electronics",
    //     "image": "https://source.unsplash.com/random/400x400?instant-camera"
    // },
    // {
    //     "id": 64,
    //     "name": "Fitness Mat",
    //     "description": "Thick fitness mat for comfortable workouts",
    //     "price": 29.99,
    //     "category": "Fitness & Sports",
    //     "image": "https://source.unsplash.com/random/400x400?fitness-mat"
    // },
    // {
    //     "id": 65,
    //     "name": "Wireless Doorbell",
    //     "description": "Wireless doorbell with long range and multiple chimes",
    //     "price": 24.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/random/400x400?wireless-doorbell"
    // },
    // {
    //     "id": 66,
    //     "name": "Blender",
    //     "description": "High-speed blender for smoothies and soups",
    //     "price": 49.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/random/400x400?blender"
    // },
    // {
    //     "id": 67,
    //     "name": "Smart Door Lock",
    //     "description": "Keyless smart door lock with remote access",
    //     "price": 129.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/random/400x400?smart-door-lock"
    // },
    // {
    //     "id": 68,
    //     "name": "Portable Projector",
    //     "description": "Compact portable projector for home entertainment",
    //     "price": 179.99,
    //     "category": "Electronics",
    //     "image": "https://source.unsplash.com/random/400x400?portable-projector"
    // },
    // {
    //     "id": 69,
    //     "name": "Espresso Machine",
    //     "description": "Espresso machine for making barista-quality coffee",
    //     "price": 199.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/random/400x400?espresso-machine"
    // },
    // {
    //     "id": 70,
    //     "name": "Smart Scale",
    //     "description": "Smart scale with body composition analysis",
    //     "price": 49.99,
    //     "category": "Fitness & Sports",
    //     "image": "https://source.unsplash.com/random/400x400?smart-scale"
    // },
    // {
    //     "id": 71,
    //     "name": "Robot Vacuum",
    //     "description": "Automated robot vacuum for efficient cleaning",
    //     "price": 249.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/random/400x400?robot-vacuum"
    // },
    // {
    //     "id": 72,
    //     "name": "Electric Guitar",
    //     "description": "Electric guitar with solid body and powerful pickups",
    //     "price": 299.99,
    //     "category": "Musical Instruments",
    //     "image": "https://source.unsplash.com/random/400x400?electric-guitar"
    // },
    // {
    //     "id": 73,
    //     "name": "Air Purifier",
    //     "description": "HEPA air purifier for clean and fresh air",
    //     "price": 129.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/random/400x400?air-purifier"
    // },
    // {
    //     "id": 74,
    //     "name": "Wireless Gaming Mouse",
    //     "description": "High-precision wireless gaming mouse with RGB lighting",
    //     "price": 59.99,
    //     "category": "Gaming",
    //     "image": "https://source.unsplash.com/random/400x400?gaming-mouse"
    // },
    // {
    //     "id": 75,
    //     "name": "Electric Pressure Cooker",
    //     "description": "Multi-function electric pressure cooker for quick meals",
    //     "price": 89.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/random/400x400?pressure-cooker"
    // },
    // {
    //     "id": 76,
    //     "name": "Action Camera",
    //     "description": "Waterproof action camera for capturing adventures",
    //     "price": 149.99,
    //     "category": "Electronics",
    //     "image": "https://source.unsplash.com/random/400x400?action-camera"
    // },
    // {
    //     "id": 77,
    //     "name": "Heated Blanket",
    //     "description": "Electric heated blanket for cozy warmth",
    //     "price": 59.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/random/400x400?heated-blanket"
    // },
    // {
    //     "id": 78,
    //     "name": "Gaming Console",
    //     "description": "Next-gen gaming console with immersive graphics",
    //     "price": 499.99,
    //     "category": "Gaming",
    //     "image": "https://source.unsplash.com/random/400x400?gaming-console"
    // },
    // {
    //     "id": 79,
    //     "name": "Home Theater System",
    //     "description": "Complete home theater system for an immersive experience",
    //     "price": 399.99,
    //     "category": "Electronics",
    //     "image": "https://source.unsplash.com/random/400x400?home-theater-system"
    // },
    // {
    //     "id": 80,
    //     "name": "Smart Plug",
    //     "description": "Wi-Fi enabled smart plug for home automation",
    //     "price": 19.99,
    //     "category": "Electronics",
    //     "image": "https://source.unsplash.com/random/400x400?smart-plug"
    // },
    // {
    //     "id": 81,
    //     "name": "E-Reader",
    //     "description": "Lightweight e-reader with high-resolution display",
    //     "price": 129.99,
    //     "category": "Electronics",
    //     "image": "https://source.unsplash.com/random/400x400?e-reader"
    // },
    // {
    //     "id": 82,
    //     "name": "Portable Air Conditioner",
    //     "description": "Compact portable air conditioner with remote control",
    //     "price": 249.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/random/400x400?air-conditioner"
    // },
    // {
    //     "id": 83,
    //     "name": "Smart Watch",
    //     "description": "Advanced smart watch with fitness tracking and notifications",
    //     "price": 199.99,
    //     "category": "Electronics",
    //     "image": "https://source.unsplash.com/random/400x400?smartwatch"
    // },
    // {
    //     "id": 84,
    //     "name": "Electric Scooter",
    //     "description": "Eco-friendly electric scooter with long battery life",
    //     "price": 349.99,
    //     "category": "Fitness & Sports",
    //     "image": "https://source.unsplash.com/random/400x400?scooter"
    // },
    // {
    //     "id": 85,
    //     "name": "Portable Power Bank",
    //     "description": "High-capacity portable power bank for charging devices",
    //     "price": 39.99,
    //     "category": "Electronics",
    //     "image": "https://source.unsplash.com/random/400x400?power-bank"
    // },
    // {
    //     "id": 86,
    //     "name": "Digital Piano",
    //     "description": "88-key digital piano with weighted keys",
    //     "price": 499.99,
    //     "category": "Musical Instruments",
    //     "image": "https://source.unsplash.com/random/400x400?digital-piano"
    // },
    // {
    //     "id": 87,
    //     "name": "Noise-Cancelling Headphones",
    //     "description": "Over-ear noise-cancelling headphones with superior sound",
    //     "price": 249.99,
    //     "category": "Electronics",
    //     "image": "https://source.unsplash.com/random/400x400?noise-cancelling-headphones"
    // },
    // {
    //     "id": 88,
    //     "name": "Smart Thermostat",
    //     "description": "WiFi-enabled smart thermostat for home automation",
    //     "price": 129.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/featured/?smartthermostat"
    // },
    // {
    //     "id": 89,
    //     "name": "Smart Doorbell",
    //     "description": "Smart doorbell with HD video and motion detection",
    //     "price": 149.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/featured/?smartdoorbell"
    // },
    // {
    //     "id": 90,
    //     "name": "Smart Lock",
    //     "description": "Smart lock with keypad and remote access",
    //     "price": 199.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/featured/?smartlock"
    // },
    // {
    //     "id": 91,
    //     "name": "Smart Vacuum",
    //     "description": "Robot vacuum with app control and scheduling",
    //     "price": 299.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/featured/?smartvacuum"
    // },
    // {
    //     "id": 92,
    //     "name": "Smart Coffee Maker",
    //     "description": "WiFi-enabled smart coffee maker with custom brew settings",
    //     "price": 149.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/featured/?smartcoffeemaker"
    // },
    // {
    //     "id": 93,
    //     "name": "Smart Air Conditioner",
    //     "description": "Smart air conditioner with app control and scheduling",
    //     "price": 399.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/featured/?smartairconditioner"
    // },
    // {
    //     "id": 94,
    //     "name": "Smart Water Bottle",
    //     "description": "Smart water bottle with hydration tracking",
    //     "price": 29.99,
    //     "category": "Fitness & Sports",
    //     "image": "https://source.unsplash.com/featured/?smartwaterbottle"
    // },
    // {
    //     "id": 95,
    //     "name": "Electric Toothbrush",
    //     "description": "Rechargeable electric toothbrush with Bluetooth",
    //     "price": 69.99,
    //     "category": "Personal Care",
    //     "image": "https://source.unsplash.com/featured/?electrictoothbrush"
    // },
    // {
    //     "id": 96,
    //     "name": "Smart Light Switch",
    //     "description": "Smart light switch with app control and scheduling",
    //     "price": 49.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/featured/?smartlightswitch"
    // },
    // {
    //     "id": 97,
    //     "name": "Smart Refrigerator",
    //     "description": "Smart refrigerator with touch screen and camera",
    //     "price": 1499.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/featured/?smartrefrigerator"
    // },
    // {
    //     "id": 98,
    //     "name": "Smart Oven",
    //     "description": "Smart oven with WiFi and app control",
    //     "price": 799.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/featured/?smartoven"
    // },
    // {
    //     "id": 99,
    //     "name": "Smart Washing Machine",
    //     "description": "Smart washing machine with app control and scheduling",
    //     "price": 999.99,
    //     "category": "Home Decor",
    //     "image": "https://source.unsplash.com/featured/?smartwashingmachine"
    // },
    // {
    //     "id": 100,
    //     "name": "Smart Glasses",
    //     "description": "AR smart glasses with voice control",
    //     "price": 399.99,
    //     "category": "Electronics",
    //     "image": "https://source.unsplash.com/featured/?smartglasses"
    // }
]

  module.exports = productData;



// const productData = [
//     {
//       "id": 1,
//       "name": "Laptop",
//       "description": "Powerful laptop for work and entertainment",
//       "price": 999,
//       "category": "Electronics"
//     },
//     {
//       "id": 2,
//       "name": "Smartphone",
//       "description": "High-performance smartphone with advanced features",
//       "price": 699,
//       "category": "Electronics"
//     },
//     {
//       "id": 3,
//       "name": "T-shirt",
//       "description": "Comfortable cotton t-shirt for everyday wear",
//       "price": 19.99,
//       "category": "Clothing"
//     },
//     {
//       "id": 4,
//       "name": "Running Shoes",
//       "description": "Lightweight running shoes for optimal performance",
//       "price": 79.99,
//       "category": "Footwear"
//     },
//     {
//       "id": 5,
//       "name": "Headphones",
//       "description": "Premium over-ear headphones with noise cancellation",
//       "price": 199.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 6,
//       "name": "Watch",
//       "description": "Stylish watch with leather strap and quartz movement",
//       "price": 149.99,
//       "category": "Accessories"
//     },
//     {
//       "id": 7,
//       "name": "Backpack",
//       "description": "Durable backpack with multiple compartments",
//       "price": 59.99,
//       "category": "Accessories"
//     },
//     {
//       "id": 8,
//       "name": "Sunglasses",
//       "description": "Polarized sunglasses for UV protection",
//       "price": 39.99,
//       "category": "Accessories"
//     },
//     {
//       "id": 9,
//       "name": "Desk Lamp",
//       "description": "Adjustable LED desk lamp for studying and working",
//       "price": 29.99,
//       "category": "Home Decor"
//     },
//     {
//       "id": 10,
//       "name": "Wireless Mouse",
//       "description": "Ergonomic wireless mouse with customizable buttons",
//       "price": 34.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 11,
//       "name": "Coffee Maker",
//       "description": "Programmable coffee maker for brewing delicious coffee",
//       "price": 79.99,
//       "category": "Home & Living"
//     },
//     {
//       "id": 12,
//       "name": "Yoga Mat",
//       "description": "High-quality yoga mat for comfortable practice",
//       "price": 29.99,
//       "category": "Fitness & Sports"
//     },
//     {
//       "id": 13,
//       "name": "Gaming Chair",
//       "description": "Ergonomic gaming chair with lumbar support",
//       "price": 199.99,
//       "category": "Gaming"
//     },
//     {
//       "id": 14,
//       "name": "Digital Camera",
//       "description": "Compact digital camera with high-resolution sensor",
//       "price": 299.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 15,
//       "name": "Bluetooth Speaker",
//       "description": "Portable Bluetooth speaker with powerful sound",
//       "price": 49.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 16,
//       "name": "Hiking Boots",
//       "description": "Waterproof hiking boots for outdoor adventures",
//       "price": 129.99,
//       "category": "Footwear"
//     },
//     {
//       "id": 17,
//       "name": "Winter Jacket",
//       "description": "Insulated winter jacket for cold weather",
//       "price": 149.99,
//       "category": "Clothing"
//     },
//     {
//       "id": 18,
//       "name": "Wireless Earbuds",
//       "description": "True wireless earbuds with long battery life",
//       "price": 89.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 19,
//       "name": "Cycling Helmet",
//       "description": "Lightweight cycling helmet for safety and comfort",
//       "price": 59.99,
//       "category": "Fitness & Sports"
//     },
//     {
//       "id": 20,
//       "name": "Portable Charger",
//       "description": "Compact portable charger for charging devices on the go",
//       "price": 24.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 21,
//       "name": "Wireless Keyboard",
//       "description": "Slim wireless keyboard with quiet keys",
//       "price": 49.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 22,
//       "name": "Sneakers",
//       "description": "Stylish sneakers with cushioned sole",
//       "price": 59.99,
//       "category": "Footwear"
//     },
//     {
//       "id": 23,
//       "name": "Smartwatch",
//       "description": "Feature-rich smartwatch with heart rate monitor",
//       "price": 179.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 24,
//       "name": "Leather Wallet",
//       "description": "Genuine leather wallet with multiple card slots",
//       "price": 39.99,
//       "category": "Accessories"
//     },
//     {
//       "id": 25,
//       "name": "Wireless Headphones",
//       "description": "Comfortable wireless headphones with long battery life",
//       "price": 129.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 26,
//       "name": "Running Shorts",
//       "description": "Lightweight running shorts for performance and comfort",
//       "price": 29.99,
//       "category": "Clothing"
//     },
//     {
//       "id": 27,
//       "name": "Travel Backpack",
//       "description": "Versatile travel backpack with anti-theft features",
//       "price": 89.99,
//       "category": "Accessories"
//     },
//     {
//       "id": 28,
//       "name": "Stainless Steel Water Bottle",
//       "description": "Durable stainless steel water bottle for hydration on the go",
//       "price": 19.99,
//       "category": "Fitness & Sports"
//     },
//     {
//       "id": 29,
//       "name": "Desktop Monitor",
//       "description": "High-resolution desktop monitor for productivity",
//       "price": 249.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 30,
//       "name": "Camping Tent",
//       "description": "Spacious camping tent for outdoor adventures",
//       "price": 199.99,
//       "category": "Outdoor Gear"
//     },
//     {
//       "id": 31,
//       "name": "Cordless Drill",
//       "description": "Powerful cordless drill for DIY projects",
//       "price": 79.99,
//       "category": "Tools"
//     },
//     {
//       "id": 32,
//       "name": "Wireless Charging Pad",
//       "description": "Qi-compatible wireless charging pad for smartphones",
//       "price": 29.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 33,
//       "name": "Sleeping Bag",
//       "description": "Warm sleeping bag for camping and outdoor use",
//       "price": 69.99,
//       "category": "Outdoor Gear"
//     },
//     {
//       "id": 34,
//       "name": "Bluetooth Earbuds",
//       "description": "Wireless Bluetooth earbuds with noise cancellation",
//       "price": 99.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 35,
//       "name": "Office Chair",
//       "description": "Ergonomic office chair with lumbar support",
//       "price": 149.99,
//       "category": "Furniture"
//     },
//     {
//       "id": 36,
//       "name": "Yoga Block",
//       "description": "Foam yoga block for support and stability",
//       "price": 9.99,
//       "category": "Fitness & Sports"
//     },
//     {
//       "id": 37,
//       "name": "Digital Scale",
//       "description": "Digital bathroom scale for accurate weight measurement",
//       "price": 24.99,
//       "category": "Home & Living"
//     },
//     {
//       "id": 38,
//       "name": "Wrist Watch",
//       "description": "Classic wrist watch with stainless steel band",
//       "price": 99.99,
//       "category": "Accessories"
//     },
//     {
//       "id": 39,
//       "name": "Resistance Bands",
//       "description": "Set of resistance bands for strength training",
//       "price": 19.99,
//       "category": "Fitness & Sports"
//     },
//     {
//       "id": 40,
//       "name": "Rain Jacket",
//       "description": "Waterproof rain jacket for outdoor activities",
//       "price": 79.99,
//       "category": "Clothing"
//     },
//     {
//       "id": 41,
//       "name": "Portable Bluetooth Speaker",
//       "description": "Compact portable Bluetooth speaker for music on the go",
//       "price": 39.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 42,
//       "name": "Dumbbell Set",
//       "description": "Adjustable dumbbell set for strength training at home",
//       "price": 129.99,
//       "category": "Fitness & Sports"
//     },
//     {
//       "id": 43,
//       "name": "Laptop Stand",
//       "description": "Adjustable laptop stand for ergonomic use",
//       "price": 29.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 44,
//       "name": "Leather Belt",
//       "description": "Genuine leather belt with metal buckle",
//       "price": 24.99,
//       "category": "Accessories"
//     },
//     {
//       "id": 45,
//       "name": "Wireless Gaming Mouse",
//       "description": "Wireless gaming mouse with customizable RGB lighting",
//       "price": 69.99,
//       "category": "Gaming"
//     },
//     {
//       "id": 46,
//       "name": "Running Jacket",
//       "description": "Lightweight running jacket for protection against the elements",
//       "price": 59.99,
//       "category": "Clothing"
//     },
//     {
//       "id": 47,
//       "name": "Compact Mirror",
//       "description": "Pocket-sized compact mirror for on-the-go touch-ups",
//       "price": 9.99,
//       "category": "Accessories"
//     },
//     {
//       "id": 48,
//       "name": "Cycling Gloves",
//       "description": "Padded cycling gloves for comfort and grip",
//       "price": 19.99,
//       "category": "Fitness & Sports"
//     },
//     {
//       "id": 49,
//       "name": "Wireless Bluetooth Headset",
//       "description": "Wireless Bluetooth headset for hands-free calling",
//       "price": 49.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 50,
//       "name": "Resistance Loop Bands",
//       "description": "Set of resistance loop bands for lower body workouts",
//       "price": 14.99,
//       "category": "Fitness & Sports"
//     },
//     {
//       "id": 51,
//       "name": "Portable Power Bank",
//       "description": "Portable power bank for charging devices on the go",
//       "price": 29.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 52,
//       "name": "Smart Thermostat",
//       "description": "Wi-Fi-enabled smart thermostat for energy efficiency",
//       "price": 129.99,
//       "category": "Home & Living"
//     },
//     {
//       "id": 53,
//       "name": "Bluetooth FM Transmitter",
//       "description": "Bluetooth FM transmitter for streaming music in the car",
//       "price": 19.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 54,
//       "name": "Travel Pillow",

//       "description": "Memory foam travel pillow for comfortable rest during travel",
//       "price": 19.99,
//       "category": "Accessories"
//     },
//     {
//       "id": 55,
//       "name": "Portable Espresso Maker",
//       "description": "Compact portable espresso maker for coffee lovers",
//       "price": 49.99,
//       "category": "Home & Living"
//     },
//     {
//       "id": 56,
//       "name": "Wireless Charging Stand",
//       "description": "Wireless charging stand for smartphones with Qi support",
//       "price": 39.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 57,
//       "name": "Bluetooth Noise Cancelling Headphones",
//       "description": "Wireless Bluetooth headphones with active noise cancellation",
//       "price": 149.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 58,
//       "name": "Sun Hat",
//       "description": "Wide-brimmed sun hat for sun protection",
//       "price": 24.99,
//       "category": "Accessories"
//     },
//     {
//       "id": 59,
//       "name": "Hiking Backpack",
//       "description": "Durable hiking backpack with hydration system compatibility",
//       "price": 99.99,
//       "category": "Outdoor Gear"
//     },
//     {
//       "id": 60,
//       "name": "Digital Kitchen Scale",
//       "description": "Digital kitchen scale for precise measurements",
//       "price": 19.99,
//       "category": "Home & Living"
//     },
//     {
//       "id": 61,
//       "name": "Resistance Tube Set",
//       "description": "Set of resistance tubes for full-body workouts",
//       "price": 24.99,
//       "category": "Fitness & Sports"
//     },
//     {
//       "id": 62,
//       "name": "Wireless Charging Car Mount",
//       "description": "Wireless charging car mount for smartphones",
//       "price": 34.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 63,
//       "name": "Stainless Steel Travel Mug",
//       "description": "Double-walled stainless steel travel mug for hot and cold beverages",
//       "price": 14.99,
//       "category": "Home & Living"
//     },
//     {
//       "id": 64,
//       "name": "Wireless Bluetooth Speaker",
//       "description": "Portable wireless Bluetooth speaker with 360-degree sound",
//       "price": 79.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 65,
//       "name": "Fitness Tracker",
//       "description": "Waterproof fitness tracker with heart rate monitor",
//       "price": 49.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 66,
//       "name": "Compact Folding Umbrella",
//       "description": "Compact folding umbrella for protection from rain and sun",
//       "price": 9.99,
//       "category": "Accessories"
//     },
//     {
//       "id": 67,
//       "name": "Wireless Charging Pad",
//       "description": "Slim wireless charging pad for Qi-compatible devices",
//       "price": 19.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 68,
//       "name": "Dumbbell Rack",
//       "description": "Sturdy dumbbell rack for organizing weights",
//       "price": 59.99,
//       "category": "Fitness & Sports"
//     },
//     {
//       "id": 69,
//       "name": "LED Desk Lamp",
//       "description": "Adjustable LED desk lamp with touch control",
//       "price": 39.99,
//       "category": "Home & Living"
//     },
//     {
//       "id": 70,
//       "name": "Polarized Sunglasses",
//       "description": "Polarized sunglasses with UV protection",
//       "price": 29.99,
//       "category": "Accessories"
//     },
//     {
//       "id": 71,
//       "name": "Wireless Charging Power Bank",
//       "description": "Portable wireless charging power bank for smartphones",
//       "price": 39.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 72,
//       "name": "Insulated Water Bottle",
//       "description": "Double-walled insulated water bottle for hot and cold beverages",
//       "price": 19.99,
//       "category": "Fitness & Sports"
//     },
//     {
//       "id": 73,
//       "name": "Smart Plug",
//       "description": "Wi-Fi-enabled smart plug for home automation",
//       "price": 19.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 74,
//       "name": "Wireless Charging Alarm Clock",
//       "description": "Wireless charging alarm clock with LED display",
//       "price": 49.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 75,
//       "name": "Cordless Electric Kettle",
//       "description": "Stainless steel cordless electric kettle for boiling water",
//       "price": 29.99,
//       "category": "Home & Living"
//     },
//     {
//       "id": 76,
//       "name": "Bluetooth Beanie",
//       "description": "Beanie with built-in Bluetooth speakers and microphone",
//       "price": 24.99,
//       "category": "Accessories"
//     },
//     {
//       "id": 77,
//       "name": "Wireless Charging Desk Lamp",
//       "description": "Wireless charging desk lamp with USB port",
//       "price": 59.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 78,
//       "name": "Compact Travel Pillow",
//       "description": "Inflatable compact travel pillow for neck support",
//       "price": 14.99,
//       "category": "Accessories"
//     },
//     {
//       "id": 79,
//       "name": "Resistance Band Set",
//       "description": "Set of resistance bands for strength training",
//       "price": 34.99,
//       "category": "Fitness & Sports"
//     },
//     {
//       "id": 80,
//       "name": "Smart Wi-Fi Light Bulb",
//       "description": "Wi-Fi-enabled smart light bulb for remote control",
//       "price": 19.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 81,
//       "name": "Stainless Steel Thermos",
//       "description": "Double-walled stainless steel thermos for hot and cold beverages",
//       "price": 24.99,
//       "category": "Home & Living"
//     },
//     {
//       "id": 82,
//       "name": "Bluetooth FM Radio",
//       "description": "Bluetooth FM radio with USB and SD card support",
//       "price": 29.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 83,
//       "name": "Hiking Pants",
//       "description": "Quick-drying hiking pants with zip-off legs",
//       "price": 49.99,
//       "category": "Clothing"
//     },
//     {
//       "id": 84,
//       "name": "Adjustable Dumbbells",
//       "description": "Set of adjustable dumbbells for versatile workouts",
//       "price": 149.99,
//       "category": "Fitness & Sports"
//     },
//     {
//       "id": 85,
//       "name": "Wireless Charging Mouse Pad",
//       "description": "Wireless charging mouse pad with built-in USB hub",
//       "price": 39.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 86,
//       "name": "Compact Travel Backpack",
//       "description": "Compact travel backpack with multiple compartments",
//       "price": 39.99,
//       "category": "Accessories"
//     },
//     {
//       "id": 87,
//       "name": "Running Belt",
//       "description": "Water-resistant running belt for storing essentials",
//       "price": 14.99,
//       "category": "Fitness & Sports"
//     },
//     {
//       "id": 88,
//       "name": "Wireless Charging Bedside Lamp",
//       "description": "Wireless charging bedside lamp with touch control",
//       "price": 69.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 89,
//       "name": "Portable Folding Chair",
//       "description": "Compact portable folding chair for outdoor events",
//       "price": 29.99,
//       "category": "Outdoor Gear"
//     },
//     {
//       "id": 90,
//       "name": "Digital Bathroom Scale",
//       "description": "Digital bathroom scale with high-precision sensors",
//       "price": 19.99,
//       "category": "Home & Living"
//     },
//     {
//       "id": 91,
//       "name": "Running Hat",
//       "description": "Lightweight running hat for sun protection",
//       "price": 9.99,
//       "category": "Accessories"
//     },
//     {
//       "id": 92,
//       "name": "Wireless Charging Nightstand",
//       "description": "Wireless charging nightstand with built-in USB ports",
//       "price": 99.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 93,
//       "name": "Cycling Sunglasses",
//       "description": "Polarized cycling sunglasses for enhanced visibility",
//       "price": 39.99,
//       "category": "Fitness & Sports"
//     },
//     {
//       "id": 94,
//       "name": "Stainless Steel Travel Cutlery Set",
//       "description": "Compact stainless steel travel cutlery set",
//       "price": 12.99,
//       "category": "Home & Living"
//     },
//     {
//       "id": 95,
//       "name": "Bluetooth Shower Speaker",
//       "description": "Waterproof Bluetooth shower speaker for music in the bathroom",
//       "price": 24.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 96,
//       "name": "Fitness Exercise Ball",
//       "description": "Anti-burst fitness exercise ball for core workouts",
//       "price": 19.99,
//       "category": "Fitness & Sports"
//     },
//     {
//       "id": 97,
//       "name": "Wireless Charging Car Charger",
//       "description": "Wireless charging car charger with automatic grip",
//       "price": 49.99,
//       "category": "Electronics"
//     },
//     {
//       "id": 98,
//       "name": "Travel Toiletry Bag",
//       "description": "Water-resistant travel toiletry bag for organizing toiletries",
//       "price": 14.99,
//       "category": "Accessories"
//     },
//     {
//       "id": 99,
//       "name": "Compact Folding Table",
//       "description": "Compact folding table for camping and outdoor use",
//       "price": 39.99,
//       "category": "Outdoor Gear"
//     },
//     {
//       "id": 100,
//       "name": "Wireless Charging Desk Organizer",
//       "description": "Wireless charging desk organizer with storage compartments",
//       "price": 59.99,
//       "category": "Electronics"
//     }
//   ]
  
