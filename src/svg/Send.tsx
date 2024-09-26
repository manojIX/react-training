import { Theme } from "@contexts/ThemeContext";

type Props = { theme: Theme };
export default function Send({ theme }: Props) {
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
        d="M2.32435 5.09454C1.64037 4.33808 2.10065 3 3.2445 3L21 3C21.3548 3 21.6831 3.18803 21.8626 3.49409C22.0421 3.80016 22.0459 4.17843 21.8728 4.48811L12.9951 20.3621C12.4461 21.3437 11.0257 21.1444 10.7185 20.1049L8.20479 11.5981L2.32435 5.09454ZM10.2783 11.5575L12.1276 17.8158L18.304 6.77187L10.2783 11.5575ZM17.3704 5L4.93521 5L9.29121 9.81757L17.3704 5Z"
        fill={theme === "dark" ? "#fff" : "#0C1014"}
      />
    </svg>
  );
}
