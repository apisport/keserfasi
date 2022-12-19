// import Pesanan from '../../components/admin/cardpesanan'

export default function Datapesanan() {
    return (
        <div>
            <div>
                {/* ======= Hero Section ======= */}
                <section id="hero" className="d-flex align-items-center">
                    <div className="container" >
                        <div className="row text-white p-3">
                            <table className="text-white table ">
                                <thead>
                                    <tr>
                                        <th>Nama</th>
                                        <th>Tgl boking</th>
                                        <th>NO.Hp</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody style={{ height: '10px !important', overflow: 'scroll' }}>
                                    <tr>
                                        <td className="filterable-cell">Nama</td>
                                        <td className="filterable-cell">08124</td>
                                        <td className="filterable-cell">12425</td>
                                        <td className="filterable-cell">
                                            <div className="row ">
                                                <div className="col-4">
                                                    <a className="btn d-block btn-success text-white ">Terima</a>
                                                </div>
                                                <div className="col-4">
                                                    <a className="btn d-block btn-danger text-white ">Tolak</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>

                        </div>
                    </div>
                </section>{/* End Hero */}
                <main id="main">
                </main>
            </div>

        </div>

    )
}
