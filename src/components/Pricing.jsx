import React from 'react';

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "$99",
            period: "/month",
            desc: "Perfect for single locations",
            features: [
                "1 Location",
                "Unlimited Minutes",
                "Basic Order Taking",
                "Email Support",
                "Standard Voice Options"
            ],
            highlight: false
        },
        {
            name: "Growth",
            price: "$199",
            period: "/month",
            desc: "For busy restaurants expanding fast",
            features: [
                "Up to 3 Locations",
                "Unlimited Minutes",
                "Advanced POS Integration",
                "Priority Support",
                "Custom Voice Branding",
                "Reservation Management"
            ],
            highlight: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            desc: "For chains and franchises",
            features: [
                "Unlimited Locations",
                "Dedicated Account Manager",
                "Custom AI Training",
                "API Access",
                "SLA & Uptime Guarantee",
                "Advanced Analytics"
            ],
            highlight: false
        }
    ];

    return (
        <section id="pricing" className="section-padding">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Simple Pricing</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
                        Choose the plan that fits your restaurant's needs. No hidden fees.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {plans.map((plan, i) => (
                        <div key={i} className="glass-card" style={{
                            position: 'relative',
                            border: plan.highlight ? '1px solid var(--primary)' : '1px solid var(--border-light)',
                            background: plan.highlight ? 'rgba(59, 130, 246, 0.05)' : 'var(--bg-card)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            {plan.highlight && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'var(--primary)',
                                    color: 'white',
                                    padding: '0.25rem 1rem',
                                    borderRadius: '999px',
                                    fontSize: '0.8rem',
                                    fontWeight: '600'
                                }}>
                                    Most Popular
                                </div>
                            )}

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
                            <p style={{ fontSize: '0.9rem', marginBottom: '2rem', minHeight: '40px' }}>{plan.desc}</p>

                            <div style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '2rem' }}>
                                {plan.price}<span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '400' }}>{plan.period}</span>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flex: 1 }}>
                                {plan.features.map((feat, j) => (
                                    <li key={j} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--primary)' }}>✓</span> {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className={plan.highlight ? 'btn-primary' : 'btn-secondary'} style={{ width: '100%', justifyContent: 'center' }}>
                                Choose {plan.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
