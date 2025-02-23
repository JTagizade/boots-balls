// React Hooks
import { useState, useEffect, useRef } from 'react';
// Redux Hooks
import { useSelector, useDispatch } from 'react-redux';
// Interfaces
import { ProductData, Product, ProductsState } from './Interfaces';
// Smart Components 
import Navbar from './Navbar';
// Dumb Components 
import SingleProduct from './SingleProduct';
import Benefits from './Benefits';
import Newsletter from './Newsletter';
import Categories from './Categories';
import Pagination from './Pagination';
import SortBy from './SortBy';
import NewsletterPopUp from './NewsletterPopUp';
// Slices - Acions
import { getSessionsList } from './Slices/ProductsSlice';
import { addItem } from './Slices/CartSlice';
import { setCategories, setTypes } from './Slices/CategoriesSlice';




function Products() {  
    
    const dispatch = useDispatch();

    const data: ProductData[] = useSelector((state:ProductsState) => state.products.products);
    const productsData = data.flatMap(item => item.products);

    const selectedCategoryList = useSelector((state:ProductsState) => state.categories.selectedCategories);
    const chosenType = useSelector((state:ProductsState) => state.categories.chosenTypes);


    const filteredData = data.filter(product => {
        const isCategoryMatch = selectedCategoryList.includes(product.category)
        const isTypeMatch = chosenType.includes(product.type)

        return isCategoryMatch || isTypeMatch;              
    }        
    );

    const filteredProductsData = filteredData.flatMap(item => item.products);    
    
    const uniqueCategories = [...new Set(data.map((item: ProductData)  => item.category))];
    const uniqueTypes = [...new Set(data.map((item: ProductData)  => item.type))];


/////////////Pagination/////////////

const eventsPerPage = 9; 
const [currentPage, setCurrentPage] = useState<number>(1);
const [currentPageItems, setCurrentPageItems] = useState([]);

const isFilteringActive = selectedCategoryList.length > 0 || chosenType.length > 0;
const currentData = isFilteringActive ? filteredProductsData : productsData;

const totalPages = Math.ceil(currentData.length / eventsPerPage);



const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;   
    setCurrentPageItems(currentData.slice(startIndex, endIndex));
};

/////////////SortBy/////////////

const [sortOption, setSortOption] = useState<string>('Sort By');
const [sortedProducts, setSortedProducts] = useState<Product[]>([]); // State to hold sorted products


const originalProductsRef = useRef([...currentPageItems]);

const sortProducts = () => {

    let sortedItems = [...currentPageItems]; 

    switch (sortOption) {
        case 'Default':
            sortedItems = [...originalProductsRef.current];
            break;
        case 'A-Z':
            sortedItems.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'Z-A':
            sortedItems.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'Price, Low to High':
            sortedItems.sort((a, b) => a.cost - b.cost);
            break;
        case 'Price, High to Low':
            sortedItems.sort((a, b) => b.cost - a.cost);
            break;
        case 'Old to New':
            sortedItems.sort((a, b) => a.year - b.year);
            break;
        case 'New to Old':
            sortedItems.sort((a, b) => b.year - a.year);
            break;
        default:
            break;
    }

    return sortedItems;
};





const handleAddToCart = (product: Product) => {
        
    dispatch(addItem(product));
    
        
    };
    
    useEffect(() => {   

        dispatch(setCategories(uniqueCategories));
        dispatch(setTypes(uniqueTypes));

    }, [dispatch, uniqueCategories, uniqueTypes] );   

    useEffect(() => {
        setCurrentPage(1);
        setSortOption('Sort By');
        const initialItems = currentData.slice(0, eventsPerPage);
        setCurrentPageItems(initialItems);
    }, [selectedCategoryList, chosenType, data]);


    useEffect(() => {
        const sorted = sortProducts();
        setSortedProducts(sorted);
    }, [sortOption]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * eventsPerPage;
        const endIndex = startIndex + eventsPerPage;
        setCurrentPageItems(sortedProducts.slice(startIndex, endIndex));
    }, [sortedProducts, currentPage]); 

    useEffect(() => {
        if (originalProductsRef.current.length === 0) {
            originalProductsRef.current = [...currentPageItems];
        }
    }, [currentPageItems]);
    
    
    
    useEffect(() => {
        
        dispatch(getSessionsList());

    }, [] )



    return (
        <>
            <Navbar />                 

            <NewsletterPopUp />

            <div className='flex mt-40 px-60'>
                <Categories filteredData={filteredProductsData}/>


                <div className="flex w-4/5">
                
                    <div className='flex flex-col gap-17 ml-18 w-full'>

                        <div className='h-15 border-b flex items-center justify-between -mb-17 pl-3 relative'>                        
                            <p className='uppercase text-xs font-bold'>{currentData.length + " products"}</p>
                                
                            <SortBy sortOption={sortOption} setSortOption={setSortOption} />
                        </div>
                            
                        <div  className='flex flex-wrap gap-x-20.5 gap-y-10 mt-5 justify-start'>
                        
                            { currentPageItems.map((product, i) => <SingleProduct key={i} productInfo={product} addToCart={handleAddToCart}/> ) }                        
                            
                        </div>   

                        <Pagination
                            totalPages={totalPages}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />

                    </div>
                
                </div>
            </div>
            
            <Benefits />
            
            <Newsletter />

        </>
    )
}

export default Products