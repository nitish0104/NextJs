import axios from 'axios';
import Price from './component/price';
const apiProduct = (async () => {
	let data = await fetch("https://dummyjson.com/products")
	data = await data.json()
	return data.products
})
const ProductList = async () => {

	let products = await apiProduct()
	console.log(products);


	// client side rendering
	// const [products, setProducts] = useState([]);

	// useEffect(async () => {
	// 	// Fetch data from the API
	// 	await axios.get("https://dummyjson.com/products").then((res) => {
	// 		setProducts(res.data.products)
	// 	})


	// }, []);


	return (
		<>
			<h1>Welcome to home page</h1>
			<ul>
				{products.map((data) => (
					<div className='flex my-5'>

						<li>{data.title}</li>
						<div><Price price={data.price}></Price></div>
					</div>

				))}
			</ul>
		</>
	)
};

export default ProductList;


const generateMetadata = () => {
	return { title: "product page" }

}


export { generateMetadata }



