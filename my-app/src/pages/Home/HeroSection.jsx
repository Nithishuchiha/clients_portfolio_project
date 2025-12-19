import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "@/globalComponent/PrimaryButton";
import arunImage from "@/assets/arunAnna_image.png";
import downloadIcon from "@/assets/Home's_images/download_icon.png";
import rightArrow from "@/assets/Home's_images/rightArrow_white.png";

const HeroSection = () => {
  const desktopStats = [
    {
      value: "95%",
      label: (
        <>
          Client satisfaction <br />
          across multi-service <br />
          projects
        </>
      ),
    },
    {
      value: "10+",
      label: (
        <>
          Innovative solutions delivered
          <br /> in UX, marketing, and
          <br /> research
        </>
      ),
    },
    {
      value: "₹5L",
      label: (
        <>
          Worth of strategic
          <br /> insights provided across <br />
          industries
        </>
      ),
    },
    {
      value: "5K+",
      label: (
        <>
          People indirectly reached <br />
          through digital platforms
          <br /> and client networks
        </>
      ),
    },
  ];

  const mobileStats = [
    {
      value: "95%",
      label: (
        <>
          Client satisfaction across <br />
          multi-service projects
        </>
      ),
    },
    {
      value: "10+",
      label: (
        <>
          Innovative solutions <br /> delivered in UX, marketing, <br />
          and research
        </>
      ),
    },
    {
      value: "₹5L",
      label: (
        <>
          Worth of strategic insights <br />
          provided across industries
        </>
      ),
    },
    {
      value: "5K+",
      label: (
        <>
          People indirectly reached <br />
          through digital platforms and <br />
          client networks
        </>
      ),
    },
  ];

  return (
    <section className="w-full py-4 md:py-12 lg:py-4 min-w-[320px]">
      <div className="w-full rounded-lg bg-gray-bg border  border-gray-bg p-6 md:p-8 lg:p-8 pb-8 md:pb-10 lg:pb-12">
        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          {/* Heading */}
          <h1
            className="mb-6 text-center"
            style={{
              color: "rgba(17, 17, 17, 1)",
              // fontFamily: "SF Pro Display",
              fontSize: "58px",
              fontWeight: 400,
              lineHeight: "66.33px",
              letterSpacing: "-3.47px",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            Expert <br /> guidance,
            <br /> tailored <br /> to your needs
          </h1>

          {/* Description */}
          <p
            className="mb-6  text-center px-2 font-light align-middle"
            style={{
              color: "rgba(109, 109, 110, 0.8)",
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "22px",
              letterSpacing: "0%",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            Our flexible infrastructure empowers your <br />
            business to adapt quickly, stay efficient, and <br /> scale
            seamlessly as you grow.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 mb-6 px-2">
            <Link to="/about" className="flex-1">
              <PrimaryButton
                fullWidth={true}
                className="px-6 py-3 whitespace-nowrap"
                style={{
                  color: "rgba(255, 255, 255, 1)",
                  // fontFamily: "SF Pro Display",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  letterSpacing: "0px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                About Me{" "}
                <img
                  src={rightArrow}
                  alt=""
                  className="w-4 h-3 ml-2 inline-block"
                />
              </PrimaryButton>
            </Link>

            <button
              className="flex items-center justify-center gap-2 px-4 sm:px-6 sm:py-4 lg:px-4 lg:py-2 rounded-full border-2 border-[#3e86fc] hover:bg-blue-50 transition-colors font-medium flex-[1.2] sm:flex-1 whitespace-nowrap"
              style={{
                color: "rgba(1, 97, 254, 1)",
                // fontFamily: "SF Pro Display",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "22.47px",
                letterSpacing: "0px",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              Download Resume
              <img src={downloadIcon} alt="Download" className="w-4 h-4" />
            </button>
          </div>

          {/* Image Container */}
          <div className="flex justify-center  -mx-4">
            <div
              className="bg-gray-300 rounded-lg overflow-hidden"
              style={{
                width: "359.5px",
                height: "305.56px",
                opacity: 1,
                position: "relative",
                top: "-0.22px",
              }}
            >
              <img
                src={arunImage}
                alt="Profile"
                className="w-full h-full object-cover relative z-10"
                style={{
                  display: "block",
                  objectPosition: "center top",
                }}
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2  items-center ">
          {/* Left Content */}
          <div>
            <h1
              className="mb-6"
              style={{
                fontFamily: "Inter",
                fontSize: "57.84px",
                fontWeight: 400,
                lineHeight: "66.33px",
                letterSpacing: "-3.47px",
                verticalAlign: "middle",
                color: "#111111",
              }}
            >
              Expert guidance, tailored <br /> to your needs
            </h1>
            <p
              className="mb-8 font-light align-middle"
              style={{
                color: "rgba(109, 109, 110, 0.8)",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "22px",
                letterSpacing: "0%",
                verticalAlign: "middle",
              }}
            >
              Our flexible infrastructure empowers your business to adapt
              quickly, <br />
              stay efficient, and scale seamlessly as you grow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/about">
                <PrimaryButton
                  fullWidth={false}
                  className="px-6 py-5"
                  style={{
                    // fontFamily: "SF Pro Display",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "17.96px",
                    letterSpacing: "0px",
                    verticalAlign: "middle",
                  }}
                >
                  About Me{" "}
                  <img
                    src={rightArrow}
                    alt=""
                    className="w-4 h-3 ml-2 inline-block"
                  />
                </PrimaryButton>
              </Link>

              <button
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-blue-600 text-[#0161FE] hover:bg-blue-50 transition-colors"
                style={{
                  // fontFamily: "SF Pro Display",
                  gap: "6px",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "22.47px",
                  letterSpacing: "0px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                Download Resume
                <img
                  src={downloadIcon}
                  alt="Download"
                  className="w-[18px] h-[18px]"
                />
              </button>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="flex-col justify-end items-end">
            <div
              className="bg-gray-300 rounded-lg overflow-hidden"
              style={{
                width: "630px",
                height: "601px",
                opacity: 1,
              }}
            >
              <img
                src={arunImage}
                alt="Profile"
                className="w-full h-full object-cover relative z-10"
                style={{
                  display: "block",
                  objectPosition: "center top",
                }}
              />
            </div>
          </div>
        </div>

        {/* Divider - Hidden on mobile */}
        {/* <div className="border-t border-dashed border-gray-300 mb-8 lg:mb-16 hidden lg:block"></div> */}
      </div>

      {/* Stats Section - Outside the wrapper */}
      <div className="w-full mt-10 md:mt-8 lg:mt-14 md:mb-5 lg:mb-5">
        {/* Mobile Stats */}
        <div className="grid grid-cols-2 gap-6 px-2 lg:hidden">
          {mobileStats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3
                className="mb-4"
                style={{
                  fontFamily: "Inter",
                  fontSize: "38px",
                  fontWeight: 400,
                  lineHeight: "45.77px",
                  letterSpacing: "0%",
                  textAlign: "center",
                  verticalAlign: "middle",
                  color: "rgba(17, 17, 17, 1)",
                }}
              >
                {stat.value}
              </h3>
              <p
                style={{
                  color: "rgba(109, 109, 110, 0.8)",
                  // fontFamily: "SF Pro Display",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  opacity: 1,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop Stats */}
        <div className="hidden lg:grid grid-cols-4 gap-8 px-2">
          {desktopStats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3
                className="mb-2"
                style={{
                  fontSize: "51.25px",
                  fontWeight: 400,
                  lineHeight: "61.52px",
                  letterSpacing: "-1.54px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                {stat.value}
              </h3>
              <p
                style={{
                  color: "rgba(109, 109, 110, 0.8)",
                  fontFamily: "SF Pro Display",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  opacity: 1,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
