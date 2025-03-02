// Redux Hooks
import { useSelector, useDispatch } from 'react-redux';
// Interfaces
import { Product } from './Interfaces';
// Slices - Actions
import { clearFilters } from './Slices/CategoriesSlice';
// Dumb Components
import Category from './Category';
import Type from './Type';

interface CategoriesStore {
    types: string[];
    categories: string[];
    selectedCategories: string[];
}

interface CategoriesProps {
    filteredData: Product[];
}

const Categories: React.FC<CategoriesProps> = (props) => {
    const filterBy = useSelector((state: { categories: CategoriesStore }) => state.categories);
    const dispatch = useDispatch();



    return (
        <div className="flex flex-col w-1/5">
            <div className='h-15 border-b flex items-center justify-between'>
                <p key="1" className='uppercase text-xs font-bold'>Filter by</p>
                {props.filteredData.length > 0 ? (
                    <p key="2" onClick={() => dispatch(clearFilters())} className='uppercase text-xs cursor-pointer font-bold mr-1'>Clear Filters</p>
                ) : ""}
            </div>
            <div className='flex flex-col gap-3 border-b pb-5'>
                <p className='uppercase mt-6 mb-2 font-bold'>Categories</p>
                {filterBy.categories.map((category: string, i: number) => (
                    <Category key={i}>{category}</Category>
                ))}
            </div>
            <div className='flex flex-col gap-3 border-b pb-5'>
                <p className='uppercase mt-6 mb-2 font-bold'>Types</p>
                {filterBy.types.map((type: string, i: number) => (
                    <Type key={i}>{type}</Type>
                ))}
            </div>
        </div>
    );
}

export default Categories;
