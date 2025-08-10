import React from "react";
import "./Fragments.css";

const Fragments = () => {
  const fragments = [
    {
      id: "01",
      alt: "старая карта",
      title: "Старинная карта от National Geographic",
      description:
        "Команда обнаруживает карту, на которой отсутствует бухта Money Bay. Это Pin-up карта может стать ключом ко всей экспедиции."
    },
    {
      id: "05",
      alt: "пещера с сокровищами",
      title: "Исследование Пещеры Сокровищ",
      description:
        "Майя пробирается через ловушки и водные преграды. Среди сталагмитов спрятаны реликвии в стиле Pin-up."
    },
    {
      id: "03",
      alt: "подводное исследование",
      title: "Подводные поиски у бухты Bight Bay",
      description:
        "Алекс ныряет в глубины и обнаруживает фрагменты затонувшего корабля. Исследование усложняется течением."
    }
  ];

  return (
    <section className="fragments" id="fragments">
      <h2>Исследуйте забытые реликвии — станьте частью наследия в стиле Pin-up!</h2>
      <p>Каждая находка приближает к разгадке главной тайны острова — и всё это в духе приключений Pin-up!</p>
      <div className="fragment-container">
        {fragments.map((item) => (
          <div className="fragment" key={item.id}>
            <img
              src={`images/treasure${item.id}.jpg`}
              alt={item.alt}
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fragments;
