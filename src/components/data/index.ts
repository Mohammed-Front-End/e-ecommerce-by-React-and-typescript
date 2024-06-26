import { ICategory, IFormInout, IProduct } from "../interfaces";
import {v4 as uuidv4} from 'uuid';


export const productList: IProduct[]= [
  {
      "id": uuidv4(),
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "imageURL": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "price": "109.95",
      "colors": ["Black", "Blue", "Green"],
      "category": {
          "name": "Men's Clothing",
          "imageURL": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
      }
  },
  {
      "id":uuidv4(),
      "title": "Mens Casual Premium Slim Fit T-Shirts",
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "imageURL": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "price": "22.3",
      "colors": ["White", "Gray", "Black"],
      "category": {
          "name": "Men's Clothing",
          "imageURL": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
      }
  },
  {
      "id": uuidv4(),
      "title": "Mens Cotton Jacket",
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "imageURL": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "price": "55.99",
      "colors": ["Black", "Brown", "Green"],
      "category": {
          "name": "Men's Clothing",
          "imageURL": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
      }
  },
  {
      "id": uuidv4(),
      "title": "Mens Casual Slim Fit",
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "imageURL": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "price": "15.99",
      "colors": ["Blue", "Gray", "White"],
      "category": {
          "name": "Men's Clothing",
          "imageURL": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
      }
  },
  {
      "id": uuidv4(),
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "imageURL": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "price": "695",
      "colors": ["Gold", "Silver"],
      "category": {
          "name": "Jewelery",
          "imageURL": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
      }
  },
  {
      "id": uuidv4(),
      "title": "Solid Gold Petite Micropave",
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "imageURL": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "price":" 168",
      "colors": ["Gold"],
      "category": {
          "name": "Jewelery",
          "imageURL": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
      }
  },
  {
      "id": uuidv4(),
      "title": "White Gold Plated Princess",
      "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      "imageURL": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "price": "9.99",
      "colors": ["White Gold"],
      "category": {
          "name": "Jewelery",
          "imageURL": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
      }
  },
  {
      "id": uuidv4(),
      "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
      "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      "imageURL": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "price": "10.99",
      "colors": ["Rose Gold"],
      "category": {
          "name": "Jewelery",
          "imageURL": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
      }
  },
  {
      "id": uuidv4(),
      "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      "imageURL": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      "price": "64",
      "colors": ["Black"],
      "category": {
          "name": "Electronics",
          "imageURL": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
      }
  },
  {
      "id": uuidv4(),
      "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      "imageURL": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      "price": "109",
      "colors": ["Black"],
      "category": {
          "name": "Electronics",
          "imageURL": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
      }
  },
  {
      "id": uuidv4(),
      "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      "imageURL": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      "price": "109",
      "colors": ["Black"],
      "category": {
          "name": "Electronics",
          "imageURL": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
      }
  },
  {
      "id": uuidv4(),
      "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      "imageURL": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      "price": "114",
      "colors": ["Black"],
      "category": {
          "name": "Electronics",
          "imageURL": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
      }
  },
  {
      "id": uuidv4(),
      "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | Ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9; Contrast ratio - 100 million: 1 max (ACM); Brightness - 250 nits Tilt angle -5 degree to 15 degree | Horizontal viewing angle-178 degree | Vertical viewing angle-178 degree 75 hertz",
      "imageURL": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      "price": "599",
      "colors": ["Black"],
      "category": {
          "name": "Electronics",
          "imageURL": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
      }
  },
  {
      "id": uuidv4(),
      "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time and AMD Free Sync 2 technology for an effortlessly smooth gaming experience Samsung QLED delivers purer, brighter, and more lifelike colors",
      "imageURL": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      "price": "999.99",
      "colors": ["Black"],
      "category": {
          "name": "Electronics",
          "imageURL": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
      }
  }
]

export const formInputsList:IFormInout[] = [
  {
    id: "title",
    name: "title",
    label: "Product title",
    type: "text"
  },
  {
    id: "description",
    name: "description",
    label: "Product description",
    type: "text"
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product image URL",
    type: "text"
  },
  {
    id: "price",
    name: "price",
    label: "Product price",
    type: "text"
  },
]

export const colors:string[] = [
  "#00008B",
  "#90EE90",
  "#8B0000",
  "#32CD32",
  "#FF7F7F",
  "#006400",
  "#FF0000",
  "#9370DB",
  "#FFD700",
  "#4B0082",
  "#FFAA00",
]

export const categories:ICategory[] = [
  {
    id: uuidv4(),
    name: 'Electronics',
    imageURL:
      'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
  },
  {
    id: uuidv4(),
    name: 'Jewelery',
    imageURL:
      'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
  },
  {
    id: uuidv4(),
    name: "Men's Clothing",
    imageURL:
      'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  },
  {
    id: uuidv4(),
    name: 'Nike',
    imageURL:
      'https://i5.walmartimages.com/seo/Nike-Women-s-Air-Max-Excee-Running-Shoes-White-Black-Pure-Platinum-8-US_8e74a4a3-f031-416b-bcdf-076ce79098ce_1.22284bc96d1de915cd33db7802ecf9de.jpeg',
  },

]