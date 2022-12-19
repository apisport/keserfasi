import { Link, Image } from "next/link";

export default function Album() {
    return (
        <>
        <section id="book-a-table">
            <div className="container" >
                <div className="section-title text-center">
                    <p style={{ fontSize: '28px' }}>ruangan</p>
                </div>
                <div className="row text-white">
                    <div className="col-lg-4">
                        <a style={{ textDecoration: 'none', color: 'white' }} href="../../pesan" >
                            <div className="gallery-item">
                                <img src="../1.jpg"  className="Image-fluid" />
                            </div>
                            <div className="box ">
                                <span>01</span>
                                <h4>Ruangan</h4>
                                <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <a style={{ textDecoration: 'none', color: 'white' }} href="../../pesan">
                            <div className="gallery-item">
                                <img src="../1.jpg"  className="Image-fluid" />
                            </div>
                            <div className="box" >
                                <span>02</span>
                                <h4>Ruangan</h4>
                                <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <a style={{ textDecoration: 'none', color: 'white' }} href="../../pesan">
                            <div className="gallery-item">
                                <img src="../1.jpg"  className="Image-fluid" />
                            </div>
                            <div className="box" >
                                <span>03</span>
                                <h4> Ruangan</h4>
                                <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section id="gallery" className="gallery">
                        <div className="container" >
                            <div className="row row-cols-1 row-cols-md-2     text-white p-3">
                                {/* <Pesanan></Pesanan>
                                <Pesanan></Pesanan>
                                <Pesanan></Pesanan> */}
                            </div>
                        </div>
                    </section>
        </>
    )
}
