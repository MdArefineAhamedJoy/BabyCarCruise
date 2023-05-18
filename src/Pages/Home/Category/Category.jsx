import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Category = () => {
  const [categoryName, setCategoryName] = useState("sports");
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, [categoryName]);

  const handleCategory = (data) => {
    setCategoryName(data);
  };
  console.log(categoryName);
  return (
    <div className="">
      <Tabs className="my-10">
        <TabList className="text-center">
          <Tab onClick={() => handleCategory("sports")}>Title 1</Tab>
          <Tab onClick={() => handleCategory("Avenger")}>Title 2</Tab>
          <Tab onClick={() => handleCategory("Soldier")}>Title 3</Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-3">
          {categoryData.map((data) => (
            <div key={data._id}>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{data.categoryName}</h2>
                  <p>{data.categoryName}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div>
          <div className="grid md:grid-cols-3 gap-5">
            {categoryData.map((data) => (
              <div key={data._id}>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{data.categoryName}</h2>
                    <p>{data.categoryName}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid md:grid-cols-3 gap-5">
            {categoryData.map((data) => (
              <div key={data._id}>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{data.categoryName}</h2>
                    <p>{data.categoryName}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
