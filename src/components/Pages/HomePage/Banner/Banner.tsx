import Image from "next/image";
import pattern from "@/assets/images/Pattern.png";
import manPhoto from "@/assets/images/manPhoto.png";
import Button from "@/components/ui/Button/Button";

const Banner = () => {
  return (
    <div className="relative h-full">
      {/* Background  */}
      <div>
        <div className="banner-blur-container"></div>
        <div className="banner-overlay-container"></div>
      </div>
      {/* Background Image */}
      <div
        className="pattern-image"
        style={{ backgroundImage: `url(${pattern.src})` }}
      ></div>
      <div className="md:py-16 pt-6">
        {/*Left Content */}
        <div className="py-6 px-10 col-span-2">
          <h1 className="first-hedding">Your Way</h1>
          <span className=" effect-text">Your Network</span>
          <p className="md:text-2xl text-sm md:mt-5 mt-2 md:max-w-xl">
            Effortlessly manage your contacts with a powerful tool designed to
            organize, streamline, and simplify all in one place, customized for
            you
          </p>

          <div className="my-9 relative z-10">
            <button className="gredient-button">See more</button>
          </div>
        </div>
        {/*RightContent */}
        <div
          className="right-side-image"
          style={{ backgroundImage: `url(${manPhoto.src})` }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
