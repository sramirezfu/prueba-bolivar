import axios from "axios";

export const getOneArtist = async (id: string) => {
    try {
        const token = process.env.NEXT_PUBLIC_TOKEN;
        const { data } = await axios.get(`https://api.spotify.com/v1/artists/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
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
