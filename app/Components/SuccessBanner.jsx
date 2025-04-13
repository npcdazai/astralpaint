import Image from 'next/image';
import successssBanner from "../images/becomeadealer.jpg";

const SuccessBanner = ({homepage}) => {
    return (
       <div className="bg-green-600  pl-2">
         <div className="relative w-full h-[300px]">
            <Image
                src={successssBanner}
                alt="Become a dealer"
                fill
                className="object-cover"
            />

            <div className="absolute inset-0 bg-opacity-50 z-10" />

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 text-white">
                <h2 className="text-lg md:text-xl mb-2">Join the Success Journey</h2>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Become A Dealer</h1>
                <p className="max-w-xl text-sm md:text-base mb-6">
                    Lorem ipsum dolor sit amet consectetur. Integer dui quam nisi in ornare. 
                    Nec in tristique et ultrices sit ullamcorper massa tempor et.
                </p>
                <button className="bg-white text-black font-semibold px-6 py-2 text-sm rounded-full hover:bg-gray-200 transition">
                    Read More
                </button>
            </div>
        </div>
       </div>
    );
};

export default SuccessBanner;
