const sections = document.querySelectorAll(
  "#header, #about, #skills, #projects"
);

export default function Reveal() {
  Controller();
}

const Controller = () => {
  const controller = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        Effect(entry.target.id, observer);
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => controller.observe(section));
};

const Effect = (section, observer) => {
  const children = document.querySelectorAll(`#${section} .scroll`);
  let duration = 0;

  children.forEach((child) => {
    setTimeout(() => {
      child.classList.add("reveal");
      observer.unobserve(child);
    }, duration);

    duration += 100;
  });
};