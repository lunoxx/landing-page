

export default function AboutSection( ) {
    return (
        // about section
        <div className= {`about-section-image mt-0 md:mt-24 w-full flex bg-orange-200/5 rounded-b-2xl md:rounded-2xl shadow-lg backdrop-blur-sm text-white text-lg
             h-fit md:h-80 translate-y-[-0.75rem] md:translate-y-0`} id = "aboutSection" >

            <div className="w-full
            p-8 h-fit md:h-full rounded-b-2xl md:rounded-2xl bg-black/60 backdrop-blur-sm md:backdrop-blur-md shadow-md shadow-amber-300/5 flex flex-col gap-4 justify-center items-center text-center z-[1]">

                <div>
                    <p className="text-4xl font-bold">Our followers love us</p>
                </div>

                <div className="w-full md:w-2/3 font-semibold text-xl">
                    <p>We have created this platform to help you generate pocket money from wherever you are right now! Here, we will promote the best deals in the industry that will help you earn products or information.</p>
                </div>
            </div>

        </div>
    );
}