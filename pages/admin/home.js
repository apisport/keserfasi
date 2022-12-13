import Menu from '../../components/home/menu'

export default function Admin() {
    return (
        <div>
            <div>
                {/* ======= Hero Section ======= */}
                <section id="hero" className="d-flex align-items-center">
                    <div className="container position-relative text-center text-lg-start"   >
                            <section id="book-a-table">
                                <div className="container" >
                                    <div className="row text-white p-3">
                                        <div className='p-2'>
                                            <div className="col-lg-4 p-2" style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
                                                <a style={{ textDecoration: 'none', color: 'white' }} href="../../pesan" >
                                                    <div className="section-title">
                                                        <p style={{ fontSize: '22px' }}>Pesanan</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='p-2'>
                                            <div className="col-lg-4 p-2" style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
                                                <a style={{ textDecoration: 'none', color: 'white' }} href="../../pesan" >
                                                    <div className="section-title">
                                                        <p style={{ fontSize: '22px' }}>Tambah paket</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='p-2'>
                                            <div className="col-lg-4 p-2" style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
                                                <a style={{ textDecoration: 'none', color: 'white' }} href="../../pesan" >
                                                    <div className="section-title">
                                                        <p style={{ fontSize: '22px' }}>tambah ruang</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                    </div>
                </section>{/* End Hero */}
                <main id="main">
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
