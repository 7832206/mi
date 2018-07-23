window.onload=function(){
	let head_car=document.getElementsByClassName("head_car")[0];
	let shoppingCarbox=document.getElementsByClassName("shoppingCarbox")[0];
	console.log(head_car,shoppingCarbox);

	head_car.onmouseenter=function(){
		shoppingCarbox.style.height="98px";
		shoppingCarbox.style.boxShadow="0 3px 6px 2px rgba(0,0,0,4)";

	}
	head_car.onmouseleave=function(){
		shoppingCarbox.style.height=0;
		shoppingCarbox.style.boxShadow="none";

	}

	let banner_nav=document.getElementsByClassName("banner_nav")[0];
	console.log(banner_nav);
	let li=banner_nav.getElementsByTagName("li");
	console.log(li);
	let asideBox=banner_nav.getElementsByClassName("asideBox");
	for(let i=0;i<li.length;i++){
		li[i].onmouseenter=function(){
			// for(let j=0;j<li.length;j++){
			// asideBox[j].style.display="none";
			// asideBox[j].style.background="none";
			for( let j=0;j<li.length;j++){				
				// asideBox[j].style.background="none";
				// asideBox[j].style.display="none";
				asideBox[i].style.opacity=0;
			
			}
			// }
			// asideBox[i].style.display="block";
			// asideBox[i].style.display="red";
			asideBox[i].style.opacity=1;

		}
		li[i].onmouseleave=function(){
			// asideBox[i].style.display="none";
			asideBox[i].style.opacity=0;
		}
	}


// 	let dapei_top=document.getElementsByClassName("dapei_top")
// 	let dapei_more=document.getElementsByClassName("dapei_more");
// 	console.log(dapei_more);
// 	let s=dapei_top.getElementsByTagName("span");
// 	console.log(span);
// 	let peijianBox=dapei_more.getElementsByClassName("peijianBox");
// 	console.log(peijianBox);
// 	for(let i=0;i<s.length;i++){
// 		li[i].onmouseenter=function(){
// 			for(let j=0;j<s.length;j++){[j]
// 				peijianBox[j].style.display="none";
// 			}

// 		}
// 	peijianBox[i].style.display=block;
// }

// }
//轮播图
let bannerBox=document.getElementsByClassName("bannerBox")[0];
console.log(bannerBox);
let lis=bannerBox.getElementsByTagName("li");
console.log(lis);
let num=0;
let t=setInterval(move,1000);
// banner_img.onmouseenter=
function move(){
		num++;
	if(num==lis.length){
		num=0;	// clearInterval(t);
}
for(let num=0;num<lis.length;num++){
	lis[num].style.zIndex=5;

}
	lis[num].style.zIndex=10;
}

// let daohang=document.getElementsByClassName("daohang")[0];
// console.log(daohang);
// let liss=daohang.getElementsByTagName("span")[0];
// console.log(liss);
// let daohangBox=daohang.getElementsByClassName("daohangBox")[0];
// console.log(daohangBox);
// for(let i=0;i<li.length;i++){
// 		li[i].onmouseenter=function(){
// 			for( let j=0;j<liss.length;j++){				
// 				daohangBox[j].style.opacity=0;
// 			}
// 			daohangBox[i].style.opacity=1;

// 		}
	// 	// li[i].onmouseleave=function(){
			
	// 	// 	daohangBox[i].style.opacity=0;
	// 	// }
	// }



}