import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // 30% visible
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <div
        ref={ref}
        style={{
          marginTop: "100vh",
          height: "200px",
          background: isVisible ? "green" : "red",
        }}
      >
        {isVisible ? "Visible 👀" : "Not visible ❌"}
      </div>
    </div>
  );
}