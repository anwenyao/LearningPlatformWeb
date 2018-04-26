window.onload =function(){
	var exps = document.getElementById('exps');
	var close = document.getElementById('close');
	var mask = document.getElementsByClassName('mask')[0];
	var newEx = document.getElementsByClassName('new')[0];
	var emoijBtn = document.getElementsByClassName('emoijBtn')[0];
	var newExp = document.getElementsByClassName('newExp')[0];
	var emoij = document.getElementsByClassName('emoij')[0];
	var texts = document.getElementsByClassName('text');
	//初始化加载期末的经验内容
	loadExp(exp_file[0],exps);
	//点击切换经验类别加载对应数据
	var subjects = document.getElementsByClassName('subject');

	for(var i = 0;i<subjects.length;++i){
			(function(i){
					eventUtil.addHandler(subjects[i],'click',function(){
					exps.innerHTML = '';
					//替换部分
					experience_selected(subjects[i],true);
					
					var j = 0;
					while(j < subjects.length){
						if(j != i){
							experience_selected(subjects[j],false);
						}
						++j;
					}
					console.log(exp_file[i][0]);
					loadExp(exp_file[i],exps);

				})
			})(i);
			
		}
	//点击发表界面
	eventUtil.addHandler(newEx,'click',function(){
			ifHide(mask,true);
		});
	//end********************************
	//模拟select事件
	imsSelect();
	//end********************************
	//点击关闭界面
	eventUtil.addHandler(close,'click',function(){
			ifHide(mask,false);
		});
	//end********************************

	//点击显示表情
	eventUtil.addHandler(emoijBtn,'click',function(event){
		event = eventUtil.getEvent(event);
		eventUtil.stopPropagation(event);
		ifHide(emoij,true);	
	});
	eventUtil.addHandler(emoij,'click',function(event){
		event = eventUtil.getEvent(event);
		eventUtil.stopPropagation(event);
	});
	//emoij隐藏
	eventUtil.addHandler(document.body,'click',function(){
		ifHide(emoij,false);
		});
	//end ******************************

	//点击红框
	highlightBorder(texts);
	//end*********************************


	//点击表情显示在文本框
	var emoijs = emoij.getElementsByTagName('span');
	var textarea = document.getElementsByClassName('textarea')[0];
	for(i = 0;i < emoijs.length;++i){
		eventUtil.addHandler(emoijs[i],'click',function(){
			textarea.value += this.innerHTML;
		});
	}
	
	//end*******************************


}//end of onload




//元素是否选中
function experience_selected(node,bool){
  if(bool){
    node.style.background = "white";
    node.style.color = "#666";
  }else{
    node.style.background = "#666";
    node.style.color = "white";
  }
}//end

//加载经验
function loadExp(files,parNode){
	
	for(var i = 0;i < files.length;++i){
		var div = document.createElement('div');
		div.className = "item";
		div.innerHTML = "<li class='time'>"+files[i].date+"</li><li class='theme'><a href='detailExp.html' title='"+files[i].topic+"'>"+files[i].topic+"</a></li><li class='author'><i class='icon-s icon_user'></i><a href='detailUser.html'>"+files[i].user+"</a></li></ul>";
	
	parNode.appendChild(div);
	}
}//end of loadExp
