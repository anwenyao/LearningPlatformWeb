window.onload = function(){
	var arrows = document.getElementsByClassName("icon_arrowR02");
	var pros = document.getElementsByClassName("pro");
	var subs = document.getElementsByClassName("sub");
	var filse = document.getElementById('files');

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

	//页面加载显示全部的文件
	addFileItem(dk_file[0]);


	//展示对应专业下的文件
	for(var i = 0;i < pros.length;++i){
		(function(i){
			var datas = dk_file[i];
			eventUtil.addHandler(pros[i],'click',function(){
				//将上一次选中的pro设置为#666，并将其data-isSelected属性设为0
				for(k = 0; k < pros.length;++k){
					if(pros[k].getAttribute('data-isSelected')-0){
						pros[k].style.color = '#666';
						pros[k].setAttribute('data-isSelected','0');
					}
				}//end of for
				this.style.color = 'red'; 
				this.setAttribute('data-isSelected','1');

				//移除先前的sub 从第一个开始
				files.innerHTML = '<tr class="th"><td class="first">文档名称</td><td>上传者</td><td>老师</td><td>学期</td><td>下载量</td></tr>';
				//end

				//根据专业循环显示科目
				addFileItem(datas);
			});//end of addHandler
		})(i);
	}//end of for






	//******************函数封装**********************


	//添加课程
	//para：数据数组
	function addFileItem(data){
		for(var i = 0;i < data.length;++i){
			var dataSon = data[i];
			var tr = document.createElement('tr');
			tr.innerHTML = '<td class = "first"><i class="icon-s icon_'+dataSon.type+'"></i><a href="javascript:;">'+dataSon.name+'</a></td><td><i class="icon-s icon_user"></i><a href="">'+dataSon.author+'</a></td><td>'+dataSon.teacher+'</td><td>'+dataSon.semester+'</td><td>'+dataSon.download+'</td>';
			files.appendChild(tr);
		}//end of for

		//添加斑马线效果
		var tr = document.getElementsByTagName('tr');
		for(j = 0;j< data.length;++j){
			if (j%2!=0) {
				tr[j].style.background = '#f4f9fc';
			}
		}
	}//end of addFileItem

	
	//展示对应专业下的课程
	function ifSelected(){
		for(var i = 0;i < pros.length;++i){
		if(i == 0){
			pros[i].setAttribute('data-isSelected','1');
		}else{
			pros[i].setAttribute('data-isSelected','0');
		}
	}
	}//end of ifSelected

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
		
	}//end of showNext
}