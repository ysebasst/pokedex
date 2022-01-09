import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from "components/Pokemon";

import { GlobalStyles } from "./Global.styles";

import Main from "components/Main";
import Header from "components/Header";
import { MainWrapper } from "components/Main/Main.styles";
import Footer from "components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <MainWrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/:id" element={<Pokemon />} />
              <Route path="/" element={<Pokemon />} />
            </Routes>
          </BrowserRouter>
        </MainWrapper>
      </Main>
      <Footer />
    </>
  );
}

export default App;
