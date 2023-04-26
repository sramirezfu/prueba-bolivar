import { useState } from 'react';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import axios from 'axios';
import SearchCp from '@component/components/search/Search';
import { DataArtis, RecommendFivesongs } from '@component/interfaces/recommende.interface';
import Recommende from '@component/components/recommende/Recommende';
import Artist from '@component/components/results/artist/Artist';
import { getArtist } from '../helpers/getArtist';
import getRecommende from '@component/helpers/getRecommende';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface Props {
    data: RecommendFivesongs,
}

const Search: NextPage<Props> = ({ data }) => {
    const [artists, setArtists] = useState<DataArtis>();
    const token = useSelector((state: RootState) => state.auth.token);

    const newSearch = async (word: string) => {
        const artist = await getArtist(word);
        if (artist) setArtists(artist);
    }

    return (
        <div className="container overflow-hidden mt-10">
            <div className='flex'>
                <h1 className="text-[20px] font-bold">¿Que quieres escuchar hoy?</h1>
                <SearchCp onNewSearch={newSearch} />
            </div>
            {artists &&
                <>
                    <Artist data={artists} />
                </>
            }
            {data &&
                <Recommende data={data} />
            }
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const data = await getRecommende();
    return {
        props: {
            data,
        },
    }
}

export default Search;