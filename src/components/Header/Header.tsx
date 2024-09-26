import useTheme from "@hooks/useTheme";
import InstagramFontLogo from "@svg/InstagramFontLogo";
import InstagramLogo from "@assets/InstagramLogo.svg";

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-full h-[50px] flex items-center border-b-2">
      <img className="w-8" src={InstagramLogo} />
      <InstagramFontLogo theme={theme} />
      <button className="ml-auto mr-5" onClick={() => setTheme()}>
        Toggle theme
      </button>
    </div>
  );
}
