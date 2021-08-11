// import { Layout } from 'antd';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// //Pages
// import Home from './pages/home';
// import NewMovies from './pages/newMovies';
// import Popular from './pages/popular';
// import Search from './pages/search';
// import Movie from './pages/movie';
// import Error404 from './pages/error';

// //Components

// import MenuTop from "./components/MenuTop";

// const App = () => {

//   const { Header, Content } = Layout;

//   return (
//     <Layout>
//       <Router>
//         <Header>
//           <MenuTop/>
//         </Header>
//         <Content>
//           <Switch>
//             <Route path="/proyecto-peliculas" exact={true} component={Home}/>
//             <Route path="/newMovies" exact={true} component={NewMovies}/>
//             <Route path="/popular" exact={true} component={Popular}/>
//             <Route path="/search" exact={true} component={Search}/>
//             <Route path="/movie/:id" exact={true} component={Movie}/>
//             <Route path="*" component={Error404}/>
//           </Switch>
//         </Content>
//       </Router>
//     </Layout>
//   );
// }

// export default App;

// Importing LIBRARIES
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importing PAGES
import Home from "./pages/home";
import Error404 from "./pages/error";
import Popular from "./pages/popular";
import Search from "./pages/search";
import Movie from "./pages/movie";
import NewMovies from "./pages/newMovies";

// Importing COMPONENTS
import MenuTop from "./components/MenuTop";
import Footer from "./components/Footer";

const App = () => {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Router className="main-container">
        <Header style={{zIndex: '1'}}>
          <MenuTop></MenuTop>
        </Header>
        <Content>
          <Switch>
            <Route exact path="/proyecto-peliculas" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/popular" component={Popular} />
            <Route exact path="/new-movies" component={NewMovies} />
            <Route exact path="/movie/:id" component={Movie} />
            <Route path="*" component={Error404} />
          </Switch>
        </Content>
        <Footer style={{zIndex: '1'}} />
      </Router>
    </Layout>
  );
};

export default App;

