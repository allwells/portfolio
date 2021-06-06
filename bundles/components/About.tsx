import StyledAbout from "../../styles/About.module";

export default function About({ about }) {
  return (
    <StyledAbout>
      <h1 id={about}>About</h1>
      <div className=".introContent">
        <p>
          This is just a dummy text so do not try to read it unless you want to
          waste your time. This is just a dummy text so do not try to read it
          unless you want to waste your time. This is just a dummy text so do
          not try to read it unless you want to waste your time. This is just a
          dummy text so do not try to read it unless you want to waste your
          time. This is just a dummy text so do not try to read it unless you
          want to waste your time. Thank you.
        </p>
        <p>
          This is just a dummy text so do not try to read it unless you want to
          waste your time. This is just a dummy text so do not try to read it
          unless you want to waste your time. This is just a dummy text so do
          not try to read it unless you want to waste your time. Thank you.
        </p>
      </div>
    </StyledAbout>
  );
}
