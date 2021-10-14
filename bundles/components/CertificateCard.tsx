import React from "react";
import styled from "styled-components";

interface Props {
  id: string;
  img: string;
  title: string;
  issued: string;
  expiry: string;
}

const CertificateCard: React.FC<Props> = ({}) => {
  return <StyledCertificateCard></StyledCertificateCard>;
};

const StyledCertificateCard = styled.div``;

export default CertificateCard;
