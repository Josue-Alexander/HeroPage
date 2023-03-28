import { Navigate, useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string'

import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroByName } from "../helpers"


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse(location.search);
  const heroes = getHeroByName(q);
  
  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && heroes.length === 0;

  const {searchText, onInputChange} = useForm({
    searchText: ''
  })

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if( searchText.trim().length <= 1) return;

    navigate(`?q=${ searchText.toLowerCase().trim() }`)
  }

  return (
    <>
       <h5>Search</h5>
       <hr />

        <div className="row">

          <div className="col-5">
            <h4>Busquedas</h4>
            <hr />
            <form onSubmit={ onSearchSubmit}>
              <input 
              type="text" 
              placeholder="Search a Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
              />

              <button className="btn btn-outline-primary mt-1">
                  Search
              </button>

            </form>

          </div>

          <div className="col-7">
            <h4>Results</h4>
            <hr />

            {/* {
              ( q === '' )?
              <div className="alert alert-primary">Search a Hero</div>
              : (heroes.length===0)
              &&<div className="alert alert-danger">No Hero with <b>{ q }</b></div>
            } */}
                <div className="alert alert-primary animate__animated animate__fateIn " 
                style={{ display: showSearch ? '': 'none' }}>
                  Search a Hero
                  </div>

                  <div className="alert alert-danger animate__animated animate__fateIn" 
                  style={{ display: showError ? '' : 'none' }}>
                    No Hero with <b>{ q }</b>
                    </div>
            {
              heroes.map( hero => (
                <HeroCard key= {hero.id}  {...hero}/>

              ))
            }

            
          </div>
        </div>
    </>
  )
}
