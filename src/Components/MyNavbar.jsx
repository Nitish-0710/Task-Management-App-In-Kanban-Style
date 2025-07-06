import { Navbar, Nav, Container } from "react-bootstrap";
import DarkModeToggle from "./DarkModeToggle";
import { theme } from "./Theme";
import { useDarkMode } from "../Context/DarkModeContext";

function MyNavbar() {
    const { darkMode } = useDarkMode();
    const colors = darkMode ? theme.navbar.dark : theme.navbar.light;

    return (
        <Navbar
            style={{
                backgroundColor: colors.background,
                borderBottom: `2px solid ${colors.border}`,
                color: colors.text,
            }}
            className="mb-5"
            expand="lg"
            sticky="top"
            collapseOnSelect // Add this to close menu when item is selected
        >
            <Container fluid>
                {" "}
                {/* Changed to fluid for better spacing */}
                <Navbar.Brand href="#home" style={{ color: colors.text }}>
                    <img
                        src="../assets/kanban.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Kanban Logo"
                    />{" "}
                    My Kanban
                </Navbar.Brand>
                {/* Right-aligned controls */}
                <div className="d-flex align-items-center">
                    <Navbar.Toggle
                        aria-controls="navbar-collapse"
                        className="ms-2" // Add margin between toggle and dark mode
                        style={{
                            border: "none",
                            backgroundColor: darkMode
                                ? "rgba(255,255,255,0.1)"
                                : "transparent",
                        }}
                    />
                </div>
                {/* Collapsible content */}
                <Navbar.Collapse id="navbar-collapse">
                    <Nav className="ms-auto">
                        {" "}
                        <DarkModeToggle />
                        {/* ms-auto pushes content to right */}
                        <Nav.Link
                            href="#home"
                            style={{
                                color: colors.text,
                                "&:hover": {
                                    backgroundColor: colors.hover,
                                },
                            }}>
                            Dashboard
                        </Nav.Link>
                        <Nav.Link
                            href="#reports"
                            style={{
                                color: colors.text,
                                "&:hover": {
                                    backgroundColor: colors.hover,
                                },
                            }}>
                            Reports
                        </Nav.Link>
                        <Nav.Link
                            href="#profile"
                            style={{
                                color: colors.text,
                                "&:hover": {
                                    backgroundColor: colors.hover,
                                },
                            }}>
                            <i className="bi bi-person-circle me-1" /> Profile
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
