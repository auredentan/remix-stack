import type { LinksFunction } from '@remix-run/node'
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration
} from '@remix-run/react'

import styles from './global.css'
import { cn } from './utils'
import { ThemeProvider } from './theme/ThemeProvider'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export default function App() {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width,initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body className={cn('min-h-screen bg-background font-sans antialiased')}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
					<Outlet />
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
				</ThemeProvider>
			</body>
		</html>
	)
}
