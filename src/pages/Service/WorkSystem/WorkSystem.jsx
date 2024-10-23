import { useEffect, useState } from "react";
import useScrollPosition from "../../../hooks/useScrollY";
import "./WorkSystem.css";
import ServiceCard from "./ServiceCard/ServiceCard";

const WorkSystem = () => {
  const { scrollPosition } = useScrollPosition();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("../../../../public/service.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);

  return (
    <div className="work_system_page_container">
      <h3 className={`${scrollPosition >= 400 && "animation_active"}`}>
        {/* <h3> */}
        We Have Bright A New Digital
        <br />
        Work System For You
      </h3>
      <div className="service_card_container">
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
    </div>
  );
};

export default WorkSystem;
