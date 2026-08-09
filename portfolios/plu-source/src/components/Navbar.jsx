import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Tech", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = NAV_LINKS.map(({ href }) => href.slice(1));

    const onScroll = () => {
      const atBottom =
        window.innerHeight + Math.ceil(window.scrollY) >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }
      const marker = window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= marker) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className='sticky top-0 z-50 mb-20 -mx-8 px-8 backdrop-blur-md bg-white/70 border-b border-[#7A98BF]/20'>
        <div className='flex items-center justify-between py-5'>
            <div className='flex flex-shrink-0 items-center gap-3'>
                <span className='text-4xl font-bold tracking-tight'><span className='text-[#2D4473]'>P</span><span className='text-[#7A98BF]'>hlu</span></span>
            </div>
            <div className='flex items-center gap-6 text-sm font-medium sm:gap-8 sm:text-base'>
                {NAV_LINKS.map(({ label, href }) => (
                    <a
                        key={href}
                        href={href}
                        className={`transition-colors duration-200 hover:text-[#2D4473] ${active === href.slice(1) ? 'font-semibold text-[#2D4473]' : 'text-[#7A98BF]'}`}>
                        {label}
                    </a>
                ))}
            </div>
        </div>
    </nav>
  )
}

export default Navbar
