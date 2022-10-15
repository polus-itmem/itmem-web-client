import {Car} from "../../models/core";

function MachineClip(props: {id: number, car: Car}) {
    return (
        <div className='machine-clip'>
            <span className='machine-clip-name'>
                Техника №<span className='machine-clip-number'>{props.id}</span>
            </span>
            <span>: </span>
            <span className='machine-clip-id'>
                {props.car.id}
            </span>
            <span> </span>
            <span className='machine-clip-description'>{props.car.name}</span>
            <span> </span>
            <span className='machine-clip-description'>{props.car.description}</span>
        </div>
    )
}

export {MachineClip}
