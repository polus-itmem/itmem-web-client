import {Machine} from "../../models/core";

function MachineClip(props: {id: number, machine: Machine}) {
    return (
        <div className='machine-clip'>
            <span className='machine-clip-name'>
                Техника №<span className='machine-clip-number'>{props.id}</span>
            </span>
            <span>: </span>
            <span className='machine-clip-id'>
                {props.machine.id}
            </span>
            <span> </span>
            <span className='machine-clip-description'>{props.machine.name}</span>
            <span> </span>
            <span className='machine-clip-description'>{props.machine.descriptions}</span>
        </div>
    )
}

export {MachineClip}
