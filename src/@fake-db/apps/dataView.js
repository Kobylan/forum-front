import mock from "../mock"
export const dataList = [
  {
    id: 1,
    order_status: "on hold",
    name: "Apple Watch series 4 GPS",
    category: "Computers",
    price: "$69.99",
    popularity: { popValue: "97", color: "success" },
    img: require("../../assets/img/elements/apple-watch.png"),
    actions: ""
  },
  {
    id: 2,
    popularity: { popValue: "83", color: "success" },
    img: require("../../assets/img/elements/iphone-x.png"),
    order_status: "delivered",
    name: "Beats HeadPhones",
    category: "Computers",
    price: "$69.99",
    actions: ""
  },
  {
    id: 3,
    price: "$199.99",
    popularity: { popValue: "57", color: "warning" },
    img: require("../../assets/img/elements/homepod.png"),
    order_status: "canceled",
    name: "Altec Lansing - Bluetooth Speaker",
    category: "Audio",
    actions: ""
  },
  {
    id: 4,
    img: require("../../assets/img/elements/ipad-pro.png"),
    order_status: "delivered",
    name: "Altec Lansing - Bluetooth Speaker",
    category: "Computers",
    price: "$199.99",
    popularity: { popValue: "65", color: "primary" },
    actions: ""
  },
  {
    id: 5,
    category: "Fitness",
    price: "$199.99",
    popularity: { popValue: "87", color: "success" },
    img: require("../../assets/img/elements/homepod.png"),
    order_status: "canceled",
    name: "Altec Lansing - Portable Bluetooth Speaker",
    actions: ""
  },
  {
    id: 6,
    category: "Computers",
    price: "$39.99",
    popularity: { popValue: "55", color: "warning" },
    img: require("../../assets/img/elements/ipad-pro.png"),
    order_status: "canceled",
    name: "Altec Lansing - Bluetooth Speaker",
    actions: ""
  },
  {
    id: 7,
    img: require("../../assets/img/elements/iphone-x.png"),
    order_status: "on hold",
    name: "Altec Lansing - Mini H2O Bluetooth Speaker",
    category: "Computers",
    price: "$39.99",
    popularity: { popValue: "99", color: "success" },
    actions: ""
  },
  {
    id: 8,
    img: require("../../assets/img/elements/ipad-pro.png"),
    order_status: "canceled",
    name: "Altec Lansing - Bluetooth Speaker",
    category: "Fitness",
    price: "$39.99",
    popularity: { popValue: "91", color: "success" },
    actions: ""
  },
  {
    id: 9,
    order_status: "delivered",
    name: "Altec Lansing - Mini H2O Bluetooth Speaker",
    category: "Fitness",
    price: "$39.99",
    popularity: { popValue: "52", color: "warning" },
    img: require("../../assets/img/elements/iphone-x.png"),
    actions: ""
  },
  {
    id: 10,
    category: "Computers",
    price: "$39.99",
    popularity: { popValue: "64", color: "primary" },
    img: require("../../assets/img/elements/apple-watch.png"),
    order_status: "canceled",
    name: "Altec Lansing - Mini H2O Bluetooth Speaker",
    actions: ""
  },
  {
    id: 11,
    img: require("../../assets/img/elements/iphone-x.png"),
    order_status: "canceled",
    name: "Altec Lansing - Bluetooth Speaker",
    category: "Fitness",
    price: "$99.99",
    popularity: { popValue: "93", color: "success" },
    actions: ""
  },
  {
    id: 12,
    popularity: { popValue: "75", color: "success" },
    img: require("../../assets/img/elements/apple-watch.png"),
    order_status: "pending",
    name: "Altec Lansing - Bluetooth Speaker",
    category: "Fitness",
    price: "$99.99",
    actions: ""
  },
  {
    id: 13,
    img: require("../../assets/img/elements/apple-watch.png"),
    order_status: "delivered",
    name: "Altec Lansing - Bluetooth Speaker",
    category: "Audio",
    price: "$99.99",
    popularity: { popValue: "88", color: "success" },
    actions: ""
  },
  {
    id: 14,
    order_status: "delivered",
    name: "Altec Lansing - Bluetooth Speaker",
    category: "Computers",
    price: "$99.99",
    popularity: { popValue: "86", color: "success" },
    img: require("../../assets/img/elements/ipad-pro.png"),
    actions: ""
  },
  {
    id: 15,
    order_status: "on hold",
    name: "Aluratek - Bluetooth Audio Receiver",
    category: "Computers",
    price: "$29.99",
    popularity: { popValue: "62", color: "primary" },
    img: require("../../assets/img/elements/iphone-x.png"),
    actions: ""
  },
  {
    id: 16,
    img: require("../../assets/img/elements/jbl-speaker.png"),
    order_status: "canceled",
    name: "Aluratek - Bluetooth Audio Transmitter",
    category: "Audio",
    price: "$29.99",
    popularity: { popValue: "51", color: "warning" },
    actions: ""
  },
  {
    id: 17,
    img: require("../../assets/img/elements/macbook-pro.png"),
    order_status: "pending",
    name: "Aluratek - iStream Bluetooth Audio Receiver",
    category: "Fitness",
    price: "$29.99",
    popularity: { popValue: "51", color: "warning" },
    actions: ""
  },
  {
    id: 18,
    order_status: "on hold",
    name: "Antec - Nano Diamond Thermal Compound",
    category: "Fitness",
    price: "$14.99",
    popularity: { popValue: "65", color: "primary" },
    img: require("../../assets/img/elements/macbook-pro.png"),
    actions: ""
  },
  {
    id: 19,
    order_status: "on hold",
    name: "Antec - SmartBean Bluetooth Adapter",
    category: "Computers",
    price: "$39.99",
    popularity: { popValue: "63", color: "primary" },
    img: require("../../assets/img/elements/iphone-x.png"),
    actions: ""
  },
  {
    id: 20,
    img: require("../../assets/img/elements/ipad-pro.png"),
    order_status: "on hold",
    name: "Basis - Peak Fitness and Sleep Tracker",
    category: "Fitness",
    price: "$199.99",
    popularity: { popValue: "72", color: "success" },
    actions: ""
  },
  {
    id: 21,
    img: require("../../assets/img/elements/ipad-pro.png"),
    order_status: "canceled",
    name: "Basis - Peak Fitness and Sleep Tracker",
    category: "Fitness",
    price: "$199.99",
    popularity: { popValue: "77", color: "success" },
    actions: ""
  },
  {
    id: 22,
    img: require("../../assets/img/elements/jbl-speaker.png"),
    order_status: "delivered",
    name: "Beats by Dr. Dre - 3' USB-to-Micro USB Cable",
    category: "Computers",
    price: "$19.99",
    popularity: { popValue: "65", color: "primary" },
    actions: ""
  },
  {
    id: 23,
    img: require("../../assets/img/elements/iphone-x.png"),
    order_status: "delivered",
    name: "Beats by Dr. Dre - Bike Mount for Pill Speakers",
    category: "Audio",
    price: "$49.99",
    popularity: { popValue: "60", color: "primary" },
    actions: ""
  },
  {
    id: 24,
    price: "$49.99",
    popularity: { popValue: "59", color: "warning" },
    img: require("../../assets/img/elements/homepod.png"),
    order_status: "on hold",
    name: "Beats by Dr. Dre - Support Stand for Speakers",
    category: "Audio",
    actions: ""
  },
  {
    id: 25,
    popularity: { popValue: "87", color: "success" },
    img: require("../../assets/img/elements/magic-mouse.png"),
    order_status: "on hold",
    name: "Beats by Dr. Dre - Support Stand for Pill Speakers",
    category: "Computers",
    price: "$49.99",
    actions: ""
  },
  {
    id: 26,
    img: require("../../assets/img/elements/magic-mouse.png"),
    order_status: "delivered",
    name: "Beats by Dr. Dre - Support Stand for Pill Speakers",
    category: "Fitness",
    price: "$49.99",
    popularity: { popValue: "95", color: "success" },
    actions: ""
  },
  {
    id: 27,
    img: require("../../assets/img/elements/macbook-pro.png"),
    order_status: "canceled",
    name: "Beats by Dr. Dre - Support Stand for Speakers",
    category: "Audio",
    price: "$49.99",
    popularity: { popValue: "98", color: "success" },
    actions: ""
  },
  {
    id: 28,
    category: "Fitness",
    price: "$49.99",
    popularity: { popValue: "75", color: "success" },
    img: require("../../assets/img/elements/jbl-speaker.png"),
    order_status: "delivered",
    name: "Beats by Dr. Dre - Support Stand",
    actions: ""
  },
  {
    id: 29,
    img: require("../../assets/img/elements/homepod.png"),
    order_status: "pending",
    name: "Beats by Dr. Dre - Pill 2.0 Bluetooth Speaker",
    category: "Audio",
    price: "$199.99",
    popularity: { popValue: "81", color: "success" },
    actions: ""
  },
  {
    id: 30,
    category: "Computers",
    price: "$199.99",
    popularity: { popValue: "91", color: "success" },
    img: require("../../assets/img/elements/macbook-pro.png"),
    order_status: "canceled",
    name: "Beats by Dr. Dre - Pill 2.0 Bluetooth Speaker",
    actions: ""
  },
  {
    id: 31,
    popularity: { popValue: "79", color: "success" },
    img: require("../../assets/img/elements/jbl-speaker.png"),
    order_status: "canceled",
    name: "Beats by Dr. Dre - Bluetooth Speaker",
    category: "Fitness",
    price: "$199.99",
    actions: ""
  },
  {
    id: 32,
    order_status: "on hold",
    name: "Beats by Dr. Dre - Portable Speaker + Headphones",
    category: "Fitness",
    price: "$699.99",
    popularity: { popValue: "95", color: "success" },
    img: require("../../assets/img/elements/ipad-pro.png"),
    actions: ""
  },
  {
    id: 33,
    price: "$199.99",
    popularity: { popValue: "90", color: "success" },
    img: require("../../assets/img/elements/jbl-speaker.png"),
    order_status: "on hold",
    name: "Beats by Dr. Dre - Pill 2.0 Portable Stereo Speaker",
    category: "Fitness",
    actions: ""
  },
  {
    id: 34,
    order_status: "delivered",
    name: "Bose® - SoundLink® III Cover",
    category: "Fitness",
    price: "$34.99",
    popularity: { popValue: "81", color: "success" },
    img: require("../../assets/img/elements/iphone-x.png"),
    actions: ""
  },
  {
    id: 35,
    img: require("../../assets/img/elements/magic-mouse.png"),
    order_status: "delivered",
    name: "Bose® - Bose® SoundLink® III Cover",
    category: "Computers",
    price: "$34.99",
    popularity: { popValue: "81", color: "success" },
    actions: ""
  },
  {
    id: 36,
    img: require("../../assets/img/elements/iphone-x.png"),
    order_status: "on hold",
    name: "Bose® - SoundLink® III Cover",
    category: "Audio",
    price: "$34.99",
    popularity: { popValue: "69", color: "success" },
    actions: ""
  },
  {
    id: 37,
    category: "Audio",
    price: "$24.99",
    popularity: { popValue: "95", color: "success" },
    img: require("../../assets/img/elements/ipad-pro.png"),
    order_status: "canceled",
    name: "Bose® - SoundLink® Mini Soft Cover",
    actions: ""
  },
  {
    id: 38,
    order_status: "on hold",
    name: "Bose® - SoundLink® Color Bluetooth Speaker",
    category: "Audio",
    price: "$129.99",
    popularity: { popValue: "100", color: "success" },
    img: require("../../assets/img/elements/apple-watch.png"),
    actions: ""
  },
  {
    id: 39,
    img: require("../../assets/img/elements/apple-watch.png"),
    order_status: "pending",
    name: "Bose® - SoundLink® Color Bluetooth Speaker",
    category: "Fitness",
    price: "$129.99",
    popularity: { popValue: "89", color: "success" },
    actions: ""
  },
  {
    id: 40,
    order_status: "pending",
    name: "Bose® - SoundLink® Color Bluetooth Speaker",
    category: "Computers",
    price: "$129.99",
    popularity: { popValue: "75", color: "success" },
    img: require("../../assets/img/elements/magic-mouse.png"),
    actions: ""
  },
  {
    id: 41,
    img: require("../../assets/img/elements/homepod.png"),
    order_status: "pending",
    name: "Bose® - SoundLink® Color Bluetooth Speaker",
    category: "Fitness",
    price: "$129.99",
    popularity: { popValue: "54", color: "warning" },
    actions: ""
  },
  {
    id: 42,
    popularity: { popValue: "98" },
    img: require("../../assets/img/elements/jbl-speaker.png"),
    order_status: "delivered",
    name: "Bose® - SoundLink® Color Bluetooth Speaker",
    category: "Computers",
    price: "$129.99",
    actions: ""
  },
  {
    id: 43,
    price: "$24.99",
    popularity: { popValue: "95", color: "success" },
    img: require("../../assets/img/elements/ipad-pro.png"),
    order_status: "pending",
    name: "Bose® - SoundLink® Color Carry Case",
    category: "Computers",
    actions: ""
  },
  {
    id: 44,
    popularity: { popValue: "76", color: "success" },
    img: require("../../assets/img/elements/homepod.png"),
    order_status: "on hold",
    name: "Bose® - SoundLink® III Cover",
    category: "Fitness",
    price: "$34.99",
    actions: ""
  },
  {
    id: 45,
    popularity: { popValue: "98", color: "success" },
    img: require("../../assets/img/elements/iphone-x.png"),
    order_status: "canceled",
    name: "Bose® - SoundLink® III Cover",
    category: "Audio",
    price: "$34.99",
    actions: ""
  },
  {
    id: 46,
    img: require("../../assets/img/elements/iphone-x.png"),
    order_status: "pending",
    name: "Bose® - SoundLink® III Cover",
    category: "Fitness",
    price: "$34.99",
    popularity: { popValue: "70", color: "success" },
    actions: ""
  },
  {
    id: 48,
    order_status: "pending",
    name: "Bose® - Mini Bluetooth Speaker II",
    category: "Computers",
    price: "$199.99",
    popularity: { popValue: "62", color: "primary" },
    img: require("../../assets/img/elements/magic-mouse.png"),
    actions: ""
  },
  {
    id: 49,
    order_status: "canceled",
    name: "Bose® - Bluetooth Speaker II",
    category: "Audio",
    price: "$199.99",
    popularity: { popValue: "63", color: "primary" },
    img: require("../../assets/img/elements/iphone-x.png"),
    actions: ""
  },
  {
    id: 50,
    category: "Fitness",
    price: "$24.99",
    popularity: { popValue: "90", color: "success" },
    img: require("../../assets/img/elements/iphone-x.png"),
    order_status: "on hold",
    name: "Bose® - SoundLink® Mini Bluetooth Speaker Soft Cover",
    actions: ""
  },
  {
    id: 51,
    popularity: { popValue: "98", color: "success" },
    img: require("../../assets/img/elements/jbl-speaker.png"),
    order_status: "canceled",
    name: "Bose® - Bluetooth Speaker Soft Cover",
    category: "Fitness",
    price: "$24.99",
    actions: ""
  },
  {
    id: 52,
    order_status: "on hold",
    name: "Bose® - Bluetooth Speaker Soft Cover",
    category: "Computers",
    price: "$24.99",
    popularity: { popValue: "55", color: "warning" },
    img: require("../../assets/img/elements/ipad-pro.png"),
    actions: ""
  },
  {
    id: 53,
    order_status: "pending",
    name: "Bose® - Bluetooth Speaker",
    category: "Audio",
    price: "$24.99",
    popularity: { popValue: "53", color: "warning" },
    img: require("../../assets/img/elements/ipad-pro.png"),
    actions: ""
  },
  {
    id: 54,
    category: "Fitness",
    price: "$24.99",
    popularity: { popValue: "82", color: "success" },
    img: require("../../assets/img/elements/ipad-pro.png"),
    order_status: "pending",
    name: "Bose® - SoundLink® Mini Bluetooth Speaker Soft Cover",
    actions: ""
  },
  {
    id: 55,
    img: require("../../assets/img/elements/magic-mouse.png"),
    order_status: "on hold",
    name: "Bose® - Bluetooth Speaker Travel Bag",
    category: "Computers",
    price: "$44.99",
    popularity: { popValue: "78", color: "success" },
    actions: ""
  },
  {
    id: 56,
    popularity: { popValue: "81", color: "success" },
    img: require("../../assets/img/elements/magic-mouse.png"),
    order_status: "canceled",
    name: "Bose® - SoundLink® Mini Soft Cover",
    category: "Computers",
    price: "$24.99",
    actions: ""
  },
  {
    id: 57,
    price: "$24.99",
    popularity: { popValue: "94", color: "success" },
    img: require("../../assets/img/elements/macbook-pro.png"),
    order_status: "pending",
    name: "Bose® - SoundLink® Mini Soft Cover",
    category: "Computers",
    actions: ""
  },
  {
    id: 58,
    price: "$299.99",
    popularity: { popValue: "97", color: "success" },
    img: require("../../assets/img/elements/ipad-pro.png"),
    order_status: "pending",
    name: "Bose® - Bluetooth Speaker III",
    category: "Fitness",
    actions: ""
  },
  {
    id: 59,
    popularity: { popValue: "89", color: "success" },
    img: require("../../assets/img/elements/jbl-speaker.png"),
    order_status: "delivered",
    name: "Bose® - SoundLink® Soft Cover",
    category: "Computers",
    price: "$24.99",
    actions: ""
  },
  {
    id: 60,
    price: "$99.99",
    popularity: { popValue: "53", color: "warning" },
    img: require("../../assets/img/elements/iphone-x.png"),
    order_status: "on hold",
    name: "Bose® - Bluetooth Music Adapter",
    category: "Computers",
    actions: ""
  },
  {
    id: 61,
    order_status: "canceled",
    name: "Bowers & Wilkins - Bluetooth Speaker",
    category: "Computers",
    price: "$349.98",
    popularity: { popValue: "79", color: "success" },
    img: require("../../assets/img/elements/jbl-speaker.png"),
    actions: ""
  },
  {
    id: 62,
    img: require("../../assets/img/elements/ipad-pro.png"),
    order_status: "on hold",
    name: "BRAVEN - Balance Portable Bluetooth Speaker",
    category: "Fitness",
    price: "$129.99",
    popularity: { popValue: "82", color: "success" },
    actions: ""
  },
  {
    id: 63,
    category: "Computers",
    price: "$129.99",
    popularity: { popValue: "80", color: "success" },
    img: require("../../assets/img/elements/apple-watch.png"),
    order_status: "pending",
    name: "BRAVEN - Balance Portable Bluetooth Speaker",
    actions: ""
  },
  {
    id: 64,
    price: "$199.99",
    popularity: { popValue: "86", color: "success" },
    img: require("../../assets/img/elements/homepod.png"),
    order_status: "pending",
    name: "BRAVEN - Outdoor Speaker",
    category: "Computers",
    actions: ""
  },
  {
    id: 65,
    category: "Fitness",
    price: "$199.99",
    popularity: { popValue: "61", color: "primary" },
    img: require("../../assets/img/elements/jbl-speaker.png"),
    order_status: "pending",
    name: "BRAVEN - BRV-X Outdoor Speaker",
    actions: ""
  },
  {
    id: 66,
    img: require("../../assets/img/elements/ipad-pro.png"),
    order_status: "on hold",
    name: "BRAVEN - Portable Bluetooth Speaker",
    category: "Fitness",
    price: "$299.99",
    popularity: { popValue: "85", color: "success" },
    actions: ""
  },
  {
    id: 67,
    popularity: { popValue: "81", color: "success" },
    img: require("../../assets/img/elements/iphone-x.png"),
    order_status: "on hold",
    name: "BRAVEN - Portable Bluetooth Speaker",
    category: "Fitness",
    price: "$99.99",
    actions: ""
  },
  {
    id: 68,
    img: require("../../assets/img/elements/apple-watch.png"),
    order_status: "on hold",
    name: "BRAVEN - Wireless Bluetooth Speaker",
    category: "Audio",
    price: "$99.99",
    popularity: { popValue: "50", color: "warning" },
    actions: ""
  },
  {
    id: 69,
    img: require("../../assets/img/elements/iphone-x.png"),
    order_status: "delivered",
    name: "BRAVEN - Wireless Bluetooth Speaker",
    category: "Fitness",
    price: "$99.99",
    popularity: { popValue: "93", color: "success" },
    actions: ""
  },
  {
    id: 70,
    img: require("../../assets/img/elements/jbl-speaker.png"),
    order_status: "pending",
    name: "BRAVEN - Wireless Bluetooth Speaker",
    category: "Fitness",
    price: "$99.99",
    popularity: { popValue: "51", color: "warning" },
    actions: ""
  },
  {
    id: 71,
    img: require("../../assets/img/elements/iphone-x.png"),
    order_status: "pending",
    name: "Craig - Tower Speaker",
    category: "Fitness",
    price: "$69.99",
    popularity: { popValue: "77", color: "success" },
    actions: ""
  },
  {
    id: 72,
    img: require("../../assets/img/elements/jbl-speaker.png"),
    order_status: "canceled",
    name: "Craig - Portable Wireless Speaker",
    category: "Computers",
    price: "$29.99",
    popularity: { popValue: "89", color: "success" },
    actions: ""
  },
  {
    id: 73,
    img: require("../../assets/img/elements/ipad-pro.png"),
    order_status: "pending",
    name: "Definitive Technology - Wireless Speaker",
    category: "Computers",
    price: "$399.98",
    popularity: { popValue: "81", color: "success" },
    actions: ""
  },
  {
    id: 74,
    price: "$699.98",
    popularity: { popValue: "76", color: "success" },
    img: require("../../assets/img/elements/jbl-speaker.png"),
    order_status: "pending",
    name: "Definitive Technology - Wireless Speaker",
    category: "Fitness",
    actions: ""
  },
  {
    id: 75,
    category: "Fitness",
    price: "$399.98",
    popularity: { popValue: "88", color: "success" },
    img: require("../../assets/img/elements/magic-mouse.png"),
    order_status: "pending",
    name: "Denon - Wireless Speaker",
    actions: ""
  },
  {
    id: 76,
    popularity: { popValue: "100", color: "success" },
    img: require("../../assets/img/elements/ipad-pro.png"),
    order_status: "canceled",
    name: "Denon - HEOS 7 Wireless Speaker",
    category: "Audio",
    price: "$599.98",
    actions: ""
  },
  {
    id: 77,
    order_status: "canceled",
    name: "ECOXGEAR - Waterproof Bluetooth Speaker",
    category: "Computers",
    price: "$129.99",
    popularity: { popValue: "52", color: "warning" },
    img: require("../../assets/img/elements/iphone-x.png"),
    actions: ""
  },
  {
    id: 78,
    img: require("../../assets/img/elements/jbl-speaker.png"),
    order_status: "pending",
    name: "Fitbit - Charge HR Activity Tracker + Heart Rate (Large)",
    category: "Audio",
    price: "$149.99",
    popularity: { popValue: "66", color: "primary" },
    actions: ""
  },
  {
    id: 79,
    price: "$149.99",
    popularity: { popValue: "66", color: "primary" },
    img: require("../../assets/img/elements/apple-watch.png"),
    order_status: "delivered",
    name: "Fitbit - Charge HR Activity Tracker + Heart Rate (Large)",
    category: "Audio",
    actions: ""
  },
  {
    id: 80,
    img: require("../../assets/img/elements/ipad-pro.png"),
    order_status: "canceled",
    name: "Fitbit - Activity Tracker + Heart Rate (Large)",
    category: "Computers",
    price: "$149.99",
    popularity: { popValue: "96", color: "success" },
    actions: ""
  },
  {
    id: 81,
    img: require("../../assets/img/elements/apple-watch.png"),
    order_status: "on hold",
    name: "Fitbit - Charge HR Activity Tracker + Heart Rate (Small)",
    category: "Fitness",
    price: "$149.99",
    popularity: { popValue: "92", color: "success" },
    actions: ""
  },
  {
    id: 82,
    category: "Computers",
    price: "$149.99",
    popularity: { popValue: "82", color: "success" },
    img: require("../../assets/img/elements/ipad-pro.png"),
    order_status: "delivered",
    name: "Fitbit - Charge HR Activity Tracker + Heart Rate (Small)",
    actions: ""
  },
  {
    id: 83,
    img: require("../../assets/img/elements/apple-watch.png"),
    order_status: "pending",
    name: "Fitbit - Activity Tracker + Heart Rate (Small)",
    category: "Computers",
    price: "$149.99",
    popularity: { popValue: "100", color: "success" },
    actions: ""
  },
  {
    id: 84,
    img: require("../../assets/img/elements/apple-watch.png"),
    order_status: "pending",
    name: "Fitbit - Activity Tracker + Sleep Wristband",
    category: "Fitness",
    price: "$149.99",
    popularity: { popValue: "100", color: "success" },
    actions: ""
  },
  {
    id: 85,
    popularity: { popValue: "52", color: "warning" },
    img: require("../../assets/img/elements/iphone-x.png"),
    order_status: "pending",
    name: "Fitbit - Activity Tracker (Large)",
    category: "Fitness",
    price: "$129.99",
    actions: ""
  },
  {
    id: 86,
    popularity: { popValue: "51", color: "warning" },
    img: require("../../assets/img/elements/iphone-x.png"),
    order_status: "on hold",
    name: "Fitbit - Charge Wireless Activity Tracker (Large)",
    category: "Computers",
    price: "$129.99",
    actions: ""
  },
  {
    id: 87,
    category: "Computers",
    price: "$129.99",
    popularity: { popValue: "80", color: "success" },
    img: require("../../assets/img/elements/jbl-speaker.png"),
    order_status: "pending",
    name: "Fitbit - Charge Wireless Activity Tracker (Large)",
    actions: ""
  },
  {
    id: 88,
    price: "$129.99",
    popularity: { popValue: "99", color: "success" },
    img: require("../../assets/img/elements/iphone-x.png"),
    order_status: "on hold",
    name: "Fitbit - Charge Wireless Activity Tracker (Small)",
    category: "Fitness",
    actions: ""
  },
  {
    id: 89,
    category: "Computers",
    price: "$129.99",
    popularity: { popValue: "75", color: "success" },
    img: require("../../assets/img/elements/macbook-pro.png"),
    order_status: "on hold",
    name: "Fitbit - Activity Tracker (Small)",
    actions: ""
  },
  {
    id: 90,
    order_status: "pending",
    name: "Fitbit - Charge Wireless Activity Tracker (Small)",
    category: "Fitness",
    price: "$129.99",
    popularity: { popValue: "80", color: "success" },
    img: require("../../assets/img/elements/macbook-pro.png"),
    actions: ""
  },
  {
    id: 91,
    order_status: "delivered",
    name: "Fitbit - Charging Cable for Activity Trackers",
    category: "Fitness",
    price: "$19.99",
    popularity: { popValue: "50", color: "warning" },
    img: require("../../assets/img/elements/macbook-pro.png"),
    actions: ""
  },
  {
    id: 92,
    img: require("../../assets/img/elements/ipad-pro.png"),
    order_status: "delivered",
    name: "Fitbit - Clip for Activity and Sleep Trackers",
    category: "Fitness",
    price: "$14.99",
    popularity: { popValue: "57", color: "warning" },
    actions: ""
  },
  {
    id: 93,
    img: require("../../assets/img/elements/iphone-x.png"),
    order_status: "on hold",
    name: "Fitbit - Clip for Wireless Activity and Sleep Trackers",
    category: "Audio",
    price: "$14.99",
    popularity: { popValue: "80", color: "success" },
    actions: ""
  },
  {
    id: 94,
    order_status: "canceled",
    name: "Fitbit - Clip for Zip Wireless Activity Trackers",
    category: "Audio",
    price: "$14.99",
    popularity: { popValue: "78", color: "success" },
    img: require("../../assets/img/elements/jbl-speaker.png"),
    actions: ""
  },
  {
    id: 95,
    popularity: { popValue: "81", color: "success" },
    img: require("../../assets/img/elements/iphone-x.png"),
    order_status: "on hold",
    name: 'Fitbit - Flex 1" USB Charging Cable',
    category: "Fitness",
    price: "$14.99",
    actions: ""
  },
  {
    id: 96,
    order_status: "canceled",
    name: 'Fitbit - Flex 1" USB Charging Cable',
    category: "Audio",
    price: "$14.99",
    popularity: { popValue: "51", color: "warning" },
    img: require("../../assets/img/elements/jbl-speaker.png"),
    actions: ""
  },
  {
    id: 97,
    category: "Computers",
    price: "$4.99",
    popularity: { popValue: "56", color: "warning" },
    img: require("../../assets/img/elements/jbl-speaker.png"),
    order_status: "canceled",
    name: "Fitbit - Flex Clasp for Activity Trackers",
    actions: ""
  },
  {
    id: 98,
    img: require("../../assets/img/elements/macbook-pro.png"),
    order_status: "on hold",
    name: "Fitbit - Flex Wireless Activity + Sleep Tracker Wristband",
    category: "Computers",
    price: "$99.99",
    popularity: { popValue: "95", color: "success" },
    actions: ""
  },
  {
    id: 99,
    order_status: "delivered",
    name: "Fitbit - Flex Wireless Activity + Sleep Tracker Wristband",
    category: "Audio",
    price: "$99.99",
    popularity: { popValue: "85", color: "success" },
    img: require("../../assets/img/elements/ipad-pro.png"),
    actions: ""
  },
  {
    id: 100,
    category: "Computers",
    price: "$99.99",
    popularity: { popValue: "50", color: "warning" },
    img: require("../../assets/img/elements/ipad-pro.png"),
    order_status: "pending",
    name: "Fitbit - Flex Wireless Activity and Sleep Wristband",
    actions: ""
  },
  {
    id: 101,
    price: "$99.99",
    popularity: { popValue: "72", color: "success" },
    img: require("../../assets/img/elements/homepod.png"),
    order_status: "delivered",
    name: "Fitbit - Activity Tracker",
    category: "Fitness",
    actions: ""
  }
]

// GET DATA
mock.onGet("/api/datalist/data").reply(200, dataList)

// UPDATE DATA
mock.onPost("/api/datalist/update-data").reply(request => {
  let data = JSON.parse(request.data)
  let oldData = dataList.find(_list => _list.id === data.id)
  oldData.name = data.name
  return [200]
})

// DELETE DATA
mock.onPost("/api/datalist/delete-data").reply(request => {
  let data = JSON.parse(request.data)
  dataList.splice(dataList.indexOf(data.id), 1)
  return [200]
})
