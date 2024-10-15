import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Badge, Container } from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa'; // Import icon giỏ hàng
import Cart from './Cart'; // Import thành phần Cart
import { useState } from "react";


function NavbarCpn({ cartItems, setCartItems }) {
    const [showModal, setShowModal] = useState(false); //create state to control Modal
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);//tinh tong so luong gio hang

    const handleShow = () => setShowModal(true); //Ham de mo Modal
    const handleClose = () => setShowModal(false);//Ham de dong Modal

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Pizza House</Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About Us</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Contact
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>

                        <Nav>
                            {/* Cart part with cart icon and number of item count */}
                            <Nav.Link onClick={handleShow} style={{ cursor: 'pointer' }}>
                                <FaShoppingCart size={24} />
                                {totalItems > 0 && <Badge pill bg="danger">{totalItems} </Badge>}
                            </Nav.Link>
                            {/* <NavDropdown
                                title={
                                    <img
                                        src="https://cdn2.iconfinder.com/data/icons/people-occupation-job/64/Thief-Stealing-Criminal-Robber-Gangster-Robbery-Avatar-1024.png"
                                        className="rounded-circle"
                                        height="25"
                                        width="25"
                                        alt="User Avatar"
                                    />
                                }
                                id="userDropdown"
                                align="end"
                            >
                                <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#">Order History</NavDropdown.Item>
                                <NavDropdown.Item href="#">Logout</NavDropdown.Item>
                            </NavDropdown> */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

         //{/* Gọi Cart và truyền state điều khiển modal */}
            <Cart cartItems={cartItems} setCartItems={setCartItems} showModal={showModal} handleClose={handleClose} />
        </>

    );
}

export default NavbarCpn