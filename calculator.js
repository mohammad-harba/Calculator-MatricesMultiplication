  let result ;
  let temporaryNumber="" ;
  let firstNumber ;
  let secondNumber;
  let operation;
  let i = 0;





        function doFunction(pressed) {



            let input =  pressed.value;

            if(result != undefined && !isNaN(input)  && operation==""){
                
                document.getElementById("temporaryValue").value=null;
                result=undefined;
                firstNumber = "";
                secondNumber = "";
                temporaryNumber = "";
                i=0; 
            } 

            document.getElementById("temporaryValue").value += input;

               
            if(!isNaN(input) || input=="."){
                 temporaryNumber +=input;
                 console.log(temporaryNumber);
                 
            }
         
            

           if( input == "*" || input == "+" || input == "-" || input =="/"|| input == "%" || input =="C"){  

            

                if (i==0){

                    firstNumber=temporaryNumber;
                    temporaryNumber="";
                    operation = input;                                       
                    ++i;
                }else{
                    firstNumber=result;
                    temporaryNumber=""
                    operation=input;
                }
                console.log(operation);
                console.log(firstNumber);
                
            
             }   

                if (input == "="){
                    secondNumber = temporaryNumber;
                    firstNumber = Number(firstNumber);
                    secondNumber = Number(secondNumber);
                    
                    
                    if(operation == "+"){
                        add();
                    }else if(operation == "-"){
                        subtract();
                    }else if(operation == "*"){
                        multiplication();
                    }else if(operation == "/"){
                        division();
                    }else if(operation == "%"){
                        remainder();
                    }
                    operation="";
                    
                
             }
             if(input == "C"){
                document.getElementById("temporaryValue").value =  null;
                i=0;
                firstNumber = "";
                secondNumber = "";
                temporaryNumber = "";
             }
            

             
        } 

        function add (){

             result = firstNumber + secondNumber;
             document.getElementById("temporaryValue").value = result;
             
              

        }    
        
        function subtract (){
            result = firstNumber- secondNumber ;
            document.getElementById("temporaryValue").value = result;
            
        }

        function multiplication (){
            result = firstNumber * secondNumber ;
            document.getElementById("temporaryValue").value = result;
            

        }

        function division (){
            result = firstNumber / secondNumber ;
            document.getElementById("temporaryValue").value = result;
            
        }

        function remainder(){
            result = firstNumber % secondNumber;
            document.getElementById("temporaryValue").value = result;
            
        }



      
    

  

  


