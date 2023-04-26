import axios from "axios";

export const getListByArtists = async (id: string) => {
    try {
        const token = process.env.NEXT_PUBLIC_TOKEN;
        const { data } = await axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks`, {
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
