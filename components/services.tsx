import { Palette, ImageIcon, Sparkles } from "lucide-react";
import { AnimatedDots } from "./animated-icon";

export default function Services() {
  const services = [
    {
      icon: Sparkles,
      title: "Brand Identity Design",
      description:
        "I create logos and visual systems that define your brand and make you unforgettable.",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description:
        "From social media flyers to posters, banners, and digital ads — I design visuals that command attention.",
    },
    {
      icon: ImageIcon,
      title: "Photography & Editing",
      description:
        "Clean, expressive photos and edits that align perfectly with your brand aesthetic.",
    },
  ];

  return (
    <section className="section-padding bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-teal dark:text-teal-light mb-4">
            What I Do Best
          </h2>
          <p className="text-lg text-color max-w-2xl mx-auto">
            Every design I create is intentional — made to represent your story,
            your purpose, and your personality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-linear-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-teal dark:hover:border-teal-light hover:shadow-lg dark:hover:shadow-teal/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-orange dark:bg-orange rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-teal dark:text-teal-light mb-3">
                  {service.title}
                </h3>
                <p className="text-color leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-16">
          <AnimatedDots />
        </div>
      </div>
    </section>
  );
}
