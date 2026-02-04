import { useState } from 'react'
import img from '../public/pngtree-notebook-binder-study-paper-vector-png-image_9320171.png'
import { X } from 'lucide-react';

const App = () => {

  const [Title, setTitle] = useState("")
  const [Details, setDetails] = useState("")
  const [Task, setTask] = useState([])
  
  const handleAddNote = (e) => {
    e.preventDefault();

    setDetails("");
    setTitle("");
    setEmpty("");
    console.log(Title);
    console.log(Details);
    console.log("Form Submitted");

    // const copyTask = [...Task];
    // copyTask.push({ Title, Details });
    // setTask(copyTask);
    // or
    setTask([...Task, { Title, Details }]);

    console.log(Task);
  }   

  const handleDelete = (index) => {
    const updatedTasks = Task.filter((_, i) => i !== index);
    setTask(updatedTasks);
    console.log("Note Deleted");
  }

  return (
    <div className="bg-grey-50 min-h-screen flex flex-col items-center pt-10">
      <form
        onSubmit={handleAddNote}
        className="px-4 sm:px-8 w-full max-w-6xl">

        <div className="flex items-center justify-center">
          <h1 className="flex justify-center content-center text-3xl sm:text-4xl bg-amber-200 underline p-4 px-5 rounded-2xl font-bold">
            My Notes 
          </h1>
        </div>

        <div
          className="flex flex-col lg:flex-row w-full items-center lg:items-start justify-between mt-10 gap-6">

          <div className="w-full lg:w-1/2 flex flex-col gap-4">

          {/* Notes title */}
            <input
              className="bg-amber-50 border-2 font-medium border-green-500 rounded-sm w-full p-2"
              type="text"
              placeholder="Enter Your Task"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}  
            />

            {/* Notes details */}
            <textarea
              className="bg-amber-50 border-2 font-medium border-green-500 rounded-sm w-full p-2 h-40 resize-none"
              placeholder="Enter Details"
              value={Details}
              onChange={(e) => setDetails(e.target.value)}
            />

            {/* Add Notes Button */}
            <button
              className="bg-green-500 cursor-pointer font-medium w-full sm:w-40 active:scale-99 text-white p-2 active:bg-green-400 rounded-2xl mt-4">
              Add Note
            </button>
          </div>

          <img
            src="https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL3Jhd3BpeGVsb2ZmaWNlN193cml0aW5nX3NpbGhvdWV0dGVfY2xpcF9hcnRfaXNvbGF0ZWRfb25fd2hpdGVfYl83NjMyZWIwMS04MjkzLTQ4OGMtYjdlOC02OTY5MDk5MzM2MjBfMS5qcGc.jpg"
            alt="Notes"
            className="hidden rotate-y-180 lg:block w-2/5 h-auto p-4"/>
        </div>
      </form>

      {/* Notes Display Section */}
      <div className="mt-10 bg-amber-50 w-full rounded-2xl">
        <div className="text-2xl font-bold mt-10 flex justify-center content-center underline rounded-2xl bg-amber-200 p-4 w-fit mx-auto">
          <h2 className="">Recent Notes</h2>
        </div>

        <div className='flex flex-wrap flex-row justify-center overflow-auto scroll-auto  mb-0  mt-6'>
      {Task.length === 0 && (
      <p className="text-center text-2xl font-semibold w-full">
        You have not added any notes yet.
      </p>
    )}

    {Task.slice().reverse().map((note, index) => (  //slice() - to create a copy of the array before reversing it || reverse() - to display the latest notes first 
  <div 
    key={Task.length - 1 - index} 
    className='bg-amber-100 h-50 w-40 flex rounded-2xl flex-row m-4 overflow-y-auto shadow-lg hover:shadow-2xl transition-shadow duration-300' 
    style={{ 
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      opacity: '0.7',
    }}
  >
    <div className="relative px-2 py-0.5 ">
      <div className="ml-30 justify-end">
      <button onClick={() => handleDelete(Task.length - 1 - index)} className="cursor-pointer p-1 active:scale-90 bg-red-500 rounded-full"> <X size={20}  strokeWidth={3} absoluteStrokeWidth /></button> 
      </div>
      <h2 className="flex-wrap text-lg font-bold mb-2">{note.Title}</h2>
      <p className="flex-wrap text-sm break-words">{note.Details}</p>
    </div>
  </div>
))}
        </div>
        

        <footer>
        <h4 className="bg-green-300 text-center mt-6 mb-0 font-medium">© 2024 NotesApp. All rights reserved.</h4>
        </footer>
      </div>
    </div>
  )
}

export default App
