document.getElementById("year").textContent = new Date().getFullYear();

const video = document.getElementById("showreel");
const placeholder = document.querySelector(".video-placeholder");

function updateVideoPlaceholder() {
  if (!video) return;
  const hasSource = video.querySelector("source")?.getAttribute("src");
  if (hasSource && !hasSource.includes("showreel.mp4")) placeholder.style.display = "none";
}
video?.addEventListener("loadeddata", () => placeholder.style.display = "none");
video?.addEventListener("error", () => placeholder.style.display = "grid");
updateVideoPlaceholder();

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
