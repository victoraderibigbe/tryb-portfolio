import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-color relative overflow-hidden">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold  dark:text-teal-light mb-6">
            What I Do Best
          </h1>
          <p className="text-xl text-color max-w-3xl">
            Every design I create is intentional — made to represent your story,
            your purpose, and your personality.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white dark:bg-slate-950 transition-colors duration-30">
        <div className="container-max">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-orange rounded-lg flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-heading font-bold text-teal dark:text-teal-light">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-color mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-orange rounded-full"></div>
                          <span className="text-color">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 aspect-square shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
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
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-8">
            Ready to bring your vision to life? Let's create something amazing.
          </p>
          <Link href="/contact" className="btn-secondary">
            Start Your Project
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
