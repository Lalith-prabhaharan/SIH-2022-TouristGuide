

datas = [
  {
    id: 1,
    name: "Hotel Himsagar",
    location: "Almora",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/e4/7c/18/hotel-himsagar.jpg?w=1200&h=-1&s=1",
    reviews: 9,
    price: 1517,
    description:
      "Hotel Himsagar is an excellent choice for travellers visiting Almora, offering a family-friendly environment alongside many helpful amenities designed to enhance your stay.Nearby landmarks such as Tarikhet (1.3 mi) and Chitai Temple (1.4 mi) make Hotel Himsagar a great place to stay when visiting Almora.",
    rating: 8.5,
    totalreviews: 15,
  },

  {
    id: 2,
    name: "Deodar Homestay",
    location: "Almora",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/17/e5/6d/76/img-20190609-090948-largejpg.jpg",
    reviews: 8,
    price: 7560,
    description:
      " Deodar Homestay is a home away from home, but with all the luxuries of a 5 star hotel. Situated in the heart of Almora, we are surrounded by tall pine and oak trees with a spectacular view of the Himalayas.",
    rating: 9.5,
    totalreviews: 46,
  },

  {
    id: 3,
    name: "Mountain Resort ,Khali Estate",
    location: "Almora",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/8a/0d/d5/mountain-resort-khali.jpg?w=1200&h=-1&s=1",
    reviews: 7,
    price: 5000,
    description:
      " Situated in Binsar, Khali Estate has a restaurant, garden, terrace, and free WiFi. There is free private parking and the property features paid airport shuttle service. At the resort, the rooms include a desk.",
    rating: 8.5,
    totalreviews: 137,
  },
  
  {
    id: 4,
    name: "Hotel Milam Inn",
    location: "Almora",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/13/89/42/hotel-front-pic.jpg?w=1200&h=-1&s=1",
    reviews: 8.5,
    price: 1457,
    description:
      "Hotel Milam Inn is a great choice for travellers looking for a 3 star hotel . It is located in Almora. This Hotel stands out as one of the highly recommended hotel in Almora and is recommended by 91% of our guests. Hotel is rated 4.3 out of 5, which is considered as Very good. The property enjoys a great location advantage and provides easy and fast connectivity to the major transit points of the city.",
    rating: 8.6,
    totalreviews: 14,
  },

  {
    id: 5,
    name: "Hotel Shivalik",
    location: "Almora",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/5a/c5/07/hotel-shivalik.jpg?w=1200&h=-1&s=1",
    reviews: 8,
    price: 5676,
    description:
      "Hotel Shivalik is an excellent choice for travellers visiting Almora, offering a charming environment alongside many helpful amenities designed to enhance your stay. For those interested in checking out Kasar Devi Temple (2.8 mi) while visiting Almora, Hotel Shivalik is a short distance away.As your “home away from home,” the small hotel rooms offer a flat screen TV, a seating area, and a desk, and getting online is easy, with free wifi available. ",
    rating: 9.0,
    totalreviews: 167,
  },

  {
    id: 6,
    name: "Imperial Heights Binsar",
    location: "Almora",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/38/c0/2d/fish-pond.jpg?w=1200&h=-1&s=1",
    reviews: 9,
    price: 6009,
    description:
      "The pristine hinterland of Kumaon Himalayas has always been an inspiration for Imperial Heights. As you move into this boutique retreat, you will be amazed to experience authentic culture and nature that it has sealed within its teak interiors.",
    rating: 9.5,
    totalreviews: 150,
  },

  {
    id: 7,
    name: "Hotel Aeradyo Inn",
    location: "Almora",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/ef/5b/69/hotel-aeradyo-inn.jpg?w=1200&h=-1&s=1",
    reviews: 9,
    price: 7000,
    description:
      "The property is located just 500 meters away from city center of Almora. The hotel is located at strategic location with peace and the Himalayan view. The hotel server local (Kumaoni) food in its restaurant. The free WiFi and car parking facilities are available.",
    rating: 10,
    totalreviews: 23,
  },

  
];

const container = document.querySelector(".container");

datas.forEach((data) => console.log(data));

datas.forEach((data) => {
  const div = document.createElement("div");
  html = `<div class="booking-grid">
      <div class="book-imgs">
        <img
          class="book-img"
          src="${data.img}"
          alt=${data.id}
        />
      </div>
      <div class="book">
        <h2 class="name" href=""><strong>${data.name}</strong></h2>
        <div style="display:flex;gap:10px"><svg xmlns="http://www.w3.org/2000/svg" class="loc-icon" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
      </svg><p classname="location">Location in ${data.location}</p></div>
        <p>
         ${data.description}
        </p>
        <a class="links" href="Show more"><strong>Show more</strong></a>
      </div>
    
      <div class="end-book">
      <div>
        <h2 class="ratings">${data.rating}</h2>
        <p class="reviews">${data.totalreviews} reviews</p>
      </div>
        <p>Price from</p>
        <p class="price"><strong>₹ ${data.price}</strong></p>
        <button class="check-button" onclick='clickFunction()' >Book Now</button>
      </div>`;
  div.innerHTML = html;
  container.appendChild(div);
});
