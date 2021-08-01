import React from "react";
import Theme from "./themes/Theme";
import { Layout } from "./Layout/Layout";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <Theme>
        <Layout>
            <Hero/>
        </Layout>
    </Theme>
  );
};
export default App;