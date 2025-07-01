// Initialize the map centered on India
const map = L.map("map").setView([20.5937, 78.9629], 5); // Centered on India

// Add the OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Custom icons for different categories
const iconPark = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "images/marker-shadow.png",
  shadowSize: [41, 41],
  className: "park-marker",
});

const iconMuseum = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "images/marker-shadow.png",
  shadowSize: [41, 41],
  className: "museum-marker",
});

const iconRestaurant = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/3176/3176288.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "images/marker-shadow.png",
  shadowSize: [41, 41],
  className: "restaurant-marker",
});

const iconLandmark = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "images/marker-shadow.png",
  shadowSize: [41, 41],
  className: "landmark-marker",
});

// Updated locations data with Indian cities
const locations = [
  {
    name: "Aga Khan Palace, Pune",
    latlng: [18.5522, 73.9019],
    category: "landmark",
    description:
      "Historic palace and museum where Mahatma Gandhi was imprisoned.",
    image:
      "https://c8.alamy.com/comp/TWJBPN/the-aga-khan-palace-pune-india-TWJBPN.jpg",
  },
  {
    name: "Gateway of India, Mumbai",
    latlng: [18.922, 72.8347],
    category: "landmark",
    description:
      "Iconic 26-meter tall arch monument overlooking the Arabian Sea.",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "India Gate, Delhi",
    latlng: [28.6129, 77.2295],
    category: "landmark",
    description:
      "War memorial dedicated to Indian soldiers who died in World War I.",
    image: "https://wallpaperaccess.com/full/1896134.jpg",
  },
  {
    name: "Meenakshi Temple, Tamil Nadu",
    latlng: [9.9196, 78.1194],
    category: "landmark",
    description:
      "Historic Hindu temple dedicated to Parvati and Shiva in Madurai.",
    image:
      "https://images.unsplash.com/photo-1585506942812-72b5b44d706b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Peshwe Park, Pune",
    latlng: [18.5081, 73.8227],
    category: "park",
    description:
      "Popular urban park with zoo, aquarium and recreational facilities.",
    image:
      "https://punetourism.co.in/images/places-to-visit/headers/peshwe-energy-park-pune-tourism-entry-fee-timings-holidays-reviews-header.jpg",
  },
  {
    name: "Marine Drive, Mumbai",
    latlng: [18.9446, 72.8232],
    category: "landmark",
    description:
      "3.6km long boulevard along the coast with Art Deco buildings.",
    image:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Bombay Natural History Society, Mumbai",
    latlng: [18.9307, 72.8331],
    category: "museum",
    description:
      "Premier wildlife research organization with natural history exhibits.",
    image:
      "https://images.unsplash.com/photo-1572273486568-1dae316acd6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Bukhara, Delhi",
    latlng: [28.6353, 77.2249],
    category: "restaurant",
    description: "Award-winning restaurant serving Northwest Frontier cuisine.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },

  {
    name: "Taj Mahal, Agra",
    latlng: [27.1751, 78.0421],
    category: "landmark",
    description:
      "Iconic white marble mausoleum and one of the Seven Wonders of the World.",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Hawa Mahal, Jaipur",
    latlng: [26.9239, 75.8267],
    category: "landmark",
    description:
      "Palace of Winds with its iconic honeycomb-shaped facade with 953 windows.",
    image:
      "https://crazyhodophile.in/wp-content/uploads/2020/07/Hawa-Mahal-2048x1365.jpg",
  },
  {
    name: "Golden Temple, Amritsar",
    latlng: [31.62, 74.8765],
    category: "landmark",
    description:
      "Most sacred gurdwara of Sikhism, known for its stunning golden architecture.",
    image:
      "https://assets.cntraveller.in/photos/60c07fa11393a40ce8d810b0/master/pass/D8R9MT.jpg",
  },
  {
    name: "Charminar, Hyderabad",
    latlng: [17.3616, 78.4747],
    category: "landmark",
    description: "Iconic monument with four minarets, built in 1591.",
    image:
      "https://i.pinimg.com/originals/67/0f/48/670f48e57657a3f492aa4994387600e9.jpg",
  },
  {
    name: "Victoria Memorial, Kolkata",
    latlng: [22.5448, 88.3426],
    category: "landmark",
    description:
      "Large marble building dedicated to Queen Victoria, now a museum.",
    image:
      "https://www.hoponindia.com/blog/wp-content/uploads/2019/10/Victoria-Memorial-with-Race-Course1.jpg",
  },

  // NEW MUSEUMS
  {
    name: "National Museum, Delhi",
    latlng: [28.6119, 77.2195],
    category: "museum",
    description:
      "Premier museum of India with over 200,000 artifacts spanning 5,000 years.",
    image:
      "https://dimg04.c-ctrip.com/images/220b0u000000jgp345B25_W_1600_1200_Q70.jpg",
  },
  {
    name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, Mumbai",
    latlng: [18.9267, 72.8317],
    category: "museum",
    description:
      "Formerly Prince of Wales Museum, houses ancient Indian history artifacts.",
    image:
      "https://images.unsplash.com/photo-1585506787104-8d05c7f1e6d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },

  // NEW RESTAURANTS
  {
    name: "Karim's, Delhi",
    latlng: [28.6517, 77.2339],
    category: "restaurant",
    description:
      "Legendary eatery near Jama Masjid serving Mughlai cuisine since 1913.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Paradise, Hyderabad",
    latlng: [17.385, 78.4867],
    category: "restaurant",
    description: "Famous for its Hyderabadi biryani and kebabs since 1953.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Mavalli Tiffin Room (MTR), Bangalore",
    latlng: [12.9716, 77.5946],
    category: "restaurant",
    description:
      "Iconic vegetarian restaurant serving South Indian fare since 1924.",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Britannia & Co., Mumbai",
    latlng: [18.9322, 72.8306],
    category: "restaurant",
    description:
      "Legendary Irani cafe famous for its berry pulao and colonial charm.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },

  // NEW PARKS
  {
    name: "Lalbagh Botanical Garden, Bangalore",
    latlng: [12.9507, 77.5848],
    category: "park",
    description: "Famous botanical garden with over 1,000 species of plants.",
    image:
      "https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Sanjay Gandhi National Park, Mumbai",
    latlng: [19.2143, 72.9104],
    category: "park",
    description:
      "Large protected area within Mumbai city limits with diverse wildlife.",
    image:
      "https://i0.wp.com/trailstainedfingers.com/wp-content/uploads/2016/01/featured-sgnp1.jpg?fit=1400%2C1004&ssl=1",
  },
];

// Function to get icon based on category
function getIcon(category) {
  switch (category) {
    case "park":
      return iconPark;
    case "museum":
      return iconMuseum;
    case "restaurant":
      return iconRestaurant;
    case "landmark":
      return iconLandmark;
    default:
      return L.Icon.Default.prototype;
  }
}

// Add markers to the map
locations.forEach((location) => {
  const marker = L.marker(location.latlng, {
    icon: getIcon(location.category),
    riseOnHover: true,
  }).addTo(map);

  // Add popup with location information
  marker.bindPopup(`
        <div class="popup-content">
            <img src="${location.image}" alt="${
    location.name
  }" class="popup-image">
            <div class="popup-title">${location.name}</div>
            <div class="popup-description">${location.description}</div>
            <span class="popup-category">${location.category.toUpperCase()}</span>
        </div>
    `);

  // Add animation when marker is clicked
  marker.on("click", function () {
    this.setIcon(
      L.icon({
        iconUrl: "images/marker-icon-2x.png",
        iconSize: [41, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: "images/marker-shadow.png",
        shadowSize: [41, 41],
        className: `${location.category}-marker clicked`,
      })
    );

    setTimeout(() => {
      this.setIcon(getIcon(location.category));
    }, 1000);
  });
});

// Rest of your existing code (search functionality, current location, etc.) remains the same...
document.getElementById("search-btn").addEventListener("click", searchLocation);
document
  .getElementById("search-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchLocation();
    }
  });

function searchLocation() {
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();
  if (!searchTerm) return;

  const foundLocation = locations.find(
    (loc) =>
      loc.name.toLowerCase().includes(searchTerm) ||
      loc.category.toLowerCase().includes(searchTerm)
  );

  if (foundLocation) {
    map.flyTo(foundLocation.latlng, 15);
    setTimeout(() => {
      const markers = map._layers;
      for (const layer in markers) {
        if (markers[layer] instanceof L.Marker) {
          const marker = markers[layer];
          if (marker.getLatLng().equals(foundLocation.latlng)) {
            marker.openPopup();
            break;
          }
        }
      }
    }, 1000);
  } else {
    alert("Location not found. Try another search term.");
  }
}

document
  .getElementById("current-location")
  .addEventListener("click", function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.flyTo([latitude, longitude], 15);
          L.marker([latitude, longitude], {
            icon: L.icon({
              iconUrl: "images/location.png",
              iconSize: [32, 32],
              iconAnchor: [16, 32],
            }),
          })
            .addTo(map)
            .bindPopup("Your current location")
            .openPopup();
        },
        (error) => {
          alert("Unable to retrieve your location: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const style = document.createElement("style");
  style.textContent = `
    .park-marker {
      filter: hue-rotate(90deg) brightness(1.2);
    }
    .museum-marker {
      filter: hue-rotate(270deg) brightness(1.1);
    }
    .restaurant-marker {
      filter: hue-rotate(0deg) saturate(2);
    }
    .landmark-marker {
      filter: hue-rotate(40deg) brightness(1.1);
    }
    .clicked {
      animation: pulse 1s;
    }
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.3); }
      100% { transform: scale(1); }
    }
  `;
  document.head.appendChild(style);
});
