import SocialMedia from "constants/SocialMedia";
import React from "react";

const footerDataTop = [
  {
    heading: "समाचार",
    items: ["कानपुर", "उत्तर प्रदेश", "राष्ट्रीय", "अंतरराष्ट्रीय"],
  },
  {
    heading: "विविध",
    items: ["व्यापार", "संपादकीय", "मनोरंजन", "खेल"],
  },
  {
    heading: "सेवाएं",
    items: ["ई-पेपर", "विज्ञापन", "संपर्क करें", "प्राइवेसी नीति"],
  },
];

const footerDataBottom = [
  {
    heading: "हमसे जुड़ें",
    items: ["फीडबैक", "सब्सक्रिप्शन", "न्यूज़लेटर", "FAQ"],
  },
  {
    heading: "जानकारी",
    items: ["हमारे बारे में", "टीम", "शर्तें", "सहायता केंद्र"],
  },
  {
    heading: "मीडिया",
    items: ["फोटो गैलरी", "वीडियो", "प्रेस विज्ञप्ति", "इवेंट्स"],
  },
];

const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto space-y-12 flex flex-col-reverse large:flex-row-reverse items-center justify-between gap-16">
        <div className="w-full flex flex-col gap-10">
          {/* Top Footer Section */}
          <div className="flex flex-col gap-8 large:grid large:grid-cols-3">
            {footerDataTop.map((section, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold mb-4">
                  {section.heading}
                </h4>
                <ul className="space-y-2 text-sm">
                  {section.items.map((item, i) => (
                    <li className="hover:text-red-400" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Footer Section */}
          <div className="flex flex-col gap-8 large:grid large:grid-cols-3">
            {footerDataBottom.map((section, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold mb-4">
                  {section.heading}
                </h4>
                <ul className="space-y-2 text-sm">
                  {section.items.map((item, i) => (
                    <li className="hover:text-red-400" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Logo and Info Section */}
        <div className="w-full large:w-auto h-auto flex flex-col gap-3 text-left">
          <h1 className="text-4xl text-[#d40f1b] font-semibold">आपकी न्यूज़</h1>
          <p className="text-sm mb-4 max-w-xl">
            यह एक हिंदी न्यूज़ वेबसाइट है जो ताजातरीन खबरें, संपादकीय लेख और
            विविध जानकारी प्रदान करती है।
          </p>
          <SocialMedia />
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} आपकी न्यूज़ वेबसाइट. सर्वाधिकार सुरक्षित।
      </div>
    </footer>
  );
};

export default Footer;
  