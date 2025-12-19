"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import { courses } from "@/lib/data";

export default function Courses() {
  const handleCourseClick = (course: (typeof courses)[0]) => {
    const phoneNumber = "2349032264624";
    const message = encodeURIComponent(course.whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-color relative overflow-hidden">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-teal dark:text-teal-light mb-6">
            Learn & Grow With Me
          </h1>
          <p className="text-xl text-color max-w-3xl">
            Master creative skills through hands-on courses designed to unleash
            your potential. Join our Telegram community and start your creative
            journey today.
          </p>
        </div>
      </section>

      {/* Course Flyers Section */}
      <section className="section-padding bg-white dark:bg-slate-950 transition-colors duration-30">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-teal dark:text-teal-light mb-4">
              Featured Course
            </h2>
            <p className="text-lg text-color max-w-2xl mx-auto">
              Check out our current photo editing masterclass
            </p>
          </div>

          {/* Flyer Gallery */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="group relative overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 aspect-square shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={`images/courses/course${num}.webp`}
                  alt={`Photo Editing Course Flyer ${num}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="section-padding bg-gray-50 dark:bg-slate-900 transition-colors duration-30">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-teal dark:text-teal-light mb-4">
              All Courses
            </h2>
            <p className="text-lg text-color max-w-2xl mx-auto">
              Explore our range of creative courses
            </p>
          </div>

          <div className="space-y-20">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.id}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-orange rounded-lg flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-heading font-bold text-teal dark:text-teal-light">
                          {course.title}
                        </h3>
                        <span
                          className={`inline-block text-sm font-medium px-3 py-1 rounded-full mt-2 ${
                            course.available
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                          }`}
                        >
                          {course.status}
                        </span>
                      </div>
                    </div>

                    <p className="text-lg text-color mb-6 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {course.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-orange rounded-full"></div>
                          <span className="text-color">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 mb-8">
                      <div>
                        <div className="text-3xl font-bold text-teal dark:text-teal-light">
                          {course.price}
                        </div>
                        {course.originalPrice && (
                          <div className="text-lg text-gray-500 line-through">
                            {course.originalPrice}
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleCourseClick(course)}
                      disabled={!course.available}
                      className={`btn-primary ${
                        !course.available ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      {course.available
                        ? "Join Course on Telegram"
                        : "Notify Me When Available"}
                    </button>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 aspect-square shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
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
            Start Your Creative Journey Today
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-8">
            Join hundreds of creatives learning and growing together on
            Telegram. Get instant access to lessons, community support, and
            personalized feedback.
          </p>
          <button
            onClick={() => handleCourseClick(courses[0])}
            className="btn-secondary"
          >
            Join Photo Editing Course Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
