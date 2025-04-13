"use client";

import Image from "../Image";

interface ICardProps {
  onClick?: () => void;
  image?: string;
  altImage?: string;
  title: string;
  description: string;
}

const Card = ({ onClick, image, altImage, title, description }: ICardProps) => {
  return (
    <div
      onClick={onClick}
      className="border rounded-lg p-4 cursor-pointer bg-black hover:shadow-md hover:shadow-blue-600 hover:border-blue-600  transition-transform transform hover:scale-101"
    >
      <Image
        src={image || ""}
        alt={altImage || "card-image"}
        className="w-full h-48 object-cover object-top rounded mb-2"
      />
      <h2 className="font-bold text-xl text-blue-600">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
