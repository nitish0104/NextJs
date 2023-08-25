/** @type {import('next').NextConfig} */
const nextConfig = {
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/",
				permanent: false
			}
		]
	}
}

module.exports = nextConfig
