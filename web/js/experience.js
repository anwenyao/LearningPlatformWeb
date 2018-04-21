window.onload =function(){
	experience_event();
	var close = document.getElementById('close');
	var mask = document.getElementsByClassName('mask')[0];
	var newEx = document.getElementsByClassName('new')[0];
	var emoijBtn = document.getElementsByClassName('emoijBtn')[0];
	var newExp = document.getElementsByClassName('newExp')[0];
	var emoij = document.getElementsByClassName('emoij')[0];
	var texts = document.getElementsByClassName('text');
	//点击发表界面
	eventUtil.addHandler(newEx,'click',function(){
			ifHide(mask,true);
		});
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
	eventUtil.addHandler(newExp,'click',function(){
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
			// console.log(textarea.value);
			textarea.value += this.innerHTML;
		});
	}
	
	//end*******************************


}//end of onload

//experience.html
function experience_event(){
	var subjects = document.getElementsByClassName('subject');
	var mains = document.getElementsByClassName('main');

	for(var i = 0;i<subjects.length;++i){
			(function(i){
					eventUtil.addHandler(subjects[i],'click',function(){
					//替换部分
					experience_selected(subjects[i],true);
					ifHide(mains[i],true);
					var j = 0;
					while(j < subjects.length){
						if(j != i){
							experience_selected(subjects[j],false);
							ifHide(mains[j],false);
						}
						++j;
					}

				})
			})(i)
			
		}
		
}// experience.html end



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
