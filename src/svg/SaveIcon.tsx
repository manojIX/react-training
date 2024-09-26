import { Theme } from "@contexts/ThemeContext";

type Props = { theme: Theme };
export default function SaveIcon({ theme }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15.1111L19.271 21.1702C19.5605 21.4115 20 21.2056 20 20.8288V2.22217H4V20.8288C4 21.2056 4.43949 21.4115 4.72897 21.1702L12 15.1111ZM6 17.5076L10.7196 13.5746C11.4613 12.9565 12.5387 12.9565 13.2804 13.5746L18 17.5076V4.22217H6V17.5076Z"
        fill={theme === "dark" ? "#fff" : "#0C1014"}
      />
    </svg>
  );
}
