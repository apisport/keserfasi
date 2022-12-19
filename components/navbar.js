import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'react-bootstrap';

function navbaruser() {
    return (
        < Navbar id="header" className="navbar-dark d-flex align-items-cente" expand="lg">
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
                    <Nav className="ml-auto">
                        <Nav.Link className='nav-link scrollto' href="../">
                            <h5 className='text-white text-start'>Home</h5>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="#book-a-table">
                            <h5 className='text-white text-start'>Reservasi</h5>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="#menu">
                            <h5 className='text-white text-start'>Menu</h5>
                        </Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default navbaruser;