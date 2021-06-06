import Link from "next/link";
import StyledAppBar from "../../styles/AppBar.module";

export default function AppBar() {
  return (
    <StyledAppBar>
      <ul className="appbarItems">
        <li>
          <Link href="/">
            <a href="/">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <a href="/#about">About</a>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <a href="/#contact">Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/#projects">
            <a href="/#projects">Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/#certificates">
            <a href="/#certificates">Certificates</a>
          </Link>
        </li>
        <li>
          <Link href="/#links">
            <a href="/#links">Useful Links</a>
          </Link>
        </li>
      </ul>
    </StyledAppBar>
  );
}
