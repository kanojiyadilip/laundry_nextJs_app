import Layout from '../component/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (<>
            <Layout>
              {/* <div style={{marginTop: '60px'}}> */}
              <div>
                <Component {...pageProps} />
              </div>  
            </Layout>  
          </>)
}

export default MyApp
