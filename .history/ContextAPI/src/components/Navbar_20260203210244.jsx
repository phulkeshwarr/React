

const Navbar = () => {
    return (
        <div className="navbar">
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo">My App</h1>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;