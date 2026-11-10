import { nav } from "../main/page.js";

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Daodu Titoluwani home">TT<span>.</span></a>
      <nav aria-label="Main navigation">
        {nav.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}
      </nav>
    </header>
  );
}
