import React from "react";
import Theme from "./themes/Theme";
import styled from "styled-components";
import { Layout } from "./Layout/Layout";
import Hero from "./components/Hero/Hero";
import { Section } from "./styles/GlobalComponents";


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