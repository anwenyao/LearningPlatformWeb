
window.onload =function(){
	homeapage_event();
}

function homeapage_event(){
	var items = document.getElementsByClassName('info_item');
	var mains = document.getElementsByClassName('main_inner');
	var texts = document.getElementsByClassName("text");
	var close = document.getElementById("close");
	var edit = document.getElementById("edit");
	var mask = document.getElementsByClassName("mask")[0];

	for(var i = 0;i<items.length;++i){
			(function(i){
					eventUtil.addHandler(items[i],'click',function(){
					//替换部分
					homepage_selected(items[i],true);
					ifHide(mains[i],true);
					var j = 0;
					while(j < items.length){
						if(j != i){
							homepage_selected(items[j],false);
							ifHide(mains[j],false);
						}
						++j;
					}

				})
			})(i)
			
		}

	//设置input的红边框
	for(var i = 0;i < texts.length;++i){
		eventUtil.addHandler(texts[i],'focus',function(){
			this.style.borderColor = "red";
		});
		eventUtil.addHandler(texts[i],'blur',function(){
			this.style.borderColor = "#ccc";
		});
	}
	//end********************************

	//点击显示登录界面
	eventUtil.addHandler(edit,'click',function(){
			ifHide(mask,true);
		});
	//end********************************

	//点击关闭登录界面
	eventUtil.addHandler(close,'click',function(){
			ifHide(mask,false);
		});
	//end********************************
}

function homepage_selected(node,bool){
	if(bool){
		node.style.background = "#eee";
	}else{
		node.style.background = "white";
	}
}//end