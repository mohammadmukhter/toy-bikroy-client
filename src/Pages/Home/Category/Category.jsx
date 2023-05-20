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
    <div className="container mx-auto mb-8 px-5 py-2 lg:px-18 lg:pt-24">
      <h2 className="text-6xl font-bold text-[#643843] text-center mb-8 mt-12">
        Toy Cars
      </h2>

      <Tabs>
        <TabList className="Tabs tabs-boxed text-center bg-[#E7CBCB] rounded-b-none">
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
          <h2 className="text-center text-[#643843] bg-[#f3eaec] rounded-b-md">
            Regular Car
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {subCategoryData
              .filter((data) => data.toyCategory === "regular_car")
              .map((x) => {
                return <CategoryCard key={x._id} toy={x}></CategoryCard>;
              })}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-center text-[#643843] bg-[#f3eaec] rounded-b-md">
            Sports Car
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {subCategoryData
              .filter((data) => data.toyCategory === "sports_car")
              .map((x) => {
                return <CategoryCard key={x._id} toy={x}></CategoryCard>;
              })}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-center text-[#643843] bg-[#f3eaec] rounded-b-md">
            Truck
          </h2>
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
