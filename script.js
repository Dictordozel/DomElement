document.addEventListener('DOMContentLoaded', function() {

    'use strict';
    
    let selectorElem = prompt('Селектор:', ''),
    heightElem = prompt('Высота элемента:', ''),
    widthElem = prompt('Ширина элемента:', ''),
    bgElem = prompt('Цвет элемента:', ''),
    fontSizeElem = prompt('Размер шрифта (px):', ''),
    textElem = prompt('Текст:', '');
    
    function DomElement(selector, height, width, bg, fontSize, text) {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.text = text;
    }
    
    DomElement.prototype.addElement = function() {
        
    let element;
    
    if(this.selector[0] === '.') {
    element = document.createElement('div');
    element.className = this.selector.slice(1, this.selector.length);
    
    } else if(this.selector[0] === '#') {
    element = document.createElement('p');
    element.id = this.selector.slice(1, this.selector.length);
    }
    document.body.appendChild(element);
    element.innerHTML = this.text;
    element.style.cssText = `height: ${this.height}px;
    width: ${this.width}px; background-color: ${this.bg};
    font-size: ${this.fontSize}px; padding: 10px`;
    
    };
    
    let newDiv = new DomElement(selectorElem, heightElem, widthElem, bgElem, fontSizeElem, textElem);
    
    newDiv.addElement();
    
    });