import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'react-bootstrap';

function BasicExample() {
    return (
        < Navbar id="header" className=" d-flex align-items-cente" expand="lg">
            <Container className='container-fluid container-xl d-flex align-items-center justify-content-lg-between'>
                <Navbar.Brand href="#home">

                    <img
                        className='logo me-auto me-lg-0'
                        alt=""
                        src="/logo.png"
                        width="30"
                        height="30"
                    />{'  '}
                    <h4 className='text-white text-start'>Warung kemarang</h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='nav-link scrollto' href="#home">Pesanan</Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="#link"> Paket</Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="#link"> ruang</Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="#link"> Album</Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="#link">Data Pesanan</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;