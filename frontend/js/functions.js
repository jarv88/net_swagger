function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '8px';
    }
  }

  function modal(){
      
    modalHTML = document.getElementById('modal');
    if(modalHTML.classList.contains('opened') == false){
        modalHTML.classList.add('opened');
    }else{
        modalHTML.classList.remove('opened');
    }
     
  }
