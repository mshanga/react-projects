import { useState } from 'react'
import data from './data'

export default function Accordion() {
    const [selected, setSelected] = useState(null)

    function handleSingleSelection(getCurentId){
        setSelected(getCurentId === selected ? null : getCurentId);
    }

    return (
        <div className='wrapper'>
            <div className='accordion'>
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className='item' key={dataItem.id}>
                            <div className='title' onClick={() => handleSingleSelection(dataItem.id)}>
                                <h2>{dataItem.question}</h2>
                                <span>{selected === dataItem.id ? '-' : '+'}</span>
                            </div>
                            {selected === dataItem.id && <div className='content'>{dataItem.answer}</div>}
                        </div>
                    ))
                ) : null}
            </div>
        </div>
    )
}

