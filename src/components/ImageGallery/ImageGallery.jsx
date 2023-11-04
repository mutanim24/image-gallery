import image1 from "../../assets/image-1.webp";
import image2 from "../../assets/image-2.webp";
import image3 from "../../assets/image-3.webp";
import image4 from "../../assets/image-4.webp";
import image5 from "../../assets/image-5.webp";
import image6 from "../../assets/image-6.webp";
import image7 from "../../assets/image-7.webp";
import image8 from "../../assets/image-8.webp";
import image9 from "../../assets/image-9.webp";
import image10 from "../../assets/image-10.jpeg";
import image11 from "../../assets/image-11.jpeg";

const ImageGallery = () => {
    return (
        <div className="m-12">
            <div className="p-8">
                <h1 className="text-2xl font-bold">Gallery</h1>
            </div>
            <div className="grid grid-cols-4 gap-7">
                <div className="p-5 border-2 rounded-lg col-span-2 row-span-2 relative">
                    <img src={image1} alt="" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"></div>
                </div>
                <div className="p-5 border-2 rounded-lg relative">
                    <img src={image2} alt="" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"></div>
                </div>
                <div className="p-5 border-2 rounded-lg relative">
                    <img src={image3} alt="" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"></div>
                </div>
                <div className="p-5 border-2 rounded-lg relative">
                    <img src={image4} alt="" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"></div>
                </div>
                <div className="p-5 border-2 rounded-lg relative">
                    <img src={image5} alt="" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"></div>
                </div>
                <div className="p-5 border-2 rounded-lg relative">
                    <img src={image6} alt="" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"></div>
                </div>
                <div className="p-5 border-2 rounded-lg relative">
                    <img src={image7} alt="" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"></div>
                </div>
                <div className="p-5 border-2 rounded-lg relative">
                    <img src={image8} alt="" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"></div>
                </div>
                <div className="p-5 border-2 rounded-lg relative">
                    <img src={image9} alt="" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"></div>
                </div>
                <div className="p-5 border-2 rounded-lg relative">
                    <img src={image10} alt="" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"></div>
                </div>
                <div className="p-5 border-2 rounded-lg relative">
                    <img src={image11} alt="" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"></div>
                </div>
                
            </div>
        </div>

    );
};

export default ImageGallery;