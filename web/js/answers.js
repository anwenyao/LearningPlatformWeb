window.onload=function(){
	var menu = document.getElementsByClassName('menu')[0];
	var menu_item = menu.getElementsByTagName('li');
	var container = document.getElementsByClassName('container')[0];


	//给菜单添加点击效果
	for(var i = 0;i < menu_item.length - 1;++i){
		eventUtil.addHandler(menu_item[i],'click',function(){
			for(var j = 0;j < menu_item.length - 1;++j){
					menu_item[j].className = '';
			}
				this.className = "li-selected";
		});
	}//end of for


	//加载问题
	//data.js problems[];
	for(var i = 0; i < problems.length;++i){
		var pro = problems[i];
		//console.log(pro);
		var div = document.createElement('div');
		div.className = 'problem';
		div.innerHTML = '<div class="answers">'+pro.ans_num+'回答</div><div class="info"><a href="#" class="user">'+pro.user+'</a><span class="time">'+pro.time+'</span></div><a class="pro_des" href="#">'+pro.pro+'</a></div>';
		for(var j = 0;j < pro.ans_label.length;++j){
			var span = document.createElement('span');
			span.className = 'label';
			span.innerHTML = pro.ans_label[j];
			div.appendChild(span);
		}
		container.appendChild(div);
	}
	
};