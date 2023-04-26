import type { AppProps } from 'next/app'
import Layout from '@component/components/layouts/Layout'
import '@component/styles/globals.scss'

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import authReducer from '../slices/authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}
