import styled from "styled-components";

const StyledFooter = styled.div`
  .footer {
    height: 7em;
    border-top: 1px solid #383b41;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1em;
  }

  .footer p {
    color: #adbac7;
    font-weight: 200;
    font-size: 14px;
  }

  .footer a {
    color: #ffffff;
  }

  .footer a:hover {
    color: #adbac7;
    text-decoration: underline;
  }
`;

export default StyledFooter;
