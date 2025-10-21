"use client";

import type React from "react";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Mail, MessageCircle, Linkedin, Instagram } from "lucide-react";
import { contacts } from "@/lib/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        description: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-color relative overflow-hidden">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-teal dark:text-teal-light mb-6">
            Let's Create Something Beautiful Together
          </h1>
          <p className="text-xl text-color max-w-3xl">
            Got a project in mind? Let's make it happen. Fill the form below or
            reach out directly — I'm just a message away.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white dark:bg-slate-950 transition-colors duration-30">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-teal dark:text-teal-light mb-8">
                Send Me a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-color mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-color mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-color mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                    placeholder="+234 (0) 123 456 7890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-color mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 dark:bg-slate-950 border border-gray-300 rounded-lg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                  >
                    <option value="">Select a project type</option>
                    <option value="branding">Brand Identity Design</option>
                    <option value="graphic">Graphic Design</option>
                    <option value="photography">Photography & Editing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-color mb-2">
                    Project Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary">
                  {submitted ? "Message Sent!" : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Methods */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-teal dark:text-teal-light mb-8">
                Other Ways to Connect
              </h2>
              <div className="space-y-6">
                {contacts.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-6 bg-color border border-gray-200 rounded-xl hover:border-teal hover:shadow-lg transition-all group"
                    >
                      <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-teal dark:text-teal-light mb-1">
                          {method.label}
                        </h3>
                        <p className="text-color">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-heading font-bold text-teal dark:text-teal-light mb-4">
                  Follow My Journey
                </h3>
                <p className="text-color mb-6">
                  Stay updated with my latest work and creative insights.
                </p>
                <div className="flex gap-4">
                  {contacts.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <a
                        key={index}
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-teal dark:bg-teal-light rounded-lg flex items-center justify-center hover:bg-orange transition-colors"
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
