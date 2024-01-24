import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Body from "./Components/Layout/Body";
import Footer from "./Components/Layout/Footer";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';


function App() {
  return (
    <div>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
      </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
