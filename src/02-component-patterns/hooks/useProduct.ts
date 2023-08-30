import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";


interface useProductsArgs {
    product: Product;
    onChange?: ( args:onChangeArgs ) => void;
    value?: number;
}

export const UseProduct = ( { onChange, product, value = 0 }:useProductsArgs ) => {


    const [ counter, setCounter ] = useState( value );

    const isControlled = useRef( !!onChange );

    const increaseBy = ( value:number ) => {
        if ( isControlled.current ) {
            return onChange!({ count: value, product });
        }

        const newValue = Math.max( counter + value, 0 )

        setCounter( newValue );

        onChange && onChange({ count: newValue, product });
    };

    useEffect(() => {
        setCounter( value );
    },[ value ])


    return {
        counter,
        increaseBy
    }
}; 