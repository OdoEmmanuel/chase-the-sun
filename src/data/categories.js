import cat1Default from '../assets/images/cat1-default.webp';
import cat1Hover from '../assets/images/cat1-hover.webp';
import cat2Default from '../assets/images/cat2-default.webp';
import cat2Hover from '../assets/images/cat2-hover.webp';
import cat3Default from '../assets/images/street-script-2.webp';
import cat3Hover from '../assets/images/street-script-1.webp';

export const categories = [
  {
    id: 1,
    title: "Root & Road Collection",
    subtitle: "Walk with Meaning",
    buttonText: "Explore Root & Road",
    link: "/collections/root-and-road",
    image: cat1Default,
    hoverImage: cat1Hover,
  },
  {
    id: 2,
    title: "Sun bearers Series",
    subtitle: "Carry the Light",
    buttonText: "Explore Sun Bearers",
    link: "/collections/sunbearers",
    image: cat2Default,
    hoverImage: cat2Hover,
  },
  {
    id: 3,
    title: "Street Script Series",
    subtitle: "Speak the Street",
    buttonText: "Explore Street Script",
    link: "/collections/street-script",
    image: cat3Default,
    hoverImage: cat3Hover,
  }
];