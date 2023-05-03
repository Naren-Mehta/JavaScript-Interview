
// Questions:
// 1. diff b/w var, let & const
// 2. Hoiesting
// 3. what is global and block scope (Variable Scope)
// 4. Variable Shadowing && Illegal Shadowing
// 5. JavaScript Execution Context
// 6. Temporal Dead Zone


// Find the output

function ab() {
    console.log(a);

    var a = 10;
}

ab();


// Find the output

// function abc() {
//     console.log(a, b, c);

//     var a = 10;
//     let b = 20;
//     const c = 30;
// }

// abc();

// Find the output

var temp= 'hi';
function display(){
    console.log(temp);
    var temp = 'bye';
};
display();