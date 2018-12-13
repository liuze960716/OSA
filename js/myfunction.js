
function Slider(obj){
	let defaultObj={
		boxDom : null,
		width : 800,
		height : 600,
		imgs : [],
		btnColor : 'black', //按钮的原始颜色
		btnHighColor : 'white',//按钮的高亮颜色
		btnSizeWidth : 10,//按钮的大小
		btnSizeHeight : 10,//按钮的大小
		btnSizeWidthYuan:40,
		isCircle : true,//按钮是否为圆的
		currIndex : 0,	//从第几张图片开始
		timeSpace : 20,	//时间
		isAutoPlay:true,//是否自动播放
		myTimer : null
	};
	for(let key in defaultObj){
		obj[key]!==undefined?(this[key] = obj[key]):(this[key] = defaultObj[key]);
	}

	this.createUI();
	this.addEvent();
	if(this.isAutoPlay){
		this.autoPlay();	
	}	
}

Slider.prototype.createUI = function(){
	this.boxDom.style.overflow="hidden";
	for(let i=0;i<this.imgs.length;i++){
		let imgDom = document.createElement("img");
		imgDom.src = this.imgs[i];
		imgDom.style.cssText = "position:absolute;top:0px;";
		if(i==0){
			imgDom.style.left = "0px";
		}//else{
		// 	imgDom.style.left = this.width+"px";
		// }
		imgDom.style.width = this.width+"px";
		imgDom.style.height = this.height+"px";
		this.boxDom.appendChild(imgDom);
	}
	
	let ulDom = document.createElement("ul");
	ulDom.style.cssText = "position:absolute;list-style:none;right:663px;bottom:0px;z-index:1;";
	this.boxDom.appendChild(ulDom);
	
	for(let i=0;i<this.imgs.length;i++){
		let liDom = document.createElement("li");
		liDom.style.cssText="margin-right:10px;float:left;";
		liDom.style.width = this.btnSizeWidth+"px";
		liDom.style.height = this.btnSizeHeight+"px";
		if(this.isCircle){
			liDom.style.borderRadius="80px";
		}
		if(i==0){
			liDom.style.backgroundColor = this.btnHighColor;
			liDom.style.width = this.btnSizeWidthYuan+"px";			
		}else{
			liDom.style.backgroundColor = this.btnColor;	
			liDom.style.width = this.btnSizeWidthYuan+"px";		
		}
		ulDom.appendChild(liDom);
	}
}

	//添加事件
Slider.prototype.addEvent = function(){
	//this;//是轮播图对象
	let that = this;
	
	this.boxDom.onmouseover = function(){
		//this 是事件源（boxDom）
		//this.stop();//这样写就不对了
		that.stop();
	}
	
	this.boxDom.onmouseout = function(){
		if(that.isAutoPlay){
			that.autoPlay();	
		}	
	};
	
	let lis = this.boxDom.lastElementChild.children;
	for(var i=0;i<lis.length;i++){
		lis[i].setAttribute("index",i);//这句话是给每个li增加了一个index属性，值是下标。
		lis[i].onclick = function(){
			that.goImg(parseInt(this.getAttribute("index")));
		};
	}
}
	
	//1、自动播放
Slider.prototype.autoPlay = function(){	
	if(this.myTimer!=null){
		return;
	}
	this.myTimer = setInterval(()=>{
		//1、改变数据（图片序号）
		let outIndex = this.currIndex;//要出去的那张。
		this.currIndex=this.currIndex+1;
		//2、边界处理
		if(this.currIndex>this.imgs.length-1 || this.currIndex<0){
			this.currIndex = 0;
		}
		//3、改变外观
		this.showImg(outIndex,this.currIndex);
	},this.timeSpace);	
}

	//2、停止
Slider.prototype.stop=function(){
	if(this.myTimer!=null){
		window.clearInterval(this.myTimer);
		this.myTimer = null;
	}
}

	//3、跳转指定的图片
	//
Slider.prototype.goImg=function(transIndex){//2
	//1、改变数据（图片序号）
	let outIndex = this.currIndex;
	this.currIndex=transIndex;//2
	//2、边界处理
	if(this.currIndex>this.imgs.length-1 || this.currIndex<0){
		this.currIndex = 0;
	}
	//3、改变外观
	this.showImg(outIndex,this.currIndex);
}

	//
	//参数：
	//outIndex:淡出的那张图片的序号
	//inIndex:淡入的那张图片的序号
Slider.prototype.showImg=function(outIndex,inIndex){
	//3、改变外观
	//1)、改图片
	let imgs = this.boxDom.children;
	// imgs[inIndex].style.left = this.width+"px";
	//让inIndex滑入
	// linearMove03(imgs[inIndex],"left",this.width,0,300);
	// //让outIndex滑出
	// linearMove03(imgs[outIndex],"left",0,-1*this.width,300);

	for (let i=0; i<imgs.length-1; i++) {
		imgs[i].style.zIndex = 0;
	}

	imgs[inIndex].style.zIndex = 1;

	fadeInOut(imgs[outIndex],imgs[inIndex],1000);

	//2)、改豆豆
	let lis = this.boxDom.lastElementChild.children;
	for(let i=0;i<lis.length;i++){
		lis[i].style.backgroundColor = this.btnColor;
	}
	lis[this.currIndex].style.backgroundColor = this.btnHighColor;
}