import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './home.css'

function Home() {
    const mainRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".yellow", {
                y: -1000,
                duration: 1
            });

            gsap.from(".black", {
                y: 1000,
                duration: 1
            });

            let mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                gsap.from(".image img", {
                    x: 1000,
                    duration: 2
                });
            });

            mm.add("(max-width: 767px)", () => {
                gsap.from(".image img", {
                    y: 100,
                    opacity: 0,
                    duration: 1.5,
                    delay: 0.5,
                    ease: "power2.out"
                });
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef}>
            <main className="hero">

                <Navbar noBorder={true} />


                <div className="yellow"></div>
                <div className="black"></div>


                <div className="content first">

                    <div className="title">
                        <div className="small">Where mithai meets mousse.</div>
                        <div className="medium">Every Bite Feels Like</div>
                        <div className="big">
                            <span>H</span>
                            <span>O</span>
                            <span>M</span>
                            <span>E</span>
                        </div>
                        <div className="container">
                            <Link to="/menu" className="button type--C">
                                <div className="button__line"></div>
                                <div className="button__line"></div>
                                <span className="button__text">Indulge now</span>
                                <div className="button__drow1"></div>
                                <div className="button__drow2"></div>
                            </Link>
                        </div>
                    </div>

                    <div className="image">
                        <img src="images/roseCupcake.png" alt="sweet" />
                    </div>

                    <div className="specs">
                        <span><b>Handcrafted</b></span>
                        <span><b>Fusion Flavours</b></span>
                        <span><b>Fresh Ingredients</b></span>
                    </div>

                </div>

            </main>

            <div className="section-divider"></div>

            <section className="brand-story">
                <div className="story-content">
                    <h2>Our Sweet Beginning</h2>
                    <p>Some of our sweetest memories begin with sugar — ladoos during celebrations, cakes after dinner, stories
                        shared over chai.<br />Gul &amp; Cocoa brings those moments together, blending tradition with
                        tenderness.<br />Every bite is made to feel familiar, yet a little special.</p>
                </div>
                <div className="story-images">
                    <img src="images/Gul&Cocoa1.png" alt="Warm cafe ambiance" />
                    <img src="images/Gul&Cocoa2.png" alt="Premium dessert spread" />
                </div>
            </section>

            <section className="featured-creations">
                <div className="featured-heading">
                    <h2>Featured Creations</h2>
                    <p>A taste of our most loved signatures</p>
                </div>
                <div className="creations-grid">
                    <div className="creation-card">
                        <div className="creation-image">
                            <img src="images/items/rasmalai.png" alt="Kesar Rasmalai" />
                        </div>
                        <h3>Kesar Rasmalai</h3>
                        <p>Soft cottage cheese discs soaked in saffron milk.</p>
                    </div>
                    <div className="creation-card">
                        <div className="creation-image">
                            <img src="images/items/gulabJamunCheesecake.png" alt="Gulab Jamun Cheesecake" />
                        </div>
                        <h3>Gulab Jamun Cheesecake</h3>
                        <p>Creamy cheesecake layered with warm gulab jamun.</p>
                    </div>
                    <div className="creation-card">
                        <div className="creation-image">
                            <img src="images/items/roseStrawberryCupcake.png" alt="Rose strawberry Cupcake" />
                        </div>
                        <h3>Rose strawberry Cupcake</h3>
                        <p>Fluffy vanilla cupcake infused with rose essence, topped with strawberry cream and dried petals.</p>
                    </div>
                </div>
            </section>


            <section className="opening-hours">
                <div className="hours-container">
                    <h2>Opening Hours</h2>
                    <div className="hours-list">
                        <div className="hour-row">
                            <span className="day">Monday - Friday</span>
                            <span className="time">8:00 AM - 10:00 PM</span>
                        </div>
                        <div className="hour-row">
                            <span className="day">Saturday</span>
                            <span className="time">9:00 AM - 11:00 PM</span>
                        </div>
                        <div className="hour-row">
                            <span className="day">Sunday</span>
                            <span className="time">9:00 AM - 9:00 PM</span>
                        </div>
                    </div>
                </div>
            </section>


            <section className="find-us">
                <div className="find-us-container">
                    <div className="find-us-info">
                        <h2>Find Us</h2>
                        <h3>Gul &amp; Cocoa</h3>
                        <p>123 Sweet Avenue<br />Dessert District, Cake City 45678</p>
                        <p className="phone">+1 (555) 123-4567</p>
                    </div>
                    <div className="find-us-map">

                        <div className="map-card">
                            <iframe className="map-iframe"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.115852579304!2d77.20468925892562!3d28.632616213799632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1715421256345!5m2!1sen!2sin"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home
