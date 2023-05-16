import Script from "next/script";

export default function Head() {
	return (
		<>
			<title>Alinaswe Sikana Protfolio</title>
			<meta
				content="width=device-width, initial-scale=1"
				name="viewport"
			/>
			<link rel="icon" href="/favicon.ico" />
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<Script strategy="lazyOnload">
				{`window.dataLayer = window.dataLayer || []; function gtag()
				{dataLayer.push(arguments)}
				gtag('js', new Date()); gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS})`}
			</Script>
		</>
	);
}
