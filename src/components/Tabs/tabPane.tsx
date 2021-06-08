import React, { useState, useContext } from 'react'
import classNames from 'classnames'
import {TabsContext} from "./tabs";
export interface TabPaneProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
  }

  const TabPane: React.FC<TabPaneProps> = (props)=>{
      const {className,children, index} = props;
      const context = useContext(TabsContext);
      const classes = classNames('viking-tabs-tab', classNames, {
        'is-active': context.index === index
      })

      const handleClick = ()=>{
          if(context.onChange && (typeof index === 'string')){
              context.onChange(index);
          }
      }
    return (
        <div className={classes} onClick={handleClick}>
            {children}
        </div>
    )
  }
  TabPane.displayName = 'TabPane'
  export default TabPane