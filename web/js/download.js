window.onload = function(){
	var arrows = document.getElementsByClassName("icon_arrowR02");
	var pros = document.getElementsByClassName("pro");
	var subs = document.getElementsByClassName("sub");
	var subject = document.getElementById('subject');

	//点击箭头展开下级菜单
	for(var i = 0;i < arrows.length;++i){
		(function(i){
			//添加属性表示是否显示下一级菜单
			arrows[i].id = '0';
			eventUtil.addHandler(arrows[i],'click',showNext);
		})(i);	
	}//end of for

	//初始化pros 和 当前选中显示红色 设置属性data-isSelected
	ifSelected(pros);

	//页面加载时添加课程
	addSubs(dk_data[0],'li');

	//展示对应专业下的课程
	for(var i = 0;i < pros.length;++i){
		(function(i){
			var datas = dk_data[i];
			eventUtil.addHandler(pros[i],'click',function(){
				//将上一次选中的pro设置为#666，并将其data-isSelected属性设为0
				for(k = 0; k < pros.length;++k){
					if(pros[k].getAttribute('data-isSelected')-0){
						pros[k].style.color = '#666';
						pros[k].setAttribute('data-isSelected','0');
					}
				}//end
				this.style.color = 'red'; 
				this.setAttribute('data-isSelected','1');

				//移除先前的sub 从第一个开始
				subject.innerHTML = '<li class="sub cr">全部</li>';
				//end

				//根据专业循环显示科目
				addSubs(datas,'li');
			});//end of addHandler
		})(i);
	}//end






	//******************函数封装**********************


	//添加课程
	//para：数据数组,需要添加的元素的类型
	function addSubs(data,nodeType){
		for(var j= 0;j < data.length;++j){
			var node = document.createElement(nodeType);
			node.className = 'sub';
			node.setAttribute('data-isSelected','0')
			var text = document.createTextNode(data[j]);
			node.appendChild(text);
			subject.appendChild(node);
		}
		//利用了es5没有块级作用域
		node.className += ' last';
	}//end

	
	//展示对应专业下的课程
	function ifSelected(){
		for(var i = 0;i < pros.length;++i){
		if(i == 0){
			pros[i].setAttribute('data-isSelected','1');
		}else{
			pros[i].setAttribute('data-isSelected','0');
		}
	}
	}//end

	//展开下级菜单
	function showNext(){
		var brother = this.parentNode.nextSibling
		//以防文本节点
		if(brother.nodeType == 3){
			brother = brother.nextSibling;

		}

		if(!(this.id - 0)){
			ifHide(brother,true);
			console.log(this.style.background);
			this.style.background = ' url(images/icon.png) -267px -17px';
			this.id = '1';
		}else{
			ifHide(brother,false);
			this.style.background = ' url(images/icon.png) -267px 0px';
			this.id = '0';
		}
		
	}//end
}