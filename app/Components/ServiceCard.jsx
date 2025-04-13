import React from "react";


const ServiceCard = ({ 
  title, 
  imageSrc, 
  showReadMore = false,
  className
}) => {
  return (
    <div className={("relative rounded-md overflow-hidden group", className)}>
      <div className="aspect-square md:aspect-auto md:h-[300px] overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className={(
        "absolute bottom-0 left-0 right-0 p-4 flex items-center",
        showReadMore ? "justify-between bg-gradient-to-r from-amber-600 to-amber-500" : "justify-start bg-black/40"
      )}>
        <h3 className="text-white font-semibold text-xl">{title}</h3>
        {showReadMore && (
          <b variant="secondary" size="sm" className="bg-white hover:bg-gray-100 text-black">
            Read More
          </b>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;