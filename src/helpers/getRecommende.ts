import axios from "axios";

const getRecommende = async () => {

    try {
        const token = 'BQAeZIPnjC9_1AAlEytjnvYJ1mOlgUgPmCS8HA8McqVryT60DVF4GEvvPVhLqJ750-oU3xCLRfEE9dEVAMR2r6f2IIsQnwCwsVgo6a31pwt7Viq7zrkYJr7ki6KeqKQh5e9oQMdvCGnYMMgasmk6042Z0fTQlY0GWGbKWzZ3Ufe5Vii2dEkB5_3ZhBujpsdDpreTCBVx';
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