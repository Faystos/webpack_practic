export function modal () {
  btnClickMe.addEventListener('click', evt => {
    evt.preventDefault();
    createModal();  
  });
}

let btnClickMe = document.querySelector('.click_me');
function createModal () {
  const modalWin = document.createElement('div');
  const body = document.body;
  modalWin.classList.add('modal');  
  modalWin.innerHTML = `
  <div class="wrap_modal">
    <div class="modal_window">
      <div class="modal_window_head">
        <h3>Модальное окно</h3>
        <span class="close-modal">&#10006;</span>
      </div>
      <div class="modal_window_body">
        <form action="" class="modal_form">
          <label for="name" class="">Login:</label>
          <input type="email" name="name" id="name">
          <label for="pass">Password:</label>
          <input type="password" name="pass" id="pass">
        </form>
      </div>
      <div class="modal_window_footer">
        <button class="ok">Войти</button>
        <button class="close-modal">Закрыть</button>
      </div>
    </div>
  </div>
  `;  
  body.appendChild(modalWin);
  
  handlerStyleInput(); 
  closeModalHandler();
}

function handlerStyleInput () {
  let modalInput = document.querySelectorAll('.modal_form input');
  modalInput.forEach(el => {
    let modalLabels = document.querySelectorAll('.modal_form label');
    el.addEventListener('focus', (evt) => {    
      modalLabels.forEach(item => {
        if (el.name === item.attributes.for.textContent) item.classList.add('active');      
      });
    });
  
    el.addEventListener('blur', (evt) => {    
      modalLabels.forEach(item => {
        if (el.value !== '') return;
        if (el.name === item.attributes.for.textContent) item.classList.remove('active');      
      });
    });
  });
}

function closeModalHandler () {
  let btnClose = document.querySelectorAll('.close-modal');
  let wrapModal = document.querySelector('.wrap_modal');
  let modal = document.querySelector('.modal');

  btnClose.forEach(el => {
    el.addEventListener('click', evt =>{
      evt.preventDefault();    
      modal.remove();    
    });
  });  

  wrapModal.addEventListener('click', evt => {    
    if (evt.target !== wrapModal) return;   
    modal.remove();    
  });
}