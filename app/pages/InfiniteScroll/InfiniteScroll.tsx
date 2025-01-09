import React from "react";

const images = [
  "wedding.jpg",
  "rocks.jpg",
  "paris.jpg",
  "nature.jpg",
  "underwater.jpg",
  "ocean.jpg",
  "mountains.jpg",
  "lights.jpg",
  "wedding.jpg",
  "rocks.jpg",
  "paris.jpg",
  "nature.jpg",
  "underwater.jpg",
  "ocean.jpg",
  "mountains.jpg",
  "lights.jpg",
  "wedding.jpg",
  "rocks.jpg",
  "paris.jpg",
  "nature.jpg",
  "underwater.jpg",
  "ocean.jpg",
  "mountains.jpg",
  "lights.jpg",
  "wedding.jpg",
];

function InfiniteScroll() {
  const observerTarget = React.useRef<HTMLDivElement | null>(null);
  const [imgLength, setImgLength] = React.useState(6);
  const [showSpinner, setShowSpinner] = React.useState(false);
  const [displayedImages, setDisplayedImages] = React.useState([
    ...images.slice(0, 6),
  ]);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShowSpinner(true);
        if (imgLength <= images.length) {
          console.log("Intersection observed", imgLength, images.length);
          setTimeout(() => {
            const newImages = [
              ...images.slice(
                displayedImages.length,
                displayedImages.length + 4
              ),
            ];
            const mergedImages = [...displayedImages, ...newImages];
            setDisplayedImages(mergedImages);
            setImgLength(mergedImages.length);
          }, 500);
        }
        setShowSpinner(false);
      }
    });
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [displayedImages.length]);

  return (
    <div className="container max-auto px-4">
      <h1 className="text-lg font-bold">Infinite Scroll</h1>
      <div className="mt-2">
        <p className="text-base">
          This is a simple infinite scroll example. Scroll down to see more
          content. Number of images displayed: {displayedImages.length}.
        </p>
        <div className="mt-4">
          <div className="table clear-both">
            <div className="float-left w-1/2 px-1">
              {displayedImages
                .filter((_, index) => index % 2 === 0)
                .map((image) => (
                  <img
                    src={`https://www.w3schools.com/w3images/${image}`}
                    className="w-full mt-2"
                  />
                ))}
            </div>
            <div className="float-left w-1/2 px-1">
              {displayedImages
                .filter((_, index) => index % 2 === 1)
                .map((image) => (
                  <img
                    src={`https://www.w3schools.com/w3images/${image}`}
                    className="w-full mt-2"
                  />
                ))}
            </div>
          </div>
          <div ref={observerTarget}></div>
          <p className="mt-2"></p>
        </div>
      </div>
    </div>
  );
}

export default InfiniteScroll;
