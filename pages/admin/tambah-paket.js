export default function Pesan() {
    return (
        <section id="events" className="events">
            <div className="container" >
                <div className="section-title">
                    <h2>Reservation</h2>
                    <p>Book a Table</p>
                </div>
                <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay={100}>
                    <div className="row">
                        <div className="col-lg-10 col-md-10 form-group">
                            <label style={{ color: "white" }}>Nama Pemesan</label>
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3 mt-md-0">
                            <label style={{ color: "white" }}>Email</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3 mt-md-0">
                            <label style={{ color: "white" }}>Nomor Kontak</label>
                            <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3">
                            <label style={{ color: "white" }}>Tanggal boking</label>
                            <input type="date" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3">
                            <label style={{ color: "white" }}>Jamb Boking</label>
                            <input type="time" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3">
                            <label style={{ color: "white" }}>Jumlah Tamu</label>
                            <input type="text" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3">
                            <label style={{ color: "white" }}>Nama</label>
                            <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                            <div className="validate" />
                        </div>
                    </div>
                    <div className="form-group mt-3">
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
