/*
 * @Descripttion: 
 * @version: 
 * @Author: 痞子贤
 * @Date: 2020-11-04 15:58:29
 * @LastEditTime: 2020-11-05 10:52:17
 */
let obj = {
    setRem() {
        // console.log(111)
        // 设计稿宽度和设备宽度
        var uiW = 320,
            winW = document.documentElement.clientWidth,
            // 定义比例
            rate = winW / uiW;
        document.documentElement.style.fontSize = rate * 100 + "px";
        
    },
    // 另外一些公共方法
}
export {
    obj
}