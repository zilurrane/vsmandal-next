import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JsonToHTML from '../JsonToHTML';

export default ({ tabs = [] }) => (
  <Tabs>
    <TabList>
      {
        tabs.map((tab, index) => <Tab key={index}>{tab.title}</Tab>)
      }
    </TabList>
    {
      tabs.map((tab, index) => (<TabPanel key={index}>
        <JsonToHTML json={tab.contentJson.tokens} />
      </TabPanel>))
    }
  </Tabs>
);