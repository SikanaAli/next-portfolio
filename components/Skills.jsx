import Image from "next/image";
import React from "react";

const assetLocation = "/assets/skills";

const skillAssets = [
  { imgLocation: `${assetLocation}/html.png`, name: "HTML" },
  { imgLocation: `${assetLocation}/csharp.png`, name: "C-Sharp" },
  { imgLocation: `${assetLocation}/nodejs.png`, name: "JavaScrip" },
  { imgLocation: `${assetLocation}/nextjs.png`, name: "NextJS" },
  { imgLocation: `${assetLocation}/mssql.png`, name: "Microsft SQL" },
  { imgLocation: `${assetLocation}/postgres.png`, name: "PostgreSQL" },
  { imgLocation: `${assetLocation}/firebase.png`, name: "Firbase" },
  { imgLocation: `${assetLocation}/flutter.png`, name: "Flutter" },
  { imgLocation: `${assetLocation}/dart.png`, name: "Dart" },
  { imgLocation: `${assetLocation}/arduino.png`, name: "Arduino" },
  { imgLocation: `${assetLocation}/circuit.png`, name: "CircuitPyhton" },
  { imgLocation: `${assetLocation}/python.png`, name: "Python" },
];

function Skills() {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillAssets.map((item, i) => {
            return (
              <div
                key={i}
                className="P-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500"
              >
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src={item.imgLocation}
                      width={64}
                      height={64}
                      alt="/"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
