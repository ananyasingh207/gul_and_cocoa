import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './contact.css'

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-page">
            <Navbar />

            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you — whether for a quick hello or a special celebration.</p>
            </div>

            <div className="contact-main">
                <div className="contact-top-row">

                    <div className="contact-info-column">
                        <section className="contact-details">
                            <h2>Get in Touch</h2>

                            <div className="detail-group">
                                <h3>Gul & Cocoa</h3>
                                <p>123 Sweet Avenue<br />Dessert District, Cake City 45678</p>
                            </div>

                            <div className="detail-group">
                                <h3>Phone</h3>
                                <p>+1 (555) 123-4567</p>
                            </div>

                            <div className="detail-group">
                                <h3>Email</h3>
                                <p>hello@gulandcocoa.com</p>
                            </div>
                        </section>

                        <section className="contact-hours">
                            <h2>Opening Hours</h2>
                            <div className="hours-grid">
                                <div className="hours-row">
                                    <span className="day">Monday - Friday</span>
                                    <span className="time">8:00 AM - 10:00 PM</span>
                                </div>
                                <div className="hours-row">
                                    <span className="day">Saturday</span>
                                    <span className="time">9:00 AM - 11:00 PM</span>
                                </div>
                                <div className="hours-row">
                                    <span className="day">Sunday</span>
                                    <span className="time">9:00 AM - 9:00 PM</span>
                                </div>
                            </div>
                        </section>
                    </div>


                    <div className="contact-map-column">
                        <div className="map-container">
                            <iframe
                                title="Gul & Cocoa Location"
                                className="map-iframe"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.115852579304!2d77.20468925892562!3d28.632616213799632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1715421256345!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>


                <section className="contact-enquiry">
                    <h2>Send an Enquiry</h2>
                    <form className="enquiry-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Your Email" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phone">Phone (optional)</label>
                                <input type="tel" id="phone" placeholder="Your Phone Number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="type">Type of Enquiry</label>
                                <select id="type" defaultValue="events">
                                    <option value="events">Events</option>
                                    <option value="catering">Catering</option>
                                    <option value="bulk">Bulk Orders</option>
                                    <option value="general">General Inquiry</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group full-width">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="4" placeholder="How can we help you?" required></textarea>
                        </div>

                        <div className="form-group full-width">
                            <button type="submit" className="submit-btn">Send Message</button>
                        </div>
                    </form>
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default Contact
