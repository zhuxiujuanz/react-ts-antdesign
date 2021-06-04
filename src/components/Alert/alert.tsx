import React from 'react';
import classNames from "classnames";

export type AlertType = 'success' | 'default' | 'danger' | 'warning';

interface BaseAlertProps{
    title?: string,
    message?: string,
    className?: string,
    children?: React.ReactNode,
    type?: AlertType

}

const Alert : React.FC<BaseAlertProps> = (props) =>{
    const {
        title, 
        message, 
        className,
        type,
        children,
        ...restProps
    } = props;
    const classes = classNames('alt',className, {
        [`alt-${type}`]:type,

    })

           
     return (<div className={classes}>
        {title && (<p>
            {title}
        </p>)}
        {message && (<p>{message}</p>)}
    </div>)
}

Alert.defaultProps = {
    type:'default'
}

export default Alert
