import Aos from 'aos';
import React, { useEffect } from 'react';
import "aos/dist/aos.css"; // Import AOS styles

const BlogCard = ({ blog }) => {
  useEffect(() => {
    Aos.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  // Destructure the blog object
  const { img, title, description, author, date, readingTime, link } = blog;

  return (
<a 
    href={link} 
    className="block"
    data-aos="zoom-in-out"
    data-aos-duration="1600"
    >
      <div className='group block p-4 w-full rounded-lg overflow-hidden text-[#002E70] hover:bg-[#02c2ab]/20 transition duration-500 ease-in-out'>
        <div className="rounded-lg overflow-hidden">
          <img src={img} alt={title} className="w-full h-auto transition-transform duration-300 ease-in-out transform object-cover scale-100 group-hover:scale-110" />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-[#002E70]/80 mb-4">{description.slice(0, 90)}...</p>
          <div className="text-sm text-[#002E70]">
            <p>{date} • {readingTime}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
