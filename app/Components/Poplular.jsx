// 'use client';
// import React from 'react';
// import redmark from "../images/lineOrange.svg";
// import Image from 'next/image';
// import ServicesGrid from './ServiceGrid';

// const colors = [
//     { color: "#F9DCB4", isHighlighted: false },
//     { color: "#FAC7C3", isHighlighted: false },
//     { color: "#00C6E6", isHighlighted: false },
//     { color: "#005BAA", isHighlighted: false },
//     { color: "#760101", isHighlighted: true },
//     { color: "#F0A623", isHighlighted: false },
// ];


// function ColorCard({ color, name, code, isHighlighted }) {
//     return (
//         <div
//             className={`flex flex-col items-center justify-center p-4 ${isHighlighted ? "shadow-2xl rounded-xl scale-105 bg-white" : ""
//                 }`}
//         >
//             <div
//                 className={`w-40 h-40 border-4 ${isHighlighted ? "border-white" : "border"
//                     }`}
//                 style={{ backgroundColor: color }}
//             />
//             {isHighlighted && <p className="font-bold mt-2">Astral Paints</p>}
//             <p className="mt-2 font-semibold">Colour Name</p>
//             <p className="text-sm text-gray-500">Colour Code</p>
//         </div>
//     );
// }




// const Poplular = ({ homepage }) => {
//     return (
//         <div className="bg-gradient-to-b from-[#e70000] via-[#ff6600] to-[#ffa500] pl-2">
//             <div className="bg-white py-16 px-[4rem]">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="text-center mb-12 flex flex-col items-start "  >
//                         <h5 className="text-lg font-bold text-gray-950 mb-2">
//                             Colours
//                         </h5>
//                         <div className="relative inline-flex items-center justify-center gap-4 ">
//                             <h2 className="text-3xl font-bold text-black mb-2">
//                                 Popular Colours
//                             </h2>
//                             <Image
//                                 src={redmark}
//                                 alt="orange-underline"
//                                 width={120}
//                                 height={8}
//                             />
//                         </div>
//                     </div>
//                     <div className="flex space-x-4">
//                         {/* {homepage.allColourCategory.map((c, index) => ( */}
//                         <ColorCard
//                             // key={index}
//                             color={homepage.allColourCategory.nodes.colours.nodes.colourInfo.selectColor}
//                             isHighlighted={c.isHighlighted}
//                         />
//                         {/* ))} */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Poplular;


import React from 'react'

const Poplular = () => {
  return (
    <div>Poplular</div>
  )
}

export default Poplular