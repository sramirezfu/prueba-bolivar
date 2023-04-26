import { Album } from "@component/interfaces/recommende.interface"
import Image from "next/image"
import { FC } from "react"

const RecommendeList: FC<Album> = ({ release_date, images, artists, name }) => {
    return (
        <article
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 sm:px-8 px-4 pb-4 sm:pb-8 pt-40"
        >
            <Image
                src={images[1].url}
                alt="Logo aerolinea"
                width={images[1].width}
                height={images[1].height}
                loading='lazy'
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <div className="flex flex-col items-start gap-y-1 overflow-hidden text-sm lg:text-[14px] lg:leading-[16px] text-gray-300">
                <time dateTime={release_date} className="mr-8">
                    {release_date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                        {artists[0].name}
                    </div>
                </div>
            </div>
            <h3 className="mt-3 sm:text-lg text-[16px] font-semibold leading-[18px] text-white">
                <span className="absolute inset-0" />
                {name}
            </h3>
        </article>

    )
}

export default RecommendeList