import * as React from 'react';
import { IMenuItem, INavigation } from '../../../models/INavigation';
import styles from './Header.module.scss';
import { IHeaderProps } from './IHeaderProps';
import MenuItems from './MenuItems';



export default class HeaderItem extends React.Component<any, {}> {
  
  public render(): React.ReactElement<IHeaderProps> {
    return (
      <div className={ styles.header }>
          <div className="navbar">
            <div className="dropdown">
            <button className="dropbtn">{this.props.item.name}
            <i className="fa fa-caret-down"></i>
            </button>
            </div>
            <div className="dropdown-content">
                <a href="">{this.props.item.menuItems.map((menuItemsData : IMenuItem)=>{
                   return <MenuItems menuItemsData={menuItemsData}></MenuItems>
                })}
                </a>
            </div>
            
            
            </div>
      </div>
    );
  }
}
