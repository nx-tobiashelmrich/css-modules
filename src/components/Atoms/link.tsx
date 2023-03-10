import styles from "./link.module.css";

interface LinksProps {
  children: any;
  link: string;
  external?: boolean;
  design?: string;
}

export function Link({ children, link, external, design }: LinksProps) {
  return (
    <a
      href={link}
      target={`${external && "_blank"}`}
      className={`${styles.linkBase} ${design || styles.linkPrimary}`}
    >
      {children}
    </a>
  );
}
