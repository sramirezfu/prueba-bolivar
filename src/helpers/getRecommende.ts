import axios from "axios";

const getRecommende = async () => {
    try {
        const token = process.env.NEXT_PUBLIC_TOKEN;
        let config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        };
        const topTracksIds = [
            '0T2pB7P1VdXPhLdQZ488uH', '6BWPT5ku80skdgRnBuMJ28', '3rsVX2Pd8UkjqF2MAZqeif', '4aerdOMJUaod8OJVrrPGzC', '2le1KuBfBvqvKRjibYVgDb'
        ];
        const { data } = await axios.get(`https://api.spotify.com/v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(',')}`, config);
        return data;
    } catch (error) {
        return null;
    }
}

export default getRecommende