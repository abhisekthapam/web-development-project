import { useState, useEffect } from "react";
import TheTable from "./TheTable";
import TheItems from "./TheItems";
import TheOrder from "./TheOrder";

function TheMenu() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [showOrder, setShowOrder] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectedIndex = (index) => {
    setSelectedIndex(index);
    localStorage.setItem("selectedTable", index);
  };

  useEffect(() => {
    const storedTableIndex = localStorage.getItem("selectedTable");
    if (storedTableIndex !== null && selectedIndex === null) {
      setSelectedIndex(parseInt(storedTableIndex, 10));
      setIsModalOpen(false);
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("selectedTable");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      <div>
        <div className="w-[100%] flex justify-center">
          <div className=" flex sticky gap-10 mt-2">
            <button
              onClick={openModal}
              className="bg-red-500 text-white font-bold px-4 py-1 mb-5 cursor-pointer hover:bg-red-600"
              title="Choose table number"
            >
              Choose Table No.
            </button>
            <p
              className="bg-red-500 text-white font-bold px-4 py-1 mb-5 cursor-not-allowed"
              title="Selected table number"
            >
              Table - {selectedIndex !== null ? `${selectedIndex + 1}` : "None"}
            </p>
          </div>
        </div>
        {isModalOpen && (
          <div>
            <div>
              <TheTable
                closeModal={closeModal}
                handleSelectedIndex={handleSelectedIndex}
              />
            </div>
            </div>
          )}
      </div>
      {!isModalOpen && selectedIndex !== null && (
        <div>
          <TheItems
            setSelectedQuantity={setSelectedQuantity}
            selectedQuantity={selectedQuantity}
            setShowOrder={setShowOrder}
          />
        </div>
      )}
      {showOrder && (
        <div>
          <TheOrder quantity={selectedQuantity} />
        </div>
      )}
    </div>
  );
}

export default TheMenu;
