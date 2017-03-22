const slide = new DoSlide(".main", {
  horizontal: true,
  minInterval: 0,
  timingFunction: "cubic-bezier(0.19, 1, 0.22, 1)",
});

document.query(".dots")
  .append(
    ...document.queryAll(".main .section")
      .map((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
          slide.go(index);
        });
        return dot;
      })
  );
document.query(".dots .dot:first-child").classList.add("active");

const change = (index) => {
  document.body.dataset.index = index;
  document.query(".dots .dot.active").classList.remove("active");
  document.query(`.dots .dot:nth-child(${index + 1})`).classList.add("active");
};

slide.onBeforeChange((_, index) => {
  change(index);
});
