import React from 'react';
import style from './Pagination.module.css';

const Pagination = (props) => {
    let pages=[];
    let selected;
    for(let i=1; i<=props.pages; i++){
        pages.push(i)
    }
    return (
        <div className={style.pagination}>
            {pages.map((page) => {
                if(page == props.current){
                    selected = style.selected;
                }else{
                    selected = '';
                }
                return <a href="#" key={page} onClick={() => {props.updateCurrentPage(page)}} className={selected}>{page}</a>;
            })}

            {/* <a href="#">&#60;</a>
            <a href="#">...</a>

            <a href="#" className={style.selected}>4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            
            <a href="#">...</a>
            <a href="#">&#62;</a> */}
        </div>
    );
}

export default Pagination;