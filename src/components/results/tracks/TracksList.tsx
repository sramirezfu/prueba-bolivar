import { FC } from "react"
import { Track } from "@component/interfaces/listArtist.interface"
import Image from "next/image"

const TracksList: FC<Track> = ({ album, name, popularity, duration_ms, track_number }) => {
    return (
        <li className="flex justify-between gap-x-6 py-5">
            <div className="w-[2%] flex items-center">
                {track_number}
            </div>
            <div className="flex gap-x-4 w-[78%]">
                {album.images.length > 0 && <Image
                    src={album.images[0].url}
                    alt="Logo aerolinea"
                    width={album.images[0].width}
                    height={album.images[0].height}
                    loading='lazy'
                    className="h-16 w-16 rounded-full"
                />}
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{name}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{album.release_date}</p>
                </div>
            </div>
            <div className="sm:flex sm:flex-col items-end w-[20%]">
                <p className="text-sm text-end leading-6 text-gray-900">
                    <span>Popularidad: </span>
                    {popularity}
                </p>
                <p className="mt-1 text-xs text-end  leading-5 text-gray-500">
                    Duración: <time dateTime={duration_ms.toString()}>{duration_ms}</time>
                </p>
            </div>
        </li>
    )
}

export default TracksList