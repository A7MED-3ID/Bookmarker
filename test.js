
    let sites;

    if (localStorage.getItem("sites")==null)
    {
         sites = [];

         
       
    
    }
    
    else{
        sites = JSON.parse( localStorage.getItem("sites"));
    }

   


let siteNamee = document.getElementById("siteName");
let siteUrll = document.getElementById("siteUrl");






displayData();



function displayData(){

    let content ="";

    for (let i = 0 ; i <sites.length ; i++){
       
    content+= `
       <div class = "webwell row">
       <h2>${sites[i].name} </h2>
       <a class="btn btn-primary" href="http://${sites[i].url}" target="_blank">visit</a>

       <button class="btn btn-danger btndelete" onclick ="deleteSite(${i})"> Delete</button>

       <button class="btn btn-info btndelete" onclick ="updateSite(${i})"> Update</button>

       </div>
    `
    
    }

    document.getElementById("bookmarkList").innerHTML= content;
  

    
}




function check(){

    siteName = siteNamee.value;
    siteUrl = siteUrll.value;

    let name = false;
    let url = false;

    
    if(siteName==="" && siteUrl===""){
        document.getElementById("nameError").style.display = "block";
        document.getElementById("nameError").innerHTML = "Name is required";

        document.getElementById("urlError").style.display = "block";
        document.getElementById("urlError").innerHTML = "Url Field is required";
        
    }
     if(siteName===""){

        document.getElementById("nameError").style.display = "block";
        document.getElementById("nameError").innerHTML = "Name is required";
    }
    if (siteUrl===""){
        
        document.getElementById("urlError").style.display = "block";
        document.getElementById("urlError").innerHTML = "Url Field is required";

    }

    if(siteName!==""){
        document.getElementById("nameError").style.display = "none";
        name =true;
       
    }

    if (siteUrl!==""){
        document.getElementById("urlError").style.display = "none";
        url = true;

    }

    if(name ===true && url ===true){
        return true;

    }
    else{
        return false;
    }
  



}



function submit(){
  
   check();
    if(check()){
        const item = {
            "name":siteName,
            "url":siteUrl
        };

        
        sites.push(item);

       

        localStorage.setItem("sites", JSON.stringify( sites));
        displayData();

        clear();
        

    }

   
 

}





function deleteSite(index){
    sites.splice(index,1);
    localStorage.setItem("sites", JSON.stringify( sites));
    displayData();
}

    













let myBtn = document.getElementById("btn");
myBtn.onclick = submit;






function updateSite(index){


  
        let name = sites[index].name;
        let url = sites[index].url;
       

    


         siteNamee.value = name;
         siteUrll.value = url;

         myBtn.innerHTML = "Update Site";

         myBtn.onclick = function(){

            


            sites[index].name = siteNamee.value; 
            sites[index].url =  siteUrll.value;
          

           
            localStorage.setItem("sites", JSON.stringify( sites));


           clear();
            displayData();

            
            


        

         myBtn.innerHTML = "Submit";

            
         };
      
    
}


function clear(){

    siteNamee.value = "";
    siteUrll.value = "";

}

