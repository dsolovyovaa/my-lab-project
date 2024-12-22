import React, { useState } from "react";

const Content = () => {
  const [hobby1Color, setHobby1Color] = useState("white");
  const [hobby2Color, setHobby2Color] = useState("white");

  // Функція для зміни кольору елемента хобі 1
  const handleHobby1Click = () => {
    if (hobby1Color === "white" || hobby1Color === "grey") {
      setHobby1Color("red"); // Зміна на червоний при першому або другому кліку
    } else if (hobby1Color === "red") {
      setHobby1Color("grey"); // Зміна на сірий при третьому кліку
    }
  };

  // Функція для зміни кольору елемента хобі 2
  const handleHobby2Click = () => {
    if (hobby2Color === "white" || hobby2Color === "grey") {
      setHobby2Color("red"); // Зміна на червоний при першому або другому кліку
    } else if (hobby2Color === "red") {
      setHobby2Color("grey"); // Зміна на сірий при третьому кліку
    }
  };

  return (
    <div>
      <h3>Мої хобі:</h3>
      <ul>
        <li
          style={{ backgroundColor: hobby1Color }}
          onClick={handleHobby1Click}
        >
          Музика
        </li>
        <li
          style={{ backgroundColor: hobby2Color }}
          onClick={handleHobby2Click}
        >
          Малювання
        </li>
        <li>Подорожі</li>
      </ul>

      <h3>Улюблені книги або фільми:</h3>
      <ol>
        <li>Кафе на краю світу - Джоном П. Стрелекі</li>
        <li>Бійцівський клуб (фільм)</li>
        <li>Нова людина павук (фільм)</li>
      </ol>

      <h3>Улюблене місто:</h3>
      <p>
        Париж – моє улюблене місто, яке я мала щастя відвідати. Це місце, де
        поєднуються історія, мистецтво і незабутня атмосфера романтики.
      </p>
    </div>
  );
};

export default Content;
