import useScrollPosition from "../../../hooks/useScrollY";
import "./WorkSystem.css";

const WorkSystem = () => {
  const { scrollPosition } = useScrollPosition();

  return (
    <div className="work_system_page_container">
      <h3 className={`${scrollPosition >= 400 && "animation_active"}`}>
        {/* <h3> */}
        We Have Bright A New Digital
        <br />
        Work System For You
      </h3>
    </div>
  );
};

export default WorkSystem;
