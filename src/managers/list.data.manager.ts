import { ICategory, IMenuItem, INavigation } from "../models/INavigation";
import { IHeaderProps } from "../webparts/header/components/IHeaderProps";
import { sp } from "@pnp/sp";    
import "@pnp/sp/webs";    
import "@pnp/sp/lists/web";    
import "@pnp/sp/items/list"; 
import { SPComponentLoader } from '@microsoft/sp-loader';
import IHeader from "../models/IHeader";

export default class ListDataManager{


    public static async getHeaderData(listName:string):Promise<ICategory[]>{

        // console.log("ListDataManager.getHeaderData");
        let navCategories:ICategory[] = [];
        let list = sp.web.lists.getByTitle(listName).items;
        let items : any[] = await list.get();
        // console.log("Items: ", items);
        items.map((item:any)=>{
           let menuItem: IMenuItem = { title : item.Title, url : item.ThemeName.Url  };
           var navCat = navCategories.filter(p=>p.name == item.Categories );
            if(navCat && navCat.length > 0)
            {
                navCat[0].menuItems.push(menuItem);
            }
            else{
                var cat: ICategory = { name : item.Categories, menuItems:[]};
                cat.menuItems.push(menuItem);
                navCategories.push(cat);
            }


           
        })

        console.log("Data", navCategories);
        return navCategories;

    }



}