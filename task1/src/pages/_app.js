import "../styles/globals.css";
import "react-widgets/dist/css/react-widgets.css";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
