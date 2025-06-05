function enhanceVideos() {
  const videos = document.querySelectorAll("video");

  videos.forEach((video, index) => {
    video.addEventListener("ended", () => {
      const nextVideo = videos[index + 1];
      if (nextVideo) {
        nextVideo.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });
}

// Instagram loads content dynamically, so observe the DOM
const observer = new MutationObserver(() => {
  if (document.querySelectorAll("video").length > 0) {
    enhanceVideos();
  }
});

observer.observe(document.body, { childList: true, subtree: true });

