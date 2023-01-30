import Image from "next/image";
import React from "react";

const assetLocation = "/assets/skills";

const skillAssets = [
  { img: `${assetLocation}/html.png`, name: "HTML" },
  { img: `${assetLocation}/csharp.png`, name: "C-Sharp" },
  { img: `${assetLocation}/nodejs.png`, name: "JavaScrip" },
  { img: `${assetLocation}/nextjs.png`, name: "NextJS" },
  { img: `${assetLocation}/mssql.png`, name: "Microsft SQL" },
  { img: `${assetLocation}/postgres.png`, name: "PostgreSQL" },
  { img: `${assetLocation}/firebase.png`, name: "Firbase" },
  { img: `${assetLocation}/flutter.png`, name: "Flutter" },
  { img: `${assetLocation}/dart.png`, name: "Dart" },
  { img: `${assetLocation}/arduino.png`, name: "Arduino" },
  { img: `${assetLocation}/circuit.png`, name: "CircuitPyhton" },
  { img: `${assetLocation}/python.png`, name: "Python" },
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
                    <Image src={item.img} width={64} height={64} alt="/" />
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
