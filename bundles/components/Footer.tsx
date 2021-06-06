import StyledFooter from "../../styles/Footer.module";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getUTCFullYear();

  return (
    <StyledFooter className="footer">
      <p>
        Copyright ©{" "}
        <Link href="/">
          <a href="/">Allwell Onen</a>
        </Link>
        {" " + year}. All rights reserved.
      </p>
    </StyledFooter>
  );
}
