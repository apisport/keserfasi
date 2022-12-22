import Head from 'next/head'
import Image from 'next/image'
import Ruangan from '../components/home/ruangan'
import Menu from '../components/home/menu'

export default function Home() {
  return (
    <div>
      <div>
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center">
          <div className="container position-relative text-center text-lg-start mb-5"   >
            <div className="row mb-5">
              <div className="col-lg-8">
                <h1>TERSDITIONAL  <span>CUISINE</span></h1>
                <h1>&  <span>DANCE</span></h1>
                <div className="btns">
                  <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
                  <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Book a Table</a>
                </div>
              </div>
              {/* <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative " data-aos="zoom-in" data-aos-delay={200}>
                <a href="https://www.youtube.com/api sport" className="glightbox play-btn" />
              </div> */}
            </div>
          </div>
        </section>{/* End Hero */}
        <main id="main">

          <div className='bg-dark'>
            <Ruangan></Ruangan>
          </div>
          {/* ======= Specials Section ======= */}
          <section id="specials" className="specials">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <p>Hiburan</p>
              </div>
              <div className="row" >
                <div className="tab-pane" id="tab-5">
                  <div className="row">
                    {/* <div className="col-lg-6 details order-2 ">
                      <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                      <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                      <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                    </div> */}
                    <div className="col-lg-4 text-center ">
                      <img src="./hib1.jpg" className="img-fluid" />
                    </div>
                    <div className="col-lg-4 text-center ">
                      <img src="./hib2.jpg" className="img-fluid" />
                    </div>
                    <div className="col-lg-4 text-center ">
                      <img src="./hib3.jpg" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Specials Section */}
          <Menu></Menu>
          {/* ======= Gallery Section ======= */}
          <section id="gallery" className="gallery">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Gallery Warung kemarang</h2>
              </div>
            </div>
            <div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
              <div className="row g-0">
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="./1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="./1.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="./1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="./1.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="./1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="./1.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="./1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="./1.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="./1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="./1.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="./1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="./1.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="./1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="./1.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="./1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="./1.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Gallery Section */}
        </main>
        <div id="menu" className="mb-5 fixed-bottom bg-dark">
          <div className="text-center col-lg-10 col-md-10 form-group p-4">
            <a href='/pesan' type='btn' className='book-a-table-btn ' style={{ textDecoration: 'none', color: 'white' }}><b>Mulai Reservasi sekarang...</b></a>
          </div>
        </div>
      </div>
      
    </div>

  )
}
