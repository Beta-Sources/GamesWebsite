import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/_slick.scss";
import "../styles/_slickTheme.scss";
import AuthContextProvider from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Prompt:wght@100&display=swap');
        body {
          padding: 0;
          overflow-x: hidden;
          font-size: 16px;
          font-family: 'Open Sans', sans-serif !important;
        }
        h1,h2,h3,h4,h5,h6{
          font-family: 'Prompt', sans-serif !important;
          font-weight: 900;
        }
      `}</style>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
