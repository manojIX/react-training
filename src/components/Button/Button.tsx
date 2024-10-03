import "./styles.css";

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  type: "main";
  backgroundColor?: string;
  fontColor?: string;
};

export default function Button({
  onClick,
  text,
  backgroundColor,
  fontColor,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="main-button"
      style={{
        backgroundColor,
        borderColor: backgroundColor,
        color: fontColor,
      }}
    >
      {text}
    </button>
  );
}
