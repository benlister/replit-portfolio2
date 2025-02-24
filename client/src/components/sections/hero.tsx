interface HeroProps {
  title: string;
  description: string;
  backgroundUrl: string;
}

export default function Hero({ title, description, backgroundUrl }: HeroProps) {
  return (
    <div className="relative bg-[#111B2E] text-white">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container-wide relative py-24 md:py-32 text-center">
        <h1 className="max-w-[900px] mx-auto">{title}</h1>
        <p className="mt-6 text-xl md:text-2xl max-w-[750px] text-gray-300 mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}