import { useState } from "react"
import SingleComponents from "./conponents/SingleComponent"
import MultipleComponents from "./conponents/MultipleComponent"

function App() {
  const [fildsCounter, setFieldsCounter] = useState(0)
  const [fields, setFields] = useState([])

  return (
    <main className="container mx-auto max-w-screen-md p-4">

      <section className="text-center">
        <form className="text-center border-2 border-blue-200 w-full bg-blue-100 rounded" onSubmit={(e) => { e.preventDefault() }}>

          <section className="text-center p-4 text-gray-500 font-bold text-2xl">
            <h1>Fields Controller</h1>
          </section>

          {Array.from({ length: fildsCounter }).map((_, index) => (
            !(fields[index][1] instanceof Array)
              ? <SingleComponents key={index} props={{ fildsCounter, setFieldsCounter, fields, setFields, index }} />
              : (fields[index][1].length > 0 && (<MultipleComponents key={index} props={{ fildsCounter, setFieldsCounter, fields, setFields, index }} />))
          ))}

          <section className="text-center p-4 flex flex-wrap justify-around gap-10">
            <button
              className="bg-blue-500 w-60 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              onClick={() => { setFieldsCounter(cCounter => ++cCounter), setFields(cFields => [...cFields, ['', '']]) }}
            >
              New Single Field
            </button>

            <button
              className="bg-blue-500 w-60 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              onClick={() => { setFieldsCounter(cCounter => ++cCounter), setFields(cFields => [...cFields, ['', [{'key': '', 'value': ''}]]]) }}
            >
              New Multiple Field
            </button>
          </section>

          <section className="text-center p-4">
            
          </section>

        </form>
      </section>
    </main >
  )
}

export default App
