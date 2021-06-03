import React, { useState } from 'react';
import Categories from './Categories';
import Menu from './Menu';
import items from './data';

function App() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
    }
    const newItems = items.filter(item => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
          <Categories filterItems={filterItems}/>
          <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App;