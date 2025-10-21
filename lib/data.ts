import {
  Facebook,
  ImageIcon,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Palette,
  Sparkles,
} from "lucide-react";
import { Contact, Project, Service } from "./data-types";
import { FaXTwitter } from "react-icons/fa6";

export const projects: Project[] = [
  {
    id: 1,
    title: "Brand Design",
    category: "branding",
    image: "images/brand1.webp",
    description:
      "Developed a cohesive brand identity featuring logo, color palette, and visual system to establish a consistent and memorable presence across all platforms.",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Concert Flyer Design",
    category: "flyers",
    image: "images/flyer1.webp",
    description:
      "Crafted an eye-catching concert flyer with bold typography, energetic visuals, and a vibrant layout to capture audience attention.",
    isFeatured: true,
  },
  {
    id: 3,
    title: "Event Branding",
    category: "branding",
    image: "images/brand2.webp",
    description:
      "Created a unified event branding package, including logo marks, banners, and promotional materials for a professional, recognizable look.",
    isFeatured: true,
  },
  {
    id: 4,
    title: "Church Flyer Design",
    category: "flyers",
    image: "images/flyer2.webp",
    description:
      "Designed an elegant church flyer with warm tones and inspiring typography to effectively communicate event details and theme.",
    isFeatured: true,
  },
  {
    id: 5,
    title: "Yearbook Design",
    category: "branding",
    image: "images/brand3.webp",
    description:
      "Produced a well-structured yearbook design that combines engaging layouts, school colors, and meaningful imagery to celebrate memories and achievements.",
    isFeatured: true,
  },
  {
    id: 6,
    title: "Church Flyer Design",
    category: "flyers",
    image: "images/flyer3.webp",
    description:
      "Developed a creative and modern flyer for a church event, blending impactful visuals with clear and concise messaging.",
    isFeatured: false,
  },
  {
    id: 7,
    title: "Event Branding",
    category: "branding",
    image: "images/brand4.webp",
    description:
      "Delivered a full event branding concept, including logo design, color system, and print materials, ensuring consistent brand storytelling.",
    isFeatured: false,
  },
  {
    id: 8,
    title: "Church Flyer Design",
    category: "flyers",
    image: "images/flyer4.webp",
    description:
      "Designed a visually compelling church program flyer that combines faith-inspired imagery with balanced typography for clarity and appeal.",
    isFeatured: false,
  },
  {
    id: 9,
    title: "Corporate Event Branding",
    category: "branding",
    image: "images/brand5.webp",
    description:
      "Developed an elegant and professional branding suite for a corporate event, maintaining brand consistency across print and digital assets.",
    isFeatured: false,
  },
  {
    id: 10,
    title: "Music Cover Design",
    category: "flyers",
    image: "images/flyer5.webp",
    description:
      "Created a striking music cover art that visually represents the artist’s style and genre, combining bold imagery with modern graphic elements.",
    isFeatured: true,
  },
  {
    id: 11,
    title: "Product Launch Branding",
    category: "branding",
    image: "images/brand6.webp",
    description:
      "Executed a complete branding design for a product launch, including logo creation, packaging concepts, and promotional visuals for maximum impact.",
    isFeatured: false,
  },
];

export const services: Service[] = [
  {
    id: 1,
    icon: Sparkles,
    title: "Brand Identity Design",
    image: "images/brand1.webp",
    description:
      "I create logos and visual systems that define your brand and make you unforgettable.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Color Palette Development",
      "Typography Selection",
      "Visual System Design",
    ],
  },
  {
    id: 2,
    icon: Palette,
    title: "Graphic Design",
    image: "images/flyer1.webp",
    description:
      "From social media flyers to posters, banners, and digital ads — I design visuals that command attention.",
    features: [
      "Social Media Graphics",
      "Event Flyers",
      "Posters & Banners",
      "Digital Advertisements",
      "Print Materials",
    ],
  },
  {
    id: 3,
    icon: ImageIcon,
    title: "Photography & Editing",
    image: "images/black-girl.webp",
    description:
      "Clean, expressive photos and edits that align perfectly with your brand aesthetic.",
    features: [
      "Product Photography",
      "Portrait Sessions",
      "Photo Editing",
      "Color Grading",
      "Brand Photography",
    ],
  },
];

export const contacts: Contact[] = [
  {
    icon: Instagram,
    label: "Instagram",
    value: "@officialthetryb",
    href: "https://instagram.com/officialthetryb",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+234 (0) 903 226 4624",
    href: "https://wa.me/+2349032264624",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Samuel Oyetunde",
    href: "https://www.linkedin.com/in/samuel-oyetunde-6a1b78250",
  },
  {
    icon: FaXTwitter,
    label: "X",
    value: "@the_tryb",
    href: "https://x.com/the_tryb",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Samuel Oyetunde",
    href: "https://web.facebook.com/profile.php?id=100084050667649",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Samuelolamide022@gmail.com",
    href: "mailto:Samuelolamide022@gmail.com",
  },
];
