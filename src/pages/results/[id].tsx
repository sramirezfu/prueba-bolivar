import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { getListByArtists } from '@component/helpers/getListByArtists';
import { ListByArtis } from '@component/interfaces/listArtist.interface';
import { getOneArtist } from '@component/helpers/getOneArtist';
import { ArtistOne } from '@component/interfaces/artist';
import Tracks from '@component/components/results/tracks/Tracks';

interface Props {
    list: ListByArtis,
    artis: ArtistOne
}

const Results: NextPage<Props> = ({ list, artis }) => {
    return (
        <div className="container overflow-hidden mt-10">
            {list && <Tracks tracks={list} artis={artis} />}
        </div>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    const list: ListByArtis = await getListByArtists(query.id as string);
    const artis: ListByArtis = await getOneArtist(query.id as string);

    return {
        props: {
            list,
            artis
        },
    }
}

export default Results;