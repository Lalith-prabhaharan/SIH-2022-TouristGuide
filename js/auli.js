

datas = [
  {
    id: 1,
    name: "Blue Poppy Resort",
    location: "Auli",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/20/d0/81/blue-poppy-resort.jpg?w=800&h=-1&s=1",
    reviews: 9,
    price: 5000,
    description:
      " Blue Poppy resorts in Auli has 24 wooden huts with modern facilities. The Blue poppy resort is located as most beautiful location in Auli. You can visit anytime during the year and you will be greeted with different type of landscapes according to the season of visit. You can see clouds in monsoon season, snow slopes in winter season and clear peaks in summer season. All the huts in the resort provide you a 180 degree view of the higher peaks like Hathi, Ghoda, Palki and Nanda Devi.",
    rating: 9.1,
    totalreviews: 367,
  },

  {
    id: 2,
    name: "Cliff Top Club",
    location: "Auli",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/42/8a/f9/photo1jpg.jpg?w=800&h=-1&s=1",
    reviews: 8,
    price: 7000,
    description:
      " The resort provides a 270 degree clear view of the snow covered Nanda Devi range (the highest in india and third highest in the world). Other ranges in sight include Dronagiri, Kamet, Trishul, Neelkanth, Mana, and Mukut . They belong to the snow-line ranges which are covered with snow all round the year. In summers, when the snow gives way to carpets of grass and flowers, hikers and trekkers will find numerous marked walks and mountain bike trails. ",
    rating: 8.5,
    totalreviews: 248,
  },

  {
    id: 3,
    name: "Casa Himalaya",
    location: "Auli",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/67/86/f4/casa-himalaya-auli.jpg?w=1200&h=-1&s=1",
    reviews: 7,
    price: 6999,
    description:
      " The resort provides a 270 degree clear view of the snow covered Nanda Devi range (the highest in india and third highest in the world). Other ranges in sight include Dronagiri, Kamet, Trishul, Neelkanth, Mana, and Mukut . They belong to the snow-line ranges which are covered with snow all round the year. In summers, when the snow gives way to carpets of grass and flowers, hikers and trekkers will find numerous marked walks and mountain bike trails. ",
    rating: 10,
    totalreviews: 12,
  },
  
  {
    id: 4,
    name: "Panchvati Inn",
    location: "Auli",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/bb/e3/79/panchvati-inn.jpg?w=1200&h=-1&s=1",
    reviews: 4,
    price: 3732,
    description:
      "Panchvati Inn ‘home away from Home’ nestled in the lap of the Himalaya. Hotel Panchvati Inn is an ideal mix of individualistic design and Garhwali architecture. The hotel marks itself in one of the most leisure and luxury property of the town. Moreover, the hotel is very near to Narshima Temple which connects the town to the Shankaracharya era.",
    rating: 9.5,
    totalreviews: 140,
  },

  {
    id: 5,
    name: "Nandan Kanan ",
    location: "Auli",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/77/8a/6b/nandan-kanan.jpg?w=700&h=-1&s=1",
    reviews: 18,
    price: 4763,
    description:
      " A short drive from Joshimath brings you to another world full of surprises for your eyes. Nandan Kanan Auli Hotel has the panoramic views of the beautiful snow clad mountains, vast acres of orchards, deodar groves and beautiful Auli lake promises to offer a soothing experience to its guests. ",
    rating: 9.5,
    totalreviews: 21,
  },

  {
    id: 6,
    name: "The Royal Village - Auli Resort",
    location: "Auli",
    img: "https://cdn1.goibibo.com/voy_ing/t_g/f90e26def6b311e78020025f77df004f.jpg",
    reviews: 8,
    price: 5927,
    description:
      "Sterling Nainital is a great option for travellers looking out for resort in Nainital. It is located in Bhumiyadhar. This Resort stands out as one of the highly recommended resort in Nainital and is recommended by 89% of our guests. Resort is rated 4.1 out of 5, which is considered as Very good. A popular transit point from the resort is Haldwani Railway Station (19.5 kms). The Resort is in proximity to some popular tourist attractions and other places of interest in Nainital.",
    rating: 8.1,
    totalreviews: 57,
  },

  {
    id: 7,
    name: "Maple Leaf Cottage",
    location: "Auli",
    img: "https://cdn1.goibibo.com/voy_ing/t_g/18203d5e838811ecb90a0a58a9feac02.jpg",
    reviews: 9,
    price: 3578,
    description:
      "Countryside Villa is a great option for travellers looking out for villa in Dhanaulti. It is located in Chamba - Mussoorie Rd.This Villa stands out as one of the highly recommended villa in Dhanaulti and is recommended by 100% of our guests. Villa is rated 5.0 out of 5, which is considered as excellent. The Villa is in proximity to some popular tourist attractions and other places of interest in Dhanaulti. Some of the tourist attractions near Countryside Villa and Surkhanda Devi Temple (2.6 kms).",
    rating: 8.0,
    totalreviews: 36,
  },

  {
    id: 8,
    name: "Hotel Mount View",
    location: "Auli",
    img: "https://cdn1.goibibo.com/voy_ing/t_g/819a89d80f7711ea87bc0242ac110002.jpg",
    reviews: 7,
    price: 2351,
    description:
      "Hotel Prachi is a great choice for travellers looking for a budget accomodation in Srinagar, Uttrakhand. This Hotel stands out as one of the highly recommended hotel in Srinagar, Uttrakhand and is recommended by 100% of our guests. Hotel is rated 5.0 out of 5, which is considered as excellent. The Hotel is in proximity to some popular tourist attractions and other places of interest in Srinagar, Uttrakhand. Some of the tourist attractions near Hotel Prachi and Kamleshwar Temple (350 mtrs).",
    rating: 10,
    totalreviews: 305,
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
