import React from 'react';
import './Favorites.css';
import {useSelector,useDispatch} from 'react-redux'

function Favorites() {
    let {favourite: list}=useSelector(function(a){
        return a;
    })
    let dispatch=useDispatch()
    function ItemDeleteHandler(imdbID){
        dispatch({
            type:'delete',
            load:imdbID
        })
    }

    return (
        <div className="favorites">
            Əlavə edilmiş elementlərin sayı : {list.length}
             <ul className="favorites__list">
                {list.map((item, index) => {
                    return <li className='list-item' key={index}>{item.Title} ({item.Year})
                        <button type="button" onClick={() =>ItemDeleteHandler(item.imdbID)} className="favorites__delete">x</button>
                    </li>
                })}
            </ul>
           <label htmlFor="">
           <input type="text" />
            <button type='button' >Siyahı yarat</button>
            <br />
            <br />
           </label>

        </div>
    );
}


export default Favorites;