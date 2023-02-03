/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller/controller-board.js":
/*!********************************************!*\
  !*** ./src/controller/controller-board.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ControllerBoard)
/* harmony export */ });
/* harmony import */ var Modules_vertex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Modules/vertex */ "./src/modules/vertex.js");


class ControllerBoard {
  constructor(boardSize) {
    if (boardSize !== 8) throw new 'Invalid input';
    this.boardSize = boardSize;
    this.#initBoard();
    this.#initBoardLink();
    const paths = [];
    this.searchPathDfs({x: 0, y: 0}, {x: 7, y: 4}, paths);
  }

  #initBoard() {
    this.matrix = new Array(this.boardSize);
    for(let i = 0; i < this.matrix.length; ++i) {
      this.matrix[i] = new Array(this.boardSize);
      for(let j = 0; j < this.matrix[i].length; ++j) {
        this.matrix[i][j] = new Modules_vertex__WEBPACK_IMPORTED_MODULE_0__["default"](i, j);
      }
    }
  }

  #initBoardLink() {
    for(let i = 0; i < this.matrix.length; ++i) {
      for(let j = 0; j < this.matrix[i].length; ++j) {
        if ((i - 2 >= 0) && (j - 1 >= 0)) 
          this.matrix[i][j].addEdge(this.matrix[i - 2][j - 1]);
        if ((i - 2 >= 0) && (j + 1 < this.boardSize)) 
          this.matrix[i][j].addEdge(this.matrix[i - 2][j + 1]);
        if ((i + 2 < this.boardSize) && (j - 1 >= 0)) 
          this.matrix[i][j].addEdge(this.matrix[i + 2][j - 1]);
        if ((i + 2 < this.boardSize) && (j + 1 < this.boardSize)) 
          this.matrix[i][j].addEdge(this.matrix[i + 2][j + 1]);
        if ((j - 2 >= 0) && (i - 1 >= 0)) 
          this.matrix[i][j].addEdge(this.matrix[i - 1][j - 2]);
        if ((j - 2 >= 0) && (i + 1 < this.boardSize)) 
          this.matrix[i][j].addEdge(this.matrix[i + 1][j - 2]);
        if ((j + 2 < this.boardSize) && (i - 1 >= 0)) 
          this.matrix[i][j].addEdge(this.matrix[i - 1][j + 2]);
        if ((j + 2 < this.boardSize) && (i + 1 < this.boardSize)) 
          this.matrix[i][j].addEdge(this.matrix[i + 1][j + 2]);
      }
    }
  }

  #validInput(position) {
    return position && (position.x >= 0 && position.x < this.boardSize);
  }

  searchPathBfs(source, destination, paths = []) {
    if (!this.#validInput(source) || !this.#validInput(destination)) return;
    const visited = new Set();
    const node = this.matrix[source.x][source.y];

    const queue = [[ node, [] ]];

    while (queue.length > 0) {
      const [ current, [...path]] = queue.shift();
      const position = current.getPosition;
      path.push(position);
      
      if (destination.x === position.x && destination.y === position.y) {
        path.forEach(element => {
          paths.push(element);
        });
        return;
      }
      
      if (!visited.has(current)) {
        queue.push(...current.getVertexEdges.map(edge => [ edge, path ]));
      }
      visited.add(current);
    }    
  }

  searchPathDfs(source, destination, paths = [], visited = new Set()) {
    const node = this.matrix[source.x][source.y];
    const destNode = this.matrix[destination.x][destination.y];
    if (visited.has(destNode)) {
      return;
    }

    // Add node to path
    paths.push(node.getPosition);
    if (!visited.has(node)) visited.add(node);

    const edges = node.getVertexEdges;
    const idxFather = paths.length - 1;

    // Iterates on edges 
    for (let i = 0; i < edges.length; ++i) {
      if (visited.has(destNode)) {
        return;
      }

      const edge = edges[i];
      const position = edge.getPosition;

      if (destination.x === position.x && destination.y === position.y) {
        visited.add(edge);
        paths.push(edge.getPosition);
        return;
      }

      if (!visited.has(edge)) {
        visited.add(edge);
        this.searchPathDfs(position, destination, paths, visited);
        
        if (!visited.has(destNode)) {
          // Pop other paths
          while (idxFather + 1 !== paths.length) {
            paths.pop();
          }
        }
      }
    }
  }
}

/***/ }),

/***/ "./src/modules/vertex.js":
/*!*******************************!*\
  !*** ./src/modules/vertex.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vertex)
/* harmony export */ });

class Vertex {
  constructor(xPosition, yPosition) {
    if (Number.isNaN(+xPosition) && 
        Number.isNaN(+yPosition)) throw new 'Invalid input';
    this.xPosition = +xPosition;
    this.yPosition = +yPosition;
    this.edges = [];
  }

  get getPosition() { return { x: this.xPosition, y: this.yPosition }; }

  get getVertexEdges() { return this.edges; }

  addEdge(vertex) {
    // Check for invalid type
    if (!(vertex instanceof Vertex)) throw new 'Invalid input';
    
    // Get vertex position
    const vertexPosition = vertex.getPosition;

    // Check vertex already in links
    if (this.edges.every(v => v.getPosition !== vertexPosition)) {
      // Add new vertex
      this.edges.push(vertex);
    }
  }
};


/***/ }),

/***/ "./src/utilities/button-manager.js":
/*!*****************************************!*\
  !*** ./src/utilities/button-manager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ButtonManager)
/* harmony export */ });
/* harmony import */ var Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utilities/dom-manager */ "./src/utilities/dom-manager.js");


class ButtonManager {
  static createButton(btnText = '', svgIconFileName = null, className = null, cbEvent = undefined) {
    const btn = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeClass('button', className || 'navButton');
    // Insert icon when exist
    if(svgIconFileName) {
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createAddNodeImg(svgIconFileName, btnText, btn, 'icon');
    }
    // Add text when contains something
    if(btnText.length > 0) {
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createAddNode('p', btn, null, null, btnText);
    }
    // Add button event
    btn.onclick = cbEvent;
    return btn;  
  }

  static editButtonText(btn, text = '') {
    const btnText = btn.querySelector('p');
    if(btnText) {
      /* Remove or edit text */
      if(text === '') {
        btnText.remove();
      } else {
        btnText.textContent = text;
      }
    } else if(text.length > 0) { /* Create node */
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createAddNode('p', btn, null, null, text);
    }
  }

  static editButtonImage(btn, svgIconFileName = null) {
    const btnText    = btn.querySelector('p');
    const btnImgNode = btn.querySelector('.icon');
    if(btnImgNode) {
      if(!svgIconFileName) {
        btnImgNode.remove();
      } else {
        Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].updateNodeImg(svgIconFileName, btnImgNode);
      }
    } else if(svgIconFileName) { // Insert icon when exist
      const altText = btnText ? btnText.textContent : '';
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createAddNodeImg(svgIconFileName, altText, btn, 'icon');
    }
  }

  static createImageButton(svgIconFileName, className = null, cbEvent = undefined) {
    return ButtonManager.createButton('', svgIconFileName, className, cbEvent)
  }

  static createTextButton(btnText, className = null, cbEvent = undefined) {
    return ButtonManager.createButton(btnText, null, className, cbEvent)
  }

  static createImageLinkButton(link, svgIconFileName) {
    const node = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeLink(link, null, null, null, 
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeImg(svgIconFileName, 'imageLink', 'icon-link')
    );
    return node;
  }
}


/***/ }),

/***/ "./src/utilities/dom-manager.js":
/*!**************************************!*\
  !*** ./src/utilities/dom-manager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DomManager)
/* harmony export */ });

const imagePath = './images/';

class DomManager {
  // Returns true if it is a DOM element
  static #isElement(o) {
    return (
      typeof HTMLElement === "object" ? o instanceof HTMLElement : // DOM2
      o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
    );
  }

  static createNode(type, className = null, id = null, content = null, children = null) {
    const elem = document.createElement(type);
    // Add class name or ID
    if(className) elem.className = className;
    if(id) elem.id = id;
    // Add text content
    if(content) elem.textContent = content;
    // Eventually add child or children
    DomManager.addNodeChild(elem, children);
    return elem;
  }

  static createNodeContent(type, content, className = null, id = null) {
    return DomManager.createNode(type, className, id, content, null);
  }

  static createNodeClass(type, className, id = null, content = null) {
    return DomManager.createNode(type, className, id, content, null);
  }

  static createNodeID(type, id, className = null, content = null) {
    return DomManager.createNode(type, className, id, content, null);
  }

  static createNodeImg(imgFileName, alt, className = null, id = null, local = true) {
    const fileFullPath = local ? imagePath + imgFileName : imgFileName; // local path or url
    const node = DomManager.createNode('img', className, id, null, null);
    node.setAttribute('src', fileFullPath);
    node.setAttribute('alt', alt);
    return node;
  }

  static createNodeImgClass(imgFileName, alt, className, id = null, local = true) {
    return DomManager.createNodeImg(imgFileName, alt, className, id, local);
  }

  static createNodeImgID(imgFileName, alt, id, className = null, local = true) {
    return DomManager.createNodeImg(imgFileName, alt, className, id, local);
  }

  static createNodeLink(link, className = null, id = null, content = null, children = null) {
    const node = DomManager.createNode('a', className, id, content, children);
    node.setAttribute('href', link);
    node.setAttribute('target', '_blank');
    return node;
  }

  static addNodeChild(father, children) {
    if(children) {
      if(Array.isArray(children)) { // Contains more than one child in Array
        children.forEach(child => {
          father.appendChild(child);
        });
      } else if(DomManager.#isElement(children)) { // Contains just one child
        father.appendChild(children);
      }
    }
  }

  static createAddNode(type, father, className = null, id = null, content = null, children = null) {
    // Append the new node in father
    const node = DomManager.createNode(type, className, id, content, children);
    father.appendChild(node);
    return node;
  }

  static createAddNodeImg(imgFileName, alt, father, className = null, id = null, local = true) {
    // Append the new node in father
    const node = DomManager.createNodeImg(imgFileName, alt, className, id, local);
    father.appendChild(node);
    return node;
  }

  static updateNodeImgBySelector(imgFileName, father, selector, local = true) {
    const imgNode = father.querySelector(selector);
    const url = local ? imagePath + imgFileName : imgFileName;
    if(imgNode) imgNode.setAttribute('src', url);
  }

  static updateNodeImg(imgFileName, imgNode, local = true) {
    const url = local ? imagePath + imgFileName : imgFileName;
    if(imgNode) imgNode.setAttribute('src', url);
  }

  static removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  static isNodeHide(node) {
    return node.style.display === 'none';
  }

  static toggleDisplayByNode(node, nextDisplay = undefined) {
    if(node) {
      if(node.dataset.prevDisplay === undefined) {
        node.dataset.prevDisplay = nextDisplay || node.style.display;
      }
      const prevDisplay = node.style.display;
      node.style.display = (node.style.display !== 'none') ? 'none' 
                                                          : node.dataset.prevDisplay;
      node.dataset.prevDisplay = prevDisplay;
    }
  }

  static toggleDisplay(nodeName, nextDisplay = undefined) {
    const node = document.querySelector(nodeName);
    DomManager.toggleDisplayByNode(node, nextDisplay);
  }
}


/***/ }),

/***/ "./src/assets/images/svg/chess-knight.svg":
/*!************************************************!*\
  !*** ./src/assets/images/svg/chess-knight.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "images/chess-knight.svg";

/***/ }),

/***/ "./src/assets/images/svg/dark-theme.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/svg/dark-theme.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "images/dark-theme.svg";

/***/ }),

/***/ "./src/assets/images/svg/github.svg":
/*!******************************************!*\
  !*** ./src/assets/images/svg/github.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "images/github.svg";

/***/ }),

/***/ "./src/assets/images/svg/home-outline.svg":
/*!************************************************!*\
  !*** ./src/assets/images/svg/home-outline.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "images/home-outline.svg";

/***/ }),

/***/ "./src/assets/images/svg/light-theme.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/svg/light-theme.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "images/light-theme.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./src/view/ui-controller.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UiController),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var Svg_home_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Svg/home-outline.svg */ "./src/assets/images/svg/home-outline.svg");
/* harmony import */ var Svg_github_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Svg/github.svg */ "./src/assets/images/svg/github.svg");
/* harmony import */ var Svg_dark_theme_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Svg/dark-theme.svg */ "./src/assets/images/svg/dark-theme.svg");
/* harmony import */ var Svg_light_theme_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Svg/light-theme.svg */ "./src/assets/images/svg/light-theme.svg");
/* harmony import */ var Svg_chess_knight_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Svg/chess-knight.svg */ "./src/assets/images/svg/chess-knight.svg");
/* harmony import */ var Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Utilities/dom-manager */ "./src/utilities/dom-manager.js");
/* harmony import */ var Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Utilities/button-manager */ "./src/utilities/button-manager.js");
/* harmony import */ var Controller_controller_board__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Controller/controller-board */ "./src/controller/controller-board.js");










const root = document.documentElement;
const main = document.querySelector('main');

const settings = { theme: 'dark' };

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

class UiController {
  constructor() {
    this.controllerBoard = new Controller_controller_board__WEBPACK_IMPORTED_MODULE_7__["default"](boardSize);
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
    this.updateChessBoardTimer = -1;
  }

  #stopUpdateChess() {
    if (this.updateChessBoardTimer !== -1) {
      clearInterval(this.updateChessBoardTimer);
      this.updateChessBoardTimer = -1;
    }
  }

  #cleanUpBoard() {
    this.#stopUpdateChess();
    this.stepPhase = phases.phaseRest;
    this.#setPosition();
    this.btnRandomKnight.disabled = false;
    this.#doCreateHome();
  }

  #doLoadHeader() {
    const header  = document.querySelector('header');
    
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].addNodeChild(header, Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].createImageButton('home-outline.svg', 'header-button', () => this.#cleanUpBoard()));
    
    this.btnRandomKnight = Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].createTextButton('random knight', 'header-bar-button', () => {
      if (this.stepPhase === phases.phaseComplete) {
        this.#cleanUpBoard();
      }

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
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].addNodeChild(header, this.btnRandomKnight);

    const btn = Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].createTextButton(this.algorithm, 'header-bar-button', () => {
      if (this.algorithm === graphFirstSearch.bfs) this.algorithm = graphFirstSearch.dfs;
      else this.algorithm = graphFirstSearch.bfs;

      Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].editButtonText(btn, this.algorithm);
    });

    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].addNodeChild(header, btn);

    const btnToggleTheme = Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].createImageButton(`${settings.theme}-theme.svg`, 'header-button', () => {
      settings.theme = (settings.theme !== 'dark' ? 'dark' : 'light');
      Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].editButtonImage(btnToggleTheme, `${settings.theme}-theme.svg`);
      root.className = settings.theme;
    });

    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].addNodeChild(header, btnToggleTheme);
  }

  #doCreateHome() {
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].removeAllChildNodes(main);
    const divWrapper = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', main, 'wrapper');
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divWrapper, 'top-left-header');
    const divTop = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divWrapper, 'top-header');
    const divTopWrapper = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divTop, 'wrapper-column-inner');
    for (let i = 0; i < boardSize; ++i) {
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divTopWrapper, 'box-inner', null, String.fromCharCode(65 + i));
    }
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divWrapper, 'top-right-header');
    const divLeft = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divWrapper, 'left-header');
    const divLeftWrapper = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divLeft, 'wrapper-row-inner');
    for (let i = 0; i < boardSize; ++i) {
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divLeftWrapper, 'box-inner', null, 1 + i);
    }
    for (let i = 0; i < boardSize; ++i) {
      for (let j = 0; j < boardSize; ++j) {
        const grid = Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].createButton('', null, 'box', (e) => this.#onCellClick(e));
        grid.dataset.x = i;
        grid.dataset.y = j;
        Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].addNodeChild(divWrapper, grid);
      }
    }
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divWrapper, 'bottom-left-header');
    const divBottom = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divWrapper, 'bottom-header');
    const divBottomWrapper = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divBottom, 'wrapper-column-inner');
    for (let i = 0; i < boardSize; ++i) {
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divBottomWrapper, 'box-inner', null, String.fromCharCode(65 + i));
    }
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divWrapper, 'bottom-right-header');
    const divRight = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divWrapper, 'right-header');
    const divRightWrapper = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divRight, 'wrapper-row-inner');
    for (let i = 0; i < boardSize; ++i) {
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divRightWrapper, 'box-inner', null, 1 + i);
    }
  }

  static #setKnight(x, y) {
    if (Number.isNaN(+x) || Number.isNaN(+y)) return;
    if ((x > boardSize) || (y > boardSize)) return;
    const target = main.querySelector(`[data-x='${x}'][data-y='${y}']`);
    Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].editButtonImage(target, 'chess-knight.svg');
  }

  static #setMoveStep(x, y, step) {
    if (Number.isNaN(+x) || Number.isNaN(+y)) return;
    if ((x > boardSize) || (y > boardSize)) return;
    const target = main.querySelector(`[data-x='${x}'][data-y='${y}']`);
    Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].editButtonText(target, step.toString(10));
    Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].editButtonImage(target);
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
    if (this.updateChessBoardTimer !== -1) return;
    const dataset = (target.nodeName.toLowerCase() === 'button') ? target.dataset
      : target.parentNode.dataset;
    const x = +dataset.x;
    const y = +dataset.y;
    if (this.stepPhase === phases.phaseComplete) {
      this.#cleanUpBoard();
    }

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
          this.updateChessBoardTimer = setInterval(() => {
            const step = paths[iterator];
            const knightStep = paths[iterator + 1];
            UiController.#setMoveStep(step.x, step.y, iterator + 1);
            UiController.#setKnight(knightStep.x, knightStep.y);
            iterator++;
            if (iterator === paths.length - 1) {
              this.#stopUpdateChess();
              this.stepPhase = phases.phaseComplete;
              this.btnRandomKnight.disabled = false;
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
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('p', footer, null, null, `Copyright © ${curYear} Alessandro Celotti`);
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].addNodeChild(footer, Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].createImageLinkButton('https://github.com/cel8', 'github.svg'));
  }

  doLoadUI() {
    // Set main root theme
    root.className = settings.theme;
    this.#doLoadHeader();
    this.#doLoadMainContent();
    UiController.#doLoadFooter();
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJFQUF3Qix5Q0FBeUMsU0FBUztBQUM5RSxJQUFJLDBFQUF1QixTQUFTLHNGQUFtQztBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX2tuaWdodHNfdHJhdmFpbHMvLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyLWJvYXJkLmpzIiwid2VicGFjazovL3RvcF9rbmlnaHRzX3RyYXZhaWxzLy4vc3JjL21vZHVsZXMvdmVydGV4LmpzIiwid2VicGFjazovL3RvcF9rbmlnaHRzX3RyYXZhaWxzLy4vc3JjL3V0aWxpdGllcy9idXR0b24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b3Bfa25pZ2h0c190cmF2YWlscy8uL3NyYy91dGlsaXRpZXMvZG9tLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX2tuaWdodHNfdHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX2tuaWdodHNfdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF9rbmlnaHRzX3RyYXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX2tuaWdodHNfdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3Bfa25pZ2h0c190cmF2YWlscy8uL3NyYy92aWV3L3VpLWNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZlcnRleCBmcm9tIFwiTW9kdWxlcy92ZXJ0ZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlckJvYXJkIHtcbiAgY29uc3RydWN0b3IoYm9hcmRTaXplKSB7XG4gICAgaWYgKGJvYXJkU2l6ZSAhPT0gOCkgdGhyb3cgbmV3ICdJbnZhbGlkIGlucHV0JztcbiAgICB0aGlzLmJvYXJkU2l6ZSA9IGJvYXJkU2l6ZTtcbiAgICB0aGlzLiNpbml0Qm9hcmQoKTtcbiAgICB0aGlzLiNpbml0Qm9hcmRMaW5rKCk7XG4gICAgY29uc3QgcGF0aHMgPSBbXTtcbiAgICB0aGlzLnNlYXJjaFBhdGhEZnMoe3g6IDAsIHk6IDB9LCB7eDogNywgeTogNH0sIHBhdGhzKTtcbiAgfVxuXG4gICNpbml0Qm9hcmQoKSB7XG4gICAgdGhpcy5tYXRyaXggPSBuZXcgQXJyYXkodGhpcy5ib2FyZFNpemUpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm1hdHJpeC5sZW5ndGg7ICsraSkge1xuICAgICAgdGhpcy5tYXRyaXhbaV0gPSBuZXcgQXJyYXkodGhpcy5ib2FyZFNpemUpO1xuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMubWF0cml4W2ldLmxlbmd0aDsgKytqKSB7XG4gICAgICAgIHRoaXMubWF0cml4W2ldW2pdID0gbmV3IFZlcnRleChpLCBqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjaW5pdEJvYXJkTGluaygpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXRyaXgubGVuZ3RoOyArK2kpIHtcbiAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aGlzLm1hdHJpeFtpXS5sZW5ndGg7ICsraikge1xuICAgICAgICBpZiAoKGkgLSAyID49IDApICYmIChqIC0gMSA+PSAwKSkgXG4gICAgICAgICAgdGhpcy5tYXRyaXhbaV1bal0uYWRkRWRnZSh0aGlzLm1hdHJpeFtpIC0gMl1baiAtIDFdKTtcbiAgICAgICAgaWYgKChpIC0gMiA+PSAwKSAmJiAoaiArIDEgPCB0aGlzLmJvYXJkU2l6ZSkpIFxuICAgICAgICAgIHRoaXMubWF0cml4W2ldW2pdLmFkZEVkZ2UodGhpcy5tYXRyaXhbaSAtIDJdW2ogKyAxXSk7XG4gICAgICAgIGlmICgoaSArIDIgPCB0aGlzLmJvYXJkU2l6ZSkgJiYgKGogLSAxID49IDApKSBcbiAgICAgICAgICB0aGlzLm1hdHJpeFtpXVtqXS5hZGRFZGdlKHRoaXMubWF0cml4W2kgKyAyXVtqIC0gMV0pO1xuICAgICAgICBpZiAoKGkgKyAyIDwgdGhpcy5ib2FyZFNpemUpICYmIChqICsgMSA8IHRoaXMuYm9hcmRTaXplKSkgXG4gICAgICAgICAgdGhpcy5tYXRyaXhbaV1bal0uYWRkRWRnZSh0aGlzLm1hdHJpeFtpICsgMl1baiArIDFdKTtcbiAgICAgICAgaWYgKChqIC0gMiA+PSAwKSAmJiAoaSAtIDEgPj0gMCkpIFxuICAgICAgICAgIHRoaXMubWF0cml4W2ldW2pdLmFkZEVkZ2UodGhpcy5tYXRyaXhbaSAtIDFdW2ogLSAyXSk7XG4gICAgICAgIGlmICgoaiAtIDIgPj0gMCkgJiYgKGkgKyAxIDwgdGhpcy5ib2FyZFNpemUpKSBcbiAgICAgICAgICB0aGlzLm1hdHJpeFtpXVtqXS5hZGRFZGdlKHRoaXMubWF0cml4W2kgKyAxXVtqIC0gMl0pO1xuICAgICAgICBpZiAoKGogKyAyIDwgdGhpcy5ib2FyZFNpemUpICYmIChpIC0gMSA+PSAwKSkgXG4gICAgICAgICAgdGhpcy5tYXRyaXhbaV1bal0uYWRkRWRnZSh0aGlzLm1hdHJpeFtpIC0gMV1baiArIDJdKTtcbiAgICAgICAgaWYgKChqICsgMiA8IHRoaXMuYm9hcmRTaXplKSAmJiAoaSArIDEgPCB0aGlzLmJvYXJkU2l6ZSkpIFxuICAgICAgICAgIHRoaXMubWF0cml4W2ldW2pdLmFkZEVkZ2UodGhpcy5tYXRyaXhbaSArIDFdW2ogKyAyXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI3ZhbGlkSW5wdXQocG9zaXRpb24pIHtcbiAgICByZXR1cm4gcG9zaXRpb24gJiYgKHBvc2l0aW9uLnggPj0gMCAmJiBwb3NpdGlvbi54IDwgdGhpcy5ib2FyZFNpemUpO1xuICB9XG5cbiAgc2VhcmNoUGF0aEJmcyhzb3VyY2UsIGRlc3RpbmF0aW9uLCBwYXRocyA9IFtdKSB7XG4gICAgaWYgKCF0aGlzLiN2YWxpZElucHV0KHNvdXJjZSkgfHwgIXRoaXMuI3ZhbGlkSW5wdXQoZGVzdGluYXRpb24pKSByZXR1cm47XG4gICAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5tYXRyaXhbc291cmNlLnhdW3NvdXJjZS55XTtcblxuICAgIGNvbnN0IHF1ZXVlID0gW1sgbm9kZSwgW10gXV07XG5cbiAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgWyBjdXJyZW50LCBbLi4ucGF0aF1dID0gcXVldWUuc2hpZnQoKTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gY3VycmVudC5nZXRQb3NpdGlvbjtcbiAgICAgIHBhdGgucHVzaChwb3NpdGlvbik7XG4gICAgICBcbiAgICAgIGlmIChkZXN0aW5hdGlvbi54ID09PSBwb3NpdGlvbi54ICYmIGRlc3RpbmF0aW9uLnkgPT09IHBvc2l0aW9uLnkpIHtcbiAgICAgICAgcGF0aC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIHBhdGhzLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICghdmlzaXRlZC5oYXMoY3VycmVudCkpIHtcbiAgICAgICAgcXVldWUucHVzaCguLi5jdXJyZW50LmdldFZlcnRleEVkZ2VzLm1hcChlZGdlID0+IFsgZWRnZSwgcGF0aCBdKSk7XG4gICAgICB9XG4gICAgICB2aXNpdGVkLmFkZChjdXJyZW50KTtcbiAgICB9ICAgIFxuICB9XG5cbiAgc2VhcmNoUGF0aERmcyhzb3VyY2UsIGRlc3RpbmF0aW9uLCBwYXRocyA9IFtdLCB2aXNpdGVkID0gbmV3IFNldCgpKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMubWF0cml4W3NvdXJjZS54XVtzb3VyY2UueV07XG4gICAgY29uc3QgZGVzdE5vZGUgPSB0aGlzLm1hdHJpeFtkZXN0aW5hdGlvbi54XVtkZXN0aW5hdGlvbi55XTtcbiAgICBpZiAodmlzaXRlZC5oYXMoZGVzdE5vZGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQWRkIG5vZGUgdG8gcGF0aFxuICAgIHBhdGhzLnB1c2gobm9kZS5nZXRQb3NpdGlvbik7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhub2RlKSkgdmlzaXRlZC5hZGQobm9kZSk7XG5cbiAgICBjb25zdCBlZGdlcyA9IG5vZGUuZ2V0VmVydGV4RWRnZXM7XG4gICAgY29uc3QgaWR4RmF0aGVyID0gcGF0aHMubGVuZ3RoIC0gMTtcblxuICAgIC8vIEl0ZXJhdGVzIG9uIGVkZ2VzIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmICh2aXNpdGVkLmhhcyhkZXN0Tm9kZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlZGdlID0gZWRnZXNbaV07XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGVkZ2UuZ2V0UG9zaXRpb247XG5cbiAgICAgIGlmIChkZXN0aW5hdGlvbi54ID09PSBwb3NpdGlvbi54ICYmIGRlc3RpbmF0aW9uLnkgPT09IHBvc2l0aW9uLnkpIHtcbiAgICAgICAgdmlzaXRlZC5hZGQoZWRnZSk7XG4gICAgICAgIHBhdGhzLnB1c2goZWRnZS5nZXRQb3NpdGlvbik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhlZGdlKSkge1xuICAgICAgICB2aXNpdGVkLmFkZChlZGdlKTtcbiAgICAgICAgdGhpcy5zZWFyY2hQYXRoRGZzKHBvc2l0aW9uLCBkZXN0aW5hdGlvbiwgcGF0aHMsIHZpc2l0ZWQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCF2aXNpdGVkLmhhcyhkZXN0Tm9kZSkpIHtcbiAgICAgICAgICAvLyBQb3Agb3RoZXIgcGF0aHNcbiAgICAgICAgICB3aGlsZSAoaWR4RmF0aGVyICsgMSAhPT0gcGF0aHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBwYXRocy5wb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKHhQb3NpdGlvbiwgeVBvc2l0aW9uKSB7XG4gICAgaWYgKE51bWJlci5pc05hTigreFBvc2l0aW9uKSAmJiBcbiAgICAgICAgTnVtYmVyLmlzTmFOKCt5UG9zaXRpb24pKSB0aHJvdyBuZXcgJ0ludmFsaWQgaW5wdXQnO1xuICAgIHRoaXMueFBvc2l0aW9uID0gK3hQb3NpdGlvbjtcbiAgICB0aGlzLnlQb3NpdGlvbiA9ICt5UG9zaXRpb247XG4gICAgdGhpcy5lZGdlcyA9IFtdO1xuICB9XG5cbiAgZ2V0IGdldFBvc2l0aW9uKCkgeyByZXR1cm4geyB4OiB0aGlzLnhQb3NpdGlvbiwgeTogdGhpcy55UG9zaXRpb24gfTsgfVxuXG4gIGdldCBnZXRWZXJ0ZXhFZGdlcygpIHsgcmV0dXJuIHRoaXMuZWRnZXM7IH1cblxuICBhZGRFZGdlKHZlcnRleCkge1xuICAgIC8vIENoZWNrIGZvciBpbnZhbGlkIHR5cGVcbiAgICBpZiAoISh2ZXJ0ZXggaW5zdGFuY2VvZiBWZXJ0ZXgpKSB0aHJvdyBuZXcgJ0ludmFsaWQgaW5wdXQnO1xuICAgIFxuICAgIC8vIEdldCB2ZXJ0ZXggcG9zaXRpb25cbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleC5nZXRQb3NpdGlvbjtcblxuICAgIC8vIENoZWNrIHZlcnRleCBhbHJlYWR5IGluIGxpbmtzXG4gICAgaWYgKHRoaXMuZWRnZXMuZXZlcnkodiA9PiB2LmdldFBvc2l0aW9uICE9PSB2ZXJ0ZXhQb3NpdGlvbikpIHtcbiAgICAgIC8vIEFkZCBuZXcgdmVydGV4XG4gICAgICB0aGlzLmVkZ2VzLnB1c2godmVydGV4KTtcbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgRG9tTWFuYWdlciBmcm9tICdVdGlsaXRpZXMvZG9tLW1hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25NYW5hZ2VyIHtcbiAgc3RhdGljIGNyZWF0ZUJ1dHRvbihidG5UZXh0ID0gJycsIHN2Z0ljb25GaWxlTmFtZSA9IG51bGwsIGNsYXNzTmFtZSA9IG51bGwsIGNiRXZlbnQgPSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBidG4gPSBEb21NYW5hZ2VyLmNyZWF0ZU5vZGVDbGFzcygnYnV0dG9uJywgY2xhc3NOYW1lIHx8ICduYXZCdXR0b24nKTtcbiAgICAvLyBJbnNlcnQgaWNvbiB3aGVuIGV4aXN0XG4gICAgaWYoc3ZnSWNvbkZpbGVOYW1lKSB7XG4gICAgICBEb21NYW5hZ2VyLmNyZWF0ZUFkZE5vZGVJbWcoc3ZnSWNvbkZpbGVOYW1lLCBidG5UZXh0LCBidG4sICdpY29uJyk7XG4gICAgfVxuICAgIC8vIEFkZCB0ZXh0IHdoZW4gY29udGFpbnMgc29tZXRoaW5nXG4gICAgaWYoYnRuVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICBEb21NYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ3AnLCBidG4sIG51bGwsIG51bGwsIGJ0blRleHQpO1xuICAgIH1cbiAgICAvLyBBZGQgYnV0dG9uIGV2ZW50XG4gICAgYnRuLm9uY2xpY2sgPSBjYkV2ZW50O1xuICAgIHJldHVybiBidG47ICBcbiAgfVxuXG4gIHN0YXRpYyBlZGl0QnV0dG9uVGV4dChidG4sIHRleHQgPSAnJykge1xuICAgIGNvbnN0IGJ0blRleHQgPSBidG4ucXVlcnlTZWxlY3RvcigncCcpO1xuICAgIGlmKGJ0blRleHQpIHtcbiAgICAgIC8qIFJlbW92ZSBvciBlZGl0IHRleHQgKi9cbiAgICAgIGlmKHRleHQgPT09ICcnKSB7XG4gICAgICAgIGJ0blRleHQucmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidG5UZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYodGV4dC5sZW5ndGggPiAwKSB7IC8qIENyZWF0ZSBub2RlICovXG4gICAgICBEb21NYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ3AnLCBidG4sIG51bGwsIG51bGwsIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBlZGl0QnV0dG9uSW1hZ2UoYnRuLCBzdmdJY29uRmlsZU5hbWUgPSBudWxsKSB7XG4gICAgY29uc3QgYnRuVGV4dCAgICA9IGJ0bi5xdWVyeVNlbGVjdG9yKCdwJyk7XG4gICAgY29uc3QgYnRuSW1nTm9kZSA9IGJ0bi5xdWVyeVNlbGVjdG9yKCcuaWNvbicpO1xuICAgIGlmKGJ0bkltZ05vZGUpIHtcbiAgICAgIGlmKCFzdmdJY29uRmlsZU5hbWUpIHtcbiAgICAgICAgYnRuSW1nTm9kZS5yZW1vdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIERvbU1hbmFnZXIudXBkYXRlTm9kZUltZyhzdmdJY29uRmlsZU5hbWUsIGJ0bkltZ05vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihzdmdJY29uRmlsZU5hbWUpIHsgLy8gSW5zZXJ0IGljb24gd2hlbiBleGlzdFxuICAgICAgY29uc3QgYWx0VGV4dCA9IGJ0blRleHQgPyBidG5UZXh0LnRleHRDb250ZW50IDogJyc7XG4gICAgICBEb21NYW5hZ2VyLmNyZWF0ZUFkZE5vZGVJbWcoc3ZnSWNvbkZpbGVOYW1lLCBhbHRUZXh0LCBidG4sICdpY29uJyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUltYWdlQnV0dG9uKHN2Z0ljb25GaWxlTmFtZSwgY2xhc3NOYW1lID0gbnVsbCwgY2JFdmVudCA9IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBCdXR0b25NYW5hZ2VyLmNyZWF0ZUJ1dHRvbignJywgc3ZnSWNvbkZpbGVOYW1lLCBjbGFzc05hbWUsIGNiRXZlbnQpXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlVGV4dEJ1dHRvbihidG5UZXh0LCBjbGFzc05hbWUgPSBudWxsLCBjYkV2ZW50ID0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIEJ1dHRvbk1hbmFnZXIuY3JlYXRlQnV0dG9uKGJ0blRleHQsIG51bGwsIGNsYXNzTmFtZSwgY2JFdmVudClcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVJbWFnZUxpbmtCdXR0b24obGluaywgc3ZnSWNvbkZpbGVOYW1lKSB7XG4gICAgY29uc3Qgbm9kZSA9IERvbU1hbmFnZXIuY3JlYXRlTm9kZUxpbmsobGluaywgbnVsbCwgbnVsbCwgbnVsbCwgXG4gICAgICBEb21NYW5hZ2VyLmNyZWF0ZU5vZGVJbWcoc3ZnSWNvbkZpbGVOYW1lLCAnaW1hZ2VMaW5rJywgJ2ljb24tbGluaycpXG4gICAgKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuIiwiXG5jb25zdCBpbWFnZVBhdGggPSAnLi9pbWFnZXMvJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tTWFuYWdlciB7XG4gIC8vIFJldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIERPTSBlbGVtZW50XG4gIHN0YXRpYyAjaXNFbGVtZW50KG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgdHlwZW9mIEhUTUxFbGVtZW50ID09PSBcIm9iamVjdFwiID8gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IDogLy8gRE9NMlxuICAgICAgbyAmJiB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJiBvICE9PSBudWxsICYmIG8ubm9kZVR5cGUgPT09IDEgJiYgdHlwZW9mIG8ubm9kZU5hbWU9PT1cInN0cmluZ1wiXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIC8vIEFkZCBjbGFzcyBuYW1lIG9yIElEXG4gICAgaWYoY2xhc3NOYW1lKSBlbGVtLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBpZihpZCkgZWxlbS5pZCA9IGlkO1xuICAgIC8vIEFkZCB0ZXh0IGNvbnRlbnRcbiAgICBpZihjb250ZW50KSBlbGVtLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAvLyBFdmVudHVhbGx5IGFkZCBjaGlsZCBvciBjaGlsZHJlblxuICAgIERvbU1hbmFnZXIuYWRkTm9kZUNoaWxkKGVsZW0sIGNoaWxkcmVuKTtcbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVOb2RlQ29udGVudCh0eXBlLCBjb250ZW50LCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwpIHtcbiAgICByZXR1cm4gRG9tTWFuYWdlci5jcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIG51bGwpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5vZGVDbGFzcyh0eXBlLCBjbGFzc05hbWUsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwpIHtcbiAgICByZXR1cm4gRG9tTWFuYWdlci5jcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIG51bGwpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5vZGVJRCh0eXBlLCBpZCwgY2xhc3NOYW1lID0gbnVsbCwgY29udGVudCA9IG51bGwpIHtcbiAgICByZXR1cm4gRG9tTWFuYWdlci5jcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIG51bGwpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsLCBsb2NhbCA9IHRydWUpIHtcbiAgICBjb25zdCBmaWxlRnVsbFBhdGggPSBsb2NhbCA/IGltYWdlUGF0aCArIGltZ0ZpbGVOYW1lIDogaW1nRmlsZU5hbWU7IC8vIGxvY2FsIHBhdGggb3IgdXJsXG4gICAgY29uc3Qgbm9kZSA9IERvbU1hbmFnZXIuY3JlYXRlTm9kZSgnaW1nJywgY2xhc3NOYW1lLCBpZCwgbnVsbCwgbnVsbCk7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZpbGVGdWxsUGF0aCk7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGFsdCk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTm9kZUltZ0NsYXNzKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQgPSBudWxsLCBsb2NhbCA9IHRydWUpIHtcbiAgICByZXR1cm4gRG9tTWFuYWdlci5jcmVhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQsIGxvY2FsKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVOb2RlSW1nSUQoaW1nRmlsZU5hbWUsIGFsdCwgaWQsIGNsYXNzTmFtZSA9IG51bGwsIGxvY2FsID0gdHJ1ZSkge1xuICAgIHJldHVybiBEb21NYW5hZ2VyLmNyZWF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lLCBpZCwgbG9jYWwpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5vZGVMaW5rKGxpbmssIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCkge1xuICAgIGNvbnN0IG5vZGUgPSBEb21NYW5hZ2VyLmNyZWF0ZU5vZGUoJ2EnLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBjaGlsZHJlbik7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBsaW5rKTtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGFkZE5vZGVDaGlsZChmYXRoZXIsIGNoaWxkcmVuKSB7XG4gICAgaWYoY2hpbGRyZW4pIHtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7IC8vIENvbnRhaW5zIG1vcmUgdGhhbiBvbmUgY2hpbGQgaW4gQXJyYXlcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgZmF0aGVyLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYoRG9tTWFuYWdlci4jaXNFbGVtZW50KGNoaWxkcmVuKSkgeyAvLyBDb250YWlucyBqdXN0IG9uZSBjaGlsZFxuICAgICAgICBmYXRoZXIuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVBZGROb2RlKHR5cGUsIGZhdGhlciwgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsLCBjb250ZW50ID0gbnVsbCwgY2hpbGRyZW4gPSBudWxsKSB7XG4gICAgLy8gQXBwZW5kIHRoZSBuZXcgbm9kZSBpbiBmYXRoZXJcbiAgICBjb25zdCBub2RlID0gRG9tTWFuYWdlci5jcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIGNoaWxkcmVuKTtcbiAgICBmYXRoZXIuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQWRkTm9kZUltZyhpbWdGaWxlTmFtZSwgYWx0LCBmYXRoZXIsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCwgbG9jYWwgPSB0cnVlKSB7XG4gICAgLy8gQXBwZW5kIHRoZSBuZXcgbm9kZSBpbiBmYXRoZXJcbiAgICBjb25zdCBub2RlID0gRG9tTWFuYWdlci5jcmVhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQsIGxvY2FsKTtcbiAgICBmYXRoZXIuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlTm9kZUltZ0J5U2VsZWN0b3IoaW1nRmlsZU5hbWUsIGZhdGhlciwgc2VsZWN0b3IsIGxvY2FsID0gdHJ1ZSkge1xuICAgIGNvbnN0IGltZ05vZGUgPSBmYXRoZXIucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29uc3QgdXJsID0gbG9jYWwgPyBpbWFnZVBhdGggKyBpbWdGaWxlTmFtZSA6IGltZ0ZpbGVOYW1lO1xuICAgIGlmKGltZ05vZGUpIGltZ05vZGUuc2V0QXR0cmlidXRlKCdzcmMnLCB1cmwpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGltZ05vZGUsIGxvY2FsID0gdHJ1ZSkge1xuICAgIGNvbnN0IHVybCA9IGxvY2FsID8gaW1hZ2VQYXRoICsgaW1nRmlsZU5hbWUgOiBpbWdGaWxlTmFtZTtcbiAgICBpZihpbWdOb2RlKSBpbWdOb2RlLnNldEF0dHJpYnV0ZSgnc3JjJywgdXJsKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaXNOb2RlSGlkZShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnO1xuICB9XG5cbiAgc3RhdGljIHRvZ2dsZURpc3BsYXlCeU5vZGUobm9kZSwgbmV4dERpc3BsYXkgPSB1bmRlZmluZWQpIHtcbiAgICBpZihub2RlKSB7XG4gICAgICBpZihub2RlLmRhdGFzZXQucHJldkRpc3BsYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2RlLmRhdGFzZXQucHJldkRpc3BsYXkgPSBuZXh0RGlzcGxheSB8fCBub2RlLnN0eWxlLmRpc3BsYXk7XG4gICAgICB9XG4gICAgICBjb25zdCBwcmV2RGlzcGxheSA9IG5vZGUuc3R5bGUuZGlzcGxheTtcbiAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9IChub2RlLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykgPyAnbm9uZScgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBub2RlLmRhdGFzZXQucHJldkRpc3BsYXk7XG4gICAgICBub2RlLmRhdGFzZXQucHJldkRpc3BsYXkgPSBwcmV2RGlzcGxheTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdG9nZ2xlRGlzcGxheShub2RlTmFtZSwgbmV4dERpc3BsYXkgPSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihub2RlTmFtZSk7XG4gICAgRG9tTWFuYWdlci50b2dnbGVEaXNwbGF5QnlOb2RlKG5vZGUsIG5leHREaXNwbGF5KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmltcG9ydCAnU3ZnL2hvbWUtb3V0bGluZS5zdmcnO1xuaW1wb3J0ICdTdmcvZ2l0aHViLnN2Zyc7XG5pbXBvcnQgJ1N2Zy9kYXJrLXRoZW1lLnN2Zyc7XG5pbXBvcnQgJ1N2Zy9saWdodC10aGVtZS5zdmcnO1xuaW1wb3J0ICdTdmcvY2hlc3Mta25pZ2h0LnN2Zyc7XG5pbXBvcnQgRG9tTWFuYWdlciBmcm9tICdVdGlsaXRpZXMvZG9tLW1hbmFnZXInO1xuaW1wb3J0IEJ1dHRvbk1hbmFnZXIgZnJvbSAnVXRpbGl0aWVzL2J1dHRvbi1tYW5hZ2VyJztcbmltcG9ydCBDb250cm9sbGVyQm9hcmQgZnJvbSAnQ29udHJvbGxlci9jb250cm9sbGVyLWJvYXJkJztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHsgdGhlbWU6ICdkYXJrJyB9O1xuXG5jb25zdCBib2FyZFNpemUgPSA4O1xuY29uc3QgcGhhc2VzID0ge1xuICBwaGFzZVJlc3Q6ICAgICAwLFxuICBwaGFzZVNldERzdDogICAxLFxuICBwaGFzZUNvbXBsZXRlOiAyXG59O1xuXG5jb25zdCBncmFwaEZpcnN0U2VhcmNoID0ge1xuICBkZnM6ICdEZXB0aC1maXJzdCBzZWFyY2gnLFxuICBiZnM6ICdCcmVhZHRoLWZpcnN0IHNlYXJjaCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVpQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29udHJvbGxlckJvYXJkID0gbmV3IENvbnRyb2xsZXJCb2FyZChib2FyZFNpemUpO1xuICAgIHRoaXMuc3JjUG9zaXRpb24gPSB7XG4gICAgICB4OiAtMSxcbiAgICAgIHk6IC0xXG4gICAgfTtcbiAgICB0aGlzLmRzdFBvc2l0aW9uID0ge1xuICAgICAgeDogLTEsXG4gICAgICB5OiAtMVxuICAgIH07XG4gICAgdGhpcy5zdGVwUGhhc2UgPSBwaGFzZXMucGhhc2VSZXN0O1xuICAgIHRoaXMuYnRuUmFuZG9tS25pZ2h0ID0gbnVsbDtcbiAgICB0aGlzLmFsZ29yaXRobSA9IGdyYXBoRmlyc3RTZWFyY2guYmZzO1xuICAgIHRoaXMudXBkYXRlQ2hlc3NCb2FyZFRpbWVyID0gLTE7XG4gIH1cblxuICAjc3RvcFVwZGF0ZUNoZXNzKCkge1xuICAgIGlmICh0aGlzLnVwZGF0ZUNoZXNzQm9hcmRUaW1lciAhPT0gLTEpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy51cGRhdGVDaGVzc0JvYXJkVGltZXIpO1xuICAgICAgdGhpcy51cGRhdGVDaGVzc0JvYXJkVGltZXIgPSAtMTtcbiAgICB9XG4gIH1cblxuICAjY2xlYW5VcEJvYXJkKCkge1xuICAgIHRoaXMuI3N0b3BVcGRhdGVDaGVzcygpO1xuICAgIHRoaXMuc3RlcFBoYXNlID0gcGhhc2VzLnBoYXNlUmVzdDtcbiAgICB0aGlzLiNzZXRQb3NpdGlvbigpO1xuICAgIHRoaXMuYnRuUmFuZG9tS25pZ2h0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy4jZG9DcmVhdGVIb21lKCk7XG4gIH1cblxuICAjZG9Mb2FkSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICBcbiAgICBEb21NYW5hZ2VyLmFkZE5vZGVDaGlsZChoZWFkZXIsIEJ1dHRvbk1hbmFnZXIuY3JlYXRlSW1hZ2VCdXR0b24oJ2hvbWUtb3V0bGluZS5zdmcnLCAnaGVhZGVyLWJ1dHRvbicsICgpID0+IHRoaXMuI2NsZWFuVXBCb2FyZCgpKSk7XG4gICAgXG4gICAgdGhpcy5idG5SYW5kb21LbmlnaHQgPSBCdXR0b25NYW5hZ2VyLmNyZWF0ZVRleHRCdXR0b24oJ3JhbmRvbSBrbmlnaHQnLCAnaGVhZGVyLWJhci1idXR0b24nLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGVwUGhhc2UgPT09IHBoYXNlcy5waGFzZUNvbXBsZXRlKSB7XG4gICAgICAgIHRoaXMuI2NsZWFuVXBCb2FyZCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zdGVwUGhhc2UgPT09IHBoYXNlcy5waGFzZVJlc3QpIHtcbiAgICAgICAgY29uc3QgZ2V0UmFuZG9tUG9zaXRpb24gPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgICBjb25zdCBybmRQb3NpdGlvbiA9IHtcbiAgICAgICAgICB4OiBnZXRSYW5kb21Qb3NpdGlvbigpLFxuICAgICAgICAgIHk6IGdldFJhbmRvbVBvc2l0aW9uKClcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy4jc2V0UG9zaXRpb24ocm5kUG9zaXRpb24ueCwgcm5kUG9zaXRpb24ueSk7XG4gICAgICAgIFVpQ29udHJvbGxlci4jc2V0S25pZ2h0KHJuZFBvc2l0aW9uLngsIHJuZFBvc2l0aW9uLnkpO1xuICAgICAgICB0aGlzLmJ0blJhbmRvbUtuaWdodC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RlcFBoYXNlID0gcGhhc2VzLnBoYXNlU2V0RHN0O1xuICAgICAgfVxuICAgIH0pO1xuICAgIERvbU1hbmFnZXIuYWRkTm9kZUNoaWxkKGhlYWRlciwgdGhpcy5idG5SYW5kb21LbmlnaHQpO1xuXG4gICAgY29uc3QgYnRuID0gQnV0dG9uTWFuYWdlci5jcmVhdGVUZXh0QnV0dG9uKHRoaXMuYWxnb3JpdGhtLCAnaGVhZGVyLWJhci1idXR0b24nLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5hbGdvcml0aG0gPT09IGdyYXBoRmlyc3RTZWFyY2guYmZzKSB0aGlzLmFsZ29yaXRobSA9IGdyYXBoRmlyc3RTZWFyY2guZGZzO1xuICAgICAgZWxzZSB0aGlzLmFsZ29yaXRobSA9IGdyYXBoRmlyc3RTZWFyY2guYmZzO1xuXG4gICAgICBCdXR0b25NYW5hZ2VyLmVkaXRCdXR0b25UZXh0KGJ0biwgdGhpcy5hbGdvcml0aG0pO1xuICAgIH0pO1xuXG4gICAgRG9tTWFuYWdlci5hZGROb2RlQ2hpbGQoaGVhZGVyLCBidG4pO1xuXG4gICAgY29uc3QgYnRuVG9nZ2xlVGhlbWUgPSBCdXR0b25NYW5hZ2VyLmNyZWF0ZUltYWdlQnV0dG9uKGAke3NldHRpbmdzLnRoZW1lfS10aGVtZS5zdmdgLCAnaGVhZGVyLWJ1dHRvbicsICgpID0+IHtcbiAgICAgIHNldHRpbmdzLnRoZW1lID0gKHNldHRpbmdzLnRoZW1lICE9PSAnZGFyaycgPyAnZGFyaycgOiAnbGlnaHQnKTtcbiAgICAgIEJ1dHRvbk1hbmFnZXIuZWRpdEJ1dHRvbkltYWdlKGJ0blRvZ2dsZVRoZW1lLCBgJHtzZXR0aW5ncy50aGVtZX0tdGhlbWUuc3ZnYCk7XG4gICAgICByb290LmNsYXNzTmFtZSA9IHNldHRpbmdzLnRoZW1lO1xuICAgIH0pO1xuXG4gICAgRG9tTWFuYWdlci5hZGROb2RlQ2hpbGQoaGVhZGVyLCBidG5Ub2dnbGVUaGVtZSk7XG4gIH1cblxuICAjZG9DcmVhdGVIb21lKCkge1xuICAgIERvbU1hbmFnZXIucmVtb3ZlQWxsQ2hpbGROb2RlcyhtYWluKTtcbiAgICBjb25zdCBkaXZXcmFwcGVyID0gRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdkaXYnLCBtYWluLCAnd3JhcHBlcicpO1xuICAgIERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZGl2V3JhcHBlciwgJ3RvcC1sZWZ0LWhlYWRlcicpO1xuICAgIGNvbnN0IGRpdlRvcCA9IERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZGl2V3JhcHBlciwgJ3RvcC1oZWFkZXInKTtcbiAgICBjb25zdCBkaXZUb3BXcmFwcGVyID0gRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdkaXYnLCBkaXZUb3AsICd3cmFwcGVyLWNvbHVtbi1pbm5lcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRTaXplOyArK2kpIHtcbiAgICAgIERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZGl2VG9wV3JhcHBlciwgJ2JveC1pbm5lcicsIG51bGwsIFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKSk7XG4gICAgfVxuICAgIERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZGl2V3JhcHBlciwgJ3RvcC1yaWdodC1oZWFkZXInKTtcbiAgICBjb25zdCBkaXZMZWZ0ID0gRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdkaXYnLCBkaXZXcmFwcGVyLCAnbGVmdC1oZWFkZXInKTtcbiAgICBjb25zdCBkaXZMZWZ0V3JhcHBlciA9IERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZGl2TGVmdCwgJ3dyYXBwZXItcm93LWlubmVyJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZFNpemU7ICsraSkge1xuICAgICAgRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdkaXYnLCBkaXZMZWZ0V3JhcHBlciwgJ2JveC1pbm5lcicsIG51bGwsIDEgKyBpKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZFNpemU7ICsraSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFNpemU7ICsraikge1xuICAgICAgICBjb25zdCBncmlkID0gQnV0dG9uTWFuYWdlci5jcmVhdGVCdXR0b24oJycsIG51bGwsICdib3gnLCAoZSkgPT4gdGhpcy4jb25DZWxsQ2xpY2soZSkpO1xuICAgICAgICBncmlkLmRhdGFzZXQueCA9IGk7XG4gICAgICAgIGdyaWQuZGF0YXNldC55ID0gajtcbiAgICAgICAgRG9tTWFuYWdlci5hZGROb2RlQ2hpbGQoZGl2V3JhcHBlciwgZ3JpZCk7XG4gICAgICB9XG4gICAgfVxuICAgIERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZGl2V3JhcHBlciwgJ2JvdHRvbS1sZWZ0LWhlYWRlcicpO1xuICAgIGNvbnN0IGRpdkJvdHRvbSA9IERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZGl2V3JhcHBlciwgJ2JvdHRvbS1oZWFkZXInKTtcbiAgICBjb25zdCBkaXZCb3R0b21XcmFwcGVyID0gRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdkaXYnLCBkaXZCb3R0b20sICd3cmFwcGVyLWNvbHVtbi1pbm5lcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRTaXplOyArK2kpIHtcbiAgICAgIERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZGl2Qm90dG9tV3JhcHBlciwgJ2JveC1pbm5lcicsIG51bGwsIFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKSk7XG4gICAgfVxuICAgIERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZGl2V3JhcHBlciwgJ2JvdHRvbS1yaWdodC1oZWFkZXInKTtcbiAgICBjb25zdCBkaXZSaWdodCA9IERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZGl2V3JhcHBlciwgJ3JpZ2h0LWhlYWRlcicpO1xuICAgIGNvbnN0IGRpdlJpZ2h0V3JhcHBlciA9IERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZGl2UmlnaHQsICd3cmFwcGVyLXJvdy1pbm5lcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRTaXplOyArK2kpIHtcbiAgICAgIERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZGl2UmlnaHRXcmFwcGVyLCAnYm94LWlubmVyJywgbnVsbCwgMSArIGkpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyAjc2V0S25pZ2h0KHgsIHkpIHtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKCt4KSB8fCBOdW1iZXIuaXNOYU4oK3kpKSByZXR1cm47XG4gICAgaWYgKCh4ID4gYm9hcmRTaXplKSB8fCAoeSA+IGJvYXJkU2l6ZSkpIHJldHVybjtcbiAgICBjb25zdCB0YXJnZXQgPSBtYWluLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JyR7eH0nXVtkYXRhLXk9JyR7eX0nXWApO1xuICAgIEJ1dHRvbk1hbmFnZXIuZWRpdEJ1dHRvbkltYWdlKHRhcmdldCwgJ2NoZXNzLWtuaWdodC5zdmcnKTtcbiAgfVxuXG4gIHN0YXRpYyAjc2V0TW92ZVN0ZXAoeCwgeSwgc3RlcCkge1xuICAgIGlmIChOdW1iZXIuaXNOYU4oK3gpIHx8IE51bWJlci5pc05hTigreSkpIHJldHVybjtcbiAgICBpZiAoKHggPiBib2FyZFNpemUpIHx8ICh5ID4gYm9hcmRTaXplKSkgcmV0dXJuO1xuICAgIGNvbnN0IHRhcmdldCA9IG1haW4ucXVlcnlTZWxlY3RvcihgW2RhdGEteD0nJHt4fSddW2RhdGEteT0nJHt5fSddYCk7XG4gICAgQnV0dG9uTWFuYWdlci5lZGl0QnV0dG9uVGV4dCh0YXJnZXQsIHN0ZXAudG9TdHJpbmcoMTApKTtcbiAgICBCdXR0b25NYW5hZ2VyLmVkaXRCdXR0b25JbWFnZSh0YXJnZXQpO1xuICB9XG5cbiAgI3NldFBvc2l0aW9uKHggPSAtMSwgeSA9IC0xLCBpc0RzdCA9IGZhbHNlKSB7XG4gICAgaWYgKE51bWJlci5pc05hTigreCkgfHwgTnVtYmVyLmlzTmFOKCt5KSkgcmV0dXJuO1xuICAgIGlmICgoeCA+IGJvYXJkU2l6ZSkgfHwgKHkgPiBib2FyZFNpemUpKSByZXR1cm47XG5cbiAgICAvLyBSZXNldFxuICAgIGlmICgoeCA8IDApIHx8ICh5IDwgMCkpIHtcbiAgICAgIHRoaXMuc3JjUG9zaXRpb24ueCA9IC0xO1xuICAgICAgdGhpcy5zcmNQb3NpdGlvbi55ID0gLTE7XG4gICAgICB0aGlzLmRzdFBvc2l0aW9uLnggPSAtMTtcbiAgICAgIHRoaXMuZHN0UG9zaXRpb24ueSA9IC0xO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghaXNEc3QpIHtcbiAgICAgIHRoaXMuc3JjUG9zaXRpb24ueCA9ICt4O1xuICAgICAgdGhpcy5zcmNQb3NpdGlvbi55ID0gK3k7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHN0UG9zaXRpb24ueCA9ICt4O1xuICAgICAgdGhpcy5kc3RQb3NpdGlvbi55ID0gK3k7XG4gICAgfVxuICB9XG4gIFxuICAjb25DZWxsQ2xpY2soZSkge1xuICAgIGNvbnN0IHBhdGhzID0gW107XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGU7XG4gICAgaWYgKHRoaXMudXBkYXRlQ2hlc3NCb2FyZFRpbWVyICE9PSAtMSkgcmV0dXJuO1xuICAgIGNvbnN0IGRhdGFzZXQgPSAodGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdidXR0b24nKSA/IHRhcmdldC5kYXRhc2V0XG4gICAgICA6IHRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQ7XG4gICAgY29uc3QgeCA9ICtkYXRhc2V0Lng7XG4gICAgY29uc3QgeSA9ICtkYXRhc2V0Lnk7XG4gICAgaWYgKHRoaXMuc3RlcFBoYXNlID09PSBwaGFzZXMucGhhc2VDb21wbGV0ZSkge1xuICAgICAgdGhpcy4jY2xlYW5VcEJvYXJkKCk7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLnN0ZXBQaGFzZSkge1xuICAgICAgY2FzZSBwaGFzZXMucGhhc2VSZXN0OlxuICAgICAgICB0aGlzLiNzZXRQb3NpdGlvbih4LCB5KTtcbiAgICAgICAgVWlDb250cm9sbGVyLiNzZXRLbmlnaHQoeCwgeSk7XG4gICAgICAgIHRoaXMuYnRuUmFuZG9tS25pZ2h0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGVwUGhhc2UgPSBwaGFzZXMucGhhc2VTZXREc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBwaGFzZXMucGhhc2VTZXREc3Q6XG4gICAgICAgIHRoaXMuI3NldFBvc2l0aW9uKHgsIHksIHRydWUpO1xuXG4gICAgICAgIGlmICh0aGlzLmFsZ29yaXRobSA9PT0gZ3JhcGhGaXJzdFNlYXJjaC5iZnMpXG4gICAgICAgICAgdGhpcy5jb250cm9sbGVyQm9hcmQuc2VhcmNoUGF0aEJmcyh0aGlzLnNyY1Bvc2l0aW9uLCB0aGlzLmRzdFBvc2l0aW9uLCBwYXRocyk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJCb2FyZC5zZWFyY2hQYXRoRGZzKHRoaXMuc3JjUG9zaXRpb24sIHRoaXMuZHN0UG9zaXRpb24sIHBhdGhzKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChwYXRocy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgICAgdGhpcy51cGRhdGVDaGVzc0JvYXJkVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGVwID0gcGF0aHNbaXRlcmF0b3JdO1xuICAgICAgICAgICAgY29uc3Qga25pZ2h0U3RlcCA9IHBhdGhzW2l0ZXJhdG9yICsgMV07XG4gICAgICAgICAgICBVaUNvbnRyb2xsZXIuI3NldE1vdmVTdGVwKHN0ZXAueCwgc3RlcC55LCBpdGVyYXRvciArIDEpO1xuICAgICAgICAgICAgVWlDb250cm9sbGVyLiNzZXRLbmlnaHQoa25pZ2h0U3RlcC54LCBrbmlnaHRTdGVwLnkpO1xuICAgICAgICAgICAgaXRlcmF0b3IrKztcbiAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gcGF0aHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICB0aGlzLiNzdG9wVXBkYXRlQ2hlc3MoKTtcbiAgICAgICAgICAgICAgdGhpcy5zdGVwUGhhc2UgPSBwaGFzZXMucGhhc2VDb21wbGV0ZTtcbiAgICAgICAgICAgICAgdGhpcy5idG5SYW5kb21LbmlnaHQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAjZG9Mb2FkTWFpbkNvbnRlbnQoKSB7XG4gICAgdGhpcy4jZG9DcmVhdGVIb21lKCk7XG4gIH1cblxuICBzdGF0aWMgI2RvTG9hZEZvb3RlcigpIHtcbiAgICBjb25zdCBjdXJZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpXG4gICAgRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdwJywgZm9vdGVyLCBudWxsLCBudWxsLCBgQ29weXJpZ2h0IMKpICR7Y3VyWWVhcn0gQWxlc3NhbmRybyBDZWxvdHRpYCk7XG4gICAgRG9tTWFuYWdlci5hZGROb2RlQ2hpbGQoZm9vdGVyLCBCdXR0b25NYW5hZ2VyLmNyZWF0ZUltYWdlTGlua0J1dHRvbignaHR0cHM6Ly9naXRodWIuY29tL2NlbDgnLCAnZ2l0aHViLnN2ZycpKTtcbiAgfVxuXG4gIGRvTG9hZFVJKCkge1xuICAgIC8vIFNldCBtYWluIHJvb3QgdGhlbWVcbiAgICByb290LmNsYXNzTmFtZSA9IHNldHRpbmdzLnRoZW1lO1xuICAgIHRoaXMuI2RvTG9hZEhlYWRlcigpO1xuICAgIHRoaXMuI2RvTG9hZE1haW5Db250ZW50KCk7XG4gICAgVWlDb250cm9sbGVyLiNkb0xvYWRGb290ZXIoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9