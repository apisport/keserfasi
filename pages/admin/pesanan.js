import Pesanan from '../../components/admin/cardpesanan'

export default function Admin() {
    return (
        <div>
            <div>
                {/* ======= Hero Section ======= */}
                <section id="hero" className="d-flex align-items-center">
                    <div className="container" >
                        <div className="row text-white p-3">
                            <Pesanan></Pesanan>
                            <Pesanan></Pesanan>
                            <Pesanan></Pesanan>
                        </div>
                    </div>
                </section>{/* End Hero */}
                <main id="main">                    
                </main>
            </div>

        </div>

    )
}
