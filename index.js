/**
 * Created by mapbar_front on 2018/10/19
 */
module.exports = (function() {
    const elList = [];
    let timer = 0;
    function bind(el, next) {
        let obj = {
            el,
            callback: next,
            style: {
                width: getStyle(el, 'width'),
                height: getStyle(el, 'height'),
            }
        }
        elList.push(obj);
    }
    function remove(el) {
        elList.splice(elList.indexOf(el))
        if (elList.indexOf(el) !== -1) {
            elList.splice(elList.indexOf(el), 1);
        }
    }
    timer = setInterval(() => {
        for (let i = 0; i < elList.length; i++) {
            let dom = elList[i].el
            const style = {
                width: getStyle(dom, 'width'),
                height: getStyle(dom, 'height'),
            }
            if (!isEqul(style, elList[i].style)) {
                elList[i].style = {
                    width: style.width,
                    height: style.height,
                }
                elList[i].callback && elList[i].callback();
            }
        }
    }, 200)
    function getStyle(ele,attr){
        if(window.getComputedStyle){
            return window.getComputedStyle(ele,null)[attr];
        }
        return ele.currentStyle[attr];
    }
    function isEqul(obj1, obj2) {
        let isEqul = true;
        for (var i in obj1) {
            if (obj1[i] !== obj2[i]) {
                isEqul = false;
            }
        }
        return isEqul;
    }
    return {
        bind,
        remove,
    }
})();


