
import 'Svg/home-outline.svg';
import 'Svg/github.svg';
import 'Svg/dark-theme.svg';
import 'Svg/light-theme.svg';
import DomManager from 'Utilities/dom-manager';
import ButtonManager from 'Utilities/button-manager';
import ControllerBoard from 'Controller/controller-board';

const root = document.documentElement;
const body = document.querySelector('body');
const main = document.querySelector('main');

export const settings = { theme: 'dark' };

const boardSize = 8;

export default class UiController {
  constructor() {
    this.controllerBoard = new ControllerBoard(boardSize);
  }

  #doLoadHeader() {
    const header  = document.querySelector('header');
    
    DomManager.addNodeChild(header, ButtonManager.createImageButton('home-outline.svg', 'header-button', () => {
      this.#doCreateHome();
    }));

    const btnToggleTheme = ButtonManager.createImageButton(`${settings.theme}-theme.svg`, 'header-button', () => {
      settings.theme = (settings.theme !== 'dark' ? 'dark' : 'light');
      ButtonManager.editButtonImage(btnToggleTheme, `${settings.theme}-theme.svg`);
      root.className = settings.theme;
    });

    DomManager.addNodeChild(header, btnToggleTheme);
  }

  #doCreateHome() {
    DomManager.removeAllChildNodes(main);
    main.style.display = 'grid';
    main.style.gridTemplateColumns = `repeat(${boardSize}, 0fr)`;
    main.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;
    for (let i = 0; i < boardSize; ++i) {
      for (let j = 0; j < boardSize; ++j) {
        const grid = DomManager.createAddNode('button', main);
        grid.dataset.x = i;
        grid.dataset.y = j;
        grid.onclick = this.#onClick;
      }
    }
  }

  #onClick(e) {
    const {target} = e;
    const x = +target.dataset.x;
    const y = +target.dataset.y;    
    console.log (x)
    console.log (y)
  }

  #doLoadMainContent() {
    this.#doCreateHome();
  }

  static #doLoadFooter() {
    const curYear = new Date().getFullYear();
    const footer = document.querySelector('footer')
    DomManager.createAddNode('p', footer, null, null, `Copyright © ${curYear} Alessandro Celotti`);
    DomManager.addNodeChild(footer, ButtonManager.createImageLinkButton('https://github.com/cel8', 'github.svg'));
  }

  doLoadUI() {
    // Set main root theme
    root.className = settings.theme;
    this.#doLoadHeader();
    this.#doLoadMainContent();
    UiController.#doLoadFooter();
  }
}
