 function lang(onSubmit){
     var text="";
    for(var i=0;i<document.onSubmit.allang.length;i++){
        if(document.onSubmit.allang[i].checked==true){
            text += document.onSubmit.allang[i].value+",";
        }

    } 
    alert(text);
 }
