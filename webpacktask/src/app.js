import React from 'react';
import Image from './assets/images/image.jpg'
import styles from './index.css';
import UserList from './components/Users/UserList'


function App() {
    return (
        <div className={styles.title}>
            My App
          <img src={Image} alt="shroom" />
          <UserList />
        </div>
    );
  }


  export default App;