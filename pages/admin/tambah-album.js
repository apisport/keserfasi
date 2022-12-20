import { Link, Image } from "next/link";

export default function Album() {
    return (
        <>
            <section id="gallery" className="gallery">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Gallery Warung kemarang</h2>
                    </div>
                </div>
                <div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
                    <div className="row col-lg-12">
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="../../1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                    <img src="../../1.jpg" alt className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="../../1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                    <img src="../../1.jpg" alt className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="../../1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                    <img src="../../1.jpg" alt className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="../../1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                    <img src="../../1.jpg" alt className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="../../1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                    <img src="../../1.jpg" alt className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="../../1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                    <img src="../../1.jpg" alt className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="../../1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                    <img src="../../1.jpg" alt className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="../../1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                    <img src="../../1.jpg" alt className="img-fluid" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="events" className="events">
                <div className="container" >
                    <div className="section-title">
                        <h2>Reservation</h2>
                        <p>Lengkapi Data Reserfasi</p>
                    </div>
                    <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row col-lg-12">
                            <div className="col-lg-6 col-md-10 form-group mt-3">
                                <label style={{ color: "white" }}>Gambar</label>
                                <input type="file" className="form-control" placeholder="Date" />
                            </div>
                            <div className="col-lg-6 col-md-10 mt-3 form-group">
                                <label style={{ color: "white" }}>Nama Ruangan</label>
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-6 col-md-10 form-group mt-3">
                                <label style={{ color: "white" }}>Deskripsi</label>
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate" />
                            </div>
                            <div className="text-center col-lg-10 col-md-10 form-group mt-3 mt-5">
                                <button className="book-a-table-btn" type="submit">Tambah Ruangan</button>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
        </>
    )
}
