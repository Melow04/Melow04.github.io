var details = {
  gabel: {
    name: "GABEL LOFFEL",
    address: "123 Main St, Meriden City",
    category: "German Cuisine",
    open: "12PM - 10PM",
    price: "$$",
    description:
      "A cozy spot serving delicious German dishes including schnitzels and bratwursts.",
    image: "assets/gabel.jpg",
  },
  gary: {
    name: "GARY GARI",
    address: "76 No. Highland Ave, Meriden City",
    category: "Japanese",
    open: "5PM - 10PM",
    price: "$$",
    description:
      "A perfect place for Japanese food lovers. Specializes in sushi and ramen.",
    image: "assets/gary.jpg",
  },
  ilpiatto: {
    name: "IL PIATTO",
    address: "45 Sunset Blvd, Meriden City",
    category: "Italian",
    open: "11AM - 11PM",
    price: "$$$",
    description: "Experience the finest Italian dishes with a modern twist.",
    image: "assets/ilpiatto.jpg",
  },
  pierre: {
    name: "PIERRE PLATTERS",
    address: "88 Central Park, Meriden City",
    category: "French",
    open: "6PM - 12AM",
    price: "$$$$",
    description: "A luxurious dining experience with exquisite French cuisine.",
    image: "assets/pierre.jpg",
  },
};

function showDetails(restaurant) {
  var content = document.getElementById("details-content");
  var data = details[restaurant];

  content.innerHTML = `
  <div class="row">
    <div class="col-6 pb-5">
    <h2 style="color: red;">${data.name}</h2>
        <img src="${data.image}" class="img-fluid" style="width:100%; max-height:25rem; border-radius:2rem;" />
    </div>
    <div class="col-6 py-3">
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>Category:</strong> ${data.category}</p>
        <p><strong>Open:</strong> ${data.open}</p>
        <p><strong>Price:</strong> ${data.price}</p>
        <p>${data.description}</p>
    </div>
        
    `;


  document.getElementById("details-overlay").style.display = "flex";
}

function closeDetails() {
  document.getElementById("details-overlay").style.display = "none";
}
