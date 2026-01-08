import React from 'react';

const DemoSection = () => {
    return (
        <section id="demo" className="section-padding" style={{ position: 'relative' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
                    Hear it in action
                </h2>
                <p style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    Experience the conversation quality that drives sales for <strong>Kebab Paradise</strong>.
                </p>

                <div className="demo-card" style={{
                    background: 'var(--bg-card)',
                    backdropFilter: 'blur(12px)',
                    padding: '2rem', /* Reduced from 3rem */
                    borderRadius: '24px',
                    border: '1px solid var(--border-light)',
                    maxWidth: '500px',
                    width: '100%',
                    textAlign: 'center',
                    boxSizing: 'border-box' /* Ensure padding doesn't overflow */
                }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Request a Live Demo Call</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>
                        Enter your number and our AI will call you immediately to take your mock order.
                    </p>

                    <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input
                            type="tel"
                            placeholder="(555) 123-4567"
                            style={{
                                background: 'rgba(0,0,0,0.3)',
                                border: '1px solid var(--border-light)',
                                padding: '1rem',
                                borderRadius: '8px',
                                color: 'white',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                        />
                        <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            Call Me Now
                        </button>
                    </form>

                    <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        No real order will be placed. This is a demonstration.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;
