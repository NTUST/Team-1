/**
 * Created by kalan on 2015/5/25.
 */
window.onload = function(){
    var isOpen = false;

    function flutterChar() {
        if(isOpen){
            return;
        }
        isOpen = true;

        var allIcon, maxSnowflake, maxleft, maxTop, i, snowflake, snowflakeColor, s, createChar, moveChar;
        allIcon = [];
        maxSnowflake = 90;
        maxleft = (document.body.clientWidth || document.documentElement.clientWidth) - 100;
        maxTop = -1;
        i = 0;
        snowflake = [
            '●',
            '○'
        ];
        snowflakeColor = [
            '#efefef',
            '#eaeaea'
        ];
        s = 0;
        createChar = function () {
            var d = document.createElement("div");
            s++;
            s = s > 5 ? 0 : s;
            d.innerHTML = snowflake[s];
            d.style.left = Math.round(Math.random() * maxleft) + "px";
            d.style.top = (-1 * Math.round(Math.random() * 100)) + "px";
            d.style.position = "absolute";
            d.style.zIndex = "999";
            d.style.color = snowflakeColor[s];
            d.setAttribute("data-v", Math.round(Math.random() * 5 + 2));
            d.setAttribute("data-time", "0");
            document.body.appendChild(d);
            return d;
        };
        moveChar = function (e) {
            maxTop = document.body.scrollHeight - 50;
            var l = parseInt(e.style.left, 10),
                t = parseInt(e.style.top, 10),
                v = parseInt(e.getAttribute("data-v"), 10),
                time = parseInt(e.getAttribute("data-time"), 10),
                _time = time + 50,
                _l = l + v,
                _t = 0.5 * 9 * _time * _time * 0.001 * 0.001 * v,
                top = _t >= maxTop ? 0 : _time;

            e.style.top = top + "px";
            e.style.left = (_l >= maxleft ? 0 : _l) + "px";
            e.setAttribute("data-time", _time);

        };
        var createS = setInterval(function() {
            var length = allIcon.length,
                l = length + 10;
            for (; i < l; i++) {
                allIcon.push(createChar());
            }
            if (allIcon.length > maxSnowflake) {
                clearInterval(createS);
            }
        },1000);
        setInterval(function(){
            var ll =allIcon.length;
            for(i = 0;i < ll ; i++){
                moveChar(allIcon[i]);
            }
        },50)
    }
    document.getElementById("startFlutterCharacter").onclick =function(){
        this.value ="下雪囉";
        flutterChar();
    }
};