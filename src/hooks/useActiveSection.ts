import { useEffect, useState } from "react";

const sections = ["about", "projects", "skills", "experience", "contact"];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY + 200; // Increased buffer

      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      // Check if we are at the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setActiveSection("contact");
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        if (
          scrollY >= el.offsetTop &&
          scrollY < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(section);
          return;
        }
      }
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
}
