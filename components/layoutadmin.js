import Navbar from './navbaradmin'
import Footer from './footer'
import Helmet from 'react-helmet'
import Head from 'next/head';

const Layout = ({ children }) => {

    return (
        <div className="container-xxl mx-auto p-0  position-relative header-2-2" >
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="undefined" crossorigin="anonymous"></script>
                <script src="../../styles/bootstrap/js/bootstrap.min.js"></script>
                <script src="../../styles/glightbox/js/glightbox.min.js"></script>
                <script src="../../styles/isotope-layout/isotope.pkgd.min.js"></script>
                <script src="../../styles/swiper/swiper-bundle.min.js"></script>
                <script src="../../styles/php-email-form/validate.js"></script>
            </Helmet>
            <Head>
                

                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <title>Restaurantly Bootstrap Template - Index</title>
                <meta content name="description" />
                <meta content name="keywords" />


            </Head>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
export default Layout;