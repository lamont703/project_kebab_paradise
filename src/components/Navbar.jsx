import React from 'react';

const Navbar = () => {
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
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white' }}>
                    RestoVoice<span style={{ color: 'var(--primary)' }}>.ai</span>
                </div>

                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem' }}>Features</a>
                    <a href="#demo" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem' }}>Demo</a>
                    <a href="#pricing" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem' }}>Pricing</a>
                </div>

                <div>
                    <button className="btn-primary">Schedule a Demo</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
