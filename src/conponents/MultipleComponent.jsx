export default function MultipleComponents({ props }) {

    const { fildsCounter, setFieldsCounter, fields, setFields, index } = props

    const deleteIconPath = '../delete_forever_24.svg'
    const addIconPath = '../add_2_24dp.svg'

    function multipleDeleteFieldHandler(e, i) {
        e.preventDefault()
        const currentItem = [...fields[index]]
        currentItem[1].splice(i, 1)

        if (currentItem[1].length === 0) {
            const newFields = [...fields]
            newFields.splice(index, 1)
            setFieldsCounter(fildsCounter => --fildsCounter)
            setFields(newFields)
            return
        } else {
            setFields(currentState =>
                currentState.map((cField, cIndex) =>
                (cIndex === index
                    ? currentItem
                    : cField
                )))
            return
        }
    }

    return (
        <section className="text-center p-4 flex justify-between flex-wrap flex-col" key={index}>
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
                        newFields[index] = [e.target.value, newFields[index][1]]
                        setFields(newFields)
                    }} />

            </div>

            {fields[index][1].map((field, i) => {

                const { key, value } = field

                return (
                    <div key={i} className="text-center p-4 flex justify-between flex-wrap">
                        <div className="w-full md:w-[43%] mb-6 md:mb-0">
                            <label className="text-left block tracking-wide text-gray-700 text-sm font-bold mb-2">
                                key
                            </label>
                            <input
                                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                value={key}
                                onChange={e => {
                                    const newItem = [...fields[index]]
                                    newItem[1][i] = { key: e.target.value, value }
                                    setFields(currentState => currentState.map((cField, cIndex) => (cIndex === index ? newItem : cField)))
                                }} />
                        </div>

                        <div className="w-full md:w-[43%] mb-6 md:mb-0">
                            <label className="text-left block tracking-wide text-gray-700 text-sm font-bold mb-2">
                                value
                            </label>
                            <input
                                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                value={value}
                                onChange={e => {
                                    const newItem = [...fields[index]]
                                    newItem[1][i] = { key, value: e.target.value }
                                    setFields(currentState => currentState.map((cField, cIndex) => (cIndex === index ? newItem : cField))
                                    )
                                }} />
                        </div>

                        <div className="w-30 flex items-end mb-6 md:mb-0">
                            <button
                                className="appearance-none bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 border leading-tight border-red-700 rounded"
                                onClick={(e) => multipleDeleteFieldHandler(e, i)}>
                                <img src={deleteIconPath} />
                            </button>
                        </div>


                    </div>
                )
            })}

            <div className="w-30 flex items-end mb-6 md:mb-0">
                <button
                    className="appearance-none bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 border leading-tight border-green-700 rounded"
                    onClick={(e) => {
                        e.preventDefault()
                        const currentItem = [...fields[index]]
                        currentItem[1].push({ key: '', value: '' })
                        setFields(currentState => currentState.map((cField, cIndex) => (cIndex === index ? currentItem : cField)))
                    }}>
                    <img src={addIconPath} />
                </button>
            </div>

        </section>
    )
}