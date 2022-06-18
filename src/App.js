import React, { useEffect, useState } from "react";
import Theme from "./themes/Theme";
import { Layout } from "./Layout/Layout";
import Hero from "./components/Hero/Hero";
import Preloader from "./components/Hero/Preloader";

const App = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(currentState => false)
    }, 2000)
  }, [])
  return (
    <Theme>
      {loader ?
        <Preloader /> :
        <Layout>
          <Hero />
        </Layout>
      }
    </Theme>
  );
};
export default App;