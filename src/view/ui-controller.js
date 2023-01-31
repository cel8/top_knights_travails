
import 'Svg/home-outline.svg';
import 'Svg/github.svg';
import 'Svg/dark-theme.svg';
import 'Svg/light-theme.svg';
import 'Svg/chess-knight.svg';
import DomManager from 'Utilities/dom-manager';
import ButtonManager from 'Utilities/button-manager';
import ControllerBoard from 'Controller/controller-board';

const root = document.documentElement;
const main = document.querySelector('main');

export const settings = { theme: 'dark' };

const boardSize = 8;
const phases = {
  phaseRest:     0,
  phaseSetDst:   1,
  phaseComplete: 2
};

const graphFirstSearch = {
  dfs: 'Depth-first search',
  bfs: 'Breadth-first search'
};

export default class UiController {
  constructor() {
    this.controllerBoard = new ControllerBoard(boardSize);
    this.srcPosition = {
      x: -1,
      y: -1
    };
    this.dstPosition = {
      x: -1,
      y: -1
    };
    this.stepPhase = phases.phaseRest;
    this.btnRandomKnight = null;
    this.algorithm = graphFirstSearch.bfs;
  }

  #doLoadHeader() {
    const header  = document.querySelector('header');
    
    DomManager.addNodeChild(header, ButtonManager.createImageButton('home-outline.svg', 'header-button', () => {
      this.stepPhase = phases.phaseRest;
      this.#setPosition();
      this.btnRandomKnight.disabled = false;
      this.#doCreateHome();
    }));
    
    this.btnRandomKnight = ButtonManager.createTextButton('random knight', 'header-button', () => {
      if (this.stepPhase === phases.phaseRest) {
        const getRandomPosition = () => Math.floor(Math.random() * boardSize);
        const rndPosition = {
          x: getRandomPosition(),
          y: getRandomPosition()
        };
        this.#setPosition(rndPosition.x, rndPosition.y);
        UiController.#setKnight(rndPosition.x, rndPosition.y);
        this.btnRandomKnight.disabled = true;
        this.stepPhase = phases.phaseSetDst;
      }
    });
    DomManager.addNodeChild(header, this.btnRandomKnight);

    const btn = ButtonManager.createTextButton(this.algorithm, 'header-button', () => {
      if (this.algorithm === graphFirstSearch.bfs) this.algorithm = graphFirstSearch.dfs;
      else this.algorithm = graphFirstSearch.bfs;

      ButtonManager.editButtonText(btn, this.algorithm);
    });

    DomManager.addNodeChild(header, btn);

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
        const grid = ButtonManager.createButton('', null, 'grid-button', (e) => this.#onCellClick(e));
        grid.dataset.x = i;
        grid.dataset.y = j;
        DomManager.addNodeChild(main, grid);
      }
    }
  }

  static #setKnight(x, y) {
    const target = main.querySelector(`[data-x='${x}'][data-y='${y}']`);
    ButtonManager.editButtonImage(target, 'chess-knight.svg');
  }

  static #setMoveStep(x, y, step) {
    const target = main.querySelector(`[data-x='${x}'][data-y='${y}']`);
    ButtonManager.editButtonText(target, step.toString(10));
    ButtonManager.editButtonImage(target);
  }

  #setPosition(x = -1, y = -1, isDst = false) {
    if (Number.isNaN(+x) || Number.isNaN(+y)) return;
    if ((x > boardSize) || (y > boardSize)) return;

    // Reset
    if ((x < 0) || (y < 0)) {
      this.srcPosition.x = -1;
      this.srcPosition.y = -1;
      this.dstPosition.x = -1;
      this.dstPosition.y = -1;
      return;
    }

    if (!isDst) {
      this.srcPosition.x = +x;
      this.srcPosition.y = +y;
    } else {
      this.dstPosition.x = +x;
      this.dstPosition.y = +y;
    }
  }
  
  #onCellClick(e) {
    const paths = [];
    const { target } = e;
    const x = +target.dataset.x;
    const y = +target.dataset.y;

    switch (this.stepPhase) {
      case phases.phaseRest:
        this.#setPosition(x, y);
        UiController.#setKnight(x, y);
        this.btnRandomKnight.disabled = true;
        this.stepPhase = phases.phaseSetDst;
        break;
      case phases.phaseSetDst:
        this.#setPosition(x, y, true);

        if (this.algorithm === graphFirstSearch.bfs)
          this.controllerBoard.searchPathBfs(this.srcPosition, this.dstPosition, paths);
        else
          this.controllerBoard.searchPathDfs(this.srcPosition, this.dstPosition, paths);
        
        if (paths.length >= 2) {
          let iterator = 0;
          const timer = setInterval(() => {
            const step = paths[iterator];
            const knightStep = paths[iterator + 1];
            UiController.#setMoveStep(step.x, step.y, iterator + 1);
            UiController.#setKnight(knightStep.x, knightStep.y);
            iterator++;
            if (iterator === paths.length - 1) {
              clearInterval(timer);
              this.stepPhase = phases.phaseComplete;
            }
          }, 500);
        }        
        break;
      default:
        break;
    }

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
