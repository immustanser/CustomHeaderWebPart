import * as React from 'react';
import { IMenuItem, INavigation } from '../../../models/INavigation';
import styles from './Header.module.scss';
import { IHeaderProps } from './IHeaderProps';



export default class MenuItems extends React.Component<any, {}> {
  
  public render(): React.ReactElement<IHeaderProps> {
    return (
      <div className={ styles.header }>
        <div className="dropdown-content">
        <a href={this.props.menuItemsData.url}>{this.props.menuItemsData.title}</a>    
        </div>
      </div>
    );
  }
}
