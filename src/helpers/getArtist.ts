import axios from "axios";
import { ArtistRS } from "@component/interfaces/recommende.interface";

export const getArtist = async (searchKey: string) => {
    try {
        const { data }: ArtistRS = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer BQAcq-uwABijE44C4UGiUr4jkeY5UfdnSKAFJ6I3ndEq1DCpbk8CaD5CaU3w9ukWNnJL28m_0qTPQPB1iZWEtEfTlDK7z8qNkNdrKMMt37p2GcJmTqbyYGe17Wrge2kXVR49uaAwQaGDjCQYTnedCZ3wXdfD7ceCUd-qxjDk4wn8y3xZ7iUiKKPziZWACfv7wlUVfq_U`
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
