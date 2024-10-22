import Company from "../Company/Company";
import WorkSystem from "../WorkSystem/WorkSystem";
import "./Services.css";

const Services = () => {
  return (
    <div className="service_page_container">
      <Company></Company>
      <WorkSystem />
    </div>
  );
};

export default Services;
