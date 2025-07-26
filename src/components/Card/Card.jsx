import React from "react";

const wonders = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/500px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
    title: "Great Wall of China",
    description: "An ancient wall over 13,000 miles long built for defense.",
    link: "#",
  },
  {
    image: "https://tse4.mm.bing.net/th/id/OIP.n6fgaWX_sWcPX1hFgA6F1AHaFj?pid=Api&P=0&h=180",
    title: "Petra, Jordan",
    description: "Rock-cut architecture and water conduit system in the desert.",
    link: "#",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Christ_on_Corcovado_mountain.JPG/500px-Christ_on_Corcovado_mountain.JPG",
    title: "Christ the Redeemer",
    description: "Iconic statue of Jesus Christ in Rio de Janeiro, Brazil.",
    link: "#",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg",
    title: "Machu Picchu",
    description: "15th-century Inca citadel in the Andes Mountains, Peru.",
    link: "#",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/500px-Chichen_Itza_3.jpg",
    title: "Chichen Itza",
    description: "Mayan pyramid city in Yucatan, Mexico.",
    link: "#",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/500px-Colosseo_2020.jpg",
    title: "Roman Colosseum",
    description: "An ancient amphitheater in Rome used for gladiator fights.",
    link: "#",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
    title: "Taj Mahal",
    description: "White marble mausoleum built by Shah Jahan in India.",
    link: "#",
  },
];

const Card = () => {
  return (
    <section className="bg-gray-100 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Seven Wonders of the World</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {wonders.map((wonder, index) => (
            <SingleCard
              key={index}
              image={wonder.image}
              CardTitle={wonder.title}
              CardDescription={wonder.description}
              titleHref={wonder.link}
              btnHref={wonder.link}
              Button="View More"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition duration-300 dark:bg-dark-2">
      <img src={image} alt={CardTitle} className="w-full h-52 object-cover" />
      <div className="p-6 text-center">
        <h3>
          <a
            href={titleHref || "#"}
            className="block text-xl font-semibold text-gray-800 dark:text-blue-400 mb-3 hover:text-blue-600"
          >
            {CardTitle}
          </a>
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {CardDescription}
        </p>
        {Button && (
          <a
            href={btnHref || "#"}
            className="inline-block rounded-full border border-gray-300 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-blue-600 hover:text-white transition dark:border-gray-700"
          >
            {Button}
          </a>
        )}
      </div>
    </div>
  );
};
