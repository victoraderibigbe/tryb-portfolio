import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { TbBulb } from "react-icons/tb";
import { FaSync } from "react-icons/fa";
import { BadgeCheck, Zap } from "lucide-react";

export default function About() {
  const values: { title: string; description: string; icon: any }[] = [
    {
      title: "Creativity",
      description: "Bold, innovative ideas that push boundaries",
      icon: TbBulb,
    },
    {
      title: "Consistency",
      description: "Reliable quality in every project",
      icon: FaSync,
    },
    {
      title: "Authenticity",
      description: "Genuine connection through design",
      icon: BadgeCheck,
    },
    {
      title: "Impact",
      description: "Designs that drive real results",
      icon: Zap,
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-color relative overflow-hidden">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-teal dark:text-teal-light mb-6">
            Meet TRYB
          </h1>
          <p className="text-xl text-color max-w-3xl">
            The Designer Behind the Magic
          </p>
        </div>
      </section>

      {/* Brand Overview */}
      <section className="section-padding bg-white dark:bg-slate-950 transition-colors duration-30">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-full min-h-96">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/overview-4sBL7hNAQoNLIVJxFGhQmOFWhm4VDt.jpg"
                alt="TRYB Brand Overview"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-heading font-bold text-teal dark:text-teal-light mb-4">
                  About TRYB
                </h2>
                <p className="text-color leading-relaxed mb-4">
                  Hi, I'm Samuel Oyetunde, the creative mind behind TRYB. I
                  believe great design isn't just about colors and fonts — it's
                  about emotion, clarity, and connection.
                </p>
                <p className="text-color leading-relaxed">
                  My work focuses on helping brands and individuals tell their
                  stories visually, in a way that leaves a lasting impression.
                  Over the years, I've designed everything from event flyers to
                  full brand identities, working with churches, startups, and
                  personal brands to bring their ideas to life.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-200">
                <div>
                  <h3 className="font-heading font-bold text-teal dark:text-teal-light mb-2">
                    Mission
                  </h3>
                  <p className="text-color">
                    To communicate powerful ideas through visuals that inspire,
                    connect, and drive action.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-teal dark:text-teal-light mb-2">
                    Vision
                  </h3>
                  <p className="text-color">
                    To build a globally recognized creative brand that
                    transforms how people experience design — one visual at a
                    time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-color">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-teal dark:text-teal-light mb-4">
              Core Values
            </h2>
            <p className="text-lg text-color">
              The principles that guide every design decision
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-linear-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-teal dark:hover:border-teal-light hover:shadow-lg dark:hover:shadow-teal/20 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-orange dark:bg-orange rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-teal dark:text-teal-light mb-3">
                    {value.title}
                  </h3>
                  <p className="text-color">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-teal dark:bg-teal-light">
        <div className="container-max text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <Link href="/contact" className="btn-secondary">
            Let's Connect
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
