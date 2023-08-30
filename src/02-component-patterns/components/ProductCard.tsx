import styles from "../styles/styles.module.css";

import { UseProduct } from "../hooks/useProduct";
import { ReactElement, createContext } from "react";
import { Product, ProductContextProps, onChangeArgs } from "../interfaces/interfaces";


export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;


export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
}


export const ProductCard = ( { children, product, className, style, onChange, value }: Props ) => {

    const { counter, increaseBy } = UseProduct({ onChange, product, value });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ `${ styles.productCard } ${ className }` } style={ style }>
                { children }
            </div>
        </Provider>
    )
};