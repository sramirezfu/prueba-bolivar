import axios from "axios";
import { ArtistRS } from "@component/interfaces/recommende.interface";

export const getArtist = async (searchKey: string) => {
    try {
        const token = process.env.NEXT_PUBLIC_TOKEN;
        const { data }: ArtistRS = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist",
                limit: 10
            }
        })
        return data;
    } catch (error) {
        return null;
    }
}
