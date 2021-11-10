import Image from "next/dist/client/image"
const Banner = () => {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[640px]">
            <Image src="/banner.jpg" layout="fill" objectFit="cover"/>
            <div className="absolute top-1/2 text-center w-full">
                <p className="text-sm sm:text-lg">Not Sure where to go? Perfect.</p>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3
                hover:shadow-xl active:scale-90 transition duration-150">
                    I'm flexible
                </button>
            </div>
        </div>
    )
}

export default Banner
