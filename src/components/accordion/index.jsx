import { useState } from 'react'
import data from './data'
import './styles.css'

export default function Accordion() {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(getCurentId){
        setSelected(getCurentId === selected ? null : getCurentId);
    }
    function handleMultiSelection(getCurentId){
        let cpyMultiple = [...multiple]
        if(cpyMultiple.includes(getCurentId)){
            cpyMultiple = cpyMultiple.filter(item => item !== getCurentId)
        }else{
            cpyMultiple.push(getCurentId)
        }
        setMultiple(cpyMultiple)
        setEnableMultiSelection(getCurentId === selected ? null : getCurentId);
    }

    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multiple Selection</button>
            <div className='accordion'>
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className='item' key={dataItem.id}>
                            <div className='title' onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>
                                <h2>{dataItem.question}</h2>
                                <span>+</span>
                            </div>
                            {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 && <div className='content'>{dataItem.answer}</div>}
                        </div>
                    ))
                ) : (
                    <p>No data found</p>
                )}
            </div>
        </div>
    )
}

