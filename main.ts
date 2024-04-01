

import inquirer from "inquirer"

let myBalance =10000; //dollar
let myPin =1234;

  let pinAnswer = await inquirer.prompt(
    {
        name:"pin",
        message: "enter your pin",
        type: "number",
    }
);

if (pinAnswer.pin === myPin){
    console.log("your pin is correct!!!");

    let operationAns = await inquirer.prompt([
        {
            name:"operation",
            message:"please select option",
            type:"list",
            choices:["withDraw","fastCash","checkBalance"],
        }
    ]
    
    );
    if (operationAns.operation === "withDraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"enter your amount",
                    type:"number",
                }
            ]
        )
        if (amountAns.amount <= myBalance){
            let balance = myBalance - amountAns.amount;
            console.log(`the remaining balance is ${balance}`);
        }
        else{
            console.log(`you have insufficient balance`);
        }
    }
else if (operationAns.operation === "fastCash" ){
    let  fastCashAns = await inquirer.prompt ([
        {
            name: "amount",
        type: "list",
           choices: ["1000","2000","3000","4000"]
        }
    ]

    );
    if (fastCashAns.amount <= myBalance){
        let balance2 =myBalance -fastCashAns.amount;
        console.log(`the remaining balance is ${balance2}`);
    }
    console.log(`you have insufficient balance`);
}
else if(operationAns.operation === "check balance"){
    console.log(myBalance);
}

 
}

else{
   console.log(`your pin is wrong`);
}


    

        
        
            
        
    





    
    
    
    
        
    
