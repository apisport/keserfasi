export default function ruangan({ props }) {

    return (

        <section id="menu" className="menu section-bg">
            <div className="container" >
                <div className="section-title">
                    <h2>Menu</h2>
                    <p>Check Our Tasty Menu</p>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay={100}>
                </div>
                <div className="row menu-container" >
                    <div className="col-lg-4 menu-item filter-starters bordermenu">
                        <img src="../menu/lobster-bisque.jpg" className="menu-img" alt />
                        <div className="menu-content">
                            <a href="#">Paket</a><span>60 Pak</span>
                        </div>
                        <div className="menu-ingredients">
                            <ul>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
