import '../styles/bootstrap.min.css';
import '../styles/styles.css';
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}