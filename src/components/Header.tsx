import Logo from "./Header/Logo";
import Link from "./Header/Link";
import Domain from "./Header/Domain";
import Title from "./Header/Title";
import Button from "./Header/Button";

import sendIcon from "../images/buttons/send.png";

export default function Header() {
  return (
    <header>
      <nav>
        <Logo />

        <div className="nav-links">
          <div className="nav-utils-links">
            <Link URL="#" text="Services" />
            <Link URL="#" text="Portfolio" />
            <Link URL="#" text="Contacts" />
          </div>

          <Link URL="#" text="Download CV" isButton={true} />
        </div>
      </nav>

      <Domain title="Software Developer" />

      <div className="header-information">
        <div className="header-details">
          <Title
            opening="Hey, I Am"
            name="Ryan Nolasco D Mello"
            description="A Passionate Web & Mobile Developer"
          />

          <div className="header-buttons">
            <Button URL="#" text="Services" icon={sendIcon} isSolid={true} />
            <Button URL="#" text="Download CV" />
          </div>
        </div>
      </div>
    </header>
  );
}
