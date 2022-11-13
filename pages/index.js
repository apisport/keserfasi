import Head from 'next/head'
import Image from 'next/image'
import Ruangan from '../components/home/ruangan'
import Menu from '../components/home/menu'

export default function Home() {
  return (
    <div>
      <div>
        <div id="topbar" className="d-flex align-items-center fixed-top">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-phone d-flex align-items-center"><span>+1 5589 55488 55</span></i>
              <i className="bi bi-clock d-flex align-items-center ms-4"><span> Mon-Sat: 11AM - 23PM</span></i>
            </div>
            <div className="languages d-none d-md-flex align-items-center">
              <ul>
                <li>En</li>
                <li><a href="#">De</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center">
          <div className="container position-relative text-center text-lg-start"   >
            <div className="row">
              <div className="col-lg-8">
                <h1>Welcome to <span>Warung Kemarang</span></h1>
                <div className="btns">
                  <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
                  <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Book a Table</a>
                </div>
              </div>
              <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay={200}>
                <a href="https://www.youtube.com/api sport" className="glightbox play-btn" />
              </div>
            </div>
          </div>
        </section>{/* End Hero */}
        <main id="main">

          <Ruangan></Ruangan>
          {/* ======= Specials Section ======= */}
          <section id="specials" className="specials">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Specials</h2>
                <p>Check Our Specials</p>
              </div>
              <div className="row" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-lg-3">
                  <ul className="nav nav-tabs flex-column">
                    <li className="nav-item">
                      <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Modi sit est</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Unde praesentium sed</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Pariatur explicabo vel</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Nostrum qui quasi</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Iusto ut expedita aut</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-9 mt-4 mt-lg-0">
                  <div className="tab-content">
                    <div className="tab-pane active show" id="tab-1">
                      <div className="row">
                        <div className="col-lg-8 details order-2 order-lg-1">
                          <h3>Architecto ut aperiam autem id</h3>
                          <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                          <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                        </div>
                        <div className="col-lg-4 text-center order-1 order-lg-2">
                          <img src="../specials-1.png" alt className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab-2">
                      <div className="row">
                        <div className="col-lg-8 details order-2 order-lg-1">
                          <h3>Et blanditiis nemo veritatis excepturi</h3>
                          <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                          <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                        </div>
                        <div className="col-lg-4 text-center order-1 order-lg-2">
                          <img src="../specials-2.png" alt className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab-3">
                      <div className="row">
                        <div className="col-lg-8 details order-2 order-lg-1">
                          <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                          <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                          <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                        </div>
                        <div className="col-lg-4 text-center order-1 order-lg-2">
                          <img src="../specials-3.png" alt className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab-4">
                      <div className="row">
                        <div className="col-lg-8 details order-2 order-lg-1">
                          <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                          <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                          <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                        </div>
                        <div className="col-lg-4 text-center order-1 order-lg-2">
                          <img src="../specials-4.png" alt className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab-5">
                      <div className="row">
                        <div className="col-lg-8 details order-2 order-lg-1">
                          <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                          <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                          <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                        </div>
                        <div className="col-lg-4 text-center order-1 order-lg-2">
                          <img src="../specials-5.png" alt className="img-fluid" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Specials Section */}
          {/* ======= Events Section ======= */}
          <section id="events" className="events">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Events</h2>
                <p>Organize Your Events in our Restaurant</p>
              </div>
              <div className="events-slider swiper" data-aos="fade-up" data-aos-delay={100}>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="row event-item">
                      <div className="col-lg-6">
                        <img src="../event-birthday.jpg" className="img-fluid" alt />
                      </div>
                      <div className="col-lg-6 pt-4 pt-lg-0 content">
                        <h3>Birthday Parties</h3>
                        <div className="price">
                          <p><span>$189</span></p>
                        </div>
                        <p className="fst-italic">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.
                        </p>
                        <ul>
                          <li><i className="bi bi-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                          <li><i className="bi bi-check-circled" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                          <li><i className="bi bi-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        </ul>
                        <p>
                          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur
                        </p>
                      </div>
                    </div>
                  </div>{/* End testimonial item */}
                  <div className="swiper-slide">
                    <div className="row event-item">
                      <div className="col-lg-6">
                        <img src="../event-private.jpg" className="img-fluid" alt />
                      </div>
                      <div className="col-lg-6 pt-4 pt-lg-0 content">
                        <h3>Private Parties</h3>
                        <div className="price">
                          <p><span>$290</span></p>
                        </div>
                        <p className="fst-italic">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.
                        </p>
                        <ul>
                          <li><i className="bi bi-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                          <li><i className="bi bi-check-circled" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                          <li><i className="bi bi-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        </ul>
                        <p>
                          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur
                        </p>
                      </div>
                    </div>
                  </div>{/* End testimonial item */}
                  <div className="swiper-slide">
                    <div className="row event-item">
                      <div className="col-lg-6">
                        <img src="../event-custom.jpg" className="img-fluid" alt />
                      </div>
                      <div className="col-lg-6 pt-4 pt-lg-0 content">
                        <h3>Custom Parties</h3>
                        <div className="price">
                          <p><span>$99</span></p>
                        </div>
                        <p className="fst-italic">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.
                        </p>
                        <ul>
                          <li><i className="bi bi-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                          <li><i className="bi bi-check-circled" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                          <li><i className="bi bi-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        </ul>
                        <p>
                          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur
                        </p>
                      </div>
                    </div>
                  </div>{/* End testimonial item */}
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </section>{/* End Events Section */}
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
                    <a href="../gallery/gallery-1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="../gallery/gallery-1.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="../gallery/gallery-2.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="../gallery/gallery-2.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="../gallery/gallery-3.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="../gallery/gallery-3.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="../gallery/gallery-4.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="../gallery/gallery-4.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="../gallery/gallery-5.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="../gallery/gallery-5.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="../gallery/gallery-6.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="../gallery/gallery-6.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="../gallery/gallery-7.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="../gallery/gallery-7.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="../gallery/gallery-8.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="../gallery/gallery-8.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Gallery Section */}
          {/* ======= Chefs Section ======= */}
          <section id="chefs" className="chefs">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Chefs</h2>
                <p>Our Proffesional Chefs</p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="member"   >
                    <img src="../chefs/chefs-1.jpg" className="img-fluid" alt />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Walter White</h4>
                        <span>Master Chef</span>
                      </div>
                      <div className="social">
                        <a href><i className="bi bi-twitter" /></a>
                        <a href><i className="bi bi-facebook" /></a>
                        <a href><i className="bi bi-instagram" /></a>
                        <a href><i className="bi bi-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="member" data-aos="zoom-in" data-aos-delay={200}>
                    <img src="../chefs/chefs-2.jpg" className="img-fluid" alt />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Sarah Jhonson</h4>
                        <span>Patissier</span>
                      </div>
                      <div className="social">
                        <a href><i className="bi bi-twitter" /></a>
                        <a href><i className="bi bi-facebook" /></a>
                        <a href><i className="bi bi-instagram" /></a>
                        <a href><i className="bi bi-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="member" data-aos="zoom-in" data-aos-delay={300}>
                    <img src="../chefs/chefs-3.jpg" className="img-fluid" alt />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>William Anderson</h4>
                        <span>Cook</span>
                      </div>
                      <div className="social">
                        <a href><i className="bi bi-twitter" /></a>
                        <a href><i className="bi bi-facebook" /></a>
                        <a href><i className="bi bi-instagram" /></a>
                        <a href><i className="bi bi-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Chefs Section */}
        </main>
      </div>

    </div>

  )
}
