// New Arrivals
import product1Front from "../assets/images/product1-front.webp";
import product1Back from "../assets/images/product1-back.webp";
import product2Front from "../assets/images/product2-front.webp";
import product2Back from "../assets/images/product2-back.webp";
import product3Front from '../assets/images/product3-front.webp';
import product3Back from '../assets/images/product3-back.webp';
import product4Front from '../assets/images/product4-front.webp';
import product4Back from '../assets/images/product4-back.webp';

// Root & Road
import kinTee from "../assets/images/kin-tee.webp";
import trailTee from "../assets/images/trail-tee.webp";
import baobabTee from "../assets/images/baobab-tee.webp";
import rootedTee from "../assets/images/rooted-tee.webp";

// Sunbearers Collection
import ebereTee from "../assets/images/ebere.webp";
import onyebuchiTee from "../assets/images/onyebuchi.webp";
import sunriseTee from "../assets/images/sunrise.webp";
import tarantulaTee from "../assets/images/tarantula.webp";

export const allProducts = [
  // --- NEW ARRIVALS ---
  {
    id: 1,
    collection: "new-arrivals",
    title: "Rooted T-Shirt",
    spec: "Specification 1",
    price: 40000,
    image: product1Front,
    hoverImage: product1Back,
  },
  {
    id: 2,
    collection: "new-arrivals",
    title: "Street Script",
    spec: "Specification 2",
    price: 40000,
    image: product2Front,
    hoverImage: product2Back,
  },
  {
    id: 3,
    collection: "new-arrivals",
    title: "Rooted T-Shirt",
    spec: "Specification 3",
    price: 40000,
    image: product3Front,
    hoverImage: product3Back,
  },
  {
    id: 4,
    collection: "new-arrivals",
    title: "Street Script",
    spec: "Specification 4",
    price: 40000,
    image: product4Front,
    hoverImage: product4Back,
  },

  // --- ROOT & ROAD ---
  {
    id: 101,
    collection: "root-road",
    title: "Kin Tee",
    spec: "White",
    price: 40000,
    image: kinTee,
    hoverImage: null,
  },
  {
    id: 102,
    collection: "root-road",
    title: "Trail Tee",
    spec: "White",
    price: 40000,
    image: trailTee,
    hoverImage: null,
  },
  {
    id: 103,
    collection: "root-road",
    title: "Baobab Tee",
    spec: "White",
    price: 40000,
    image: baobabTee,
    hoverImage: null,
  },
  {
    id: 104,
    collection: "root-road",
    title: "Rooted Tee",
    spec: "White",
    price: 40000,
    image: rootedTee,
    hoverImage: null,
  },
  
  // --- SUNBEARERS COLLECTION ---
  {
    id: 201,
    collection: "sunbearers",
    title: "Ebere Tee",
    spec: "Black",
    price: 40000,
    image: ebereTee,
    hoverImage: null,
  },
  {
    id: 202,
    collection: "sunbearers",
    title: "Onyebuchi Tee",
    spec: "Black",
    price: 40000,
    image: onyebuchiTee,
    hoverImage: null,
  },
  {
    id: 203,
    collection: "sunbearers",
    title: "Your Sunrise Tee",
    spec: "Black",
    price: 40000,
    image: sunriseTee,
    hoverImage: null,
  },
  {
    id: 204,
    collection: "sunbearers",
    title: "Tarantula Tee",
    spec: "Black",
    price: 40000,
    image: tarantulaTee,
    hoverImage: null,
  },
];

// --- Helper to filter products ---
export const getProductsByCollection = (collectionName) => {
  return allProducts.filter((product) => product.collection === collectionName);
};
