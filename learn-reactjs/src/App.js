import React, { useEffect } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import ColorBox from './features/colorbox/colorBox';
import NotFound from './components/NotFound';
import productApi from './api/productApi';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await productApi.getAll();
      console.log(productList);
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      Header
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          TODOS
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums" activeClassName="active">
          ALBUMS
        </NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact></Redirect>
        <Redirect from="/post-list/:postID" to="/posts/:postID" exact></Redirect>

        <Route path="/todos" component={TodoFeature} />
        <Route path="/colorbox" component={ColorBox} />
        <Route path="/albums" component={AlbumFeature} />
        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}
export default App;
