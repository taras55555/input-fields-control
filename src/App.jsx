import { useState } from "react"

function App() {
  const deleteIconPath = '/delete_forever_24.svg'

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
            <section className="text-center p-4 flex justify-between flex-wrap" key={index}>
              <div className="w-full md:w-[43%] mb-6 md:mb-0">
                <label className="text-left block tracking-wide text-gray-700 text-sm font-bold mb-2">
                  key
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  value={fields[index][0]}
                  onChange={e => {
                    const newFields = [...fields]
                    console.log(newFields)
                    newFields[index] = [e.target.value, newFields[index][1]]
                    setFields(newFields)
                  }} />
              </div>
              <div className="w-full md:w-[43%] mb-6 md:mb-0">
                <label className="text-left block tracking-wide text-gray-700 text-sm font-bold mb-2">
                  value
                </label>
                <input
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  value={fields[index] ? fields[index][1] : ""}
                  onChange={e => {
                    const newFields = [...fields]
                    console.log(newFields)
                    newFields[index] = [newFields[index][0], e.target.value]
                    setFields(newFields)
                  }} />
              </div>

              <div className="w-30 flex items-end mb-6 md:mb-0">
                <button
                  className="appearance-none bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 border leading-tight border-red-700 rounded"
                  onClick={(e) => {
                    e.preventDefault()
                    setFields((cFields) => cFields.filter((_, i) => i !== index))
                    setFieldsCounter(cCounter => --cCounter)
                  }}>
                  <img src={deleteIconPath} />
                </button>
              </div>
            </section>
          ))}

          <section className="text-center p-4">
            <button
              className="bg-blue-500 w-60 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              onClick={() => { setFieldsCounter(cCounter => ++cCounter), setFields(cFields => [...cFields, ['', '']]) }}
            >
              New Field
            </button>
          </section>

        </form>
      </section>
    </main >
  )
}

export default App
