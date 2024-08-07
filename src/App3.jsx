const App = ()=>{
    const x = 1 
    let y = 90 
    console.log(x,y)
    y+=90
    console.log(x,y)
    y = "Deepa is great"
    console.log(x,y)
   // x="deepa"
   const d = [2,3,4,4,42,1,2,2]
   d.push(20)
   console.log(d.length)
   d.fill(2,1,3)
   console.log(d)
   d.forEach(value=>console.log("A"+value))
   const choices = ["red","blue","pink"]
   const [x1,y1,z1] = choices.map(value => "<li>"+value+"</li>")
   console.log(x1,y1,z1)
   //defininf Objects
   const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  }
  
  const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
  }
  
  const object3 = {
    name: {
      first: 'Dan',
      last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
  }
   
   //functions
   const h1 = ()=>{console.log("i am in h1")}
   const h2 = () =>{console.log("i am going to return 2 vairables")
    let x = 90 
    let y = 23 
    return {x,y} 
   }
   //objects with functions 
   const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  
    greet: function() {
      return 'hello, my name is ' + this.name
        
    },
  }
  
  
   return (arto.greet())
}
export default App