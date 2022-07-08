import React from "react";
import "../styles/globals.css";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import createEmotionCache from "../utils/createEmotionCache";
import { theme } from "../styles/themes/default";

const clientSideEmotionCache = createEmotionCache();

type MyAppProps = {
	Component: any;
	emotionCache?: EmotionCache | undefined;
	pageProps: any;
};

const MyApp = (props: MyAppProps) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
};

export default MyApp;
