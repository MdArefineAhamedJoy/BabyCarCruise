import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Category = () => {
    const [categoryName, setCategoryName] = useState('sports')
    const [categoryData , setCategoryData] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/category/${categoryName}`)
        .then(res => res.json())
        .then(data => setCategoryData(data))
    },[categoryName])

    const handleCategory = (data) =>{
        setCategoryName(data)
    }
    console.log(categoryName)
  return (
    <Tabs className='my-10'>
      <TabList className='text-center'>
        <Tab onClick={()=>handleCategory('sports')}>Title 1</Tab>
        <Tab onClick={()=>handleCategory("Avenger")}>Title 2</Tab>
        <Tab onClick={()=>handleCategory("Soldier")}>Title 3</Tab>
      </TabList>

      <TabPanel>
        {
            categoryData.map(data => <div key={data._id}>
                <h1>{data.categoryName}</h1>
                <h1>{data.price}</h1>
            </div>)
        }
      </TabPanel>

      <TabPanel>
        {
            categoryData.map(data => <div key={data._id}>
                <h1>{data.categoryName}</h1>
                <h1>{data.price}</h1>
            </div>)
        }
      </TabPanel>

      <TabPanel>
        {
            categoryData.map(data => <div key={data._id}>
                <h1>{data.categoryName}</h1>
                <h1>{data.price}</h1>
            </div>)
        }
      </TabPanel>
      {/* <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel> */}
    </Tabs>
  );
};

export default Category;
