import '../styles/main.scss';

const App= ({Component, pageProps}) => {
  
  return <Component {...pageProps} appProps="Hello from App"/>
}

export default App;