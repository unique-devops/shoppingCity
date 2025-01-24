import CategoriesFilters from "./categoriesFilters";
import { API_ENDPOINTS } from "@/utils/apiEndpoints";
import { fetchData } from "@/utils/api";
import { Suspense } from 'react'
import ProductCard from "./productCard";
import CategoriesBar from "./categoriesBar";

export default async function ProductSection(){
    const products = await fetchData(API_ENDPOINTS.getProduct);           
    return(
        <div>
           <CategoriesFilters/>
           {/* <CategoriesBar/> */}
           <Suspense fallback={<p>Loading ...</p>}>    
                <div className="bg-white">
                    <div className="mx-auto px-2 py-2 sm:px-4 sm:py-4 lg:px-4">
                        <h2 className="text-xl text-center sm:text-2xl font-bold tracking-tight text-gray-900">Products</h2>

                        <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:gap-x-8">
                            {products.map((prod) => (
                            <ProductCard key={prod.id} product ={prod}/>                        
                            ))}
                            {/* {products.map((product) => (
                                <div key={product.id} className="group relative">
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                />
                                <div className="mt-4 flex justify-between">
                                    <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>        
                {/* <div className="flex flex-wrap">
                    {products.map((prod) => (
                        <ProductCard key={prod.id} product ={prod}/>                        
                    ))}
                </div>             */}
            </Suspense>
           
        </div>
    )
}