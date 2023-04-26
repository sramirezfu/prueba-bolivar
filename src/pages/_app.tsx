import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Layout from '@component/components/layouts/Layout'
import '@component/styles/globals.scss'
import { TokenProvider } from '@component/context'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <TokenProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </TokenProvider>
    )
}
