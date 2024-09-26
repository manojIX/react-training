import { Theme } from "@contexts/ThemeContext";

type Props = { theme: Theme };
export default function Comment({ theme }: Props) {
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
        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C13.3137 19 14.54 18.6391 15.5886 18.0116C15.8209 17.8726 16.0995 17.8337 16.361 17.9037L18.4741 18.4699L17.9074 16.3548C17.8374 16.0937 17.8762 15.8153 18.0148 15.5833C18.6403 14.5358 19 13.3114 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 13.528 20.6184 14.9694 19.9449 16.2316L20.8543 19.6253C20.9468 19.9704 20.8481 20.3386 20.5955 20.5913C20.3428 20.8439 19.9746 20.9426 19.6295 20.8501L16.2382 19.9414C14.9745 20.6171 13.5307 21 12 21C7.02944 21 3 16.9706 3 12Z"
        fill={theme === "dark" ? "#fff" : "#0C1014"}
      />
    </svg>
  );
}
