import { useEffect, useState } from "react"
import { getLocalData } from "../HooksEx/localdb"

const useCart = products => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const localData = getLocalData();
        const saveInCart = [];

        for (const id in localData) {
            const storedProduct = products.find(product => product.id === id)
            if (storedProduct) {
                const quantity = localData[id]
                storedProduct.quantity = quantity;
                saveInCart.push(storedProduct)
            }

        }
        setCart(saveInCart)


    }, [products])
    return[cart, setCart]
}
export default useCart;