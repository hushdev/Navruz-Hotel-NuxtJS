export default {
  meta: {
    title: 'Navruz hotel - official website of the Navruz hotel in Tashkent',
    description: 'Comfortable hotel for business and leisure. №1 in Tashkent.'
  },
  errors: {
    404: "Welcome to the 404 page! You are here because you entered the address of a page that no longer exists or has been moved to a different address.",
    button: "Open the main page"
  },
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
      title: 'Cozy hotel for business and leisure in the business center of Tashkent',
      button: "Book",
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
        { name: "Gym", img: "fitnes.png", anchor: "#gym" },
        { name: "Billiard room", img: "billiard.png", anchor: "#billiard" },
        { name: "A restaurant", img: "restoran.jpg", anchor: "#restaurant" },
        { name: "Conference rooms", img: "max-hall.jpg", anchor: "#conference" },
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
        img: ["suite1", "suite2", "suite3", "suite4", "suite5", "suite6", "suite7", "suite8", "suite9", "suite10"],
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
        link: "booking?room-type=152646",
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
        img: ['restoran1', 'restoran2', 'restoran3', 'restoran4', 'restoran5', 'restoran6', 'restoran7', 'restoran8', 'restoran9', 'restoran10', 'restoran11', 'restoran12', 'restoran13', 'restoran14'],
        id: 'restaurant'

      },
      {
        name: "Bar",
        text: "The cozy Satellite Bar is open 24/7. Here guests can enjoy delicious coffee, a variety of cocktails, as well as snacks or hot meals. It is open 24/7.",
        img: ["bar1", 'bar2', 'bar3', 'bar4', 'bar5', 'bar6', 'bar7', 'bar8', 'bar9', 'bar10', 'bar11', 'bar12', 'bar13',],
        id: 'bar'

      },
      {
        name: "Gym",
        text: "To keep fit, the hotel has a fitness room. It is open 24/7.",
        img: ["gym1", "gym2", "gym3",],
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
    },
    contact: "Contact us"
  },
  news: {
    title: "Latest news",
    button: "More"
  },
  article: {
    error: 'The blog is in the process of being published ...',
    button: "Back"
  },
  bar: {
    title: "Menu",
    title2: "Bar card",
    currency: "UZS",
    items: [
      {
        title: "Salads",
        img: "salads",
        list: [
          { name: "Vitello tonnato", price: "132 000", desc: "(Thinly sliced roast beef, cooked by British recipe, tomato sauce, cherry tomatoes, arugula, capers)" },
          { name: "Caprese", price: "65 000", desc: "(Mozzarella cheese, ripe tomatoes, pesto sauce, watercress, balsamic cream)" },
          { name: "Veal tenderloin salad", price: "86 000", desc: "(Grilled veal fillet, fresh lettuce, cherry tomatoes, olives, sweet and sour sauce, parmesan cheese)" },
          { name: "Niçoise Salad", price: "80 000", desc: "(Traditional French salad, boiled potatoes, eggs, capers, green peas and lettuce)" },
          { name: "Salmon salad", price: "115 000", desc: "(Mix salad dressed with French sauce, cherry tomatoes, oranges, salmon in unagi sauce in sesame breading)" },
          { name: "Roast beef salad", price: "80 000", desc: "(Thinly sliced roast beef, cooked by British recipe, baked vegetables, mix salad, blue sauce, cherry tomatoes)" },
          { name: "Greek Salad", price: "65 000", desc: "(Mix salad with fresh vegetables, arugula, feta cheese, olives, dressed with olive oil and balsamic vinegar)"},
          {name: "Caesar Chiken Salad", price: "65 000", desc: "(Crispy romaine lettuce leaves, cherry tomatoes, croutons, chicken fillet, Caesar sauce, parmesan)"}
        ]
      },
      {
        title: "HOT APPETIZERS",
        img: "hot",
        list: [
          {
            name: "Grilled cheese with Sicilian salad", price: "85 000"
          },
          {
            name: "BBQ chicken wings", price: "55 000"
          },
          {
            name: "Garlic croutons", price: "28 000"
          },
          {
            name: "Beer prawns with cocktail sauce", price: "98 000"
          },
          {
            name: "Fried potatoes with mushrooms", price: "25 000"
          },
          {
            name: "Grilles vegetables", price: "24 000"
          }
        ]
      },
      {
        title: "Soups",
        img: "soups",
        list: [
          { name: "Creamy lentil soup", price: "20 000" },
          { name: "Creamy mushroom soup", price: "28 000", desc: "(Loaded with lots of mushrooms and potatoes)" },
          { name: "Curry soup", price: "35 000", desc: "(Curry soup with mushrooms and chicken meatballs, cream)" },
          { name: "Bouillabaisse soup", price: "75 000", desc: "(Tomato soup, salmon, pike perch, shrimps, mussels, squid, white wine)" },
        ]
      },
      {
        title: "Pasta",
        img: "pasta",
        list: [
          { name: "Black spaghetti with salmon", price: "105 000", desc: "(pasta with creamy sauce, salmon)" },
          { name: "Spaghetti Bolognese", price: "75 000 ", desc: "(pasta with classic Italian minced beef sauce, based on tomato sauce)" },
          { name: "Penne Arabyata", price: "65 000", desc: "(pasta with tomato-based sauce, sundried tomatoes, basil, celery and chili peppers)" },
          { name: "Fettuccine Alfredo", price: "65 000", desc: "(pasta with chicken breast and mushrooms sauce in a creamy sauce)" },
          { name: "Asparagus risotto", price: "95 000", desck: "(Arborio Italian rice, green asparagus, white wine, saffron)"},
          { name: "Buckwheat noodles with beef and vegetables", price: "85 000", desc: "(fragrant buckwheat noodles with tender beef, fresh vegetables and soy sauce)"}
        ]
      },
      {
        title: "Main courses",
        img: "hot2",
        list: [
          { name: "T-bone Steak", price: "360 000", desc: "(Nourishing steak, which got its name from the T-shaped bone. It separates two different parts of the meat in it: the strip loin from the thin edge and the tender meat of the middle part of the tenderloin. Served with grilled asparagus, mushroom sauce)" },
          { name: "Ribeye Steak", price: "345 000", desc: "(Rib-eye steaks are tender, juicy and very flavorful, with just the right amount of fat. Coming from the lightly worked upper rib cage area which spans from the sixth to twelfth ribs of the cattle. Potato crockets, BBQ sauce)" },
          { name: "New York Steak", price: "325 000", desc: "(A steak from a short loin of marbled beef is considered premium. A thin layer of fat makes the meat juicier and more flavorful. Served with grilled vegetables, pepper sauce)" },
          { name: "Ossobuco Steak", price: "185 000", desc: "(Ossobuco is a traditional Italian dish of stewed veal shank with vegetables in Demiglas sauce. From the Italian Ossobuco literally means \"hollow bone\")" },
          { name: "Beef ribs with mustard sauce", price: "225 000", desc: "(For two person) (Juicy, off-the-bone meat baked with herbs, fried potatoes with mushrooms, mustard sauce)" },
        ]
      },
      {
        title: "Pizza & Burgers",
        img: "pizza",
        list: [
          { name: "Pizza Julien", price: "85 000" },
          { name: "Pizza Margarita", price: "75 000" },
          { name: "Pizza Al Salmone", price: "120 000" },
          { name: "Pizza Pepperoni", price: "80 000" },
          { name: "Hamburger", price: "55 000" },
          { name: "Cheeseburger", price: "60 000" },
          { name: "Chicken burger", price: "45 000" },
          { name: "Club sandwich", price: "65 000" }
        ]
      }
    ],
    items2: [
      {
        title: "Tea / Coffee",
        img: "hotDrinks",
        list: [
          {name: "Espresso", price: "20 000"},
          {name: "Americano", price: "20 000"},
          {name: "Cappuccino", price: "25 000"},
          {name: "Latte", price: "25 000"},
          {name: "Ginger and Sea buckthirns Tea", price: "40 000"},
          {name: "Navruz special Tea", price: "25 000", desc: "Rosemary, jasmine, citruses, honey and warm spices"},
          {name: "Berries Pot Tea", price: " 40 000"},
          {name: "Fruit Bowl Tea", price: "30 000"},
          {name: "Classic Tea", price: "10 000", desc: "Black, earl grey, green and jasmine"}
        ]
      },
      {
        title: "Cold drinks",
        img: "iceDrinks",
        list: [
          {name: "Raspberry Sour", price: "30 000", desc: "(Orange and lemon juices, raspberry syrup, egg white optional)"},
          {name: "Well Behaved", price: "30 000", desc: "(Cranberry juice, mango puree, coconut syrup, lemon juice, soda)"},
          {name: "Coca Cola, Fanta, Sprite 0,25", price: "10 000"},
          {name: "Schweppes 0,33", price: "25 000"},
          {name: "Energy Drink 18+", price: "15 000"},
          {name: "Borjomi mineral water", price: "30 000"},
          {name: "Fresh orange juice", price: "35 000"},
          {name: "Fresh carrot juice", price: "15 000"},
          {name: "Fresh apple juice", price: "25 000"}
        ]
      },
      {
        title: "Alcohol Cocktails",
        img: "alcoDrinks",
        list: [
          {name: "La Villa Negroni", price: "65 000", desc: "(Gin, sweet vermouth, Aperol, Porto and sparkling wine)"},
          {name: "French 76", price: "55 000", desc: "(Gin, elderberry liquor, green apple syrup, sparkling wine)"},
          {name: "Buckwheat sour", price: "55 000", desc: "(Buckwheat infused vodka, lemon juice, ginger syrup, egg white)"},
          {name: "Lemon Cake Sour", price: "70 000", desc: "(Scotch whiskey, Limoncello, lemon juice, egg white and vanilla syrup"},
          {name: "Copper nail", price: "70 000", desc: "(Fine Scotch whiskey, Drambuie and Cynar liquors)"},
          {name: "Unami Margarita", price: "65 000", desc: "(Tequila blanca, coconut liquor, mango puree, peach and lime juices)"},
          {name: "Nobel Espresso", price: "60 000", desc: "(Spiced rum, cacao liquor, ginger cookie syrup and freshly brewed espresso)"},
          {name: "Magic strings of Tanbour", price: "55 000", desc: "(Matured brandy, cacao liquor, banana puree, lemon juice)"},
        ]
      },
      {
        title: "Milkshakes",
        img: "milkShakes",
        list: [
          { name: "Freak’ Shake Ginger Cookie", price: "40 000", desc: "(Milk, ice cream, ginger cookie syrup, cookie, whipped cream)" },
          { name: "Caramel Shake", price: "40 000", desc: "(Milk, ice cream, caramel syrup, salt caramel syrup, whipped cream)" },
          { name: "Chocolate shake", price: "40 000", desc: "(Milk, chocolate topping, ice cream, Nutella chocolate)" },
          { name: "Banana Shake", price: "40 000", desc: "(Milk, banana syrup, banana, ice cream, whipped cream)" },
        ]
      }
    ]
  }
}