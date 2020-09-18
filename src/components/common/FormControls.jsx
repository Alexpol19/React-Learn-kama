import React from 'react';
import s from './FormControls.module.css'

// export const Input = (props) => {
//     return(
//         <div className={s.elemWrap}>
//             <label>{props.label}</label>
//             <input className={s.elemStyle} {...props.input} type={props.type} placeholder={props.placeholder} />
//             {props.meta.touched &&
//             ((props.meta.error && <span className={s.error}>{props.meta.error}</span>) ||
//             (props.meta.warning && <span className={s.warning}>{props.meta.warning}</span>))}
//         </div>
//     )
// }
const FormControl = ({
    label,
    children,
    meta: {touched, error, warning}
}) => {
    return(
        <div className={s.elemWrap}>
            <label>{label}</label>
            {children}
            {touched &&
            ((error && <span className={s.error}>{error}</span>) ||
            (warning && <span className={s.warning}>{warning}</span>))}
        </div>
    )
}

export const Input = (props) => {
    return (<FormControl {...props}><input className={s.elemStyle} {...props.input} type={props.type} placeholder={props.placeholder} /></FormControl>)
}

export const Textarea = (props) => {
    return (<FormControl {...props}><textarea className={s.elemStyle} {...props.input} type={props.type} placeholder={props.placeholder} /></FormControl>)
}