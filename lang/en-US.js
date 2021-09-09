export default {
  footer: {
    coder: 'Developed by <a href="https://www.upwork.com/freelancers/~01aa7aa6602c9494dc" target="_blank" class="t-brown" >an.ildar</a>',
    design: 'Designed by <a href="https://kwork.ru/user/zednight13" class="t-brown" target="_blank" >zednight</a>'
  },
  menu: [
    { name: "Home", to: "/", exact: true },
    { name: "Booking", to: "/booking", exact: false },
    { name: "About us", to: "/about", exact: false },
    { name: "Rooms", to: "/rooms", exact: false },
    { name: "Facilities", to: "/facilities", exact: false },
    { name: "Blog", to: "/news", exact: false },
    { name: "Contacts", to: "/contacts", exact: false },
  ],
  home: {
    offer: {
      title: ['Comfortable hotel for', 'business and leisure', '№1 in Tashkent'],
      button: "Book",
      text: "Follow us on"
    },
    about: {
      title: 'About us',
      title2: '<span class="t-brown">Navruz Hotel</span> in Tashkent',
      text: [
        'The cozy and comfortable Navruz Hotel Tashkent is located in the city center and first opened for guests in 2018.',
        'The hotel offers 130 rooms of various categories for a comfortable stay, equipped with modern technology. Each room has a smart TV, mini fridge, air conditioning, Wi-Fi and a secure safe'
      ],
      link: 'Learn more',
      item1: 'Affordable room price',
      item2: 'Green area to relax',
      item3: "Free Wi-Fi",
      item4: 'Competent staff'
    },
    rooms: {
      title: 'Rooms'
    },
    facilities: {
      title: "Facilities",
      items: [
        { name: "Swimming pool", img: "pool.png", anchor: "#pool" },
        { name: "Bar", img: "bar.png", anchor: "#bar" },
        { name: "Gym", img: "fitnes.png", anchor: "#fitness" },
        { name: "Billiard room", img: "billiard.png", anchor: "#billiard" },
        { name: "A restaurant", img: "restoran.jpg", anchor: "#restoran" },
        { name: "Conference rooms", img: "max-hall.jpg", anchor: "#hall" },
      ],
      button: "More"
    },
    reviews: {
      title: "Reviews of our guests",
      items: [
        { name: "Kiril K.", text: "Great hotel. Very polite staff. Fresh numbers", img: 'review-kirill.png' },
        { name: "Vadim K.", text: "Excellent hotel! Recommend! Decent level, polite staff. And this is a new hotel, which is important", img: "review-vadim.png" },
        { name: "Stanislav R.", text: "Fine! Beautiful place! Friendly and fast service!", img: "review-stanislav.png" },
        { name: "Danil", text: "New hotel, cleanliness, comfort, helpful staff - everything is great! You can safely give the hotel 4 stars", img: "review-danil.png" },
        { name: "Svetlana O.", text: "Awesome hotel with great facilities and good breakfast", img: "review-svetlana.png" },
      ]
    },
    news: {
      title: "Latest news",
      button: "More"
    }
  },
  booking: {
    title: "Booking"
  },
  about: {
    title: 'About us',
    title2: 'Why we are?',
    items: [
      '<span class="fw-b">Cozy and comfortable Navruz Hotel Tashkent</span> is located in the city center and first opened its doors to hotel guests in 2018.',
      '<span class="fw-b">The hotel offers 130 rooms</span> of various categories for a comfortable stay, equipped with modern technology. Each room has a smart TV, mini fridge, air conditioning, Wi-Fi and a secure safe.',
      '<span class="fw-b">A spacious conference room,</span> bar, restaurant, gym, games room (billiards), outdoor pool, sauna and a cozy courtyard are available for the Guests of the hotel.'
    ],
    ul: [
      'Affordable prices',
      'Online booking management',
      'Multilingual staff',
      'Security',
      'Non-smoking rooms',
    ],
    ul2: [
      'Free Wi-Fi',
      'Airport shuttle',
      'Family rooms',
      'Free parking',
      '24-hour front desk'
    ]
  },
  rooms: {
    title: "Rooms",
    button: "Book",
    items: [
      {
        name: "Standart King",
        text: "All rooms of this category are equipped with a comfortable king-size bed, smart TV, telephone, mini fridge, safe, wardrobe, separate work area and individual disposable accessories. The total area of the room is 20 sq.m. The room rate includes breakfast, mini bar with soft drinks, gym and outdoor pool.",
        img: ["king1", "king2", "king3", "king4", "king5", "king6"],
        id: "king",
        link: "booking?room-type=139605",
      },
      {
        name: "Standard Twin",
        text: "Room with two single beds, which has air conditioning, TV, mini fridge, telephone, safe and bathroom with shower. Beds with modern orthopedic mattresses. The total area of the room is 20 sq.m. The room rate includes breakfast, mini bar with soft drinks, gym and outdoor pool.",
        img: ['twin1', 'twin2', 'twin3', 'twin4'],
        id: "twin",
        link: "booking?room-type=139604",
      },
      {
        name: "Suite",
        text: "Two-room suite with a comfortable bedroom with a king-size bed, where you can relax after a working day and a living room-study, for business meetings or midday rest. The total area of the room is 40 sq.m. Private bathroom with all the necessary individual accessories. The room rate includes breakfast, mini bar with soft drinks, gym and outdoor pool.",
        img: ["suite1", "suite2", "suite3", "suite4", "suite5", "suite6", "suite7", "suite8"],
        id: "suite",
        link: "booking?room-type=139607",
      },
      {
        name: "Economy Room",
        text: "Economy rooms combine compactness and the necessary level of convenience. The total area of the room is 12 sq.m. The room has a bed with an orthopedic mattress, comfortable furniture, TV, air conditioning, telephone and mini fridge. A secure safe is also installed in the room to keep your personal belongings. The room rate includes breakfast, mini bar with soft drinks, gym and outdoor pool.",
        img: ["econom1", "econom2", "econom3"],
        id: "econom",
        link: "booking?room-type=139606",
      },
      {
        name: "Superior King room",
        text: "Spacious room with a comfortable king-size bed, smart TV, telephone, mini fridge, safe, wardrobe, separate work area and individual disposable accessories. The total area of the room is 25 sq.m. The room rate includes breakfast, mini bar with soft drinks, gym and outdoor pool.",
        img: ["superior1", "superior2", "superior3"],
        id: "superior",
        link: "booking?room-type=139606",
      }
    ]
  },
  facilities: {
    title: 'Facilities',
    items: [
      {
        name: "Outdoor swimming pool",
        text: "During summer, you can take a dip in the outdoor pool or sunbathe on the comfortable sun loungers. The swimming pool is open from 09:00-21:00. Guests can also use the sauna (additional charge).",
        img: ['pool1', 'pool2', 'pool3', 'pool4', 'pool5', 'pool6'],
        id: 'pool'

      },
      {
        name: 'A restaurant',
        text: 'Magnolia Restaurant serves a daily buffet breakfast from 06:30-10:30. The restaurant is also open for business lunches or dinners, family celebrations and other events.',
        img: ['restoran1', 'restoran2', 'restoran3', 'restoran4', 'restoran5'],
        id: 'restaurant'

      },
      {
        name: "Bar",
        text: "The cozy Satellite Bar is open 24/7. Here guests can enjoy delicious coffee, a variety of cocktails, as well as snacks or hot meals. It is open 24/7.",
        img: ["bar1", 'bar2', 'bar3', 'bar4', 'bar5', 'bar6',],
        id: 'bar'

      },
      {
        name: "Gym",
        text: "To keep fit, the hotel has a fitness room. It is open 24/7.",
        img: ["gym1", "gym2", "gym3", "gym4", "gym5",],
        id: 'gym'

      },
      {
        name: "Billiard room",
        text: "A billiard room with a large TV will allow guests to while away their free time. It is open 24/7.",
        img: ["billiard1", "billiard2", "billiard3"],
        id: 'billiard'

      },
      {
        name: "Conference rooms",
        text: '<span class="fw-b">Small hall.</span> The hotel has a meeting room with an area of 41 sq.m. The maximum capacity of the hall is 16 people. The hall is equipped with a projector, screen, flipchart board.',
        text2: '<span class="fw-b">Big hall.</span> The hotel has a conference hall with an area of 63 sq.m for organizing presentations, seminars, trainings. The hall is equipped with a projector, screen, flipchart board. Maximum capacity in O-shape or classroom seating is 30 people, in theater style - 40 people.',
        img: ['conference1', 'conference2', 'conference3'],
        horizontal: true,

        id: 'conference'
      }
    ]
  },
  contacts: {
    title: "Contact us",
    adress: "100084, 6-8, Shivli street, Yunusabad district, Tashkent, Uzbekistan.",
    phone: "Tel.: ",
    form: {
      title: "Message",
      sub: "If you have any questions, please send us a message using the form below.",
      name: "Your name",
      email: "Your email",
      phone: "Phone number",
      message: "Message",
      button: "Send"
    }
  },
  news: {
    title: "Latest news",
    button: "More"
  }
}