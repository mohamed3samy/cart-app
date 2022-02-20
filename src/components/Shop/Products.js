import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyProducts = [
	{
		id: "p1",
		price: 6,
		title: "My First Book",
		description: "The first book I ever wrote",
	},
	{
		id: "p2",
		price: 5,
		title: "My Second Book",
		description: "The second book I ever wrote",
	},
];

const Products = () => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{dummyProducts.map((product) => (
					<ProductItem
						key={product.id}
						id={product.id}
						price={product.price}
						title={product.title}
						description={product.description}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
