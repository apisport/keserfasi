export default function ruangan({ props }) {

    return (

        <section id="menu" className="menu section-bg">
            <div className="container" >
                <div className="section-title">
                    <h2>Menu</h2>
                    <p>Paket Menu Reservasi</p>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay={100}>
                </div>
                <div className="row col-12 menu-container" >
                    <div className="col-lg-6 menu-item filter-starters bordermenu">
                        <img src="../rev1.jpg" className="img-fluid"  />
                        {/* <div className="menu-content">
                            <a href="#">Paket</a><span>60 Pak</span>
                        </div> */}
                    </div>
                    <div className="col-lg-6 menu-item filter-starters bordermenu">
                        <img src="../rev2.jpg" className="img-fluid" />
                        {/* <div className="menu-content">
                            <a href="#">Paket</a><span>60 Pak</span>
                        </div> */}
                    </div>
                    <div className="col-lg-6 menu-item filter-starters bordermenu">
                        <img src="../rev3.jpg" className="img-fluid" />
                        {/* <div className="menu-content">
                            <a href="#">Paket</a><span>60 Pak</span>
                        </div> */}
                    </div>
                    <div className="col-lg-6 menu-item filter-starters bordermenu">
                        <img src="../rev4.jpg" className="img-fluid" />
                        {/* <div className="menu-content">
                            <a href="#">Paket</a><span>60 Pak</span>
                        </div> */}
                    </div>
                </div>
                
            </div>
        </section>
    )
}
