import * as T from "prop-types"
import "@/styles/index.css"

export default function AppRoot({ Component, pageProps }) {
	return <Component {...pageProps} />
}

AppRoot.propTypes = {
	Component: T.any.isRequired,
	pageProps: T.objectOf(T.any),
}
