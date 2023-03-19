
// Data
import { offersData } from './../Data/offers';

export default function ActiveOffers() {

    const RenderOffer = (props) => {
        return (
            <div className='flex w-80 min-w-[20rem] flex-col
            bg-white/10 text-white backdrop-blur-md pb-10' id = "activeOffers">

                <div className='w-full h-full'>
                    
                    {/* Image */}
                    <div className='offers_image w-full h-60' style={{ backgroundImage: `url(${props.image})` }}>

                        {/* Title */}
                        <div className='h-full text-center px-5 flex justify-center items-center bg-black/60 backdrop-blur-md text-xl uppercase font-semibold '>{props.title}</div>

                    </div>


                    {/* Description */}
                    <div className='text-center text-xl my-5 px-3'>
                        <p className='font-semibold uppercase mb-5'>Description:</p>
                        <p>{props.description}</p>
                    </div>

                </div>
                    
                    

                {!props.disabled && 

                    <div className='px-10 mt-1 text-center text-orange-400'>
                        <p>* Available in following countries:</p>
                        <p className='font-bold'> {props.countries} </p>
                    </div>

                }

                {/* Button */}
                <div className='mt-3 mx-auto text-center flex flex-col justify-self-end'>
      
                    {/* Custom button */}

                    {props.disabled ? ( // show button disabled
                        <button className="relative px-5 py-2 font-medium text-white group cursor-not-allowed" disabled>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700"></span>
                            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                            <span className="relative flex items-center">Join Now
                                <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </span>
                        </button>

                    ) : ( // button clickable
        
                        <a href={props.link} target="blank" className="relative px-5 py-2 font-medium text-white group" disabled>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                            <span className="relative flex items-center">Join Now
                                <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </span>
                        </a>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="mt-16 text-white select-none">
            
            {/* Section Title */}
            <div className="capitalize leading-none">
                <p className="font-bold text-2xl"> Active Offers</p>
                <p className="font-semibold text-white/80">Don't miss the opportunities →</p>
            </div>

            {/* Display offers */}

            <div className='mt-10 w-full h-fit
            flex gap-5 overflow-x-auto scrollbar-thin scrollbar-thumb-purple-700/60 scrollbar-track-blue-300/5 '>
            
                {offersData.map((data, key) => {
                    
                    return (
                        <RenderOffer 
                            key={key}
                            title={data.title} 
                            description={data.description} 
                            link={data.link}
                            image={data.image}
                            disabled={data.disabled}
                            countries={data.countries}
                        />
                    );
                })}
            </div>

        </div>
    );
}