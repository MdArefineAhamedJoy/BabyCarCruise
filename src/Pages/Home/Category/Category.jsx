import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div className="my-24">
      <Tabs>
        <TabList className="text-center my-10 gap-4  ">
          <div className="flex justify-center ">
          <Tab  onClick={() => handleCategory("sports")}>Sports</Tab>
          <Tab  onClick={() => handleCategory("Avenger")}>Avenger</Tab>
          <Tab onClick={() => handleCategory("Soldier")}>Soldier</Tab>
          </div>
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
                    <Link to={`category/${data._id}`}><button  className="btn btn-primary">Buy Now</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                      <Link to={`category/${data._id}`}><button  className="btn btn-primary">Buy Now</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                    <Link to={`category/${data._id}`}><button  className="btn btn-primary">Buy Now</button></Link>
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
