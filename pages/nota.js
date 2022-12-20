export default function Nota() {
    return (
        <section id="events" className="events">
            <div className="container" >
                <div className="section-title">
                    <h2>Reservation</h2>
                    <p>Lengkapi Data Reserfasi</p>
                </div>
                <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay={100}>
                    <div className="row">
                        <div className="col-lg-10 col-md-10 mt-3 form-group">
                            <label style={{ color: "white" }}>Nama Pemesan</label>
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3">
                            <label style={{ color: "white" }}>Email</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3 ">
                            <label style={{ color: "white" }}>Nomor Kontak</label>
                            <input type="text" className="form-control" name="phone" id="phone" placeholder="Nomor Telp." data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3">
                            <label style={{ color: "white" }}>Tanggal Booking</label>
                            <input type="date" className="form-control" placeholder="Date" />
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3">
                            <label style={{ color: "white" }}>Pilih Paket</label>
                            <select className="form-control form-select">
                                <option disabled>pilih paket</option>
                                <option>Paket 1 - 75k</option>
                                <option>Paket 2 - 100k</option>
                            </select>
                            <div className="validate" />
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3">
                            <label style={{ color: "white" }}>Jumlah Tamu</label>
                            <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                            <div className="validate" />
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3">
                            <label style={{ color: "white" }}>Jam Booking</label>

                            <a className="form-control" data-bs-toggle="collapse" href="#jam" >
                                <icon className='fa fa-sort-amount-desc'></icon>&nbsp;PILIH JAM
                            </a>
                            <div className="row collapse multi-collapse text-start mt-4" id="jam">

                                <div className='col-6 col-lg-3 mb-2' style={{ fontWeight: 500 }}>
                                    <div>
                                        <input type="checkbox" className="btn-check" />
                                        <label className="btn-apisport-parent btn-apisport" style={({ backgroundColor: 'red', color: 'white' })} htmlFor={`btn-check1`}>16.00</label>
                                    </div>
                                </div>
                                <div className='col-6 col-lg-3 mb-2' id="jam" style={{ fontWeight: 500 }}>
                                    <div>
                                        <input type="checkbox" className="btn-check" />
                                        <label className="btn-apisport-parent btn-apisport" style={({ backgroundColor: 'red', color: 'white' })} htmlFor={`btn-check1`}>16.00</label>
                                    </div>
                                </div>
                                <div className='col-6 col-lg-3 mb-2' id="jam" style={{ fontWeight: 500 }}>
                                    <div>
                                        <input type="checkbox" className="btn-check" />
                                        <label className="btn-apisport-parent btn-apisport" style={({ backgroundColor: 'red', color: 'white' })} htmlFor={`btn-check1`}>16.00</label>
                                    </div>
                                </div>
                                <div className='col-6 col-lg-3 mb-2' id="jam" style={{ fontWeight: 500 }}>
                                    <div>
                                        <input type="checkbox" className="btn-check" />
                                        <label className="btn-apisport-parent btn-apisport" style={({ backgroundColor: 'red', color: 'white' })} htmlFor={`btn-check1`}>16.00</label>
                                    </div>
                                </div>
                                <div className='col-6 col-lg-3 mb-2' id="jam" style={{ fontWeight: 500 }}>
                                    <div>
                                        <input type="checkbox" className="btn-check" />
                                        <label className="btn-apisport-parent btn-apisport" style={({ backgroundColor: 'red', color: 'white' })} htmlFor={`btn-check1`}>16.00</label>
                                    </div>
                                </div>
                                <div className='col-6 col-lg-3 mb-2' id="jam" style={{ fontWeight: 500 }}>
                                    <div>
                                        <input type="checkbox" className="btn-check" id={`btn-check3`} />
                                        <label className="btn-apisport-parent btn-apisport" style={({ backgroundColor: 'red', color: 'white' })} htmlFor={`btn-check1`}>16.00</label>
                                    </div>
                                </div>
                                <div className='col-6 col-lg-3 mb-2' id="jam" style={{ fontWeight: 500 }}>
                                    <div>
                                        <input type="checkbox" className="btn-check" id={`btn-check2`} />
                                        <label className="btn-apisport-parent btn-apisport" style={({ backgroundColor: 'red', color: 'white' })} htmlFor={`btn-check1`}>16.00</label>
                                    </div>
                                </div>
                                <div className='col-6 col-lg-3 mb-2' id="jam" style={{ fontWeight: 500 }}>
                                    <div>
                                        <input type="checkbox" className="btn-check" id={`btn-check1`} />
                                        <label className="btn-apisport-parent btn-apisport" style={({ backgroundColor: 'red', color: 'white' })} htmlFor={`btn-check1`}>16.00</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3">
                            <label style={{ color: "white" }}>Ruangan</label>

                            <a className="form-control" data-bs-toggle="collapse" href="#ruang" >
                                <icon className='fa fa-sort-amount-desc'></icon>&nbsp;Pilih Ruangan
                            </a>
                            <div className="row col collapse multi-collapse text-start mt-4" id="ruang">
                                <div className="col-4  p-2">
                                    <input type="checkbox" id={`btn-check1332`}
                                        autoComplete="off" name='ruangan1' className="btn-check" />
                                    <label className="card btn-apisport btn-apisport-parent" htmlFor={`btn-check1332`}><div>
                                        <img src="./1.jpg" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text" style={{ fontSize: '12px', lineHeight: '80%' }}><b>the bulk of the card's content.</b></p>
                                        </div>
                                    </div></label>
                                </div>
                                <div className="col-4  p-2">
                                    <input type="checkbox" id={`btn-check13732`}
                                        autoComplete="off" name='ruangan1' className="btn-check" />
                                    <label className="card btn-apisport btn-apisport-parent" htmlFor={`btn-check13732`}><div>
                                        <img src="./1.jpg" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text" style={{ fontSize: '12px', lineHeight: '80%' }}><b>the bulk of the card's content.</b></p>
                                        </div>
                                    </div></label>
                                </div>
                                <div className="col-4  p-2">
                                    <input type="checkbox" id={`btn-check132`}
                                        autoComplete="off" name='ruangan1' className="btn-check" />
                                    <label className="card btn-apisport btn-apisport-parent" htmlFor={`btn-check132`}><div>
                                        <img src="./1.jpg" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text" style={{ fontSize: '12px', lineHeight: '80%' }}><b>the bulk of the card's content.</b></p>
                                        </div>
                                    </div></label>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3">
                            <label style={{ color: "white" }}>Hiburan</label>

                            <a className="form-control" data-bs-toggle="collapse" href="#hiburan" >
                                <icon className='fa fa-sort-amount-desc'></icon>&nbsp;Pilih Hiburan
                            </a>
                            <div className="row col collapse multi-collapse text-start mt-4" id="hiburan">
                                <div className="col-4  p-2">
                                    <input type="checkbox" id={`btn-check133`}
                                        autoComplete="off" name='ruangan1' className="btn-check" />
                                    <label className="card btn-apisport btn-apisport-parent" htmlFor={`btn-check133`}><div>
                                        <img src="./1.jpg" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text" style={{ fontSize: '12px', lineHeight: '80%' }}><b>the bulk of the card's content.</b></p>
                                        </div>
                                    </div></label>
                                </div>
                                <div className="col-4  p-2">
                                    <input type="checkbox" id={`btn-check1373`}
                                        autoComplete="off" name='ruangan1' className="btn-check" />
                                    <label className="card btn-apisport btn-apisport-parent" htmlFor={`btn-check1373`}><div>
                                        <img src="./1.jpg" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text" style={{ fontSize: '12px', lineHeight: '80%' }}><b>the bulk of the card's content.</b></p>
                                        </div>
                                    </div></label>
                                </div>
                                <div className="col-4  p-2">
                                    <input type="checkbox" id={`btn-check13`}
                                        autoComplete="off" name='ruangan1' className="btn-check" />
                                    <label className="card btn-apisport btn-apisport-parent" htmlFor={`btn-check13`}><div>
                                        <img src="./1.jpg" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text" style={{ fontSize: '12px', lineHeight: '80%' }}><b>the bulk of the card's content.</b></p>
                                        </div>
                                    </div></label>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 col-md-10 form-group mt-3">
                        <label style={{ color: "white" }}>Catatan</label>
                        <textarea className="form-control" name="message" rows={5} placeholder="Message" defaultValue={""} />
                        <div className="validate" />
                    </div>
                    <div className="col-lg-10 col-md-10 form-group mt-3">
                        <label style={{ color: "white" }}>Bukti transfer</label>
                        <input type="file" className="form-control" placeholder="Date" />
                    </div>
                    <div className="text-center col-lg-10 col-md-10 form-group mt-3 mt-5">
                        <button className="book-a-table-btn" type="submit">Reservasi sekarang</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
