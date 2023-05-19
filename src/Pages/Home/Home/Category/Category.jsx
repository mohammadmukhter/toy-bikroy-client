import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [subCategoryData, setSubCategoryData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setSubCategoryData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto mb-8 px-5 py-2 lg:px-32 lg:pt-24">
      <h2 className="text-[#643843] text-4xl font-semibold mb-4">Toy Car</h2>

      <Tabs>
        <TabList className="Tabs tabs-boxed text-center bg-[#E7CBCB]">
          <Tab className="tab">
            <div>Regular Car</div>
          </Tab>
          <Tab className="tab">
            <div>Sports Car</div>
          </Tab>
          <Tab className="tab">
            <div>Truck</div>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {subCategoryData
              .filter((data) => data.toyCategory === "regular_car")
              .map((x) => {
                return <CategoryCard key={x._id} toy={x}></CategoryCard>;
              })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {subCategoryData
              .filter((data) => data.toyCategory === "sports_car")
              .map((x) => {
                return <CategoryCard key={x._id} toy={x}></CategoryCard>;
              })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {subCategoryData
              .filter((data) => data.toyCategory === "truck")
              .map((x) => {
                return <CategoryCard key={x._id} toy={x}></CategoryCard>;
              })}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
