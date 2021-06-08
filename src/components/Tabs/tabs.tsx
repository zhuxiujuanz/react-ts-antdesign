import React, { useState, createContext } from 'react'
import classNames from 'classnames'
import {TabPaneProps} from "./tabPane"
type ModeType = 'left' | 'right' | 'top' | 'bottom'
type ChangeCallback = (activeKey: string) => void;

export interface tabsProps {
    index?: string,
    className?: string,
    style?:React.CSSProperties,
    tabPosition?:ModeType,
    defaultActiveKey?: string,
    onChange?: ChangeCallback

}

interface ItabsContext {
    index: string;
    onChange?: ChangeCallback
}
export const TabsContext = createContext<ItabsContext>({index: '0'})

const Tabs: React.FC<tabsProps> = (props)=>{
    const{className, tabPosition, children,defaultActiveKey, onChange} = props
    const [currentActive, setCurrentActive] = useState(defaultActiveKey)
    const classes = classNames('viking-tabs', className, {
        'tabs-top': tabPosition === 'top',
        'tabs-bottom': tabPosition === 'bottom',
        'tabs-left': tabPosition === 'left',
        'tabs-right': tabPosition === 'right',
      })

    const handleClick = (index:string)=>{
        setCurrentActive(index)
        if(onChange) {
            onChange(index)
          }
    }
    const passedContext: ItabsContext = {
        index: currentActive ? currentActive : '0',
        onChange: handleClick,
      }
    const renderChildren = ()=>{
        return React.Children.map(children, (child, index)=>{
            const childElement = child as React.FunctionComponentElement<TabPaneProps>
            const {displayName} = childElement.type
          
            if(displayName === 'TabPane'){
                return React.cloneElement(childElement, {
                    index:index.toString()
                })

            }else{
                console.log("Waring")
            }
        })
    }
    return (
        <div>
            <div className={classes}>
                <TabsContext.Provider value={passedContext}>
                    {renderChildren()}
                </TabsContext.Provider>
            </div>
        </div>
    )
}

export default Tabs