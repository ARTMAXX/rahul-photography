import styles from "./style.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "@studio-freight/react-lenis";
import { links, footerLinks } from "./data";
import { perspective, slideIn } from "./anim";

export default function Nav({ onNavigate }: { onNavigate?: () => void }) {
  const lenis = useLenis();
  const pathname = usePathname();

  const handleLinkClick =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      const isHome = pathname === "/";

      // Home link — scroll to top if already on home
      if (href === "/") {
        if (isHome) {
          e.preventDefault();
          if (lenis) lenis.scrollTo(0, { duration: 1.2 });
          else window.scrollTo({ top: 0, behavior: "smooth" });
        }
        setTimeout(() => onNavigate?.(), 150);
        return;
      }

      // Hash links — smooth-scroll to the section via Lenis
      const hashIndex = href.indexOf("#");
      if (hashIndex !== -1) {
        const hash = href.slice(hashIndex + 1);

        if (isHome && hash) {
          // Already on home — intercept and smooth-scroll with Lenis
          e.preventDefault();
          const target = document.getElementById(hash);
          if (target) {
            if (lenis) {
              lenis.scrollTo(target, { offset: 0, duration: 1.4 });
            } else {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }
          setTimeout(() => onNavigate?.(), 200);
          return;
        }

        // Not on home — let Next.js navigate to /#hash; browser will
        // attempt to scroll on arrival. Menu closes after navigation.
        setTimeout(() => onNavigate?.(), 150);
        return;
      }

      // Fallback for any non-hash route
      setTimeout(() => onNavigate?.(), 100);
    };

  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
                className={styles.linkMotion}
              >
                <Link
                  href={href}
                  className={styles.link}
                  onClick={handleLinkClick(href)}
                >
                  {title}
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
              href={href}
              className={styles.footerLink}
              target={
                href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")
                  ? "_blank"
                  : undefined
              }
              rel={
                href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
