import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="container mt-12 flex flex-col items-center gap-16 leading-7 text-neutral-500 dark:text-neutral-400">
      <span>
        © {new Date().getFullYear()} by{" "}
        <Button variant="link" className="p-0" asChild>
          <a href="https://github.com/ayush-baliyan-19">Ayush Baliyan</a>
        </Button>
        . All rights reserved.
      </span>
    </footer>
  );
};
