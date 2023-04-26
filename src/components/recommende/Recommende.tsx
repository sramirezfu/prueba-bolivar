import { FC } from "react"
import { RecommendFivesongs } from "@component/interfaces/recommende.interface";
import RecommendeList from "./RecommendeList";

interface Props {
    data: RecommendFivesongs,
}

const Recommende: FC<Props> = ({ data }) => {
    return (
        <div className="mb-40">
            <h3 className="mt-16 text-[20px] font-semibold">Top 5 recomendados</h3>
            <div className="mx-auto mt-10 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                {data.tracks.map(({ album }, index) => (
                    <RecommendeList {...album} key={index} />
                ))
                }
            </div>
        </div>
    )
}

export default Recommende