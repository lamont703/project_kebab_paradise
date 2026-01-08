import React from 'react';

const Hero = () => {
    return (
        <section style={{
            paddingTop: '160px',
            paddingBottom: '80px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(10,10,10,0) 70%)',
                zIndex: -1
            }} />

            <div className="container" style={{ textAlign: 'center' }}>
                <div style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    marginBottom: '1.5rem',
                    fontSize: '0.9rem',
                    color: 'var(--primary)',
                    fontWeight: '500'
                }}>
                    ✨ Featuring Pilot with <span style={{ color: '#fff' }}>Kebab Paradise</span>
                </div>

                <h1 className="hero-title">
                    24/7 AI Phone Answering <br />
                    <span className="text-gradient-primary">for Restaurants</span>
                </h1>

                <p className="hero-text">
                    Never miss a call again. Our AI answers phones, takes orders, and manages reservations with human-like accuracy.
                </p>

                <div className="hero-buttons">
                    <a href="#pricing" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem', textDecoration: 'none' }}>
                        Get Started
                    </a>
                    <a href="#demo" className="btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem', textDecoration: 'none' }}>
                        Hear Samples
                    </a>
                </div>

                {/* Visual Mockup */}
                <div style={{
                    position: 'relative',
                    maxWidth: '800px',
                    margin: '0 auto',
                    background: '#111',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '24px',
                    padding: '2rem',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
                        </div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Live Dashboard - Kebab Paradise</div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'left' }}>
                        {/* Left: Chat Transcript */}
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#fff' }}>Live Call Transcript</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                                <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '12px 12px 12px 0' }}>
                                    Hello! I'd like to order a lamb kebab.
                                </div>
                                <div style={{ alignSelf: 'flex-end', background: 'rgba(59,130,246,0.2)', color: '#60a5fa', padding: '0.5rem 1rem', borderRadius: '12px 12px 0 12px' }}>
                                    Absolutely. Would you like that spicy or mild?
                                </div>
                                <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '12px 12px 12px 0' }}>
                                    Spicy, please. And extra garlic sauce.
                                </div>
                                <div style={{ alignSelf: 'flex-end', background: 'rgba(59,130,246,0.2)', color: '#60a5fa', padding: '0.5rem 1rem', borderRadius: '12px 12px 0 12px' }}>
                                    Got it. One spicy lamb kebab with extra garlic. Anything else?
                                </div>
                            </div>
                        </div>

                        {/* Right: Stats */}
                        <div style={{ display: 'grid', gridTemplateRows: 'auto auto', gap: '1rem' }}>
                            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px' }}>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Missed Calls Recovered</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#34d399' }}>142</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>This month</div>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px' }}>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Orders Processed</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#fff' }}>$4,250</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Additional Revenue</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
