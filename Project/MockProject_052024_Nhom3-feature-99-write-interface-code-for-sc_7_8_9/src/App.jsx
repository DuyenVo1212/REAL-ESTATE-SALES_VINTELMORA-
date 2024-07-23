import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './layout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Dynamically rendering routes and their components based on the publicRoutes array. */}
        {publicRoutes.map((route, index) => {
          const Layout = DefaultLayout;
          const Page = route.component;

          if (route.children) {
            // If the route has children, render a nested Route for each child route
            return (
              <Route
                key={route.component + index}
                path={route.path}
                element={
                  <Layout banner={route.customBanner}>
                    <Page />
                  </Layout>
                }
              >
                {route.children.map((childRoute, childIndex) => {
                  const ChildPage = childRoute.component;
                  return (
                    <Route key={childRoute.component + childIndex} path={childRoute.path} element={<ChildPage />} />
                  );
                })}
              </Route>
            );
          }

          // If the route doesn't have children, render a single Route
          return (
            <Route
              key={route.component + index}
              path={route.path}
              element={
                <Layout banner={route.customBanner}>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
