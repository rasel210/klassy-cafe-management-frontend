import { useEffect, useState } from "react";
import AllFoodItemsCard from "./AllFoodItemsCard";
import { useLoaderData } from "react-router-dom";
import './Pagination.css';


const AllFoodItems = () => {

    const [allFood, setAllFood] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(0);
    const {count} = useLoaderData();
    const itemsPerpage = 8;
    const numberOfPages = Math.ceil(count / itemsPerpage);

    // const pages = []
    // for(let i = 0; i < numberOfPages; i++){
    //     pages.push(i)
    // }
    
    const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        fetch(`http://localhost:5000/allfooditems?page=${currentPage}&size=${itemsPerPage}`)
        .then((res) => res.json())
        .then((data) => setAllFood(data));
    } ,[currentPage, itemsPerPage])

    // const handleItemsPerPage = e => {
    //     const val = parseInt(e.target.value);
    //     console.log(val);
    //     setItemsPerPage(val);
    //     setCurrentPage(0);
    // }

    const handlePrevious = ()=> {
        if(currentPage > 0){
            setCurrentPage(currentPage -1);
        }
    }

    const handleNext = ()=> {
        if(currentPage < pages.length -1) {
            setCurrentPage(currentPage +1);
        }
    }

    return (
        <div className="mt-16">
            <h6 className="text-white text-base py-2 font-medium text-center border w-36 mx-auto rounded-lg bg-[#fb5849]">KLASSY WEEK</h6>
            <h2 className="text-3xl font-black text-center mt-5 underline
            ">This Weeks Speciel <br />Meal Offers</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mt-16 bg-base-100">
                {
                    allFood.map((food) => (
                        <AllFoodItemsCard key={food.name} food={food}></AllFoodItemsCard>
                    ))
                }
            </div>
            <div className="pagination mt-10">
                <button onClick={handlePrevious}>Prev</button>
                {
                    pages.map(page => <button 
                        className={currentPage === page ? 'selected':undefined }
                        onClick={() => setCurrentPage(page)}
                        key={page}>{page}</button> )
                }
                <button onClick={handleNext}>Next</button>
                {/* <select className="border" value={itemsPerPage} onChange={handleItemsPerPage} name= "" id="">
                <option value="6">6</option>
                <option value="6">6</option>
                <option value="6">6</option>
                <option value="6">6</option>
            </select> */}
            </div>
            
        </div>
        
    );
};

export default AllFoodItems;