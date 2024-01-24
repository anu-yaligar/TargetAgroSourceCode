function openPopup(productName){
  const popupOverlay = document.getElementById('popupOverlay');
  const popup = document.getElementById('popup');
  const popupImage = document.getElementById('popupImage');
  const popupDescription = document.getElementById('popupDescription');
  var popupHeader = document.querySelector('.popup-header');
  var headerText = document.createElement('h2');
  headerText.textContent = 'Target -' +productName;
  popupHeader.innerHTML='';
  popupHeader.appendChild(headerText);

  popupImage.src = `img/` +productName+ '.jpg';
  popupDescription.textContent = 'Description: ' + productName;

  popup.style.display = 'block';
  popupOverlay.style.display = 'block';
}
function closePopup(){
  const popupOverlay = document.getElementById('popupOverlay');
  const popup = document.getElementById('popup');

  popup.style.display = 'none';
  popupOverlay.style.display = 'none';
}
