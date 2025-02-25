// Redux Hooks
import { useSelector, useDispatch } from 'react-redux';
// Slices - Acions
import { chooseTypes } from './Slices/CategoriesSlice';



const Type = (props: { children: string }) => {

const dispatch = useDispatch();

const chosenTypes = useSelector((state: { categories: { chosenTypes: string[] } }) => state.categories.chosenTypes);

const isSlected = chosenTypes.includes(props.children);



const pickTypes = () => {

    dispatch(chooseTypes(props.children));

}


  return (
    <p onClick={pickTypes} className={`${ isSlected ? 'bg-[#bfe0f6] text-[#383838]' : '' } cursor-pointer filterBy text-xl p-1 rounded-xs w-fit capitalize`}>{props.children}</p>

  )
}

export default Type