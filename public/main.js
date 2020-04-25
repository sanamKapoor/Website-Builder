
let controle = document.querySelector('.controle');
let icon = document.querySelector('.controle i');

let aside = document.querySelector('aside');
let main = document.querySelector('main');

let open = true;

window.onresize = () => {
  controlDashboard(false);
}

icon.addEventListener('click', () => {
  controlDashboard(open);
  open = !open;
})

function controlDashboard(isOpen = false){
  if(isOpen){

    if(window.innerWidth > 1200){
      aside.style.display = 'flex';
      aside.style.width = '350px';
      aside.style.height = '100vh';
      aside.style.position  = 'absolute';
      aside.style.top = '0px';
      aside.style.left = '0px';

      controle.style.position = 'absolute';
      controle.style.top = '50vh';
      controle.style.left = `${aside.clientWidth}px`;
      main.style.marginLeft = `${aside.clientWidth}px`;

      icon.classList = '';
      icon.className = 'fas fa-caret-left fa-1x px-1 py-4 bg-light';
    }
    else {
      aside.style.display = 'block';
      aside.style.height =  'auto';
      aside.style.width = '100vw';
      aside.style.position  = 'absolute';
      aside.style.left = '0px';
      aside.style.right = '0px';
      aside.style.top = '0px';
      main.style.marginTop = `${aside.clientHeight}px`;

      controle.style.position = 'absolute';
      controle.style.top = `${aside.clientHeight}px`;
      controle.style.left = '45vw';

      icon.classList = '';
      icon.className = 'fas fa-caret-up fa-1x px-4 py-1 bg-light';
    }

  
  } else {

    if(window.innerWidth > 1200){
      aside.style.position  = 'absolute';
      aside.style.top = '0px';
      aside.style.left = '-350px';
      main.style.marginLeft = '0px';

      controle.style.position = 'absolute';
      controle.style.top = '50vh';
      controle.style.left = '0px';

      icon.classList = '';
      icon.className = 'fas fa-caret-right fa-1x px-1 py-4 bg-light';
    }
    else {
      aside.style.display = 'none';

      controle.style.position = 'absolute';
      controle.style.top = '0px';
      controle.style.left = '45vw';
      main.style.marginTop = '0px';

      icon.classList = '';
      icon.className = 'fas fa-caret-down fa-1x px-4 py-1 bg-light';
    }

  }

}

controlDashboard();