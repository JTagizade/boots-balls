// Redux Hooks
import { useSelector, useDispatch } from 'react-redux';
// Slices - Acions
import { selectCategories as selectCategoriesAction } from './Slices/CategoriesSlice';



const Category = (props: { children: string }) => {

const dispatch = useDispatch();

const selectedCategories = useSelector((state: { categories: { selectedCategories: string[] } }) => state.categories.selectedCategories);

const isSlected = selectedCategories.includes(props.children);



const selectCategories = () => {

    dispatch(selectCategoriesAction(props.children));

}


  return (
    <div onClick={selectCategories} className={`${ isSlected ? 'bg-[#bfe0f6] text-[#383838]' : '' } text-xl p-1 rounded-xs filterBy cursor-pointer w-fit`}>{props.children}</div>
  )
}

export default Category