import JSON from "../../data/section-one.json";
import "./section-one.scss";

const SectionOne = () => {
  return (
    <section className="why-choose-us component-parent">
      <div className="contain">
        <h1
          className="section-title"
          style={{ color: "white", textAlign: "center", fontStyle: "italic" }}
        >
          {JSON.title}
        </h1>
        <div className="grid">
          {JSON.whychooseusdata.map((item, index) => (
            <div key={index} className="card">
              <img
                src={new URL(item.icon, import.meta.url).href}
                alt={item.title}
                className="icon"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
