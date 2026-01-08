import React from 'react';

const Features = () => {
    const features = [
        {
            title: "Takes Orders & Reservations",
            desc: "Handles full menu ordering and table bookings directly over the phone, syncing with your systems.",
            icon: "🎙️"
        },
        {
            title: "Syncs with POS",
            desc: "Integrates seamlessly with Toast, Square, Clover, and other major POS systems to print tickets automatically.",
            icon: "🔄"
        },
        {
            title: "Answers FAQs",
            desc: "Instantly answers questions about hours, location, parking, and allergies so your staff doesn't have to.",
            icon: "💡"
        },
        {
            title: "Secure Payments",
            desc: "PCI-compliant payment processing over the phone. Capture revenue even before the customer arrives.",
            icon: "🔒"
        },
        {
            title: "Zero Hold Times",
            desc: "Can handle unlimited simultaneous calls. Never let a customer hear a busy signal again.",
            icon: "⚡"
        },
        {
            title: "Custom Brand Voice",
            desc: "Tailored to sound like your best employee. Friendly, professional, and always on brand.",
            icon: "🎨"
        }
    ];

    return (
        <section id="features" className="section-padding" style={{ background: '#0f0f0f' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Why top restaurants rely on <span className="text-gradient-primary">RestoVoice</span>
                    </h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Transform your phone line from a distraction into a revenue-generating machine.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((f, i) => (
                        <div key={i} className="glass-card">
                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{f.icon}</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{f.title}</h3>
                            <p style={{ fontSize: '0.95rem' }}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
