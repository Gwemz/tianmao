$(function () {
    // header显示隐藏开始
    var hc_right = $('.hc_right')[0];
    var bai = $('.bai', hc_right);
    for (var ba = 0; ba < bai.length; ba++) {
        bai[ba].index = ba;
        hover(bai[ba], function () {
            $('.list', bai[this.index])[0].style.display = "block";
        }, function () {
            $('.list', bai[this.index])[0].style.display = "none";
        })
    }
    var hei1 = $('.hei1', hc_right)[0];
    $('.list3', hei1)[0].style.display = "none";
    hover(hei1, function () {
        $('.list3', hei1)[0].style.display = "block";
    }, function () {
        $('.list3', hei1)[0].style.display = "none";
    })
    // header显示隐藏结束
    // banner部分获取开始
    var ban = $('.banner')[0];
    var banCon = $('.one', ban);
    var lists = $('.lists', ban)[0];
    var lisli = $('li', lists);

    // banner部分获取结束
    // banner li中content的显示和隐藏开始
    var banUl = $('.list', ban)[0];
    var banUli = $('li', banUl);

    for (var li = 0; li < banUli.length; li++) {
        banUli[li].index = li;
        hover(banUli[li], function () {
            $('a', banUli[this.index])[0].style.backgroundColor = "#fff";
            $('.content', banUli[this.index])[0].style.display = "block";
        }, function () {
            $('a', banUli[this.index])[0].style.backgroundColor = "";
            $('.content', banUli[this.index])[0].style.display = "none";
        })
    }
    // banner li中content的显示和隐藏结束
    // interact-con1透明度变化开始
    var intCon1 = $('.interact-con1')[0];
    var intCon1A = $('a', intCon1);
    // console.log(intCon1A.length);
    for (var b = 0; b < intCon1A.length; b++) {
        intCon1A[b].index = b;
        intCon1A[b].onmouseover = function () {
            animate(intCon1A[this.index], {opacity: 0.5}, 500);
        }
        intCon1A[b].onmouseout = function () {
            animate(intCon1A[this.index], {opacity: 1}, 500);
        }
    }


    // interact-con1透明度变化结束

    // interact-con2部分获取开始
    var intercon2 = $('.interact-con2')[0];
    var inter2_3 = $('.three', intercon2)[0];
    var inter2_3li = $('li', inter2_3);
    var inter2_3imgs = $('img', inter2_3);
    // console.log(inter2_3imgs);
    for (var c = 0; c < inter2_3li.length; c++) {
        inter2_3li[c].index = c;
        inter2_3li[c].onmouseover = function () {
            animate(inter2_3imgs[this.index], {opacity: 0.7}, 500);
        }
        inter2_3li[c].onmouseout = function () {
            animate(inter2_3imgs[this.index], {opacity: 1}, 500);
        }
    }
    // console.log(inter2_3li);
    // interact-con2部分获取结束
    // 热门品牌点击显示遮罩开始
    var init = $('.init')[0];
    var initli = $('li', init);
    var mask = $('.brand-mask', init);
    // 热门品牌点击显示遮罩结束
    // interact-con3开始
    var intercon3 = $('.interact-con3')[0];
    var column = $('.column-title1', intercon3);
    var colimgs = $('img', intercon3);
    // interact-con3结束
    // interact-con5开始
    var inter5 = $('.interact-con5');
    for (var a = 0; a < inter5.length; a++) {
        var intercon5 = inter5[a];
        aa(intercon5);
    }
    function aa(intercon5) {
        var column1 = $('.colume-con', intercon5)[0];
        var left = $('.left', column1)[0];
        var middle = $('.middle', column1)[0];
        var middleA = $('a', middle);
        var midimgs = $('img', middle);
        var right = $('.right', column1)[0];
        var rightA = $('a', right);
        var rigimgs = $('img', right);
        // 透明度效果
        left.onmouseover = function () {
            animate(left, {opacity: 0.7}, 500);
        }
        left.onmouseout = function () {
            animate(left, {opacity: 1}, 500);
        }
        // 图片左移效果
        // 中间框图片左移
        for (var m = 0; m < middleA.length; m++) {
            middleA[m].index = m;
            middleA[m].onmouseover = function () {
                animate(midimgs[this.index], {marginRight: 5}, 300);
            }
            middleA[m].onmouseout = function () {
                animate(midimgs[this.index], {marginRight: 0}, 300);
            }
        }
        // 右侧框图片左移
        for (n = 0; n < rightA.length; n++) {
            rightA[n].index = n;
            rightA[n].onmouseover = function () {
                animate(rigimgs[this.index], {marginRight: 5}, 300);
            }
            rightA[n].onmouseout = function () {
                animate(rigimgs[this.index], {marginRight: 0}, 300);
            }
        }
    }

    // interact-con5结束
    // interact-con8开始
    var intercon8 = $('.interact-con8')[0];
    var wondli = $('.wonderful-item', intercon8);
    var wondimgs = $('img', intercon8);
    // 鼠标移到对应框中，透明度变化
    for (var b = 0; b < wondli.length; b++) {
        wondli[b].index = b;
        wondli[b].onmouseover = function () {
            animate(wondimgs[this.index], {opacity: 0.7}, 500);
        }
        wondli[b].onmouseout = function () {
            animate(wondimgs[this.index], {opacity: 1}, 500);
        }
    }

    // interact-con8结束

    // banner部分函数部分
    // 设置banner的定时效果
    var index = 0;
    banCon[0].style.zIndex = '10';
    var t = setInterval(move, 2000);

    function move() {
        index++;
        if (index == banCon.length) {
            index = 0;
        }
        for (var j = 0; j < banCon.length; j++) {
            banCon[j].style.zIndex = '0';
            lisli[j].style.backgroundColor = "";
        }
        // animate(banCon[index],{zIndex:10},2000);
        banCon[index].style.zIndex = '10';
        lisli[index].style.backgroundColor = "#fff";
    }

    // 鼠标移上去的时候停止定时效果
    ban.onmouseover = function () {
        clearInterval(t);
    }
    // 鼠标离开之后继续开始定时器
    ban.onmouseout = function () {
        t = setInterval(move, 2000);
    }
    // 鼠标点击按钮，显示相应图片
    lisli[0].style.backgroundColor = "#fff";
    for (var i = 0; i < lisli.length; i++) {
        lisli[i].index = i;
        lisli[i].onclick = function () {
            for (var j = 0; j < lisli.length; j++) {
                banCon[j].style.zIndex = '0';
                lisli[j].style.backgroundColor = "";
            }
            lisli[this.index].style.backgroundColor = "#fff";
            banCon[this.index].style.zIndex = '10';
            index = this.index;
        }
    }
    // banner函数部分结束
    // 热门品牌点击显示遮罩开始
    for (var j = 0; j < initli.length; j++) {
        initli[j].index = j;
        mask[j].style.display = "none";
        initli[j].onmouseover = function () {
            for (var j = 0; j < initli.length; j++) {
                mask[j].style.display = "none";
            }
            mask[this.index].style.display = "block";
        }
        initli[j].onmouseout = function () {
            for (var j = 0; j < initli.length; j++) {
                mask[j].style.display = "none";
            }
        }
    }
    // 热门品牌点击显示遮罩结束
    // interact-con3开始(图片放大效果)
    for (var k = 0; k < column.length; k++) {
        column[k].index = k;
        column[k].onmouseover = function () {
            animate(colimgs[this.index], {width: 150, height: 150, bottom: -3, left: 0, right: 0}, 300);
        }
        column[k].onmouseout = function () {
            animate(colimgs[this.index], {width: 133, height: 133, bottom: 5}, 300);
        }
    }
    // interact-con3结束
    // 右侧固定定位开始
    var fixed = $('#fixed');
    var fix2 = $('.fix2', fixed);
    for (var g = 0; g < fix2.length; g++) {
        fix2[g].index = g;
        hover(fix2[g], function () {
            animate($('.tab-tip', this)[0], {right: 35}, 500);
            $('.tab-tip', this)[0].style.display = "block";
        }, function () {
            animate($('.tab-tip', this)[0], {right: 70}, 500);
            $('.tab-tip', this)[0].style.display = "none";
        })
    }
    fix2[fix2.length - 1].onclick = function () {
        var tops = document.body.scrollTop || document.documentElement.scrollTop;
        animate(document.body, {scrollTop: 0}, 500);
        animate(document.documentElement, {scrollTop: 0}, 500);
    }
    // 右侧固定定位结束
    // 左侧固定定位开始
    var fixed1 = $('.fixed1')[0];
    var fix1A = $('a', fixed1);
    // 移到对应位置时改变按钮的背景颜色
    // 顶部固定定位开始
    var fixed2 = $('.fixed2')[0];
    var interCon = $('.interact-con')[0];
    var inter = $('.inter', interCon);
    // 获取对应内容部分距离顶部的距离
    var arr = [];
    for (var d = 0; d < inter.length; d++) {
        arr.push(inter[d].offsetTop);
    }
    var inter1 = $('.interact-con1')[0];
    var inter6 = $('.interact-con6')[0];
    var inter7 = $('.interact-con7')[0];
    fixed2.style.top = "-50px";
    fixed1.style.bottom = "-370px";
    fixed1.style.marginLeft = "-708px";
    var flag = true;
    on(window, 'scroll', function () {
        var tops = document.body.scrollTop || document.documentElement.scrollTop;
        if (tops > 729) {
            // fixed2.style.display="block";
            if (flag) {
                animate(fixed2, {top: 0}, 300);
                animate(fixed1, {bottom: 50, marginLeft: -673}, 500);
                flag = false;
            }
        }
        else {
            if (!flag) {
                animate(fixed2, {top: -50}, 300);
                animate(fixed1, {bottom: -370, marginLeft: -708}, 500);
                flag = true;
            }
        }
        for (var e = 0; e < inter.length; e++) {
            if (tops + 200 > arr[e]) {
                for (var j = 1; j < inter.length + 1; j++) {
                    fix1A[j].style.backgroundColor = "";
                }

                /*if(e=0){
                 fix1A[e+1].style.backgroundColor="#F7A945";
                 }
                 if(e=1){
                 fix1A[e+1].style.backgroundColor="#19C8A9";
                 }
                 if(e=2){
                 fix1A[e+1].style.backgroundColor="#F15453";
                 }
                 if(e=3){
                 fix1A[e+1].style.backgroundColor="#64C333";
                 }
                 if(e=4){
                 fix1A[e+1].style.backgroundColor="#0AA6E8";
                 }
                 if(e=5){
                 fix1A[e+1].style.backgroundColor="#EA5F8D";
                 }
                 if(e=6){
                 fix1A[e+1].style.backgroundColor="#DD2727";
                 }
                 if(e=7){
                 fix1A[e+1].style.backgroundColor="#DD2727";
                 }*/
                fix1A[e + 1].style.backgroundColor = "#F7A945";
            }
        }
    })

    // window.onscroll=function(){
    // 	var tops=document.body.scrollTop||document.documentElement.scrollTop;
    // 	if(tops>729){
    // 		// fixed2.style.display="block";
    // 		if(flag){
    // 			animate(fixed2,{top:0},300);
    // 			animate(fixed1,{bottom:50,marginLeft:-673},500);
    // 			flag=false;
    // 		}
    // 	}
    // 	else{
    // 		if(!flag){
    // 			animate(fixed2,{top:-50},300);
    // 			animate(fixed1,{bottom:-370,marginLeft:-708},500);
    // 			flag=true;
    // 		}
    // 	}
    // 	for(var e=0;e<inter.length;e++){
    // 		if(tops+200>arr[e]){
    // 			for(var j=1;j<inter.length+1;j++){
    // 				fix1A[j].style.backgroundColor="";
    // 			}

    // 			if(e=0){
    // 				fix1A[e+1].style.backgroundColor="#F7A945";
    // 			}
    // 			if(e=1){
    // 				fix1A[e+1].style.backgroundColor="#19C8A9";
    // 			}
    // 			if(e=2){
    // 				fix1A[e+1].style.backgroundColor="#F15453";
    // 			}
    // 			if(e=3){
    // 				fix1A[e+1].style.backgroundColor="#64C333";
    // 			}
    // 			if(e=4){
    // 				fix1A[e+1].style.backgroundColor="#0AA6E8";
    // 			}
    // 			if(e=5){
    // 				fix1A[e+1].style.backgroundColor="#EA5F8D";
    // 			}
    // 			if(e=6){
    // 				fix1A[e+1].style.backgroundColor="#DD2727";
    // 			}
    // 			if(e=7){
    // 				fix1A[e+1].style.backgroundColor="#DD2727";
    // 			}
    // 			fix1A[e+1].style.backgroundColor="#F7A945";
    // 		}
    // 	}
    // }

    // 选项卡效果
    for (var f = 1; f < fix1A.length - 1; f++) {
        fix1A[f].index = f;
        fix1A[f].onclick = function () {
            animate(document.body, {scrollTop: arr[this.index - 1] - 150}, 500);
            animate(document.documentElement, {scrollTop: arr[this.index - 1] - 150}, 500);
            /*document.body.scrollTop=arr[this.index-1]-150;
             document.documentElement.scrollTop=arr[this.index-1]-150;*/
        }
    }
    // 左侧固定定位结束
    // 按需加载开始
    var need = $('.need');
    console.log(need);
    var arr3 = [];
    var flag3 = [];
    var ih = document.documentElement.clientHeight;
    for (var ne = 0; ne < need.length; ne++) {
        arr3.push(need[ne].offsetTop);
        flag3.push(true);
        on(window, 'scroll', function () {
            var tops = document.body.scrollTop || document.documentElement.scrollTop;
            for (var j = 0; j < need.length; j++) {
                var bb = $('img', need[j]);
                if ((tops + ih) > arr3[j] && (flag3[j])) {
                    flag3[j] = false;
                    for (var k = 0; k < bb.length; k++) {
                        bb[k].src = bb[k].getAttribute('asrc');
                    }
                }
            }
        })
    }
    console.log(arr3);
    // 按需加载结束


})