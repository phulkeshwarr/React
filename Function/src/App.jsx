import React from 'react'

const App = () => {

  function inputChange(elem) {
    console.log("You are Typing....");
    console.log(elem);
    console.log(elem.target.value);
  }

  const btnClick = () => {
    console.log("Button clicked");
  }

  const changeOnType = (elem) => {
    console.log("User is typing");
    console.log(elem);
    console.log(elem.target.value);
  }

  function mouseMoveEvent(elem) {
    console.log("Mouse is moving");
    console.log(elem);
    console.log(`X Position - ${elem.clientX} , Y Position - ${elem.clientY}`);
  }

  function pageScrollEvent(elem) {
    console.log("Page is scrolling");
    console.log(elem);
    console.log(`X Position - ${elem.scrollX} , Y Position - ${elem.scrollY}`);
    console.log(`Delta X - ${elem.deltaX} , Delta Y - ${elem.deltaY}`);
    console.log(`Direction - ${elem.deltaY > 0 ? 'Down' : 'Up'}`);
  }

    return (
    <div >
      <div className='aio' onMouseMove={mouseMoveEvent}></div>

      <input type="text" onChange={function(value) 
        {inputChange(value)}
      } placeholder='Write Something here'/>                                      {/* when input value changes */}

      <button onClick={btnClick}>Click me </button>
      <br />
      <button onDoubleClick={btnClick}>Double Click me</button>
      <br />
      <button onContextMenu={btnClick}>Right Click me</button>
      <br />
      <button onMouseDown={btnClick}>Mouse Down</button> {/* when mouse button is pressed */}
      <br />
      <button onMouseUp={btnClick}>Mouse Up</button>  {/* when mouse button is released */}
      <br />
      <button onMouseEnter={btnClick}>Mouse Enter</button> {/* when mouse enters the button area */}
      <br />
      <button onMouseLeave={btnClick}>Mouse Leave</button> {/* when mouse leaves the button area */}
      <br />
      <input type="text" onFocus={btnClick} placeholder="Focus on me"/> {/* when input field is focused */}
      <br />
      <input type="text" onBlur={btnClick} placeholder="Blur from me"/> {/* when input field loses focus */}
      <br />
      <input type="text" onChange={changeOnType} placeholder="Change me"/> {/* when input value changes */}
      <br />
      <form onSubmit={(e) => { e.preventDefault(); btnClick(); }}>
        <button type="submit">Submit</button>
      </form>
      <br />
      <input type="text" onChange={function (elem) {changeOnType(elem)}} placeholder="Type something" />
      <div onWheel={(elem) => {pageScrollEvent(elem)}}>
      <div className='page1'></div>
      <div className='page2'></div>
      </div>
    </div>
  )
}

export default App
