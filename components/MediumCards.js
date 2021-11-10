import Image from "next/dist/client/image"

const MediumCards = ({img,title}) => {
    return (
        <div className="cursor-pointer hover:scale-105
        transfrom transition duration-300 ease-out"> 
            <div className="relative h-80 w-80">
                <Image  src={img} layout="fill"/>
            </div>
                <h3 className="text-2xl mt-3">{title}</h3>
        </div>
    )
}

export default MediumCards
