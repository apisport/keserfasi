
const Navbar = () => {
   

    return (
        <header id="header" className="fixed-top d-flex align-items-cente">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
                <a href="/" class="logo me-auto me-lg-0"><img src="./logo.png" alt="" class="img-fluid" /></a>
                <h1 className="logo me-auto me-lg-0"><a href="/">Warung Kemarang</a></h1>
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li><a className="nav-link scrollto active" href="/">Home</a></li>
                        <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
                        <li><a className="nav-link scrollto" href="#specials">Specials</a></li>
                        <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" />
                </nav>{/* .navbar */}
                <a href="#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">Reserfasi</a>
            </div>
        </header>
    )
}

export default Navbar;
