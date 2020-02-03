function textboxClick(onSubmit){
    alert("hello, "+ document.onSubmit.firsttextbox.value);
}

function radioClick(onSubmit){
    for(var i=0;i<document.onSubmit.gender.length;i++){
        if(document.onSubmit.gender[i].checked){
            alert(document.onSubmit.gender[i].value);
            return;
        }

    } 
 }

 function checkboxClick(onSubmit){
     var text="";
    for(var i=0;i<document.onSubmit.language.length;i++){
        if(document.onSubmit.language[i].checked==true){
            text += document.onSubmit.language[i].value+",";
        }

    } 
    alert(text);
 }

 function courseClick(onSubmit){
    
            alert(document.onSubmit.course.value);
            return;
        

    }
 
 
        var myWindow;

        function openWin() {
            myWindow = window.open("", "myWindow", "width=200,height=100");
            myWindow.document.write("<p>This is 'myWindow'</p>");
          }

        function closeWin() {
        myWindow.close();
        }

        function resizeWin() {
            
        myWindow.resizeTo(200, 250);
        myWindow.focus();
        }

