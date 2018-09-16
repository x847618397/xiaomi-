window.onload=function(){
	//大轮播声明
	let imgs=document.querySelectorAll(".banner .picture .imgs img");
	let dots=document.querySelectorAll(".banner .picture .dots .point");
	let banner=document.querySelectorAll(".banner .container")[0];
	let leftBtn=document.querySelector(".banner .leftBtn");
	let rightBtn=document.querySelector(".banner .rightBtn");
	let widths=parseInt(getComputedStyle(imgs[0],null).width);

	//小轮播声明1
	let message1=document.querySelectorAll(".content ul .first .message");
	let num1=document.querySelectorAll(".content ul .first .num .dot");
	// let banner=document.querySelectorAll(".banner .container")[0];
	let lBtn1=document.querySelector(".content ul .first .left");
	let rBtn1=document.querySelector(".content ul .first .right");
	let width1=parseInt(getComputedStyle(message1[0],null).width);

	//小轮播声明2
	let message2=document.querySelectorAll(".content ul .second .message");
	let num2=document.querySelectorAll(".content ul .second .num .dot");
	// let banner=document.querySelectorAll(".banner .container")[0];
	let lBtn2=document.querySelector(".content ul .second .left");
	let rBtn2=document.querySelector(".content ul .second .right");
	let width2=parseInt(getComputedStyle(message2[0],null).width);

	//小轮播声明3
	let message3=document.querySelectorAll(".content ul .third .message");
	let num3=document.querySelectorAll(".content ul .third .num .dot");
	// let banner=document.querySelectorAll(".banner .container")[0];
	let lBtn3=document.querySelector(".content ul .third .left");
	let rBtn3=document.querySelector(".content ul .third .right");
	let width3=parseInt(getComputedStyle(message3[0],null).width);

	//小轮播声明4
	let message4=document.querySelectorAll(".content ul .fourth .message");
	let num4=document.querySelectorAll(".content ul .fourth .num .dot");
	// let banner=document.querySelectorAll(".banner .container")[0];
	let lBtn4=document.querySelector(".content ul .fourth .left");
	let rBtn4=document.querySelector(".content ul .fourth .right");
	let width4=parseInt(getComputedStyle(message4[0],null).width);

	//小米闪购声明
	let left1=document.querySelector(".flashover .container .left");
	let right1=document.querySelector(".flashover .container .right");
	let miList1=document.querySelector(".flashover ul .list-container .list");
	let wh=parseInt(getComputedStyle(miList1,null).width)/2;


	//为你推荐声明
	let left2=document.querySelector(".commend .container .left");
	let right2=document.querySelector(".commend .container .right");
	let miList2=document.querySelector(".commend ul");
	let wd=parseInt(getComputedStyle(miList2,null).width)/3;


function big(imgs,dots,banner,leftBtn,rightBtn,widths) {
	//初始化
	imgs[0].style.left=0;
	dots[0].classList.add("active");
	let now=0;
	let next=0;
	let flag=true;
	let t=setInterval(move, 2000);

	function move(){
		next++;
		if(next==imgs.length){
			next=0;
		}
		imgs[next].style.left=widths+"px";
		animate(imgs[now],{left:-widths});
		animate(imgs[next],{left:0},function(){
			flag=true;
		})
		dots[now].classList.remove("active");
		dots[next].classList.add("active");
		now=next;
	}

	function moveL(){
		next--;
		if(next<0){
			next=imgs.length-1;
		}
		imgs[next].style.left=-widths+"px";
		animate(imgs[now],{left:widths});
		animate(imgs[next],{left:0},function(){
			flag=true;
		});
		dots[now].classList.remove("active");
		dots[next].classList.add("active");
		now=next;
	}

	leftBtn.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		moveL();
	}
	rightBtn.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		move();
	}

	banner .onmouseover=function(){
		clearInterval(t);
	}
	banner .onmouseout=function(){
		t=setInterval(move, 2000);
	}

	for(let i=0;i<dots.length;i++){
        dots[i].onclick=function(){
            if(now==i){
                return;
            }else if(now<i){
                imgs[i].style.left="${widths}px";
                animate(imgs[now],{left:-widths});
                animate(imgs[i],{left:0});
                dots[now].classList.remove("active");
                dots[i].classList.add("active");
			}else if(now>i){
                imgs[i].style.left="${-widths}px";
                animate(imgs[now],{left:widths});
                animate(imgs[i],{left:0});
                dots[now].classList.remove("active");
                dots[i].classList.add("active");
            }
			next=now=i;
        }
    }


}





function small(messages,nums,lBtn,rBtn,widths) {
	messages[0].style.left=0;
	nums[0].classList.add("active");
	let now=0;
	let next=0;
	let flag=true;
	// let t=setInterval(move, 2000);

	function move(){
		next++;
		if(next==messages.length){
			next=0;
		}
		messages[next].style.left=widths+"px";
		animate(messages[now],{left:-widths});
		animate(messages[next],{left:0},function(){
			flag=true;
		})
		nums[now].classList.remove("active");
		nums[next].classList.add("active");
		now=next;
	}

	function moveL(){
		next--;
		if(next<0){
			next=messages.length-1;
		}
		messages[next].style.left=-widths+"px";
		animate(messages[now],{left:widths});
		animate(messages[next],{left:0},function(){
			flag=true;
		});
		nums[now].classList.remove("active");
		nums[next].classList.add("active");
		now=next;
	}

	lBtn.onclick=function(){
		if(!flag){
			return;
		}
		if(next==0){
            return;
        }
		flag=false;
		moveL();
	}
	rBtn.onclick=function(){
		if(!flag){
			return;
		}
		if(next==messages.length-1){
            return;
        }
		flag=false;
		move();
	}

	// banner .onmouseover=function(){
	// 	clearInterval(t);
	// }
	// banner .onmouseout=function(){
	// 	t=setInterval(move, 2000);
	// }

	for(let i=0;i<nums.length;i++){
        nums[i].onclick=function(){
            if(now==i){
                return;
            }else if(now<i){
                messages[i].style.left="${widths}px";
                animate(messages[now],{left:-widths});
                animate(messages[i],{left:0});
                nums[now].classList.remove("active");
                nums[i].classList.add("active");
			}else if(now>i){
                messages[i].style.left="${-widths}px";
                animate(messages[now],{left:widths});
                animate(messages[i],{left:0});
                nums[now].classList.remove("active");
                nums[i].classList.add("active");
            }
			next=now=i;
        }
    }

}

	
function flashover(leftbutton,rightbutton,miList,width){
	let times=0;
	rightbutton.onclick=function(){
		times++;
		if(times==2){
			times=1;
		}
		miList.style.transform=`translate(${(-width*times)}px)`;
		nums[now].classList.remove("active");
		nums[next].classList.add("active");
	}
	leftbutton.onclick=function(){
		times--;
		if(times==-1){
			times=0;
		}
		miList.style.transform=`translate(${(-width*times)}px)`;
		nums[now].classList.remove("active");
		nums[next].classList.add("active");
	}


}
	
function commend(leftbutton,rightbutton,miList,width){
	let times=0;
	rightbutton.onclick=function(){
		times++;
		if(times==3){
			times=2;
		}
		miList.style.transform=`translate(${(-width*times)}px)`;
		// nums[now].classList.remove("active");
		// nums[next].classList.add("active");
	}
	leftbutton.onclick=function(){
		times--;
		if(times==-1){
			times=0;
		}
		miList.style.transform=`translate(${(-width*times)}px)`;
		// nums[now].classList.remove("active");
		// nums[next].classList.add("active");
	}


}

//banner选项卡
	let lis=document.querySelectorAll(".banner .container .text .title .list");
	let inn=document.querySelectorAll(".banner .text .list .bn-choose");
	console.log(lis);
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			for(let j=0;j<inn.length;j++){
				inn[j].style.display="none";
			}
			inn[i].style.display="flex";
		}
		lis[i].onmouseleave=function(){
			inn[i].style.display="none";
		}
	}

//家电 选项卡
	//声明
	let father=document.querySelectorAll(".house .container .top-right .title span1");	
	let son=document.querySelectorAll(".house .right .list ul");
	// console.log(son);
	//函数
	function house(lis,inn){
		for(let i=0;i<lis.length;i++){
			lis[i].onmouseenter=function(){
				for(let j=0;j<inn.length;j++){
					inn[j].style.display="none";
					lis[j].classList.remove("active");
				}
				inn[i].style.display="block";
				lis[i].classList.add("active");
			}
		}
	}
	house(father,son);//调用家电函数
	

	// 导航下拉菜单
	let text=document.querySelectorAll(".top-white .title .list");
	let menu=document.querySelectorAll(".top-white .navmenu");
	// console.log(menu);
	for(let x=0;x<text.length;x++){
		text[x].onmouseenter=function(){
			for(let y=0;y<menu.length;y++){
				menu[y].style.display="none";
			}
		menu[x].style.display="block";
		}
		text[x].onmouseleave=function(){
			menu[x].style.display="none";
		}
	}

	//返回顶部
	window.onscroll=function () {
        let bh = document.body.scrollTop || document.documentElement.scrollTop;
        let back = document.querySelectorAll(".box .back")[0];
        let wh=window.innerHeight;
        back.onclick = function () {
            animate(document.body, {scrollTop: 0}, 600);
            animate(document.documentElement, {scrollTop: 0}, 600);
        }
    }

//倒计时
    function djs(spans){
    	setDate();
        setInterval(setDate,1000);
        function setDate(){
            let arr=fn();
            for (var a=0; a<spans.length;a++) {
				spans[a].innerHTML=arr[a];
            }  
            // console.log(spans);
        }
        function fn() {
            let arr = [];
            let now = new Date();
            let future = new Date(2018,9,1,18,0,0);
            let time = Math.floor((future.getTime() - now.getTime()) / 1000);

            //月
            // let month = Math.floor(time / (30 * 24 * 60 * 60));
            // arr.push(month);
            // let day = Math.floor(time % (30 * 24 * 60 * 60) / (24 * 60 * 60));
            // arr.push(day);
            let hour = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) / (60 * 60));
            arr.push(hour);
            let m = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) / (60));
            arr.push(m);
            let s = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) % (60));
            arr.push(s);

            return arr;
        }
    }
    let spans=document.querySelectorAll(".flashover ul li .time");
    console.log(spans);
    

    djs(spans);//倒计时
	big(imgs,dots,banner,leftBtn,rightBtn,widths);//调用大轮播图
    small(message1,num1,lBtn1,rBtn1,width1);//调用小轮播
    small(message2,num2,lBtn2,rBtn2,width2);//调用小轮播
    small(message3,num3,lBtn3,rBtn3,width3);//调用小轮播
    small(message4,num4,lBtn4,rBtn4,width4);//调用小轮播
    flashover(left1,right1,miList1,wh);//调用闪购平移
    commend(left2,right2,miList2,wd);//调用内容平移
}