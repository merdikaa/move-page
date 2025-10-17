document.querySelectorAll(".js-scroll-top").forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    const nav = document.querySelector(".navbar-collapse.show");
    if (nav)
      (
        bootstrap.Collapse.getInstance(nav) || new bootstrap.Collapse(nav)
      ).hide();
  })
);
