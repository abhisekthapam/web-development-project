import React, { useState } from "react";
import logo from "../assets/smtokri.png";
import { FaTimes } from "react-icons/fa";

function TheFooter() {
  const [showContactDiv, setShowContactDiv] = useState(false);

  const handleContactButtonClick = () => {
    setShowContactDiv(true);
  };

  const handleCloseButtonClick = () => {
    setShowContactDiv(false);
  };

  return (
    <div>
      <div>
        <footer className="bg-gray-900 text-white p-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <button
                className="font-semibold text-lg text-center"
                onClick={handleContactButtonClick}
              >
                Contact with us
              </button>
              <div
                className={`transition-all duration-1000 ${
                  showContactDiv
                    ? "opacity-100 h-[12vh] mb-5"
                    : "opacity-0 h-10 pointer-events-none"
                }`}
              >
                <button
                  className="w-full flex justify-end mb-2"
                  onClick={handleCloseButtonClick}
                >
                  <FaTimes />
                </button>
                <div className="text-black">
                  <textarea
                    className="w-full px-2"
                    placeholder="Write in here..."
                  ></textarea>
                </div>
                <div className="w-full flex justify-center">
                  <button>Send</button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5">
              <p className="font-semibold text-lg -mt-10">Download our App</p>
              <a
                href="https://www.mediafire.com/file/vjcxdepunobfrt5/app-release.apk/file"
                target="_blank"
              >
                <img src={logo} alt="Tokri logo" className="h-[40px] -mt-6" />
                <div className="bg-gray-900 h-[22px]"></div>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default TheFooter;
