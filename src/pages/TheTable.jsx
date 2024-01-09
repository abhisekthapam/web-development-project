import { useState } from "react";

function TheTable({ closeModal, handleSelectedIndex }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
    console.log("Table choosed :", index + 1);
  };

  const handleConfirmSelection = () => {
    if (selectedItem !== null) {
      handleSelectedIndex(selectedItem);
      closeModal();
    }
  };

  const tableItems = Array.from({ length: 15 }, (_, index) => index);

  return (
    <div className="w-[100%] flex justify-center z-50">
      <div>
        <p className="mb-5 font-bold border px-28 py-3 bg-red-500 text-white">
          Choose Table
        </p>
        <div className="grid grid-cols-3 gap-4">
          {tableItems.map((index) => (
            <div
              key={index}
              className={`border p-5 w-full transition-all duration-500 ease-in-out transform-gpu hover:scale-110 cursor-pointer ${
                selectedItem === index ? "bg-red-500 text-white font-bold" : ""
              }`}
              onClick={() => handleItemClick(index)}
              style={{
                transition: "background-color 0.3s, color 0.3s, transform 0.3s",
              }}
            >
              <p>Table {index + 1}</p>
            </div>
          ))}
        </div>
        <div className="w-[100%] flex justify-center">
          <button
            onClick={handleConfirmSelection}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mt-5"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}

export default TheTable;
