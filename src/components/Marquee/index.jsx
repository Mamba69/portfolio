import "./Marquee.css";

function Marquee() {
  const items = [
    "4+ years experience",
    "30+ projects",
    "Lead Product Designer",
    "Edtech",
    "Saas",
    "Micro Saas",
    "Logistics",
    "Government",
  ];

  // We repeat the items a few times to ensure the strip never runs out of content before looping
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="marquee-item">
            <span>
              {item}
            </span>
            <div className="marquee-dot"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
