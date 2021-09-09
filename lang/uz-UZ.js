export default {
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
      title: ['Ish va dam olish', 'uchun qulay mehmonxona', 'Toshkentda birinchi raqamli'],
      button: "Bron qiling",
      text: "Biz ijtimoiy tarmoqlarda"
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
        { name: "Sportzal", img: "fitnes.png", anchor: "#fitness" },
        { name: "Billiard xonasi", img: "billiard.png", anchor: "#billiard" },
        { name: "Restoran", img: "restoran.jpg", anchor: "#restoran" },
        { name: "Konferents-zallar", img: "max-hall.jpg", anchor: "#hall" },
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
        img: ["suite1", "suite2", "suite3", "suite4", "suite5", "suite6", "suite7", "suite8"],
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
        link: "booking?room-type=139606",
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
        img: ['restoran1', 'restoran2', 'restoran3', 'restoran4', 'restoran5'],
        id: 'restaurant'

      },
      {
        name: "Bar",
        text: "Mehmonxonadagi bar - Satellite 24/7 işlaydi. Bu yerda mehmonlar şirin qahva, har xil kokteyl va şuningdek issiq ovqatlar buyurtma qilişlari mumkin. ",
        img: ["bar1", 'bar2', 'bar3', 'bar4', 'bar5', 'bar6',],
        id: 'bar'

      },
      {
        name: "Fitnes zal",
        text: "Jismoniy holatni yaxşi uşlab turiş uçun mehmonxonada fitness zal taşkil qilingan va u keça-kunduz işlaydi.",
        img: ["gym1", "gym2", "gym3", "gym4", "gym5",],
        id: 'gym',
        id: 'billiard'


      },
      {
        name: "Bilyard",
        text: "Katta televizorga ega bo’lgan bilyard xonasi mehmonlarni vaqtini maroqli o’tişiga yordam beradi va u keça-kunduz işlaydi. ",
        img: ["billiard1", "billiard2", "billiard3"]
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
    }
  },
  news: {
    title: "Yangiliklar",
    button: "Ko'proq"
  }
}