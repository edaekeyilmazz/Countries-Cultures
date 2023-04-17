$(() => {
  // create an array for all the images for slideshow
  let imageCache = [];

  $("#slides img").each((index, img) => {
    const image = new Image(); // creating a new image everytime the loop runs
    image.src = $(img).attr("src"); // adding the source to the new image
    image.title = $(img).attr("alt"); // adding title to the new image
    imageCache[index] = image; // pushing the image to the array
  });

  // start the slide show
  let imageCounter = 0;
  setInterval(() => {
    $("#caption").fadeOut(1500); // the caption will fade out 1000ms.
    $("#slide").fadeOut(1500, () => {
      imageCounter = (imageCounter + 1) % imageCache.length; // slides to be rotating
      const nextImage = imageCache[imageCounter];
      $("#slide").attr("src", nextImage.src).fadeIn(1500); // the image will fade in 1000ms.
      $("#caption").text(nextImage.title).fadeIn(1500); // the caption will fade in 1000ms.
    }); //the image will fade out 1000ms.
  }, 4000); // the image will change in every 3000ms.
});
