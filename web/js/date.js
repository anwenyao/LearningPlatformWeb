window.onload = function(){
	date_event();
}

function date_event(){
	// console.log(0);
	var star = document.getElementsByClassName('star');
	var praise = document.getElementsByClassName('praise');
	var coment = document.getElementsByClassName('comment');
	var coments = document.getElementsByClassName('comments');
	var inputs = document.getElementsByTagName('input');
	var bigPic = document.getElementById('bigPic');
	var close = document.getElementById('close');
	var mask = document.getElementsByClassName('mask')[0];
	var pics = document.getElementsByClassName('conten_pic');
	//点击增加点赞收藏数
	addLike(star,'star',1);
	addLike(praise,'praise',0);
	showContents(coment,coments);
	highlightBorder(inputs);
	//点击关闭查看大图
	eventUtil.addHandler(close,'click',function(){
			ifHide(mask,false);
		});
	//end********************************
	//点击查看原图
	showBigPic(pics);

	//点击图片查看大图
	function showBigPic(nodes){
		for(var i = 0;i < nodes.length;++i){
			(function(i){
				eventUtil.addHandler(nodes[i],'click',function(){
					var pic = nodes[i].getElementsByTagName('img')[0];
					bigPic.src = pic.src;
					ifHide(mask,true);
				});
			})(i);
		}
		
	}//end
}




//给star或者praise添加事件
//type 为sta或者praise
//icon_type->icon_star/praise
//bool传给like的值
function addLike(type,icon_type,bool){
	//初始化为0 代表点赞和收藏都没有被点过
	for(var j = 0;j < type.length;++j){
				type[j].id = "0";
	}

	for(var i = 0;i < type.length;++i){
		(function(i){
			eventUtil.addHandler(type[i],'click',function(){
				var child = type[i].getElementsByClassName('icon_' + icon_type)[0];
				var span = type[i].getElementsByTagName('span')[0];
				var ifLike = parseInt(type[i].id);
				if(!ifLike){
					like(type[i],child,!ifLike,bool);
					type[i].id = "1";
					span.innerHTML = span.innerHTML.replace(' ','') - 0 + 1;
				}else{
					like(type[i],child,!ifLike,bool);
					type[i].id = "0";
					span.innerHTML = span.innerHTML.replace(' ','') - 0 - 1;
				}
			});
		})(i);
	}
	
}
//点击增加点赞收藏数
//bool2 为true代表是收藏 为false代表点赞
function like(node,child,bool1,bool2){
	if(bool1){
		node.style.color = "#e83c3c";
		if(bool2){child.style.background ="url(images/icon.png) -114px -17px" ;}
		else{child.style.background ="url(images/icon.png) -182px -17px" ;}

	}else{
		node.style.color = "#666";
		if(bool2){child.style.background ="url(images/icon.png) -114px 0px" ;}
		else{child.style.background ="url(images/icon.png) -182px 0px" }
	}
}//end


//buttons控制contents 点击button显示content
//bool为content是否已经显示
function showContents(buttons,contents){
	//用来判定当前内容是否已经显示
	//初试化为0 表示都没有显示
	for(var j = 0;j < contents.length;++j){
		contents[j].id = "0";
	}
	for(var i = 0;i<buttons.length;++i){
			(function(i){
					eventUtil.addHandler(buttons[i],'click',function(){
					//替换部分
					// experience_selected(buttons[i],true);
					if(!parseInt(contents[i].id)){
						ifHide(contents[i],true);
						contents[i].id = "1";
					}else{
						ifHide(contents[i],false);
						bool = false;
						contents[i].id = "0";
					}

				})
			})(i)
			
		}
}
