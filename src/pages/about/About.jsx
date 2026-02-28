import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import '../home/home.css'
import './about.css'

function About() {
    return (
        <div className="about-page">

            <Navbar />


            <div className="about-hero">
                <h1>Our Story</h1>
                <p>A small kitchen. A big dream.</p>
            </div>


            <section className="about-story">
                <div className="story-content-wrapper">
                    <h2>The Story of Gul & Cocoa</h2>
                    <div className="story-image-float">
                        <img src="images/kitchen.png" alt="Gul & Cocoa Kitchen" />
                    </div>
                    <p>
                        Gul & Cocoa began in 2021, in a small kitchen filled with the scent of saffron and vanilla.
                    </p>
                    <p>
                        Aisha Malik had always grown up between two kinds of sweetness — laddoos rolled during Diwali and birthday cakes frosted late at night. She never saw them as different worlds. To her, mithai and mousse belonged on the same table.
                    </p>
                    <p>
                        What started as weekend baking for friends slowly turned into something bigger — a pink, sunlit space where tradition feels soft, familiar, and quietly special. Gul & Cocoa was created for slow afternoons, shared desserts, and the kind of comfort that lingers long after the last bite.
                    </p>
                </div>
            </section>


            <section className="about-values">
                <h2>Our Philosophy</h2>
                <div className="values-grid">

                    <div className="value-card">
                        <span className="value-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8A95A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                        </span>
                        <h3>Freshness First</h3>
                        <p>
                            We prepare our sweets in small batches daily — no shortcuts, no premixes.
                        </p>
                    </div>

                    <div className="value-card">
                        <span className="value-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8A95A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                            </svg>
                        </span>
                        <h3>Thoughtful Sourcing</h3>
                        <p>
                            We use real saffron, real pistachios, real vanilla — because ingredients matter.
                        </p>
                    </div>

                    <div className="value-card">
                        <span className="value-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8A95A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </span>
                        <h3>Community Over Everything</h3>
                        <p>
                            Gul & Cocoa is a place to gather, celebrate, and feel at home.
                        </p>
                    </div>

                </div>
            </section>


            <section className="about-team">
                <h2>Meet the Team</h2>
                <div className="team-grid two-columns">

                    <div className="team-card">
                        <div className="team-photo">
                            <img src="images/founders/founder1.png" alt="Aisha Malik" />
                        </div>
                        <div className="team-content">
                            <h3>Aisha Malik</h3>
                            <span className="team-role">Founder & Head Pastry Chef</span>
                            <p>The heart behind Gul & Cocoa. Aisha blends traditional mithai techniques with modern pastry craft, creating desserts that feel nostalgic yet new.</p>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-photo">
                            <img src="images/founders/founder2.png" alt="Meera Shah" />
                        </div>
                        <div className="team-content">
                            <h3>Meera Shah</h3>
                            <span className="team-role">Co-Founder & Creative Director</span>
                            <p>Meera shaped the space, the palette, and the feeling. From the pink interiors to the handwritten menu boards, she designed every detail to feel warm and intentional.</p>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default About
