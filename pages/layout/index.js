import React from "react";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "../../common/Header";



export const theme = createTheme({
	palette: {
		primary: {
			main: "#000080ff",
		},
		secondary: {
			main: "#3d26cfff",
			light: "#432acdff",
		},
		dark: {
			main: "#000000ff",
		},
		white: {
			main: "#FFFFFF",
		},
	},
});

export default function Layout(props) {
	
	const { children } = props;

	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Box component={'div'} className={'content-wrapper'}>{children}</Box>
			{/* <Footer /> */}
		</ThemeProvider>
	);
}
