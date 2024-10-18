import React, { useState } from 'react';

const ImageSwitcher = () => {
  const [imageSrc, setImageSrc] = useState('https://cdn.prod.website-files.com/6320125ace536b6ad148eca3/6673bdaf54d5e1e027aeda0b_Banner-%20web%20app%20testing%20tool%20running%20test%20in%20a%20black%20background%20of%20the%20desktop.webp'); // Default image

  const changeImage = (src) => {
    setImageSrc(src);
  };

  return (
    <div className="flex gap-10 m-14">
      {/* First Column: Image */}
      <div className="flex-1 transition-transform duration-500 ">
        <img src={imageSrc} alt="Switchable" className="h-[636px] w-[705px] rounded-lg m-5 transition-transform duration-500 ease-in-out transform hover:translate-x-1" />
      </div>

      {/* Second Column: Spans */}
      <div className="flex-1 flex flex-col m-5 justify-around space-y-4 ">
        <div className='flex justify-center place-items-center h-1/3  '>
        <span
          className="cursor-pointer bg-slate-500  hover:bg-blue-300 border-2 p-8 "
          onMouseOver={() => changeImage('https://cdn.prod.website-files.com/6320125ace536b6ad148eca3/6673bdaf54d5e1e027aeda0b_Banner-%20web%20app%20testing%20tool%20running%20test%20in%20a%20black%20background%20of%20the%20desktop.webp')}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus earum harum at distinctio, veritatis amet maiores nesciunt ipsum atque modi, rerum temporibus magnam. Quaerat numquam unde possimus
        </span>
        </div>
        <div className='flex justify-center place-items-center h-1/3  '>
        <span
          className="cursor-pointer bg-slate-500  hover:bg-blue-300 "
          onMouseOver={() => changeImage('https://blogassets.airtel.in/wp-content/uploads/2024/04/Top-10-Video-Editing-Apps-for-PC-unsplash-1-002.jpg')}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum commodi, unde atque facilis consectetur distinctio recusandae nobis consequatur minus ea, repellendus id eos impedit pariatur inventore vero quos doloremque?
        </span>
        </div>
        <div className='flex justify-center place-items-center h-1/3  '>
        <span
          className="cursor-pointer bg-slate-500  hover:bg-blue-300"
          onMouseOver={() => changeImage('https://online.yatharthinstitution.com/assets/images/course/1640518212.jpg')}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae laudantium harum fugiat eos, maxime velit nobis quidem temporibus, eum illo provident ipsum minus, autem perferendis rerum. Reiciendis iste itaque explicabo!
        </span>
        </div>
      </div>
    </div>
  );
};

export default ImageSwitcher;