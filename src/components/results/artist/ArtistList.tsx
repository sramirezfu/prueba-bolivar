import { FC } from "react"
import Link from "next/link"
import { Item } from "@component/interfaces/recommende.interface"
import Image from "next/image"


const ArtistList: FC<Item> = ({ images, name, type, id }) => {
    return (
        <li className="w-[18%] cursor-pointer p-[4px] rounded-sm artist-item">
            <Link href={`results/${id}`} className="flex items-center gap-x-6">
                {images.length > 0 && <Image
                    src={images[2].url}
                    alt="Logo aerolinea"
                    width={images[2].width}
                    height={images[2].height}
                    loading='lazy'
                    className="h-16 w-16 rounded-full"
                />}
                <div>
                    <h3 className="text-base font-semibold leading-[16px] tracking-tight text-gray-900">{name}</h3>
                    <p className="text-sm font-semibold leading-6 text-cb-primary">{type}</p>
                </div>
            </Link>
        </li>

    )
}

export default ArtistList