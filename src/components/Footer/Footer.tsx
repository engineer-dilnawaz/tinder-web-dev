import { Facebook, Hash, Twitter, Youtube } from "../../assets";
import { useFooter } from "./useFooter";

export const Footer = () => {
  const { fullYear } = useFooter();
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-neutral-content items-center p-4 fixed bottom-0 w-full">
      <aside className="grid-flow-col items-center">
        <Hash />
        <p>Copyright © {fullYear} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>
          <Twitter />
        </a>
        <a>
          <Youtube />
        </a>
        <a>
          <Facebook />
        </a>
      </nav>
    </footer>
  );
};
