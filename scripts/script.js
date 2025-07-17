const button = document.querySelector('.button_1');

const content = document.querySelector('.span_and_text')

const text = document.querySelector('#my_text')

button.addEventListener('click', function () {
    content.classList.add('hidden');
    button.classList.add('hidden');
    text.classList.remove('hidden')
})


// Анимация печатания (эффект typewriter):
const textElement = document.getElementById("my_text");
const originalTextElement = document.getElementById("original_text");
const text_for_print  = originalTextElement.innerHTML;
let index = 0;

function typeWriter() {
  if (index < text_for_print.length) {
      const char = text_for_print.charAt(index);

      if (char === "<") {
          if (text_for_print.substring(index, index + 4) === "<br>") {
              textElement.innerHTML += "<br>"; // Добавляем перенос строки
              index += 4;
          }
      } else {
          textElement.innerHTML += char;
          index++;
      }
      setTimeout(typeWriter, 50); // Задержка в 50 миллисекунд
  }
}

typeWriter(); // Запускаем функцию