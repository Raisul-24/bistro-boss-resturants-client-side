import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';


const SectionCover = ({img, title, description }) => {
   return (
      <div>
          <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div className="hero h-[550px]">
            <div className="hero-content text-center text-neutral-content w-9/12 h-3/5 ">
               <div className="hero-overlay bg-opacity-70 text-white p-10 rounded-xl ">
                  <h1 className="mb-5 text-7xl font-bold uppercase">{title}</h1>
                  <p className="mb-5 mx-2 md:mx-28">{description}</p>
               </div>
            </div>
         </div>
    </Parallax>
         
      </div>
   );
};
SectionCover.propTypes ={
   img: PropTypes.element.img,
   title: PropTypes.element.any,
   description: PropTypes.element.any,
}

export default SectionCover;