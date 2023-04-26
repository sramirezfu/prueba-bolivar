import axios from "axios";

export const getOneArtist = async (id: string) => {
    try {
        const { data } = await axios.get(`https://api.spotify.com/v1/artists/${id}`, {
            headers: {
                Authorization: `Bearer BQAcq-uwABijE44C4UGiUr4jkeY5UfdnSKAFJ6I3ndEq1DCpbk8CaD5CaU3w9ukWNnJL28m_0qTPQPB1iZWEtEfTlDK7z8qNkNdrKMMt37p2GcJmTqbyYGe17Wrge2kXVR49uaAwQaGDjCQYTnedCZ3wXdfD7ceCUd-qxjDk4wn8y3xZ7iUiKKPziZWACfv7wlUVfq_U`
            },
            params: {
                market: 'co'
            }
        })
        return data;
    } catch (error) {
        return null;
    }
}
