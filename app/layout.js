import "./globals.css";
export default function RootLayout({ children }) {
	return (
		<html>
			<head />
			<body className=" relative">{children}</body>
			<script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-D23MP7G9SR"
			></script>
			<script>
				window.dataLayer = window.dataLayer || []; function gtag()
				{dataLayer.push(arguments)}
				gtag('js', new Date()); gtag('config', 'G-D23MP7G9SR')
			</script>
		</html>
	);
}
