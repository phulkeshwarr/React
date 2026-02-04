import { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddNote = (e) => {
    e.preventDefault();

    if (!title.trim() || !details.trim()) return; // ✅ prevent empty notes

    setTasks([...tasks, { title, details }]);
    setTitle("");
    setDetails("");
  };

  const handleDelete = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-10 bg-amber-50">
      <form onSubmit={handleAddNote} className="px-4 sm:px-8 w-full max-w-6xl">

        <div className="flex justify-center">
          <h1 className="text-3xl sm:text-4xl bg-amber-200 p-4 rounded-2xl font-bold">
            My Notes
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mt-10">

          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <input
              className="bg-amber-50 border-2 border-green-500 rounded-sm p-2"
              placeholder="Enter Your Task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="bg-amber-50 border-2 border-green-500 rounded-sm p-2 h-40 resize-none"
              placeholder="Enter Details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />

            <button className="bg-green-500 text-white p-2 rounded-2xl w-full sm:w-40">
              Add Note
            </button>
          </div>

          <img
            src="/pngtree-notebook-binder-study-paper-vector-png-image_9320171.png"
            alt="Notes"
            className="hidden lg:block w-2/5 p-4"
          />
        </div>
      </form>

      {/* NOTES DISPLAY */}
      <div className="mt-10 w-full max-w-6xl">

        <h2 className="text-2xl font-bold text-center underline bg-amber-200 p-4 rounded-2xl w-fit mx-auto">
          Your Notes
        </h2>

        {tasks.length === 0 && (
          <p className="text-center text-xl mt-6">
            You have not added any notes yet.
          </p>
        )}

        <div className="flex flex-wrap justify-center mt-6">
          {tasks.map((note, index) => (
            <div
              key={index}
              className="bg-amber-100 w-60 p-4 rounded-2xl shadow-lg m-4 relative"
              style={{
                backgroundImage: "url('/pngtree-notebook-binder-study-paper-vector-png-image_9320171.png')",
                backgroundSize: 'cover'
              }}
            >
              <button
                onClick={() => handleDelete(index)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
              >
                <X size={16} />
              </button>

              <h3 className="font-bold text-lg">{note.title}</h3>
              <p className="mt-2 text-sm break-words">{note.details}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-green-300 w-full text-center mt-6 p-2 font-medium">
        © 2024 NotesApp. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
