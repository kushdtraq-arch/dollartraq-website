import Image from "next/image";

export default function Card({ imageSrc, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
