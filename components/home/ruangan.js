export default function ruangan({ props }) {

    return (

        <section id="book-a-table">
            <div className="container" >
                <div className="section-title text-center">
                    <p style={{fontSize:'28px'}}>Mulai Reserfasi Sekarang</p>
                </div>
                <div className="section-title">
                    <p style={{ fontSize: '22px' }}>Pilih Ruangan</p>
                </div>
                <div className="row text-white">
                    <div className="col-lg-4">
                        <a style={{ textDecoration: 'none', color: 'white' }} href="../../pesan" >
                            <div className="gallery-item">
                                    <img src="../1.jpg" alt className="img-fluid" />
                            </div>
                            <div className="box ">
                            <span>01</span>
                                <h4>Ruangan</h4>
                            <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <a style={{ textDecoration: 'none', color:'white' }} href="../../pesan">
                            <div className="gallery-item">
                                <img src="../1.jpg" alt className="img-fluid" />
                            </div>
                            <div className="box" >
                            <span>02</span>
                                <h4>Ruangan</h4>
                            <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <a style={{ textDecoration: 'none', color: 'white' }}  href="../../pesan">
                            <div className="gallery-item">
                                <img src="../1.jpg" alt className="img-fluid" />
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
    )
}
