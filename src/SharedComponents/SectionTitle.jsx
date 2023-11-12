import PropTypes from 'prop-types';


const SectionTitle = ({heading, subHeading}) => {
   return (
      <div className='mx-auto md:w-4/12 my-4 text-center'>
         <p className='text-yellow-600 text-xl mb-2'>---{subHeading}---</p>
         <h2 className='text-4xl uppercase border-y-4 py-4'>{heading}</h2>
      </div>
   );
};
SectionTitle.propTypes ={
   heading: PropTypes.element.node,
   subHeading: PropTypes.element.node
}

export default SectionTitle;