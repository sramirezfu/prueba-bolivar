import { ArtistOne } from "@component/interfaces/artist"
import Image from "next/image"
import { FC } from "react"

interface Props {
    artis: ArtistOne,
}

const TracksArtist: FC<Props> = ({ artis }) => {
    return (
        <div className="bg-white pt-4">
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{artis.name}</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        We’re a dynamic group of individuals who are passionate about what we do.
                    </p>
                </div>
                <div className="mx-auto mt-20">
                    {artis.images.length > 0 && <Image
                        src={artis.images[0].url}
                        alt="Logo aerolinea"
                        width={artis.images[0].width}
                        height={artis.images[0].height}
                        loading='lazy'
                        className="mx-auto h-56 w-56 rounded-full"
                    />}
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{artis.type}</h3>
                    <p className="text-sm leading-6 text-gray-800 font-semibold">Generos:
                        {artis.genres.map((gen, index) => (
                            <span className="text-gray-600 font-normal" key={index}> {artis.genres.length > 1 ? `${gen},` : gen}</span>
                        ))}
                    </p>
                    <p className="text-sm leading-6 text-gray-800 font-semibold">
                        Seguidores:
                        <span className="text-gray-600 font-normal"> {artis.followers.total}</span>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default TracksArtist