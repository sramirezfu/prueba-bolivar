import { FC } from "react";
import { ArtistOne } from "@component/interfaces/artist";
import { ListByArtis } from "@component/interfaces/listArtist.interface";
import TracksArtist from "./TracksArtist";
import TracksList from "./TracksList";

interface Props {
    tracks: ListByArtis,
    artis: ArtistOne,
}

const Tracks: FC<Props> = ({ tracks, artis }) => {
    return (
        <>
            <TracksArtist artis={artis} />
            <h3 className="mt-16 text-[20px] font-semibold">Populares de {artis.name}:</h3>
            <ul role="list" className="divide-y divide-gray-100 lg:px-10 mx-auto">
                {tracks.tracks.map((track) => (
                    <TracksList key={track.id} {...track} />
                ))}
            </ul>
        </>
    )
}

export default Tracks