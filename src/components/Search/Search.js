import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import UserHeader from "../UserHeader";

const Search = () => {
    const {setSearchTerm, setResultTitle} = useGlobalContext();
    const searchText = useRef('');
    const navigate = useNavigate();

    useEffect(() => searchText.current.focus(), []);

    const handleSubmit = (e) => {
        e.preventDefault();
        let tempSearchTerm = searchText.current.value.trim();

        if ((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {
            setSearchTerm("the hobbit");
            setResultTitle("Please Enter A Book ...");
        }
        else {
            setSearchTerm(searchText.current.value);
        }
        navigate("/book");
    };

    return (
        <>
        <UserHeader/>
        <div className='search-form'>
            <div className='container'>
                <div className="search-form-body">
                    <form className="search-form" onSubmit={handleSubmit}>
                        <div className="search-form-elem flex flex-sb">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="The Hobbit ..."
                                ref={searchText}
                            />
                            <button 
                                type="submit"
                                className="flex flex-c"
                                onClick={handleSubmit}>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default Search;