import Head from "./components/Head";
import Body from "./components/Body";
import './App.css';
import { Provider } from "react-redux";
import store from "./utils/store";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[{
      path:'/',
      element:<MainContainer/>
    },{
    path:"/watch",
    element:<WatchPage/>
  }]
}])

function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
     {/* <h1 className ='text-3xl font-bold'>Assalam walikum</h1> */}
     <Head></Head>
     <RouterProvider router={appRouter}/>
     {/* <Body></Body> */}
    </div>
    </Provider>
  );
}

export default App;
