function Touchview(selector) {
    var box = document.querySelector(selector);
    gesture(box,{
        start:function (e) {
            //获取当前状态下的元素显示比例
            this.originScale = transformCSS(box,'scale');

            //获取元素当前的旋转角度
            this.rotate = transformCSS(box,'rotate');

            this.x = e.targetTouches[0].clientX;
            this.y = e.targetTouches[0].clientY;
            this.left=transformCSS(box,'translateX');
            this.top=transformCSS(box,'translateY');
        },
        change:function (e) {
            //设置显示比例
            transformCSS(box,'scale',e.scale*this.originScale);
            //设置旋转角度
            transformCSS(box,'rotate',e.rotation+this.rotate);

            this._x = e.targetTouches[0].clientX;
            this._y = e.targetTouches[0].clientY;
            var translateX = this._x-this.x+this.left;
            var translateY = this._y-this.y+this.top;

            //计算transfrom-origin的位置
            var x  = translateX + box.offsetWidth/2;
            var y = translateY + box.offsetHeight/2;
            box.style.transformOrigin=x +'px '+ y +'px';


            transformCSS(box,'translateX',translateX);
            transformCSS(box,'translateY',translateY);



        },
        end:function () {

        }

    });
}