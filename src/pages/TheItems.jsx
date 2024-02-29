import React from "react";

function TheItems() {
  return (
    <div>
      <div className="border border-black mx-[10%] h-[100vh] p-2">
        <div>

        <div className="border w-[220px] text-xs p-2 rounded">
            <div className="border border-red-500 h-[25vh] rounded-lg mb-2">
              Image
            </div>
            <div className="mb-2 flex flex-col gap-2">
              <p className="text-sm font-semibold">Product Name</p>
              <p className="text-gray-500">
                Product Descriptionml slkdfklsd slkfk lsdj asdlkf kds aldkfj k slkdf klsdjf  slkdf
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold">NRS 1000</p>
              <button className="border p-2 rounded-lg border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TheItems;
