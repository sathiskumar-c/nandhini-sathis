import "./section-two.scss";
import JSON from "../../data/section-two.json";

const SectionTwo = () => {
  const brandsData = [...JSON.toprecommendeddata, ...JSON.toprecommendeddata];

  return (
    <section
      className="scroll-container component-parent"
      role="complementary"
      aria-labelledby="top-brands-title"
    >
      <h1
        id="top-brands-title"
        className="section-title"
        style={{ color: "lightpink", textAlign: "center", fontStyle: "italic" }}
      >
        Nandhini❤️Sathis - 2023 to My Last Breath
      </h1>
      <div
        className="scroll-track"
        role="list"
        aria-label="List of top recommended motorcycle brands"
      >
        {brandsData.map((brand, index) => (
          <article
            className="brand-card"
            key={`${brand.id}-${index}`}
            role="listitem"
          >
            <img
              src={new URL(brand.image, import.meta.url).href}
              alt={brand.alt || `${brand.name} motorcycle logo`}
              className="brand-img"
              loading="lazy"
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;
