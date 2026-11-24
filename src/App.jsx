// import React, { useState } from 'react'

// function App() {
//     const [length , setLenght] =useState(8);
//     const [numbersAllowed , setNumbersAllowed] = useState(false);
//     const [characterAllowed , setCharacterAllowed] = useState(false);
//     const [password , setPassword] =useState("")
//   return (
//     <div>
//       <h1 className='text-4xl text-center text-white'>password changer</h1>
//     </div>
//   )
// }

// export default App





/*
const characters = "ABCDEF012345";
let password = "";

for (let i = 0; i < 5; i++) {

    // Step 1: Generate a random index
    let randomIndex = Math.floor(
        Math.random() * characters.length
    );

    // Step 2: Select a random character
    let randomCharacter = characters[randomIndex];

    // Step 3: Add character to password
    password += randomCharacter;

}

console.log(password);

*/

// let randomindex = math.floor(
//   math.random() * characters.length
// );
//  let randomIndex = math.floor (
//   math.random() * character.lenght
//  );
  
//  let randomCharacter = character.length [randomIndex];
//  let randomChacter = character.length  [randomIndex];
//  let randomChacter = character.length [randomIndex];
  
//  password += randomCharacter;




//  const Character = "1234567890";
//  let password = "";

//  for (let i=0 ; i<10 ; i++){
//    const randomChacter = Math.floor(
//     Math.random() * Character.length
//     );
//      const characterIndex = Character[randomChacter];
//     password += characterIndex;
//  };
//       console.log(password);













//  const characters = "1348";
//  let password = "";

//  for (let i=0 ; i<4 ; i++){
//   const selectedChar = Math.floor(
//     Math.random() * characters.length 
//   )
//   const selectedIndex = characters[selectedChar];
//   password += selectedIndex;
//  };
//  console.log(password);



//  My final coding challenge answer:

// const characters = "ABCDEF012345";
// let password = "";
// for (let i=1 ; i<=6 ; i++){

// const randomIndex = Math.floor(
// Math.random() * characters.length);
// const  random = characters[randomIndex];
// password += random


// }
// console.log(password);


import React, { useState } from "react";


function App(){
  const [password , setPassword] =  useState("");
  const  [length , setlength ] = useState (8);
  const [includeNumbers , setIncludeNumbers] = useState(false);
  const [includeSymbols , setIncludeSymbols] =  useState(false);



  function GeneratePassword (length , includeNumbers ,includeSymbols){
  let characters  = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXYZ" ;
  if (includeNumbers){
    characters += "1234567890"
  }
  if (includeSymbols){
    characters += "_+)(*&^%$#@"
  }
let password = "" ;

for(let i=0 ; i<length ; i++){
  const randomChacter = Math.floor(Math.random()* characters.length);
  const random = characters[randomChacter];
  password += random;
};
return password;


};
 

   function handlrGeneratePassword(){
             const newPassword = GeneratePassword(length, includeNumbers, includeSymbols);
             setPassword(newPassword);
   };
    function handleCopyPassword (){
      navigater.clipboard.writeText(password);
    }



  return(
  <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900 p-4">
    <div className="w-full max-w-md item-c bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700">
     <h1 className="text-3xl font-bold text-white text-center mb-6">passsword Generater</h1>;

<input
  type="text"
    placeholder={password || "Your password will appear here..."}
  readOnly
  className="w-full bg-gray-800 text-white placeholder-gray-400 p-3 rounded-lg border border-gray-700 outline-none mb-4"
/>
    <button onClick={handlrGeneratePassword}
      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition mb-6">Generate password</button>;
    <label  className="flex items-center gap-3 text-gray-300 cursor-pointer mb-4">
      <input
       
       type="checkbox"
        checked= {includeNumbers}
         onChange={(e)=> setIncludeNumbers(e.target.checked)} />

      includeNumbers

    </label>;


    <label  className="flex items-center gap-3 text-gray-300 cursor-pointer mb-4">
     <input
     
       type="checkbox" 
       checked={includeSymbols}
       onChange={(e)=> setIncludeSymbols(e.target.checked)} />includeSymbols</label>
    
    <input type="range" min={8} max={20} value={length} onChange={(e)=>setlength(Number(e.target.value))} />
    
    
    <button onClick={handleCopyPassword} 
     className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition mb-6"> copy Password</button>
    
    
    </div>
  </div>
    
    
  
  
)}
export default App;























