window.onload =function(){
	experience_event();
}

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



function experience_selected(node,bool){
  if(bool){
    node.style.background = "white";
    node.style.color = "#666";
  }else{
    node.style.background = "#666";
    node.style.color = "white";
  }
}//end
