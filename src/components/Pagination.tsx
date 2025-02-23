import { GrFormPrevious, GrFormNext } from "react-icons/gr";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (pageNumber: number) => void;
  }


const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    
    return <div className="flex items-center gap-2 -mt-10">
                <button className={`${ currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'} focus:outline-none`}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1} 
                >
                <GrFormPrevious className="text-4xl"/>
                </button>
                <div className="text-2xl text-[#ffddd2]">{currentPage} of {totalPages} </div> 
                <button className={`${ currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'} focus:outline-none`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages} 
                >
                <GrFormNext className="text-4xl"/>
                </button>
            </div>;
  };
  
  export default Pagination;