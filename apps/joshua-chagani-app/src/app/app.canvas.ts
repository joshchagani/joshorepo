document.addEventListener('DOMContentLoaded', () => {
  import('@joshorepo/joshua-chagani/threejs');

  const invisibleElements = document.querySelectorAll('.invisible');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('invisible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px',
      threshold: 0.4,
    }
  );

  invisibleElements.forEach((el) => observer.observe(el));
});
