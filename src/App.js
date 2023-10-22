import { useSelector } from 'react-redux';
import axios from 'axios';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
// import index from 'index.css';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

import 'tailwindcss/tailwind.css';
// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);
  axios.defaults.baseURL = 'http://localhost:4469';

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          {/* <CartProvider> */}
          <Routes />
          {/* </CartProvider> */}
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
