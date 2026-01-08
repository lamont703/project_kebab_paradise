import React from 'react';

const Footer = () => {
    return (
        <footer style={{ borderTop: '1px solid var(--border-light)', padding: '4rem 0', background: '#050505' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: 'white' }}>
                        RestoVoice<span style={{ color: 'var(--primary)' }}>.ai</span>
                    </div>
                    <p style={{ maxWidth: '300px' }}>
                        Empowering restaurants like Kebab Paradise with next-gen AI voice technology.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '4rem' }}>
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Product</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Features</a>
                            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Integrations</a>
                            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Pricing</a>
                            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Case Studies</a>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Company</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>About</a>
                            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Careers</a>
                            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontSize: '0.85rem' }}>
                © {new Date().getFullYear()} RestoVoice AI. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
