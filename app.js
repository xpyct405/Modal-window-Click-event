// Получение модального окна
let modal = document.getElementById('myModal');``

// Получение изображения, помещение его в модальное окно и также использование alt картинки как описание captionText
let img = document.getElementById('myImg');
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt; 
}

// Получение кнопки закрытия Х <span>  
let closeBtn = document.getElementsByClassName("close")[0];

// При клике на Х модальное окно закрывается.
closeBtn.onclick = function() {
  modal.style.display = "none";
}


// Обработчик события клика вне окна!
// Функция при клике по модальному окну modal в любое место кроме картинки, изменяет стиль на display: none у modal
modal.onclick = function (e) {
  // Ниже условие которое проверяет на какую область был onclick, и если на область которая включает modalImg, т.е. картинку, то возвращает true, иначе false
  // includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
	const withinBoundaries = e.composedPath().includes(modalImg);
  console.log(withinBoundaries)

	if ( ! withinBoundaries ) {
		modal.style.display = 'none'; // скрываем элемент т к клик был за его пределами
	}
}
