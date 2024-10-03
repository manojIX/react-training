import { useWindowSize } from "@hooks/useWindowSize";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  const _x = useWindowSize();
  const data = [
    {
      title: "Shop and learn",
      links: [["home trial"], ["Membership"]],
    },
    {
      title: "About",
      links: [["Our Story"], ["Team"]],
    },
    {
      title: "Visit Us",
      links: [["Showrooms"], ["Hotel Finder"]],
    },
    {
      title: "Support",
      links: [["Contact Peloton"], ["Member Support Center"]],
    },
  ];

  return (
    <>
      <hr />
      <div
        style={{
          ...footerMainStyles,
          flexDirection: window.innerWidth < 1024 ? "column" : "row",
        }}
      >
        {/* //nav links */}
        <div className="flex flex-grow">
          {data.map((x) => (
            <>{createList(x.title, x.links)}</>
          ))}
        </div>
        {/* //contacts */}
        <div>
          <span>Sign up to get the latest</span>
        </div>
      </div>
      <hr />
    </>
  );
}

const createList = (head: string, links: string[][]) => {
  return (
    <div className="flex-grow">
      {head}
      <ul className="list-none">
        {links.map((link) => (
          <li>
            <Link className="font-light">{link[0]}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const footerMainStyles: React.CSSProperties = {
  display: "flex",
  padding: "48px 32px 48px 48px",
};
