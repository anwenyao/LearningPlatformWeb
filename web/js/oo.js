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
  function highlightBorder(){

    var inputs = document.getElementsByTagName('input');
    //将HTMLCollection转换为数组
    var hbs = Array.prototype.slice.call(inputs);
    var textareas = document.getElementsByTagName('textarea');
    Array.prototype.push.apply(hbs,Array.prototype.slice.call(textareas));
      for(var i = 0;i < hbs.length;++i){
        eventUtil.addHandler(hbs[i],'focus',function(){
          this.style.borderColor = "red";
         });
        eventUtil.addHandler(hbs[i],'blur',function(){
          this.style.borderColor = "#ccc";
        });
      }
  }
  //end********************************


  //模拟select
function imsSelect(){
  var select = document.getElementsByClassName('re-select')[0];
  var options = document.getElementsByClassName('re-options')[0];
  var option = document.getElementsByClassName('re-option');
  eventUtil.addHandler(select,'click',function(event){
    event = eventUtil.getEvent(event);
    eventUtil.stopPropagation(event);
    if (options.style.display == 'block') {
      options.style.display = 'none';
    }else{
      options.style.display = 'block';
    }
  });
  eventUtil.addHandler(document.body,'click',function(){
    console.log(select.parentNode);
    options.style.display = 'none';
  });

  for(var i = 0;i < option.length;++i){
    eventUtil.addHandler(option[i],'click',function(){  
     this.parentNode.parentNode.getElementsByClassName('re-selected')[0].innerHTML = this.innerHTML;
    });
  }
}
  //end
