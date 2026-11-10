import { useState } from "react";
import { profile } from "../main/page.js";

export default function Contact() {
  const [status, setStatus] = useState("");
  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\nReply to: ${data.get("email")}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message ready to send.");
  }
  return (
    <section className="section contact-section" id="contact">
      <div className="section-heading"><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let's talk<span>.</span></h2></div>
      <div className="contact-grid">
        <div><p className="contact-copy">Have an idea, opportunity or just want to connect? Send me a message.</p><a className="text-link" href={`mailto:${profile.email}`}>{profile.email} ↗</a>
          <p className="contact-location">Based in {profile.location}</p>
          {(profile.links.linkedin || profile.links.github) && <div className="social-links">{profile.links.linkedin && <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>}{profile.links.github && <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>}</div>}
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <label>Name<input name="name" required placeholder="Your name" /></label>
          <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
          <label>Message<textarea name="message" rows="4" required placeholder="Tell me what you have in mind" /></label>
          <button className="button primary" type="submit">Prepare email ↗</button>
          {status && <p className="form-status" role="status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
