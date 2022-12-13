import '../styles/globals.css'
import '../styles/style.css'
import '../styles/animate.css/animate.min.css'
import '../styles/bootstrap/css/bootstrap.min.css'
import '../styles/bootstrap-icons/bootstrap-icons.css'
import '../styles/boxicons/css/boxicons.min.css'
import '../styles/glightbox/css/glightbox.min.css'
import '../styles/swiper/swiper-bundle.min.css'
import '../styles/swiper/swiper-bundle.min.css'
import Layout from '../components/layout'
import Layoutadmmin from '../components/layoutadmin'
import { useRouter } from 'next/router'



function MyApp({ Component, pageProps }) {
  const router = useRouter()
  if (router.pathname.startsWith('/admin/')) {
    return (
      <Layoutadmmin>
        <Component {...pageProps} />
      </Layoutadmmin>
    )
  }
  else {
    return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
  }
}

export default MyApp
