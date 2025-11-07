import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Navigate, useNavigate } from "react-router-dom";

const Header = () => {
  // Array of images for the carousel - you can add more images here
  const carouselImages = [
    {
      src: assets.hospital_img1,
      alt: "Main Hospital Building",
      title: "State-of-the-art Facilities",
    },
    {
      src: assets.hospital_img2, // Replace with your other images
      alt: "Emergency Department",
      title: "24/7 Emergency Care",
    },
    {
      src: assets.hospital_img3, // Replace with your other images
      alt: "Medical Equipment",
      title: "Advanced Technology",
    },
    {
      src: assets.hospital_img4, // Replace with your other images
      alt: "Patient Care",
      title: "Compassionate Care",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % carouselImages.length
        );
      }, 4000); // Change image every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % carouselImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-[#1479C9] to-[#33CC80]">
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>

      <div className="relative flex flex-col md:flex-row items-center min-h-[600px] px-6 md:px-10 lg:px-20">
        {/* --------- Header Left --------- */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 md:py-16">
          {/* Main Heading */}
          <div className="space-y-4 -mt-9">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white/90 text-sm font-medium">
                ✨ Healthcare Made Simple
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight text-center ml-4 md:ml-8">
              Welcome to
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                NITT-CARE
              </span>
            </h1>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#speciality"
              className="group flex items-center justify-center gap-3 bg-white hover:bg-gray-50 px-8 py-4 rounded-2xl text-gray-800 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <span>Book Appointment</span>
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                <img
                  className="w-4 h-4 filter brightness-0 invert"
                  src={assets.arrow_icon}
                  alt=""
                />
              </div>
            </a>

            <button
              onClick={() => navigate("/about")}
              className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-2xl text-white font-medium text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Learn More
            </button>
          </div>

          {/* Stats or Features */}
          <div className="flex items-center gap-8 mt-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>500+ Doctors</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>24/7 Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span>Instant Booking</span>
            </div>
          </div>
        </div>

        {/* --------- Header Right - Image Carousel --------- */}
        <div className="md:w-1/2 flex justify-center md:justify-end items-center relative mt-8 md:mt-0">
          {/* Image Carousel Container */}
          <div className="relative">
            {/* Main Image with Transition */}
            {
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  className="relative w-full md:w-[100%] lg:w-[110%] h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm transition-all duration-500 ease-in-out transform md:translate-x-5 lg:translate-x-10"
                  src={carouselImages[currentImageIndex].src}
                  alt={carouselImages[currentImageIndex].alt}
                  key={currentImageIndex}
                />
              </div>
            }

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-9 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <svg
                className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <svg
                className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImageIndex
                      ? "bg-white scale-110 shadow-lg"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Header;
