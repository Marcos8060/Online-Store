import './App.css';
import React,{ useState} from 'react';
import List from './List'
import data from './data'
import Footer from './Footer'
import Categories from './Categories';
import ClearShop from './ClearShop';

// categories
const allCategories = ['all', ...new Set(data.map((singleData) => singleData.category))];
function App() {
  const [goods, setgoods] = useState(data)
  const [categories, setCategories] = useState(allCategories)

  // filter items
  const filterItems = (category)=>{
    if(category === 'all'){
      setgoods(data)
      return;
    }
    const newgoods = data.filter((singleData)=> singleData.category === category);
    setgoods(newgoods);
  };
  // remove items
  const remove= (id)=>{
    const newItems = goods.filter((good)=> good.id !== id)
    setgoods(newItems)
  }
  // clear shop
  const clearShop=()=>{
    const newShop = [];
    setgoods(newShop)
  }
  // goods length
  if(goods.length === 0){
    return(
      <>
        <div className='title'>
          <h1>Marcos Designs</h1>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <h2 className='notification'>No Items Remaining</h2>
    </>
    )
  }
  return (
    <> 
    <div className='title'>
      <h1>Marcos Designs</h1>
      <div className="underline"></div>
    </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <List goods={goods} remove={remove}/>
        <ClearShop clearShop={clearShop}/>
        <Footer />
    </>
  );
}

export default App;
