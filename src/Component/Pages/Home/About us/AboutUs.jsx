
import aboutimg1 from "../../../../assets/about-thumb-01.jpg";
import aboutimg2 from "../../../../assets/about-thumb-02.jpg";
import aboutimg3 from "../../../../assets/about-thumb-03.jpg";
import aboutvideo from "../../../../assets/about-video-bg.jpg";

const AboutUs = () => {
  return (
    <div className="flex justify-center space-x-24 mt-28 mb-28">
      <div>
        <h6 className="w-1/4 text-base font-medium tracking-widest border rounded-md bg-[#fb5849] text-center text-white">ABOUT US</h6>
        <h2 className=" text-3xl font-black mt-5">
          We Leave A Delicious <br />
          Memory For You
        </h2>
        <p className="text-base mt-5">
          Klassy Cafe is one of the best restaurant HTML templates with
          Bootstrap <br /> v4.5.2 CSS framework. You can download and feel free
          to use this website <br /> template layout for your restaurant
          business. You are allowed to use this <br /> template for commercial
          purposes.
          <br />
          <br />
          You are NOT allowed to redistribute the template ZIP file on any
          template <br /> donwnload website. Please contact us for more
          information.
        </p>
        <div className="flex space-x-7 mt-10">
          <img src={aboutimg1} alt="" />
          <img src={aboutimg2} alt="" />
          <img src={aboutimg3} alt="" />
        </div>
      </div>
      <div>
        <img src={aboutvideo} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
