import {
  BookOpen,
  Camera,
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
    image: "images/brands/tasty.webp",
    description:
      "Developed a complete brand identity system including logo design, color palette, typography, and visual guidelines to ensure strong brand recognition across platforms.",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Concert Flyer Design",
    category: "flyers",
    image: "images/flyers/tent-of-revival.webp",
    description:
      "Crafted an eye-catching concert flyer with bold typography, energetic visuals, and a vibrant layout to capture audience attention.",
    isFeatured: true,
  },
  {
    id: 3,
    title: "Convocation Shots",
    category: "photography",
    image: "images/photos/convocation.webp",
    description:
      "Captured memorable convocation moments with a focus on emotion, composition, and storytelling to celebrate academic achievement.",
    isFeatured: true,
  },
  {
    id: 4,
    title: "Event Branding",
    category: "branding",
    image: "images/brands/confluence.webp",
    description:
      "Designed a cohesive event branding identity including logo concepts, banners, and promotional assets to deliver a unified and professional visual experience.",
    isFeatured: true,
  },
  {
    id: 5,
    title: "Birthday Shots",
    category: "photography",
    image: "images/photos/birthday-esther.webp",
    description:
      "Documented birthday moments through vibrant, well-composed photographs that highlight joy, personality, and celebration.",
    isFeatured: true,
  },
  {
    id: 6,
    title: "Birthday Flyer Design",
    category: "flyers",
    image: "images/flyers/birthday.webp",
    description:
      "Designed a colorful and celebratory birthday flyer using playful typography and engaging visuals to highlight event details.",
    isFeatured: true,
  },
  {
    id: 7,
    title: "Graduation Shots",
    category: "photography",
    image: "images/photos/graduation.webp",
    description:
      "Produced expressive graduation portraits that tell a visual story of growth, success, and milestone achievement.",
    isFeatured: true,
  },
  {
    id: 8,
    title: "Brand Design",
    category: "branding",
    image: "images/brands/honey-scent.webp",
    description:
      "Created a refined brand identity for Honey Scent by aligning logo design, typography, and color choices with the brand’s personality and market positioning.",
    isFeatured: true,
  },
  {
    id: 9,
    title: "Church Flyer Design",
    category: "flyers",
    image: "images/flyers/dlcf-1.webp",
    description:
      "Designed an elegant church flyer with warm tones and inspiring typography to effectively communicate event details and theme.",
    isFeatured: true,
  },
  {
    id: 10,
    title: "Yearbook Design",
    category: "branding",
    image: "images/brands/lepex.webp",
    description:
      "Designed a visually engaging yearbook that combines structured layouts, consistent typography, and meaningful imagery to preserve memories and achievements.",
    isFeatured: false,
  },
  {
    id: 11,
    title: "Event Branding",
    category: "branding",
    image: "images/brands/fire-conference.webp",
    description:
      "Delivered a comprehensive event branding solution including logo design, color systems, and print assets to ensure consistent storytelling across all materials.",
    isFeatured: false,
  },
  {
    id: 12,
    title: "Birthday Shots",
    category: "photography",
    image: "images/photos/birthday-james.webp",
    description:
      "Captured candid and posed birthday photographs with attention to lighting, mood, and memorable details.",
    isFeatured: false,
  },
  {
    id: 13,
    title: "Convocation / Induction Flyer",
    category: "flyers",
    image: "images/flyers/convocation.webp",
    description:
      "Designed a modern and professional flyer for student convocation and induction ceremonies, ensuring clarity and visual appeal.",
    isFeatured: false,
  },
  {
    id: 14,
    title: "Product Shots",
    category: "photography",
    image: "images/photos/product-shot.webp",
    description:
      "Created high-quality product photographs optimized for branding, showcasing details, texture, and visual appeal.",
    isFeatured: false,
  },
  {
    id: 15,
    title: "Brand Design",
    category: "branding",
    image: "images/brands/kingdoo.webp",
    description:
      "Developed a bold and distinctive brand identity for Kingdoo, ensuring visual consistency across digital and print touchpoints.",
    isFeatured: false,
  },
  {
    id: 16,
    title: "Music Cover Design",
    category: "flyers",
    image: "images/flyers/music-cover.webp",
    description:
      "Created a striking music cover design that visually represents the artist’s style and genre using bold imagery and modern graphic elements.",
    isFeatured: false,
  },
  {
    id: 17,
    title: "Brand Design",
    category: "branding",
    image: "images/brands/royalces.webp",
    description:
      "Crafted a premium brand identity for Royalces with a focus on elegance, clarity, and a strong visual presence that reflects brand values.",
    isFeatured: false,
  },
  {
    id: 18,
    title: "Hangout Shots",
    category: "photography",
    image: "images/photos/hangout.webp",
    description:
      "Captured relaxed hangout moments through natural, lifestyle photography that reflects connection and authenticity.",
    isFeatured: false,
  },
  {
    id: 19,
    title: "Church Flyer Design",
    category: "flyers",
    image: "images/flyers/dlcf-2.webp",
    description:
      "Developed a creative and modern church flyer that blends impactful visuals with clear and concise messaging.",
    isFeatured: false,
  },
  {
    id: 20,
    title: "Product Launch Branding",
    category: "branding",
    image: "images/brands/webinar.webp",
    description:
      "Designed a complete branding system for a product launch, covering visual identity, promotional assets, and launch-ready graphics.",
    isFeatured: false,
  },
  {
    id: 21,
    title: "Course Flyer Design",
    category: "flyers",
    image: "images/flyers/course.webp",
    description:
      "Designed a clean and persuasive marketing flyer for paid courses, emphasizing value, clarity, and call-to-action.",
    isFeatured: false,
  },
  {
    id: 22,
    title: "Personal Shots",
    category: "photography",
    image: "images/photos/personal.webp",
    description:
      "Delivered expressive personal portraits focused on individuality, confidence, and clean visual storytelling.",
    isFeatured: false,
  },
  {
    id: 23,
    title: "Brand Design",
    category: "branding",
    image: "images/brands/spectarmonix.webp",
    description:
      "Developed a modern and scalable brand identity for Spectarmonix, combining clean visuals with a strong conceptual foundation.",
    isFeatured: false,
  },
  {
    id: 24,
    title: "Corporate Event Branding",
    category: "branding",
    image: "images/brands/youth-conference.webp",
    description:
      "Created a professional corporate event branding suite that maintains brand consistency across digital and print platforms.",
    isFeatured: false,
  },
  {
    id: 25,
    title: "MSI Event",
    category: "photography",
    image: "images/photos/msi.webp",
    description:
      "Documented the MSI event with professional event photography, capturing key moments, atmosphere, and audience engagement.",
    isFeatured: false,
  },
  {
    id: 26,
    title: "Brand Design",
    category: "branding",
    image: "images/brands/sugere-victorum.webp",
    description:
      "Built a distinctive brand identity for Sugere Victorum, aligning visual elements with the brand’s mission and target audience.",
    isFeatured: false,
  },
  {
    id: 27,
    title: "Event Flyer Design",
    category: "flyers",
    image: "images/flyers/hangout.webp",
    description:
      "Designed a visually engaging flyer for social hangout events, focusing on energy, clarity, and audience appeal.",
    isFeatured: false,
  },
  {
    id: 28,
    title: "Brand Design",
    category: "branding",
    image: "images/brands/tvt.webp",
    description:
      "Designed a strong and cohesive brand identity for The Valorous Tribe (TVT), emphasizing symbolism, clarity, and visual impact.",
    isFeatured: false,
  },
];

export const courses = [
  {
    id: 1,
    title: "Photo Editing Masterclass",
    description:
      "Learn the basics and beyond! Master photo editing techniques and unleash your creativity. From color grading to professional retouching, this comprehensive course covers everything you need to transform your photos into stunning works of art.",
    status: "Available Now",
    available: true,
    icon: Camera,
    features: [
      "Photo Retouching",
      "Color Grading",
      "Live Sessions",
      "Community Access",
      "Self-Paced Learning",
      "100% Practical Projects",
    ],
    price: "₦5,500",
    originalPrice: "₦10,000",
    image: "images/photo-editing.webp",
    whatsappMessage:
      "Hi, I'm interested in joining the Photo Editing Masterclass on Telegram. Please send me the details.",
  },
  {
    id: 2,
    title: "Brand Identity Design",
    description:
      "Master the art of creating powerful brand identities. Learn to design memorable logos, develop comprehensive brand guidelines, and create cohesive visual systems that tell compelling brand stories.",
    status: "Coming Soon",
    available: false,
    icon: Palette,
    features: [
      "Logo Design Principles",
      "Brand Strategy",
      "Visual Identity Systems",
      "Brand Guidelines",
      "Client Presentation",
      "Portfolio Building",
    ],
    price: "TBA",
    originalPrice: "",
    image: "images/brands/honey-scent.webp",
    whatsappMessage:
      "Hi, I'd like to be notified when the Brand Identity Design course becomes available.",
  },
  {
    id: 3,
    title: "Graphic Design Fundamentals",
    description:
      "Build a strong foundation in graphic design. From typography to layout principles, color theory to composition, learn the essential skills every designer needs to create impactful visual communications.",
    status: "Coming Soon",
    available: false,
    icon: BookOpen,
    features: [
      "Design Principles",
      "Typography Mastery",
      "Color Theory",
      "Layout & Composition",
      "Tool Proficiency",
      "Real-World Projects",
    ],
    price: "TBA",
    originalPrice: "",
    image: "images/flyers/tent-of-revival.webp",
    whatsappMessage:
      "Hi, I'd like to be notified when the Graphic Design Fundamentals course becomes available.",
  },
];

export const services: Service[] = [
  {
    id: 1,
    icon: Sparkles,
    title: "Brand Identity Design",
    image: "images/brands/honey-scent.webp",
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
    image: "images/flyers/tent-of-revival.webp",
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
    href: "https://www.linkedin.com/in/tryb",
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
