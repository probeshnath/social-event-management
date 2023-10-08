import React from 'react'

const Carusal = () => {
    return (
        <div className='relative'>
            <div className="carousel w-full h-[450px]">
                <div id="item1" className="carousel-item relative w-full">
                    <img src="https://cdn0.weddingwire.in/article/9179/3_2/1280/jpg/79719-wedding-events-gautam-khullar-lead-image.jpeg" className="w-full" />
                    <div className='absolute w-full h-full flex justify-between p-20 bg-black bg-opacity-70 text-white'>
                        <div className='w-1/2'>
                            <h1 className='text-5xl' data-aos="fade-left"> A Journey of Love, Commitment, and Togetherness</h1>
                            <p className='pt-4' data-aos="fade-up">Marriage is a lifelong partnership where two individuals come together to share their lives, dreams, and responsibilities, fostering love, support, and companionship through the highs and lows of life.</p>
                        </div>
                        
                    </div>
                </div>
                <div id="item2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/868WVRM/what-is-a-diaper-raffle-game.jpg" className="w-full" />
                    <div className='absolute w-full h-full text-center p-20 bg-black bg-opacity-70 text-white'>
                        <div className='w-2/3 mx-auto'>
                            <h1 className='text-5xl' data-aos="fade-right"> Welcoming a New Life with Love and Laughter</h1>
                            <p className='pt-4' data-aos="fade-left">Join us in celebrating the upcoming arrival of our precious bundle of joy! A heartwarming gathering filled with love, laughter, gifts, and well-wishes as we embark on this new adventure together.</p>
                        </div>
                        
                    </div>
                </div>
                <div id="item3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/s3PC0YJ/DSC07601.jpg" className="w-full" />
                    <div className='absolute w-full h-full p-20 bg-black bg-opacity-70 text-white'>
                        <div className='w-1/2'>
                            <h1 className='text-5xl'> A Sparkling Celebration of Love, Commitment, and Forever.</h1>
                            <p className='pt-4'>Join us as we celebrate the beginning of a beautiful journey. Our hearts have found their home, and we invite you to witness our love and commitment during this joyous engagement.</p>
                        </div>
                        
                    </div>
                </div>
                <div id="item4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/BBgyNwf/pretty-woman-in-party-hat-carrying-cake-with-fire-candles-celebrating-picture-id1168237251-k-20-m-11.jpg" className="w-full" />
                    <div className='absolute w-full h-full flex  p-20 bg-black bg-opacity-70 text-white'>
                        <div className='w-1/2'>
                            {/* <h1 className='text-5xl'>  A Joyous Birthday Bash to Remember Forever</h1>
                            <p className='pt-4'>Gather with friends and family for a lively birthday celebration filled with laughter, delicious treats, music, and unforgettable moments as we honor another year of life's beautiful journey.</p> */}
                        </div>
                        <div className='w-1/2 text-right'>
                            <h1 className='text-5xl'>  A Joyous Birthday Bash to Remember Forever</h1>
                            <p className='pt-4'>Gather with friends and family for a lively birthday celebration filled with laughter, delicious treats, music, and unforgettable moments as we honor another year of life's beautiful journey.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="flex absolute bottom-[15px] justify-center w-full py-2 gap-2">
                <a href="#item1" className=" bg-red-500 w-[10px] h-[10px] rounded-full "></a>
                <a href="#item2" className=" bg-purple-500 w-[10px] h-[10px] rounded-full "></a>
                <a href="#item3" className=" bg-blue-500 w-[10px] h-[10px] rounded-full "></a>
                <a href="#item4" className=" bg-green-500 w-[10px] h-[10px] rounded-full "></a>
            </div>
        </div>
    )
}

export default Carusal