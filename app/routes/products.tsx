import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Card } from "flowbite-react";

export const loader = async () => {
    const response = await fetch(`${process.env.PRODUCT_SERVICE}/products/66034c5ac69ba4e9a9164b77`);
    return json(await response.json());
}

export default function Products(){
    const products = useLoaderData<typeof loader>();
    console.log(products)
    
    return (
        <div>
            <Card className="max-w-sm">
                <h5 className="dark:text-white text-2x1 font-bold">{products.name}</h5>
                <p className="font-normal dark:text-white text-700">{products.price}</p>
            </Card>
        </div>
    )
}