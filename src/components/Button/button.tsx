import React from 'react';
import classNames from "classnames";
export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonProps {
    className?: string,
    disabled?: boolean,
    size?: ButtonSize,
    btnType?: ButtonType,
    children: React.ReactNode,
    href?: string
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchopsButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchopsButtonProps> // 将所有属性都设置成可选的
const Button: React.FC<ButtonProps> = (props)=>{
    const {
        btnType,
        disabled,
        className,
        size, 
        children,
        href,
        ...restProps
    } = props;
    // btn, btn-lg, btn-primary
    const classes = classNames('btn', className,{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`] : size,
        'disabled' : (btnType === ButtonType.Link) && disabled
    })
        
    if(btnType === ButtonType.Link && href){
        return (
            <a 
            className={classes} 
            href={href}
            {...restProps}
            >
                {children}
            </a>
        )
    }else{
        return (
            <button
                className={classes}
                disabled={disabled}

            >
             {children}   
            </button>
        )
    }

}

Button.defaultProps = {
    disabled: false,
    btnType:ButtonType.Default
}

export default Button;

