import React from 'react';

const UseCases = () => {
    const cases = [
        {
            name: "Kebab Paradise",
            type: "Fast Casual / Takeout",
            image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            quote: "Before RestoVoice, we missed 20 calls a night during dinner rush. Now, the AI handles every order perfectly, and our staff stays focused on the line.",
            stats: {
                recovered: "15%",
                revenue: "+$2.4k/mo"
            },
            highlight: true
        },
        {
            name: "Bella Italia",
            type: "Fine Dining",
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            quote: "Our hosts used to be glued to the phone taking reservations. Now they can actually greet guests at the door.",
            stats: {
                recovered: "10%",
                revenue: "+$1.8k/mo"
            },
            highlight: false
        },
        {
            name: "Sushi Zen",
            type: "Delivery Heavy",
            image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            quote: "Complex sushi orders are tough. The AI gets the modifications right 100% of the time. It's impressive.",
            stats: {
                recovered: "22%",
                revenue: "+$3.1k/mo"
            },
            highlight: false
        }
    ];

    return (
        <section id="use-cases" className="section-padding">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Trusted by <span className="text-gradient-primary">Thriving Restaurants</span>
                    </h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
                        See how different venues use RestoVoice to automate orders and boost revenue.
                    </p>
                </div>

                <div className="grid-cols-3">
                    {cases.map((useCase, i) => (
                        <div key={i} className="glass-card" style={{
                            padding: '0',
                            overflow: 'hidden',
                            border: useCase.highlight ? '1px solid var(--primary)' : '1px solid var(--border-light)'
                        }}>
                            {/* Image Header */}
                            <div style={{
                                height: '200px',
                                background: `url(${useCase.image}) center/cover no-repeat`,
                                position: 'relative'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                    padding: '1.5rem',
                                    paddingBottom: '0.5rem'
                                }}>
                                    <div style={{
                                        fontSize: '0.8rem',
                                        color: useCase.highlight ? 'var(--primary)' : 'var(--text-muted)',
                                        textTransform: 'uppercase',
                                        fontWeight: '600',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {useCase.type}
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0', color: 'white' }}>{useCase.name}</h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '2rem' }}>
                                <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1.5rem', minHeight: '80px' }}>
                                    "{useCase.quote}"
                                </p>

                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    paddingTop: '1.5rem',
                                    borderTop: '1px solid var(--border-light)'
                                }}>
                                    <div>
                                        <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#fff' }}>{useCase.stats.revenue}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Est. Revenue Details</div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#34d399' }}>{useCase.stats.recovered}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Missed Calls Saved</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
