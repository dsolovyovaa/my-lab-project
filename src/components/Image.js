import React, { useState } from "react";

const ImageComponent = () => {
  const [imageWidth, setImageWidth] = useState(0); // Початково зображення не додається
  const [isImageVisible, setIsImageVisible] = useState(false); // Стан для відображення зображення

  // Функція для збільшення розміру зображення
  const increaseSize = () => {
    if (isImageVisible) {
      setImageWidth((prevWidth) => prevWidth + 50); // Збільшити на 50px
    }
  };

  // Функція для зменшення розміру зображення
  const decreaseSize = () => {
    if (isImageVisible && imageWidth > 50) {
      setImageWidth((prevWidth) => prevWidth - 50); // Зменшити на 50px, мінімальний розмір 50px
    }
  };

  // Функція для видалення зображення
  const removeImage = () => {
    setIsImageVisible(false); // Зробити зображення невидимим
    setImageWidth(0); // Змінити ширину на 0
  };

  // Функція для додавання зображення
  const addImage = () => {
    setIsImageVisible(true); // Відображати зображення
    setImageWidth(300); // Встановити початкову ширину зображення
  };

  return (
    <div>
      {/* Якщо зображення має бути відображене */}
      {isImageVisible && (
        <div id="imageContainer">
          <img
            src="/Paris.jpg"
            alt="Paris"
            width={imageWidth}
            style={{
              maxWidth: "100%",
              height: "auto",
              border: "2px solid #ddd",
            }}
          />
        </div>
      )}

      {/* Кнопки для взаємодії з зображенням */}
      <div>
        <button onClick={addImage}>Додати зображення</button>
        <button onClick={increaseSize}>Збільшити</button>
        <button onClick={decreaseSize}>Зменшити</button>
        <button onClick={removeImage}>Видалити зображення</button>
      </div>
    </div>
  );
};

export default ImageComponent;
