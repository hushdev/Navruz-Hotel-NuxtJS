export default {
  meta: {
    title: '"Navruz Hotel" mehmonxonasi - rasmiy sayti',
    description: 'Iş va dam oliş uchun qulay mehmonxona Toshkentda birinchi raqamli'
  },
  errors: {
    404: "404 sahifasiga xush kelibsiz! Siz bu yerdasiz, chunki siz endi mavjud bo'lmagan yoki boshqa manzilga ko'chirilgan sahifaning manzilini kiritdingiz.",
    button: "Asosiy sahifani oching"
  },
  footer: {
    coder: '<a href="https://www.upwork.com/freelancers/~01aa7aa6602c9494dc" target="_blank" class="t-brown" >An.ildar</a> va <a href="https://kwork.ru/user/zednight13" class="t-brown" target="_blank" >Zednight</a> tomonidan ishlab chiqilgan',
    design: null
  },
  menu: [
    { name: "Boş sahifa", to: "/", exact: true },
    { name: "Bron qiliş", to: "/booking", exact: false },
    { name: "Biz haqimizda", to: "/about", exact: false },
    { name: "Xonalar", to: "/rooms", exact: false },
    { name: "Ob'ektlar", to: "/facilities", exact: false },
    { name: "Yangiliklar", to: "/news", exact: false },
    { name: "Kontaktlar ", to: "/contacts", exact: false },
  ],
  home: {
    offer: {
      title: 'Toshkentning markazida joylashgan shinam mehmonxona',
      button: "Bron qiling",
    },
    about: {
      title: 'Biz haqimizda ',
      title2: 'Mehmonxona - <span class="t-brown">Navruz Hotel</span>',
      text: [
        'Şinam va qulay Navruz Hotel Tashkent mehmonxonasi şahar markazida joylaşgan va o’z eshiklarini mehmonlar uchun 2018 yilda ochgan.',
        'Mehmonxonada  qulay yaşaş uçun 130 ta har xil toifadagi xonalar zamonaviy jihozlar bilan jihozlangan. Har bir xonada smart televizor, kiçik muzlatkiç, konditsioner, Wi-Fi internet va xavsiz seyf mavjud. ',
        'Mehmonlar uchun konferentsiya zali, bar, restoran, bilyard o’ynash honasi, ochiq hovuz, sauna va shinam hovli faoliyat yuritadi. '
      ],
      link: 'Ko\'proq bilish',
      item1: 'Xonaning arzon narxi',
      item2: 'Dam olishga yashil maydon',
      item3: "Bepul Wi-Fi",
      item4: 'Malakali xodimlar'
    },
    rooms: {
      title: 'Xonalar'
    },
    facilities: {
      title: "Ob'ektlar",
    
      items: [
        { name: "Suzish xavzasi", img: "pool.png", anchor: "#pool" },
        { name: "Bar", img: "bar.png", anchor: "#bar" },
        { name: "Sportzal", img: "fitnes.png", anchor: "#gym" },
        { name: "Billiard xonasi", img: "billiard.png", anchor: "#billiard" },
        { name: "Restoran", img: "restoran.jpg", anchor: "#restaurant" },
        { name: "Konferents-zallar", img: "max-hall.jpg", anchor: "#conference" },
      ],
      button: "Ko'proq"
    },
    reviews: {
      title: "Bizning mehmonlarimizning sharhlari",
      items: [
        { name: "Kiril K.", text: "Ajoyib mehmonxona. Juda muloyim xodimlar. Yangi raqamlar", img: 'review-kirill.png' },
        { name: "Vadim K.", text: "Ajoyib mehmonxona! Tavsiya eting! Yaxshi darajali, xushmuomala xodimlar. Va bu yangi mehmonxona, bu muhim", img: "review-vadim.png" },
        { name: "Stanislav R.", text: "Yaxshi! Chiroyli joy! Do'stona va tezkor xizmat!", img: "review-stanislav.png" },
        { name: "Danil", text: "Yangi mehmonxona, tozalik, qulaylik, yordamchi xodimlar - hammasi zo'r! Siz mehmonxonaga ishonch bilan 4 yulduzni berishingiz mumkin", img: "review-danil.png" },
        { name: "Svetlana O.", text: "Ajoyib imkoniyatlar va yaxshi nonushta bilan ajoyib mehmonxona", img: "review-svetlana.png" },
      ]
    },
    news: {
      title: "So'ngi yangiliklar",
      button: "Ko'proq"
    }
  },
  booking: {
    title: "Bron qiliş"
  },
  about: {
    title: 'Biz haqimizda',
    title2: '',
    items: [
      '<span class="fw-b">Şinam va qulay </span> Navruz Hotel Tashkent mehmonxonasi şahar markazida joylaşgan va o’z eshiklarini mehmonlar uchun 2018 yilda ochgan.',
      '<span class="fw-b">Mehmonxonada  qulay yaşaş uçun 130 ta </span> har xil toifadagi xonalar zamonaviy jihozlar bilan jihozlangan. Har bir xonada smart televizor, kiçik muzlatkiç, konditsioner, Wi-Fi internet va xavsiz seyf mavjud. ',
      '<span class="fw-b">Mehmonlar uchun </span> konferentsiya zali, bar, restoran, bilyard o’ynash honasi, ochiq hovuz, sauna va shinam hovli faoliyat yuritadi. '
    ],
  },
  rooms: {
    title: "Xonalar",
    button: "Bron qilish",
    items: [
      {
        name: "Standart King",
        text: "Bu toifadagi barça xonalar katta o’lçamdagi yotoqlar, smart televizor, telefon, kiçik muzlatkiç seyf, kiyimlar uçun şkaf, alohida işlaş uçun joy va dush kabinasi urnatilingan. Xonaning umumiy maydoni 20m2 . Xona narxiga nonuşta, alkogolsiz içimliklar bilan mini bar, sport zali va yozgi oçiq hovuz kiradi.    ",
        img: ["king1", "king2", "king3", "king4", "king5", "king6"],
        id: "king",
        link: "booking?room-type=139605",
      },
      {
        name: "Standard Twin",
        text: "Bu toifadagi xonalar ikkita alohida yotoq va konditsioner, televizor, telefon, seyf va hammomiga dush kabinasi urnatilingan. Yotoqlarga zamonaviy ortopedik matraslar to’şalgan. Xonaning umumiy maydoni 20m2 bo’lib, uning narxiga nonuşta, alkogolsiz içimliklar bilan mini bar, sport zali va yozgi oçiq hovuz kiradi.   ",
        img: ['twin1', 'twin2', 'twin3', 'twin4'],
        id: "twin",
        link: "booking?room-type=139604",
      },
      {
        name: "Suite",
        text: "Bu toifadagi xona ikki xonadan iborat bo’lib og’ir o’tgan iş kuningizni xonaning mehmonxonasida dam olib yoki biznes uçraşuvlaringizni rejalaştirsangiz bo’ladi. Keyingi xona esa yotoq xona.  Xonaning umumiy maydoni 40m2. Alohida ço’miliş uçun vanna xonasi mavjud va unda hamma kerakli bo’lgan aksessuarlar bilan ta’minlangan. ",
        img: ["suite1", "suite2", "suite3", "suite4", "suite5", "suite6", "suite7", "suite8", "suite9", "suite10"],
        id: "suite",
        link: "booking?room-type=139607",
      },
      {
        name: "Economy Room",
        text: "Bu toifadagi xona o’zining ihçamligi bilan ajralib turadi va hamma qulayliklarni o’z içiga oladi. Uning umumiy maydoni 12m2 bo’lib, unda bir kişilik yotoq, qulay jihozlar, televizor, telefon, seyf , kiçik muzlatkiç bilan jihozlangan va hammomi dush kabinasi urnatilingan. Uning narxiga nonuşta, alkogolsiz içimliklar bilan mini bar, sport zali va yozgi oçiq hovuz kiradi. ",
        img: ["econom1", "econom2", "econom3"],
        id: "econom",
        link: "booking?room-type=139606",
      },
      {
        name: "Superior King room",
        text: "Qulay yotoq bilan jihozlangan keng va şinam xona o’z içiga: smart televizor, telefon, kiçik muzlatkiç seyf, kiyimlar uçun şkafni  oladi. Xammomda vanna urnatilingan. Xonaning umumiy maydoni 25m2. Uning narxiga nonuşta, alkogolsiz içimliklar bilan mini bar, sport zali va yozgi oçiq hovuz kiradi.  ",
        img: ["superior1", "superior2", "superior3"],
        id: "superior",
        link: "booking?room-type=152646",
      }
    ]
  },
  facilities: {
    title: "Ob'ektlar",
    items: [
      {
        name: "Oçiq hovuz",
        text: "Yoz paytlarida  oçiq hovuzda ço’miliş yoki oftobda toblaniş imkoniyati bor. Yozgi oçiq hovuz iş vaqti soat 09:00-21:00. Şuningdek mehmonlar saunadan ham foydalanişlari mumkin (qo’şimça to’lov).",
        img: ['pool1', 'pool2', 'pool3', 'pool4', 'pool5', 'pool6'],
        id: 'pool'

      },
      {
        name: 'Restoran',
        text: 'Magnoliya restoranida soat 06:30-10:30 mehmonlar uçun nonuşta yoziladi. Şuningdek, restoran biznes tuşlik yoki keçki ovqat, oilaviy bayramlar va boşqa tadbirlar uçun har doim oçiq.  ',
        img: ['restoran1', 'restoran2', 'restoran3', 'restoran4', 'restoran5', 'restoran6', 'restoran7', 'restoran8', 'restoran9', 'restoran10', 'restoran11', 'restoran12', 'restoran13', 'restoran14'], 
        id: 'restaurant'

      },
      {
        name: "Bar",
        text: "Mehmonxonadagi bar - Satellite 24/7 işlaydi. Bu yerda mehmonlar şirin qahva, har xil kokteyl va şuningdek issiq ovqatlar buyurtma qilişlari mumkin. ",
        img: ["bar1", 'bar2', 'bar3', 'bar4', 'bar5', 'bar6', 'bar7', 'bar8', 'bar9', 'bar10','bar11','bar12','bar13',],
        id: 'bar'

      },
      {
        name: "Fitnes zal",
        text: "Jismoniy holatni yaxşi uşlab turiş uçun mehmonxonada fitness zal taşkil qilingan va u keça-kunduz işlaydi.",
        img: ["gym1", "gym2", "gym3",],
        id: 'gym',


      },
      {
        name: "Bilyard",
        text: "Katta televizorga ega bo’lgan bilyard xonasi mehmonlarni vaqtini maroqli o’tişiga yordam beradi va u keça-kunduz işlaydi. ",
        img: ["billiard1", "billiard2", "billiard3"],
        id: 'billiard'

      },
      {
        name: "Konferentsia zallari",
        text: '<span class="fw-b">KIÇIK ZAL.</span> Mehmonxonada maydoni 41m2   ega 16 kişilik yig’iliş zali mavjud. Yig’ilişlar zali proyektor, flipçart taxtasi bilan jihozlangan. ',
        text2: '<span class="fw-b">KATTA ZAL .</span> Mehmonxonada prezentatsiyalar, seminarlar, treninglar, taşkil qiliş uçun maydoni 63m2 ega bo’lgan katta konferentsiya zali mavjud. Yig’ilişlar zali proyektor, flipçart taxtasi bilan jihozlangan. Yig’ilişlar xonasining maksimal sig’imi 30-40 kişidan iborat.',
        img: ['conference1', 'conference2', 'conference3'],
        horizontal: true,

        id: 'conference'
      }
    ]
  },
  contacts: {
    title: "Kontaktlar",
    adress: "100084, 6-8, Şivli ko'çasi, Ynusobod tumani, Toşkent, O’zbekiston. ",
    phone: "Tel.: ",
    form: {
      title: "Habar yuboriş",
      sub: "Agarda sizda biron bir savol bo’lsa, bizga quyidagi şakl orqali habar yuboring. ",
      name: "Ismingiz",
      email: "Sizning email",
      phone: "Telefon raqami",
      message: "Habar",
      button: "Yuboriş"
    },
    contact: "Xabar yubormoq"
  },
  news: {
    title: "Yangiliklar",
    button: "Ko'proq"
  },
  article: {
    error: 'Blog nashr etilmoqda ...',
    button: "Orqaga"
  },
  bar: {
    title: "Меню",
    title2: "Барная карта",
    currency: "Сум",
    items: [
      {
        title: "Салаты",
        img: "salads",
        list: [
          { name: "Вителло тоннато", price: "132 000", desc: "(Тонко нарезанный ростбиф, приготовленный по британскому рецепту, соус тоннато, черри, руккола, каперсы)" },
          { name: "Капрезе", price: "55 000", desc: "(Сыр моцарелла, спелые помидоры, соус песто, кресс салат, крем бальзамик)" },
          { name: "Салат с телячьей вырезкой", price: "86 000", desc: "(Телячья вырезка, жаренная на гриле, свежие листья салата, помидоры черри, маслины, соус кисло-сладкий, сыр пармезан)" },
          { name: "Салат Salmon", price: "115 000", desc: "(Микс салат, заправленный французским соусом, помидоры черри, апельсины, лосось в соусе унаги в кунжутной панировке)" },
          { name: "Салат с ростбифом", price: "75 000", desc: "(Тонко нарезанный ростбиф, приготовленный по британскому рецепту, запеченные овощи, микс салат, соус блю чиз, помидоры черри)" },
        ]
      },
      {
        title: "Горячие закуски",
        img: "hot",
        list: [
          {
            name: "Сыр на гриле с сицилийским салатом", price: "85 000"
          },
          {
            name: "Куриные крылышки BBQ", price: "43 000"
          },
          {
            name: "Гренки чесночные", price: "12 000"
          },
          {
            name: "Оладьи из кабачков", price: " 23 000"
          },
          {
            name: "Пивные креветки с коктейльным соусом", price: "98 000"
          },
          {
            name: "Жаренный картофель с грибами", price: "22 000"
          },
          {
            name: "Овощи на гриле", price: "24 000"
          }
        ]
      },
      {
        title: "Супы",
        img: "soups",
        list: [
          { name: "Крем суп из чечевицы", price: "18 000" },
          { name: "Крем суп Пармантье с грибами", price: "28 000", desc: "(Картофель, шампиньоны)" },
          { name: "Шурпа из баранины", price: "33 000", desc: "(Узбекский национальный суп из баранины с овощами)" },
          { name: "Суп карри", price: "35 000", desc: "(Суп карри, с шампиньонами и куриными фрикадельками, сливки)" }
        ]
      },
      {
        title: "Паста",
        img: "pasta",
        list: [
          { name: "Спагетти с чернилами каракатицы", price: "85 000", desc: "(паста под сливочным соусом, лосось)" },
          { name: "Спагетти Болоньез", price: "55 000 ", desc: "(паста с классическим итальянским соусом из говяжьего фарша, на основе томатного соуса)" },
          { name: "Пенне Арабьята", price: "45 000", desc: "(паста с соусом на основе томатов, томаты вяленые, базилик, сельдерей и чили перец)" },
          { name: "Феттучини Альфредо", price: "54 000", desc: "(паста с соусом из куриной грудки и шампиньонов в сливочном соусе)" },
          { name: "Гречневая лапша с говядиной и овощами", price: "81 000" }
        ]
      },
      {
        title: "Горячие блюда",
        img: "hot2",
        list: [
          { name: "Лосось с пюре из брокколи", price: "160 000", desc: "(Филе лосося, жаренное с пряными травами, пюре из брокколи, спаржа, черри, соус Песто)" },
          { name: "Лангеты из говядины с сальсой", price: "100 000", desc: "(Нежные кусочки телятины, острая сальса с ананасом, руккола, черри, крем бальзамик, соус блю чиз)" },
          { name: "Куриная грудка с цуккини на гриле", price: "65 000", desc: "(Филе куриной грудки, подается с кабачками на гриле и сливочно-соевым соусом)" },
          { name: "Стейк миньон с соусом пепер", price: "130 000", desc: "(Вырезка говяжья, жаренная с пряными травами и специями, жареный картофель с кинзой, соус пепер)" },
          { name: "Стейк T-bone", price: "165 000", desc: "(Нежная говядина, жаренная с пряными травами и специями, спаржа на гриле, грибной соус)" },
          { name: "Стейк Оссобуко", price: "115 000", desc: "(Тушеная телячья голяшка, жаренные овощи, соус Демиглас)" }
        ]
      },
      {
        title: "Пицца/Бургеры",
        img: "pizza",
        list: [
          { name: "Пицца Жульен", price: "71 000" },
          { name: "Пицца Маргарита", price: "60 000" },
          { name: "Пицца Аль-Сальмоне", price: "120 000" },
          { name: "Пицца Пепперони", price: "65 000" },
          { name: "Гамбургер", price: "50 000" },
          { name: "Чизбургер", price: "55 000" },
          { name: "Чиккен бургер", price: "40 000" },
          { name: "Клаб сэндвич", price: "65 000" }
        ]
      }
    ],
    items2: [
      {
        title: "Горячие напитки",
        img: "hotDrinks",
        multiList: [
          {
            category: "Кофе",
            list: [
              { name: "Американо", price: "20 000" },
              { name: "Эспрессо", price: "20 000" },
              { name: "Лонг-Блэк", price: "20 000", desc: "(двойной эспрессо)" },
              { name: "Капучино", price: "25 000" },
              { name: "Кан-Панна", price: "25 000", desc: "(эспрессо, взбитые сливки, какао)" },
              { name: "Латте-макиато", price: "25 000", desc: "(эспрессо, молоко)" },
              { name: "Кофе-Yupp", price: "28 000", desc: "(эспрессо, молоко, сироп ягодный)" },
              { name: "Кофе Раф", price: "30 000", desc: "(эспрессо, молоко, сливки, сироп Ваниль, какао)" },
              { name: "Кофе по-венски", price: "30 000", desc: "(американо, взбитые сливки, шоколадный топпинг, тертый шоколад)" },
              { name: "Мокачино с Nutella", price: "30 000", desc: "(эспрессо, молоко, шоколад Нателла, шоколадный топпинг)" },
              { name: "Флэт-Уайт", price: "32 000", desc: "(двойной эспрессо, молоко, сиропы: лесной орех, карамель)" },
              { name: "Фисташковый капучино", price: "35 000", desc: "(эспрессо, молоко, сироп фисташка, фисташка молотая)" },
            ]
          },
          {
            category: "Чаи",
            list: [
              { name: "Черный чай", price: "8 000" },
              { name: "Earl-Grey", price: "10 000" },
              { name: "English Breakfast", price: "10 000 " },
              { name: "Чай зеленый", price: "10 000 " },
              { name: "Чай зеленый с жасмином", price: "15 000" },
              { name: "Травяной чайи", price: "15 000", desc: "(чабрец, мелисса, ромашка, тимьян)" },
              { name: "Чай-Латте", price: "25 000", desc: "(молоко, мед, гвоздика, корица)" },
              { name: "Чай Navruz", price: "25 000", desc: "(розмарин, жасмин, апельсин, лимон, гвоздика, сахарный сироп)" },
              { name: "Фруктовый с каркаде", price: "30 000", desc: "(каркадэ, апельсин, сауэр-микс, яблоко, мята, курага, сироп маракуйя)" },
              { name: "Имбирь-Облепиха", price: "40 000", desc: "(имбирь, облепиха, мед, апельсиновый сок, лимон, мята)" },
            ]
          },
          {
            category: "Чаи от Althaus",
            list: [
              { name: "Зеленый: Sencha Senpai", price: "15 000" },
              { name: "Зеленый: Jasmine Ting Yuan", price: "15 000" },
              { name: "Черный: Asam Meleng", price: "15 000" },
              { name: "Черный: English Breakfast St. Andrews", price: "15 000" },
              { name: "Черный: Royal Earl Grey", price: "15 000" },
            ]
          },
          {
            category: "Другое",
            list: [
              { name: "Напиток Last Fall", price: "13 000", desc: "(молоко, сироп клена, корица)" },
              { name: "Сладкий какао", price: "25 000", desc: "(молоко, какао, печенье)" },
            ]
          }
        ]
      },
      {
        title: "Прохладительные напитки",
        img: "iceDrinks",
        list: [
          { name: "Raspberry-Sauer", price: "17 000", desc: "(апельсиновый сок, сауэр-микс, малиновый сироп, мята, яичный белок)" },
          { name: "Navruz Fizz", price: "22 000", desc: "(сироп личи, каркаде, сироп маракуя, вода с газом)" },
          { name: "Orange Berry", price: "40 000", desc: "(апельсин, пюре из ягод, сироп ягодный, сауэр-микс, вода с газом)" }
        ]
      },
      {
        title: "Алкогольные напитки",
        img: "alcoDrinks",
        list: [
          { name: "Bloody-Mary", price: "35 000", desc: "(водка, сауэр-микс, мед, томатный сок, Ангостура Биттер)" },
          { name: "Cuba-Libre", price: "45 000", desc: "(ром на выбор: Bacardi, J.Wray; сауэр-микс, кока-кола)" },
          { name: "Cosmopolitan-Cherry", price: "45 000 ", desc: "(водка, вишневый сок, сауэр-микс, куантро, вишневый сироп, Ангостура Биттер)" },
          { name: "Sweet-Passion", price: "45 000", desc: "(ром светлый, апельсин, сироп маракуйя, сироп карамель, сироп фундук, сауэр-микс, яичный белок)" },
          { name: "White Russian Special", price: "50 000", desc: "(водка, Бэйлис, эспрессо, сливки)" },
          { name: "Clover-Club", price: "55 000", desc: "(джин на выбор: Beefeater, Gordon’s, Bombay Sapphire; сауэр-микс, малиновый сироп, яичный белок, Ангостура Биттер)" },
          { name: "Gin-Tonic", price: "75 000", desc: "(джин на выбор: Beefeater, Gordon’s, Bombay Sapphire; тоник; на выбор: лайм-лимон, розмарин)" },
          { name: "Sidecar", price: "75 000", desc: "(коньяк Hennesy V.S., куантро, сауэр-микс)" },
        ]
      },
      {
        title: "Милк шейки",
        img: "milkShakes",
        list: [
          { name: "Фрик-шейк Ginger Cookie", price: "22 000", desc: "(молоко, мороженое, сироп имбирное печенье, печенье, взбитое сливки)" },
          { name: "Карамельный шейк", price: "25 000", desc: "(молоко, мороженое, сироп карамель, сироп соленая карамель, взбитые сливки)" },
          { name: "Шоколадный шейк", price: "30 000", desc: "(молоко, шоколадный топпинг, мороженое, шоколад Нателла)" },
          { name: "Банановый шейк", price: "40 000", desc: "(молоко, банановый сироп, банан, мороженое, взбитые сливки)" },
        ]
      }
    ]
  }
}