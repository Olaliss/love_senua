let lastOpenedCard = null; // Добавляем переменную, которая будет хранить открытую карточку

function openCard(id) {
    const card = document.getElementById(id);

    if (lastOpenedCard) { // Если есть открытая карточка
        lastOpenedCard.style.display = 'none'; // Закрываем её
    }
  
    if (lastOpenedCard === card) { // Если кликнутая карточка уже открыта
        lastOpenedCard = null; // Сбрасываем открытую карточку
    } else { // Если карточка закрыта
        card.style.display = 'block'; // Открываем её
        lastOpenedCard = card; // Обновляем открытую карточку
    }
}


function openModal(text) {
  document.getElementById('modalText').innerText = text;
  document.getElementById('myModal').style.display = 'block';
}

function closeModal(амв) {
  document.getElementById('myModal').style.display = 'none';
}


let phrases = [
  'он любить нюхать пиво',
  'ему лень ловить мух',
  'он постоянно ложится на мою подушку и не дает лечь мне',
  'в дестве обожал сидеть в сковородках',
  'скинет все, лишь бы освободить себе место на столе',
  'постоянно спит на клавиатуре'
];

let phrasesCopy = [...phrases];  // создание копии исходного массива

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  let chosenElement = arr[randIndex];
  arr.splice(randIndex, 1);  // удаление выбранного элемента из массива
  return chosenElement;
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.content-text-title');

button.addEventListener('click', function () {
  if (phrasesCopy.length === 0) {
      phrasesCopy = [...phrases];  // если копия массива пуста, снова ее создаем
  }
  phrase.textContent = getRandomElement(phrasesCopy);
});




  function toggleText(id) {
    var text = document.getElementById(id);
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}