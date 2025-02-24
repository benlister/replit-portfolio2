interface Image {
  url: string;
  caption: string;
}

interface ImageGridProps {
  images: Image[];
  className?: string;
}

export default function ImageGrid({ images, className = "" }: ImageGridProps) {
  return (
    <div className={`grid md:grid-cols-3 gap-6 ${className}`}>
      {images.map((image, index) => (
        <div key={index}>
          <div className="aspect-[4/3] overflow-hidden rounded-md">
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="image-caption">{image.caption}</p>
        </div>
      ))}
    </div>
  );
}
