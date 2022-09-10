/**
 * The Dom Class provides shorted API for the document model that is available in the windows object.
 */
class Dom{
    /**
     * Returns a new DOM object. Add this to the window using `window.dom = new Dom()`;
     */
    constructor(){
    }

    /**
     * Gets a single element
     * @param {string} selector css selector
     */
    get(selector){
        return document.querySelector(selector);
    }

    /**
     * Gets all the elements
     * @param {string} selector css selector
     * @returns 
     */
    all(selector){
        return document.querySelectorAll(selector);
    }

    /**
     * Gets the first element from the selected node list
     * @param {string} selector css selector
     */
    first(selector){
        let list = this.all(selector);
        return list.length == 0 ? null : list[0]
    }

    /**
     * Gets the last element from the select node list
     * @param {string} selector css selector
     */
    last(selector){
        let list = this.all(selector);
        return list.length == 0 ? null : list[list.length - 1];
    }

    /**
     * Get element at a position
     * @param {string} selector css selector
     * @param {int} position 
     * @returns 
     */
    at(selector, position){
        let list = this.all(selector);
        return list.length == 0 ? null : list[position];
    }

    /**
     * Creates an HTML element
     * @param {string} elementType 
     * @returns 
     */
    element(elementType){
        return document.createElement(elementType);
    }

}