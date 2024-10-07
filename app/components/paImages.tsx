import { useState, useEffect } from 'react';
import Image from 'next/image';

const PopupScrollExample: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openPopup = () => {
    setIsPopupVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="relative">
      {/* Page Content */}
      <div className="h-[200vh] p-5">
        <h1 className="text-3xl font-bold mb-5">Lorem Ipsum Content</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vehicula orci ut malesuada congue...
        </p>
        {/* Repeat or add more lorem ipsum text to simulate page content */}
      </div>

      {/* Popup Button */}
      {showButton && (
        <button
          className="fixed bottom-5 right-5 p-3 bg-blue-600 text-white rounded cursor-pointer"
          onClick={openPopup}
        >
          Open Popup
        </button>
      )}

      {/* Popup Overlay */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          {/* Popup Container */}
          <div className="bg-white w-3/4 h-3/4 overflow-y-auto p-5 rounded-lg">
            {/* Close Button */}
            <div className="text-right mb-3">
              <button
                className="p-2 bg-red-500 text-white rounded"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
            <h2 className="text-2xl font-semibold mb-5">Popup Content</h2>
            <Image
              src="/website/1947pa/c1.png"
              alt="Long Content"
              width={800}
              height={600}
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupScrollExample;
