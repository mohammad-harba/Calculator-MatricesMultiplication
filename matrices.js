function createDrops() {

    let sizeOfmatrix = document.getElementById("sizeOfMatrix").value;
    console.log(sizeOfmatrix);



    //Reset Drop Values
    let j = 0 ; 
    while(document.getElementsByClassName("drop")[j] != undefined){

        
        let i = 1;
        while(i <= sizeOfmatrix){

            document.getElementsByClassName("drop")[j].innerHTML +="";
            
            i++;

        }
        j++
    } 

      


    //Initialise the values inside drop menue 
    j = 0 ; 
    while(document.getElementsByClassName("drop")[j] != undefined){

        
        let i = 1;
        while(i <= sizeOfmatrix){

            document.getElementsByClassName("drop")[j].innerHTML +="<option value="+i+" class="+"numberOfRaws"+j+">"+i+"</option>";
            
            i++;

        }

        j++;
    }

}











let e1 = document.getElementById("drop1")
let numberOfRows;

let e2 = document.getElementById("drop2")
let numberOfColumns ;


let e3 = document.getElementById("drop3")
let numberOfRows1 ;

let e4 = document.getElementById("drop4")
let numberOfColumns1 ;




function showTables(){

    numberOfRows= e1.options[e1.selectedIndex].value;
    numberOfColumns = e2.options[e2.selectedIndex].value;
    numberOfRows1 = e3.options[e3.selectedIndex].value;
    numberOfColumns1 =e4.options[e4.selectedIndex].value;


    //Remove Tables

    document.getElementById("mat1C").innerHTML="";
    document.getElementById("mat2C").innerHTML="";
    document.getElementById("mat3C").innerHTML="";

    document.getElementById("drop2").style.backgroundColor= "";
    document.getElementById("drop3").style.backgroundColor= "";



    // Check for the validity of multiplication

    if(numberOfColumns == numberOfRows1){
        
   
        
        creatTables(numberOfRows,numberOfColumns,numberOfRows1,numberOfColumns1);


    }else{
        alert("-To multiply two matrices , number of columns of first matrix should match number of rows of second matrix"+"\n\n"+
        "-Number of rows of the second matrix will be adjusted automatically to "+numberOfColumns);

        numberOfRows1=numberOfColumns;
        document.getElementById("drop3").value= numberOfColumns;
        document.getElementById("drop2").style.backgroundColor= "yellow";
        document.getElementById("drop3").style.backgroundColor= "yellow";

        

        creatTables(numberOfRows,numberOfColumns,numberOfRows1,numberOfColumns1);

    }



}

//function for creating tables with random values

let setValues="";
function random(){
    setValues = true;
    showTables();
}





// Function to creat the tables

function creatTables(numberOfRows , numberOfColumns , numberOfRows1 , numberOfColumns1 ){


    //checking is random values need to be added
    if (typeof setValues == "") setValues =  false;
    

    //Creation of First Table
        
    for(i=0;i<numberOfRows;i++){

        document.getElementById("mat1C").innerHTML += "<tr class="+"rows"+"></tr>";
    
    }
    
    
    for(j=0;j<numberOfRows;j++){
        for(i=0;i<numberOfColumns;i++){
            let randValue = setValues ? Math.ceil(100*Math.random())-50:"";
            console.log(randValue);
            document.getElementsByClassName("rows")[j].innerHTML += "<td><input class="+"'tableOneInput"+j+" inputValue'"+ 
            " value='"+randValue+"'"+" type="+
            "number"+"></td>";
            
        }
            
    } 





    //Creation of Second Table
    
    for(i=0;i<numberOfRows1;i++){

        document.getElementById("mat2C").innerHTML += "<tr class="+"rows1"+"></tr>";
    
    }
    
     
    
    for(j=0;j<numberOfRows1;j++){
        for(i=0;i<numberOfColumns1;i++){
            let randValue = setValues ? Math.ceil(100*Math.random())-50:"";
            document.getElementsByClassName("rows1")[j].innerHTML += "<td><input class="+"'tableTwoInput"+j+" inputValue'"+
            " value='"+randValue+"'"+" type="+"number"+"></td>";
            
        }
            
    }  
    //reset random values parameter
    setValues="";

}







    

 
 
    
    
    
   
    
    
    

function multiply() {

    //remove old table(if existed)
    document.getElementById("mat3C").innerHTML="";
        

    // Create Matrix1 

    var matrix1  = new Array(numberOfRows); 
      
    
    
      
    // Loop to create 2D array using 1D array 
    for (var i = 0; i < numberOfRows; i++) { 
        matrix1[i] = new Array(numberOfColumns1); 
    } 
    
    
    var myLog;
    // Loop to initilize 2D array elements from filled tables
    for (var i = 0; i < numberOfRows;i++ ) { 
        for (var j = 0; j < numberOfColumns; j++) { 
            myLog = document.getElementsByClassName("tableOneInput"+i)[j].value; 
            matrix1[i][j] = myLog;

            console.log("matrix1["+i+"]"+"["+j+"] :"+matrix1[i][j]);
        } 
    }  

/*********************************************** */


    // Create  Matrix2 

    var matrix2  = new Array(numberOfRows1); 
        
        
    // Loop to create 2D array using 1D array 
    for (var i = 0; i < numberOfRows1; i++) { 
        matrix2[i] = new Array(numberOfColumns1); 
    } 
    
    
    // Loop to initilize 2D array elements from filled tables 
    for (var i = 0; i < numberOfRows1;i++ ) { 
        for (var j = 0; j < numberOfColumns1; j++) { 
            //console.log("take value from table two input row ["+i+"] and column :"+j);
            myLog = document.getElementsByClassName("tableTwoInput"+i)[j].value; 
            matrix2[i][j] = myLog;

            console.log("matrix2["+i+"]"+"["+j+"] :"+matrix2[i][j]);
        } 
    } 

         
 

      /********************************************** */


        // Create Result Matrix 
    var result  = new Array(numberOfRows); 
      
    console.log("Creating Result Matrix "); 
    
      
    // Loop to create 2D array using 1D array 
    for (var i = 0; i < numberOfRows; i++) { 
        result[i] = new Array(numberOfColumns1); 
    } 
    
    
    
    // Loop to initilize 2D array elements with zeros.
    for (var i = 0; i < numberOfRows;i++ ) { 
        for (var j = 0; j < numberOfColumns1; j++) { 
            result[i][j] = 0; 
            console.log(result[i][j]);
        } 
    } 

    /****************************************** */
        
     console.log("Result:-");
      
    // Multiply matrix1 to matrix2 and show the result.  
    for (var i = 0; i < numberOfRows; i++) { 
    
        for (var j = 0; j < numberOfColumns1; j++)    { 
        
                for(var k = 0; k < numberOfColumns; k++ ){
                    result[i][j] += matrix1[i][k]*matrix2[k][j];
                    
                }
                console.log(result[i][j]);   
                
            } 
    }




    /******************************************** */

    //Creation of result table
        
    for(i=0;i<numberOfRows;i++){

        document.getElementById("mat3C").innerHTML += "<tr class="+"rows2"+"></tr>";
    
    }
    
    
    for(j=0;j<numberOfRows;j++){
        for(i=0;i<numberOfColumns1;i++){
            document.getElementsByClassName("rows2")[j].innerHTML += "<td class="+"rows3"+">"+result[j][i]+"</td>";
            
        }
            
    } 

 
}    

 

 
 


 
      


