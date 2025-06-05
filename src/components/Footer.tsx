interface MenuItem {
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  menuItems?: MenuItem[];
}

const Footer = ({
  menuItems = [
    { links: [{ text: "Jak grać?", url: "#rules" }] },
    { links: [{ text: "Drużyny", url: "#teams" }] },
    { links: [{ text: "Nagrody", url: "#" }] },
    { links: [{ text: "Kontakt", url: "#" }] },
  ],
}: FooterProps) => {
  return (
    <footer className="w-full text-white pt-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between px-4">
        <h1 className="text-2xl font-bold text-main-accent">hole.it</h1>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          {menuItems.map((section, sectionIdx) =>
            section.links.map((link, linkIdx) => (
              <a
                key={`${sectionIdx}-${linkIdx}`}
                href={link.url}
                className="hover:text-primary"
              >
                {link.text}
              </a>
            ))
          )}
        </div>
      </div>

      <div className="w-full border-t mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 flex flex-col justify-between gap-4 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
          <p>© 2025 hole.it. Wszelkie prawa zastrzeżone.</p>
          <ul className="flex gap-4">
            <li className="underline hover:text-primary">
              <a href="https://media.discordapp.net/attachments/1308827049221161031/1379133921165443122/462761398_1125298005649135_532349431197869344_n.gif?ex=68426dcd&is=68411c4d&hm=6dc0fe8c55afbba1ac4583e5e9926e0800f6d0e9ac9d29a82beca21909cc5a6f&=">
                Regulamin
              </a>
            </li>
            <li className="underline hover:text-primary">
              <a href="#">Warunki uczestnictwa</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
