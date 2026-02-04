

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo">My App</h1>
                <ul className="nav-menu">
                    <h2 className="nav-item">
                        <a href="#home" className="nav-link">Home</a>
                    </h2>
                    <h2 className="nav-item">
                        <a href="#about" className="nav-link">About</a>
                    </h2>
                    <h2 className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </h2>
                    
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;