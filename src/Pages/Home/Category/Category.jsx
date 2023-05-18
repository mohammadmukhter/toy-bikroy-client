import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = () => {
  return (
    <div className="container mx-auto mb-8 px-5 py-2 lg:px-32 lg:pt-24">
      <h2 className="text-[#643843] text-4xl font-semibold mb-4">Toy Car</h2>

      <Tabs>
        <TabList className="Tabs tabs-boxed">
          <Tab className="tab">Regular Car</Tab>
          <Tab className="tab">Sports Car</Tab>
          <Tab className="tab">Truck</Tab>
        </TabList>

        <TabPanel>
          <h2>Regular cars contents</h2>
        </TabPanel>
        <TabPanel>
          <h2>Sports Car contents</h2>
        </TabPanel>
        <TabPanel>
          <h2>Truck contents</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
