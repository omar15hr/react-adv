import { ProductButtons, ProductCard, ProductTitle, ProductImage } from "../components";

import '../styles/custom-styles.css';
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";


export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map( product => (
                        <ProductCard
                            key={ product.id }
                            product={ product }
                            className="bg-dark text-white"
                            value={ shoppingCart[product.id]?.count || 0 }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className="custom-img" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }

            </div>

            <div className="shopping-cart">

                {
                    Object.entries( shoppingCart ).map( ([ key, product ]) => (
                        <ProductCard
                            key={ key }
                            product={ product }
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            onChange={ onProductCountChange }
                            value={ product.count }
                        >
                            <ProductImage className="custom-img" />
                            <ProductButtons className="custom-buttons" style={{
                                display: 'flex',
                                justifyContent:'center'
                            }} />
                        </ProductCard>
                    ))
                }

            </div>

        </div>
    )
}; 