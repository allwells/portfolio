import React from "react";
import ServiceCard from "../components/ServiceCard";
import StyledService from "../../styles/service.styled";
import head from "../components/Heading";
import route from "../../pages/api/routes";

const ServicePage = () => {
  const [services, setServices] = React.useState([]);

  React.useEffect(() => {
    return setServices(route.services);
  }, []);

  return (
    <StyledService>
      <head.Heading102 heading="Services" />
      <ServiceContent services={services} />
    </StyledService>
  );
};

const ServiceContent = ({ services }) => {
  return (
    <div className="services">
      <ul className="content">
        {services.map((service: any) => {
          return (
            <ServiceCard
              key={service.id}
              serviceImg={service.img}
              serviceName={service.name}
              serviceDescription={service.description}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ServicePage;
