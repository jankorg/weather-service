import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.scss';
import {ApiRepositoryClass} from '../../utils/apiRepositories/apiRepository';
let ApiRepo = new ApiRepositoryClass();

const NavBar: React.FC = () => {
  const [navBar, setNavBarList] = useState([]);
  useEffect(() => {
    ApiRepo.getMenu()
    .then((response: any) => {
        setNavBarList(response.data);
    });
  }, []);
  
return (
 
  <div className={styles.navbar} data-testid="NavBar">
    {
      navBar.map((value:string , index: number) => {
        return <a href="#"  key={index}>{value}</a>
      })
    }
  </div>
)};

export default NavBar;
