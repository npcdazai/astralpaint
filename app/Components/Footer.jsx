import Image from "next/image";
import successssBanner from "../images/becomeadealer.jpg";
import pipes from "../images/pipes.png"; // Logo
import bond from "../images/bond.png";
import bathware from "../images/bathware.png";
import gem from "../images/gem.png";

import twitter from "../images/twitter.svg";
import yt from "../images/youtube.svg";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import loc from "../images/location.svg";
import call from "../images/call.svg";
import mail from "../images/mail.svg";

const socialIcons = [facebook, instagram, yt, twitter];

const info = [
  {
    id: 1,
    jpg: loc,
    title:
      "207/1, ‘Astral House’, B/h. Rajpath Club, Off S. G. Highway, Ahmedabad – 380059, Gujarat, India.",
  },
  {
    id: 2,
    jpg: call,
    title: "1800 309 9393",
  },
  {
    id: 3,
    jpg: mail,
    title: "customercare@astralpaints.com",
  },
];

const Footer = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${successssBanner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="text-white py-16"
      >

        <div>
          
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Left Section: Logo + Info */}
            <div className="max-w-sm">
              <div className="mb-4">
                <Image src={pipes} alt="Astral Paints Logo" width={120} height={100} />
              </div>
              <p className="text-[#eedcb2] font-semibold mb-4">Astral Coatings Private Limited</p>
              <div className="space-y-4 text-sm">
                {info.map((item) => (
                  <div key={item.id} className="flex items-start gap-3">
                    <Image src={item.jpg} alt="icon" width={16} height={16} className="mt-1" />
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section: Newsletter + Links */}
            <div className="flex-1 flex flex-col items-end ">
              {/* Newsletter */}
              <div className="flex items-center justify-between w-[100%]">
                <h4 className="text-[#eedcb2] text-lg font-semibold mb-4">Sign Up To Our Newsletter</h4>
                <div className="flex max-w-md mb-8">
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    style={{ border: "0.5px solid #eedcb2 ", width: "200px" }}
                    className="w-full px-4 py-2  rounded-l-full focus:outline-none"
                  />
                  <button className="bg-[#0060af] text-sm px-6 rounded-r-full font-semibold hover:bg-blue-800 transition-all">
                    Enquire Now
                  </button>
                </div>
              </div>

              {/* Footer Links */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h4 className="text-[#eedcb2] font-semibold mb-2">About</h4>
                  <ul className="space-y-2 text-sm">
                    <li>About Astrals</li>
                    <li>Paint Journey</li>
                    <li>Group Companies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#eedcb2] font-semibold mb-2">Category</h4>
                  <ul className="space-y-2 text-sm">
                    <li>Interior Paints</li>
                    <li>Exterior Paints</li>
                    <li>Undercoats</li>
                    <li>Painting Tools</li>
                    <li>Distemper & Enamel</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#eedcb2] font-semibold mb-2">Services</h4>
                  <ul className="space-y-2 text-sm">
                    <li>Wall Painting</li>
                    <li>Water Solution</li>
                    <li>Painting</li>
                    <li>Colour Shades</li>
                  </ul>
                </div>
                <div className="flex flex-col items-start ">
                  <div>
                    <h4 className="text-[#eedcb2] font-semibold mb-2">Downloads</h4>
                    <ul className="space-y-2 text-sm">
                      <li>Become A Dealer</li>
                      <li>Blogs</li>
                      <li>Contact</li>
                    </ul>
                  </div>
                  <div className="flex justify-end items-center gap-4 pt-10">
                    {socialIcons.map((icon, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-white hover:bg-white/20 transition"
                      >
                        <Image
                          src={icon}
                          alt={`Social icon ${i + 1}`}
                          width={16}
                          height={16}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div className="bg-[#0060af] text-white p-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <a href="#" className="hover:underline text-sm">Terms & Conditions</a>
          <p className="text-center text-sm">ALL RIGHTS RESERVED</p>
          <a href="#" className="hover:underline text-sm">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
