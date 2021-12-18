import Theme from '../styles/theme';
import "../styles/Animation.css";
import "../styles/App.css";
import "../styles/AppResponsive.css";
import "../styles/main.css";
import "../styles/tailwind.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 