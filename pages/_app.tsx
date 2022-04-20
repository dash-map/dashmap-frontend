import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app';
import { Provider } from 'react-redux';
import configureStore from '../reducers/configureStore';

const store = configureStore();

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  ) 
}

MyApp.getInitalProps = async (appContext: AppContext) => {
  const appProps: any = await MyApp.getInitalProps(appContext);

  return {...appProps}
}

export default MyApp
