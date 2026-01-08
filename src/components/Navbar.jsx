import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(10, 10, 10, 0.8)',
            borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div className={`container nav-container ${isOpen ? 'mobile-menu-open' : ''}`}>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white' }}>
                    RestoVoice<span style={{ color: 'var(--primary)' }}>.ai</span>
                </div>

                {/* Desktop Links */}
                <div className="nav-links">
                    <a href="#features" className="nav-link">Features</a>
                    <a href="#use-cases" className="nav-link">Use Cases</a>
                    <a href="#demo" className="nav-link">Demo</a>
                    <a href="#pricing" className="nav-link">Pricing</a>
                </div>

                {/* Desktop Action */}
                <div className="nav-actions">
                    <a href="#demo" className="btn-primary" style={{ textDecoration: 'none' }}>Schedule a Demo</a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="hamburger"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="mobile-menu-overlay">
                        <a href="#features" className="nav-link" onClick={() => setIsOpen(false)}>Features</a>
                        <a href="#use-cases" className="nav-link" onClick={() => setIsOpen(false)}>Use Cases</a>
                        <a href="#demo" className="nav-link" onClick={() => setIsOpen(false)}>Demo</a>
                        <a href="#pricing" className="nav-link" onClick={() => setIsOpen(false)}>Pricing</a>
                        <a href="#demo" className="btn-primary" onClick={() => setIsOpen(false)} style={{ justifyContent: 'center' }}>
                            Schedule a Demo
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
