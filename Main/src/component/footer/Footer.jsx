import { profile } from "../main/page.js";

export default function Footer() {
  return <footer className="site-footer"><span>© {new Date().getFullYear()} {profile.name}. Built with React.</span><a href="#home">Back to top ↑</a></footer>;
}
