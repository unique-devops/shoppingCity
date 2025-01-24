import { fetchData } from "@/utils/api";
import { API_ENDPOINTS } from "@/utils/apiEndpoints";

export default async function CategoriesBar()
{
    const categories = await fetchData(API_ENDPOINTS.getCategories); 
    return(       
        <div className="w-full bg-gray-600">
            {categories.map((cat, index) => (   
                <div key={index} className="w-6 h-6 rounded">
                    {cat}
                </div>                                  
            ))}
        </div>
    )    
}