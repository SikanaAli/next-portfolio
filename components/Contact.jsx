import React from "react";

function contacts() {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto">
        <p className="txt-xl tracking-widest upercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-col-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div>
              <img
                className="rounded hover:scale-105 ease-in duration-300"
                src="https://unsplash.com/photos/q3QPw37J6Xs"
                alt=""
              />
            </div>
          </div>
          {/* Right */}
        </div>
      </div>
    </div>
  );
}

export default contacts;
