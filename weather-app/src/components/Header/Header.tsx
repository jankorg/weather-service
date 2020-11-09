import React, { useEffect, useState } from 'react';
import {ApiRepositoryClass} from '../../utils/apiRepositories/apiRepository';
import styles from './Header.module.scss';
let ApiRepo = new ApiRepositoryClass();

const Header: React.FC = () => {
  const [header, setHeader] = useState(Object);
  useEffect(() => {
    ApiRepo.getHeader()
    .then((response: any) => {
      setHeader(response.data);
    });
  }, []);
  return (
  <div className={styles.header} data-testid="Header">
    <h1>{header.text}</h1> 
  </div>
)};

export default Header;
