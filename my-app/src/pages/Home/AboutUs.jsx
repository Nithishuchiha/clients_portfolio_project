import React from "react";
import { MapPin } from "lucide-react";
import ImageCard from "@/globalComponent/ImageCard";
import TextCard from "@/globalComponent/TextCard";
import container1 from "@/assets/first-Card-image.png";
import container3 from "@/assets/container3-image.png";
import container5 from "@/assets/container5.png";
import container6 from "@/assets/container6.png";
import iconImage from "@/assets/image.png";

const AboutUs = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 min-w-[320px]">
      <div className="max-w-7xl mx-auto">
        {/* About Us Badge */}
        <div className="flex justify-center md:justify-start mb-6">
          <span
            className="px-4 py-2 rounded-full border border-gray-500 text-gray-700 uppercase"
            style={{
              fontFamily: "Inter",
              fontSize: "11.4px",
              fontWeight: 500,
              lineHeight: "13.73px",
              letterSpacing: "1.72px",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            ABOUT US
          </span>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Heading */}
          <h2
            className="mb-6 text-center mx-auto"
            style={{
              background: "#111111",
              fontFamily: "Inter",
              fontSize: "34.3px",
              fontWeight: 400,
              lineHeight: "38.13px",
              letterSpacing: "-2.06px",
              textAlign: "center",
              verticalAlign: "middle",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              width: "100%",
              maxWidth: "332.82px",
              minHeight: "117.25px",
              opacity: 1,
            }}
          >
            Unlock our expertise to drive success across industries
          </h2>

          {/* Description */}
          <p
            className="mb-8 text-center mx-auto"
            style={{
              fontFamily: "Inter",
              fontSize: "15.3px",
              fontWeight: 300,
              lineHeight: "22.88px",
              letterSpacing: "0%",
              textAlign: "center",
              verticalAlign: "middle",
              color: "#111111CC",
              width: "100%",
              maxWidth: "353.85px",
              minHeight: "87.62px",
              opacity: 1,
            }}
          >
            With over 15 years of experience, we specialize in delivering
            tailored solutions that drive success across industries like
            finance, healthcare, technology, and operations
          </p>

          {/* Images Grid - Mobile */}
          <div className="space-y-4 mb-8">
            {/* First Row - Single Image */}
            <ImageCard
              src={container1}
              alt="Team collaboration"
              height="h-48"
            />

            {/* Second Row - Two Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* 10+ Card */}
              <TextCard
                heading="10+"
                description="Years of innovation and valuable insights, empowering businesses to thrive in a competitive market."
                bgColor="bg-[#232323]"
                textColor="text-white"
                headingSize="text-5xl"
                descriptionSize="text-xs"
              />

              {/* Image Card */}
              <ImageCard src={container3} alt="Professional" />
            </div>

            {/* Third Row - 95% Card */}
            <TextCard
              heading="95%"
              description="Complete customer satisfaction achieved through personalized solutions, proactive support, and a dedication to meeting the unique needs of every client. Our focus on excellence ensures your success at every step."
              bgColor="bg-button-bg"
              textColor="text-white"
              headingSize="text-6xl"
              descriptionSize="text-sm"
              icon={<img src={iconImage} alt="icon" className="w-6 h-6" />}
              iconPosition="top-left"
            />

            {/* Fourth Row - Two Images */}
            <div className="grid grid-cols-2 gap-4">
              <ImageCard src={container5} alt="Team member" height="h-40" />
              <ImageCard src={container6} alt="Team member" height="h-40" />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Heading and Description */}
          <div className="grid grid-cols-2 gap-12 mb-12">
            <div>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "Inter",
                  fontSize: "42px",
                  fontWeight: 600,
                  lineHeight: "1.2",
                }}
              >
                Unlocking creativity, strategy, and innovation for every
                business
              </h2>
            </div>
            <div className="flex items-center">
              <p
                className="text-gray-600"
                style={{
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "1.6",
                }}
              >
                At Arunijone, I bring together skills from UX/UI design, digital
                marketing, stock research, aquascaping, and product innovation
                to deliver practical, impactful solutions for individuals and
                businesses.
              </p>
            </div>
          </div>

          {/* Images Grid - Desktop */}
          <div className="grid grid-cols-3 gap-4">
            {/* First Row */}
            <ImageCard
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200"
              alt="Team collaboration"
              height="h-80"
              className="col-span-2 row-span-1"
            />

            {/* 3+ Card */}
            <TextCard
              heading="3+"
              description="Years of continuous innovation and valuable insights, helping businesses improve their digital presence, design better products, and make informed decisions through research-led strategies."
              bgColor="bg-black"
              textColor="text-white"
              headingSize="text-6xl"
              descriptionSize="text-sm"
            />

            {/* Second Row */}
            {/* 95% Card */}
            <TextCard
              heading="95%"
              description="Client satisfaction achieved through personalized solutions, proactive support, and a commitment to understanding each client's unique requirements. My focus on excellence ensures your success at every step."
              bgColor="bg-button-bg"
              textColor="text-white"
              headingSize="text-7xl"
              descriptionSize="text-base"
              icon={<img src={iconImage} alt="icon" className="w-7 h-7" />}
              iconPosition="top-left"
              className="col-span-2"
            />

            {/* Image */}
            <ImageCard
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600"
              alt="Professional"
              height="h-80"
            />

            {/* Third Row - Two Images */}
            <ImageCard
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600"
              alt="Team member"
              height="h-64"
            />
            <ImageCard
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600"
              alt="Team member"
              height="h-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
