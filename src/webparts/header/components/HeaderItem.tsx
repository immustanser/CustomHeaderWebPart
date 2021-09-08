import * as React from 'react';
import { IMenuItem, INavigation } from '../../../models/INavigation';
import styles from './Header.module.scss';
import { IHeaderProps } from './IHeaderProps';
import MenuItems from './MenuItems';



export default class HeaderItem extends React.Component<any, {}> {

  public render(): React.ReactElement<IHeaderProps> {
    return (
      <div className={ styles.header }>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>{this.props.item.name}</button>
          <div className={styles.dropdown_content}>
            <a href="">
                  {this.props.item.menuItems.map((menuItemsData : IMenuItem)=>{
                    return <MenuItems menuItemsData={menuItemsData}></MenuItems>
                  })}             
              </a>
            
          </div>
        </div>
      </div>
    );
  }
}
