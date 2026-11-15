const Gallery = ({ images, title }) => {
  const photos = images.slice(0, 4);
  console.log(images.slice(0, 4));
  console.log(images);

  return (
    <div>
      <div className="rounded-xl border border-line bg-panel p-5 shadow-card">
        <img
          src={photos[0]}
          alt={title}
          className="aspect-square w-full rounded-lg object-contain"
        />
      </div>

      {photos.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {photos.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show photo ${i + 1}`}
              aria-pressed={i === 0}
              className={`rounded-xl border-2 bg-panel p-1.5 ${i === 0 ? "border-marigold" : "border-line"}`}
            >
              <img
                src={src}
                alt=""
                className="aspect-square w-full rounded-lg object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
