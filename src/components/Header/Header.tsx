import Logo from "@assets/Logo.svg";
import "./styles.css";
import { useWindowSize } from "@hooks/useWindowSize";

export default function Header() {
  const _x = useWindowSize();
  return (
    <div style={styles} className="px-[12px]">
      <img src={Logo} className="h-[12px]" />
      {window.innerWidth > 850 && (
        <nav className="pl-[3px] w-[720px] flex">
          <ul className="text-white flex flex-grow header-nav">
            <li>Classes</li>
            <li>Bikes</li>
            <li>Threads</li>
            <li>Row</li>
            <li>App</li>
            <li>Accessories</li>
          </ul>
        </nav>
      )}
    </div>
  );
}

const styles: React.CSSProperties = {
  //should be 64 when shrunk
  height: "72px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  background: "black",
};
