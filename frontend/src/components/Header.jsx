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
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-2xl">
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>

      <div className="relative flex flex-col md:flex-row items-center min-h-[600px] px-6 md:px-10 lg:px-20">
        {/* --------- Header Left --------- */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 md:py-16">
          {/* Main Heading */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white/90 text-sm font-medium">
                ✨ Healthcare Made Simple
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight text-center">
              Welcome to
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                NITT-CARE
              </span>
            </h1>
          </div>

          {/* Description Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-white/90">
            {/* <div className="flex-shrink-0">
              <img
                className="w-32 h-12 object-contain filter drop-shadow-lg"
                src={assets.group_profiles}
                alt="Doctor profiles"
              />
            </div> */}
            {/* Animated Elements */}
            <div className="flex-shrink-0">
              <div className="relative w-20 h-12 flex items-center justify-center">
                <div className="absolute w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
                <div
                  className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s", left: "20px" }}
                ></div>
                <div
                  className="absolute w-3 h-3 bg-green-300 rounded-full animate-pulse"
                  style={{ animationDelay: "1s", left: "40px" }}
                ></div>
                <div
                  className="absolute w-3 h-3 bg-purple-300 rounded-full animate-pulse"
                  style={{ animationDelay: "1.5s", left: "60px" }}
                ></div>
              </div>
            </div>
            <p className="text-lg md:text-xl leading-relaxed font-light">
              Experience{" "}
              <span className="text-yellow-300 font-medium">
                world-class healthcare
              </span>{" "}
              at your fingertips. Connect with specialists, book consultations,
              and take control of your wellness journey.
            </p>
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
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>

          {/* Image Carousel Container */}
          <div className="relative">
            {/* Main Image with Transition */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl z-10"></div>
              <img
                className="relative w-full md:w-[90%] lg:w-[85%] h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm transition-all duration-500 ease-in-out transform"
                src={carouselImages[currentImageIndex].src}
                alt={carouselImages[currentImageIndex].alt}
                key={currentImageIndex}
              />

              {/* Image Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white">
                  <h3 className="font-semibold text-sm">
                    {carouselImages[currentImageIndex].title}
                  </h3>
                  <p className="text-xs opacity-90">
                    {carouselImages[currentImageIndex].alt}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group"
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
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group"
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

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-4 right-4 z-30 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
            >
              {isAutoPlaying ? (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 9v6m4-6v6"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-white"
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
              )}
            </button>

            {/* Floating Cards (Updated positions to work with carousel) */}
            {/* <div className="absolute top-6 right-16 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-white/20 animate-bounce-slow z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-200">
                  <img
                    className="w-full h-full object-cover"
                    src={assets.group_profiles}
                    alt="Doctor"
                  />
                </div>
                <div>
                  <p className="text-gray-800 font-semibold text-sm">
                    Dr. Sarah Johnson
                  </p>
                  <p className="text-gray-600 text-xs">Cardiologist • Online</p>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div> */}

            {/* <div className="absolute top-20 left-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-white/20 max-w-48 animate-bounce-slow delay-500 z-20">
              <div className="flex items-start gap-2">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-200 flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src={assets.hospital_img}
                    alt="Patient"
                  />
                </div>
                <div>
                  <div className="flex text-yellow-400 text-xs mb-1">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p className="text-gray-700 text-xs leading-tight">
                    "Excellent service and care!"
                  </p>
                  <p className="text-gray-500 text-xs mt-1">- Patient Review</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 right-6 bg-red-500/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-red-300/20 animate-pulse z-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-xs">Emergency</p>
                  <p className="text-white/90 text-xs">Call: 108</p>
                </div>
              </div>
            </div> */}

            {/* <div className="absolute top-32 right-32 bg-purple-500/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-purple-300/20 animate-float delay-1000 z-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                
              </div>
            </div> */}
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
