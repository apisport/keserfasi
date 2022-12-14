export default function ruangan({ props }) {

    return (
        <div className="p-3  ">
            <div className="shadow-sm bg-dark  border border-2  p-3 text-start text-white">
                <h1>data</h1>
                <h4><b>Nama Pemesan:</b>data</h4>
                <h4><b>Nama Tim:</b> data</h4>
                <h4><b>Opsi Pembayaran:</b> data</h4>
                <h5><b>Diterima:</b> data</h5>
                <h5><b>Tanggal Main:</b> data</h5>
                <img src="http://placekitten.com/200/300" className='mb-3'></img>
                <div className="row">
                    <div className="col-6">
                        <a className="btn d-block btn-success text-white p-3 mb-2">Terima</a>
                    </div>
                    <div className="col-6">
                        <a className="btn d-block btn-danger text-white p-3 mb-2">Tolak</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
