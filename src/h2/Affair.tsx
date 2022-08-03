import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div>
            <div className={s.affair}>
                <div>{props.affair.name}</div>
                <div>{props.affair.priority}</div>
            </div>
            <div>
                <button onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
