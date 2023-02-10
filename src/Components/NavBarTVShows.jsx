import { Navbar, Container, NavDropdown, Nav, Button } from "react-bootstrap";

const NavBarTVShows = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand>
      <h2>TV Shows</h2>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="Genres" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Comedy</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Drama</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Thriller</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  //   <Container className="d-flex bg-dark m-0">

  //     <Dropdown className="ml-4 mt-1">
  //       <Button
  //         variant="secondary"
  //         size="sm"
  //         id="dropdownMenuButton"
  //         data-toggle="dropdown"
  //         aria-haspopup="true"
  //         aria-expanded="false"
  //         style={{ backgroundColor: "#221f1f" }}
  //       >
  //         Genres &nbsp;
  //       </Button>
  //       <Dropdown.Menu className="bg-dark" aria-labelledby="dropdownMenuButton">
  //         <Dropdown.Item className="text-white bg-dark" href="#">
  //           Comedy
  //         </Dropdown.Item>
  //         <Dropdown.Item className="text-white bg-dark" href="#">
  //           Drama
  //         </Dropdown.Item>
  //         <Dropdown.Item className="text-white bg-dark" href="#">
  //           Thriller
  //         </Dropdown.Item>
  //       </Dropdown.Menu>
  //     </Dropdown>
  //   </Container>
);

export default NavBarTVShows;
