let endListener = false;

clickElement.addEventListener("click", () => {
  if (endListener) {
    endListener = false;
  } else {
    endListener = true;
  }
});

video.addEventListener("ended", () => {
  if (endListener) return console.log("listener ended");



  console.log("Video has ended");
});
