import { FC } from "react";
import { DataArtis } from "@component/interfaces/recommende.interface";
import ArtistList from "./ArtistList";

interface Props {
    data: DataArtis,
}

const Artist: FC<Props> = ({ data }) => {
    return (
        <>
            <h3 className="mt-16 text-[20px] font-semibold">Resultados más relevantes</h3>
            <h5 className="text-[16px] font-semibold">Selecciona un artista </h5>
            <ul role="list" className="flex flex-wrap gap-x-2 gap-y-7 sm:gap-x-3 mt-10 justify-between">
                {data.artists.items.map((item) => (
                    <ArtistList {...item} key={item.id} />
                ))}
            </ul >
        </>
    )
}

export default Artist;