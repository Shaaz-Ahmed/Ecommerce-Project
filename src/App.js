import Header from "./Components/Header";
import Banner from './Components/Banner';
import Topbanner from './Components/Topbanner';
import Topbannerdata from './Components/Topbannerdata';
import Categories from './Components/Categories';
import CategoriesData from './Components/CategoriesData';
import CategoriesData1 from './Components/CategoriesData1';
import Categories1 from "./Components/Categories1";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      {/* div for showing the 3 banner image in same line */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        {Topbannerdata.map((data, index) => (
          <Topbanner key={index} imgsrc={data.imgsrc} index={index} />
        ))}
      </div>

        <h5 style={{marginLeft:'60px'}}>Categories</h5>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        {CategoriesData.map((data, index) => (
          <Categories key={index} imgsrc={data.imgsrc} index={index} />
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        {CategoriesData1.map((data, index) => (
          <Categories1 key={index} imgsrc={data.imgsrc} index={index} />
        ))}
      </div>


      
    </>
  );
};

export default App;