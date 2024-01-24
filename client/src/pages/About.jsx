import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    // Scroll to the top of the page with smooth animation on component mount
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Welcome to BMK Real Estate
        </h1>

        <p className="text-base text-gray-700 leading-relaxed mb-8">
          At BMK Real Estate, we redefine the essence of home by curating a
          portfolio of exquisite properties available for both sale and rent.
          With a commitment to delivering unparalleled service, we cater to the
          diverse needs of our clients, ensuring a seamless and rewarding real
          estate experience.
        </p>

        <div className="bg-green-200 py-2 border bottom-3 shadow-md px-2 rounded-md">
          <h2 className="text-2xl font-bold bg-green-200 mb-4 text-gray-800">
            Our Distinctive Offerings:
          </h2>
          <ol className="list-decimal pl-6 mb-8">
            <li className="mb-4">
              <span className="font-bold text-slate-600">Sales Expertise:</span>{" "}
              Discover your dream home among our carefully selected for-sale
              properties. Whether you seek a cozy urban retreat or a sprawling
              countryside estate, our team of seasoned professionals is
              dedicated to matching you with the perfect property.
            </li>
            <li className="mb-4">
              <span className="font-bold text-slate-600">
                Rental Solutions:
              </span>{" "}
              Experience the joy of living in a space that feels like home
              without the commitment of ownership. Our rental offerings
              encompass a wide range of properties, each meticulously vetted to
              meet the highest standards of comfort and style.
            </li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-800 pt-3">
          Why Choose BMK Real Estate:
        </h2>
        <ul className="list-disc pl-6 mb-8">
          <li className="mb-4">
            <span className="font-bold text-slate-600">Expert Guidance:</span>{" "}
            Benefit from the expertise of our seasoned real estate professionals
            who guide you through the entire buying or renting process, ensuring
            informed decisions.
          </li>
          <li className="mb-4">
            <span className="font-bold text-slate-600">Diverse Portfolio:</span>{" "}
            Explore a diverse portfolio of residential and commercial
            properties, each distinguished by its unique charm and exceptional
            value.
          </li>
          <li className="mb-4">
            <span className="font-bold text-slate-600">
              Client-Centric Approach:
            </span>{" "}
            Your satisfaction is our priority. We tailor our services to your
            individual needs, providing personalized solutions for a stress-free
            real estate journey.
          </li>
          <li className="mb-4">
            <span className="font-bold text-slate-600">
              Integrity and Transparency:
            </span>{" "}
            Trust is the foundation of our relationships. We operate with the
            utmost integrity and transparency, fostering trust and confidence in
            every interaction.
          </li>
        </ul>

        <p className="text-lg text-center text-slate-700 font-bold leading-relaxed mb-8">
          At BMK Real Estate, we go beyond buying and selling properties; we
          create spaces where unforgettable moments unfold. Discover a new
          standard of living with BMK Real Estate – where every property is a
          promise of comfort, luxury, and a life well-lived.
        </p>
      </div>
    </div>
  );
}
