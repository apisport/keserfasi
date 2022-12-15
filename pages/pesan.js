export default function Pesan() {
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
                            <label style={{color:"white"}}>Nama Pemesan</label>
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
                            <input  type="date" className="form-control"  placeholder="Date" />
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
                            <label style={{ color: "white" }}>Jam Booking</label>

                            <a className="form-control" data-bs-toggle="collapse" href="#jam" >
                            PILIH JAM
                            </a>
                            <div className="row collapse multi-collapse text-start mt-4" id="jam">

                                <div className='col-6 col-lg-3 mb-2'  style={{ fontWeight: 500 }}>
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
                            </div>
                        </div>
                        
                        <div className="col-lg-10 col-md-10 form-group mt-3">
                            <label style={{ color: "white" }}>Jumlah Tamu</label>
                            <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                            <div className="validate" />
                        </div>
                    </div>
                    <div className="col-lg-10 col-md-10 form-group mt-3">
                        <label style={{ color: "white" }}>Catatan</label>
                        <textarea className="form-control" name="message" rows={5} placeholder="Message" defaultValue={""} />
                        <div className="validate" />
                    </div>

                    <div className="text-center mt-5"><button className="book-a-table-btn" type="submit">Book a Table</button></div>
                </form>
            </div>
        </section>
    )
}
