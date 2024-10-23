import "./ServiceCard.css";
import { FaArrowUp } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  const { name, details, list, icon } = service;
  console.log(service);
  return (
    <div className="service_container">
      <img className="icon" src={icon} alt={name} />
      <div className="details">
        <h4>
          {name}
          <FaArrowUp />
        </h4>
        <p>{details}</p>
        <ul>
          <li>{list?.a}</li>
          <li>{list?.b}</li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
