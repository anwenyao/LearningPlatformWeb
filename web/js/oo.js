//事件的添加与移除，均采用事件冒泡
//已做IE兼容
//采集自慕课网
//**传入参数：添加事件的对象、事件类型、事件触发执行的函数**
//**第一个参数为添加事件的对象 单个使用id名 多个使用class名
//**第二个为事件类型 例如click mouseover等（不要on）
//**触发的函数名
var eventUtil={
         	// 添加句柄
         	addHandler:function(element,type,handler){
               if(element.addEventListener){
                 element.addEventListener(type,handler,false);
               }else if(element.attachEvent){
                 element.attachEvent('on'+type,handler);
               }else{
                 element['on'+type]=handler;
               }
         	},
         	// 删除句柄
         	removeHandler:function(element,type,handler){
               if(element.removeEventListener){
                 element.removeEventListener(type,handler,false);
               }else if(element.detachEvent){
                 element.detachEvent('on'+type,handler);
               }else{
                 element['on'+type]=null;
               }
         	},
          getEvent:function(event){
            return event?event:window.event;
          },
          getType:function(event){
            return event.type;
          },
          getElement:function(event){
            return event.target || event.srcElement;
          },
          preventDefault:function(event){
            if(event.preventDefault){
              event.preventDefault();
            }else{
              event.returnValue=false;
            }
          },
         stopPropagation:function(event){
           if(event.stopPropagation){
             event.stopPropagation();
           }else{
             event.cancelBubble=true;
           }
         }
  }



//元素是否隐藏
function ifHide(node,bool){
  if(bool){
    node.style.display = "block";
  }else{
    node.style.display = "none";
  }
}//end


  //设置input的红边框
  function highlightBorder(inputs){
      for(var i = 0;i < inputs.length;++i){
        eventUtil.addHandler(inputs[i],'focus',function(){
          this.style.borderColor = "red";
         });
        eventUtil.addHandler(inputs[i],'blur',function(){
          this.style.borderColor = "#ccc";
        });
      }
  }
  //end********************************