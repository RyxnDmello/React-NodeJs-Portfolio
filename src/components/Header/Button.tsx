import { ILink } from "../../interfaces/Link";

export default function Button({ url: URL, text, icon, isSolid }: IButton) {
  const className = "header-button";

  return (
    <a
      className={`${className} ${isSolid ? "solid" : undefined} scroll`}
      href={URL}
    >
      <p className={`${className}-text`}>{text}</p>

      {icon !== undefined ? (
        <img className={`${className}-image`} src={icon} />
      ) : undefined}
    </a>
  );
}

interface IButton extends ILink {
  icon?: string;
  isSolid?: boolean;
}
