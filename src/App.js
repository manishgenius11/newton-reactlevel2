import React, { useState } from 'react';






function App(){
    const [data,setdata] = useState("hello world")
const [Padding,setpadding] = useState(5)
const [font,setfont] = useState(10)


return(
<>
<lable>Content</lable>
<input id="contentInput" onChange={(e)=>setdata(e.target.value)}></input> 
<br/>
<lable>Padding</lable>
<input id= "paddingInput"  type="number" min="5" onChange={(e)=>setpadding(e.target.value)}></input>
<br/>
<lable>Font Size</lable>
<input id= "fontSizeInput" type="number" min="10" onChange={(e)=>setfont(e.target.value)}></input>

<div style={{
  padding:`${Padding}px`,
  fontSize:`${font}px`,
 
  
  }}>
<span >
          {data}
        </span>
  </div>






</>




)
}

export default App;
