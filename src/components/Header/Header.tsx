import InstagramLogo from "@assets/InstagramLogo.svg";
import InstagramFont from "@assets/InstagramFont.svg";
import useTheme from "@hooks/useTheme";

export default function Header() {
  const theme = useTheme();
  return (
    <div className="w-full h-[50px] flex items-center border-b-2">
      <img className="w-6" src={InstagramLogo} />
      <img className="h-full" src={InstagramFont} />
      {theme.theme}
      <button className="ml-auto mr-5" onClick={() => theme.setTheme()}>
        Toggle theme
      </button>
    </div>
  );
}
