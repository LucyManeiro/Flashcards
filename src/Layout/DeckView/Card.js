import React from "react";
import {Link, useRouteMatch, useHistory} from "react-router-dom";
import {deleteCard} from "../../utils/api/index";


function Card({card}){
 const {url} = useRouteMatch();
 const cardId = card.id;
 const history = useHistory();

  //handles clicking the delete button on each card
  const deleteCardHandler = () => {
  if (window.confirm("Delete this card? You will not be able to recover it")) {
  deleteCard(cardId);
  history.go(0); 
  }
}

  //makes up each individual card
    return (
      <div class ="card">  
        <div class="card-body">
          <div class="container">
            < div class="row d-flex justify-content-between">
          {/*displays card front text*/}
            <div class="col-6">
              <p>{card.front}</p>
            </div>
            {/*displays card back text*/}
              <div class="col-6">
                <p>{card.back}</p>
              </div>
             </div>
              {/*takes user to Edit Card screen*/}
            <div className="d-flex justify-content-end">
              <Link to={`${url}/cards/${cardId}/edit`}>
                <button className="btn btn-secondary px-4">
                  Edit
                </button>
              </Link>
              <button className="btn btn-danger mx-2" onClick={deleteCardHandler}>
              Delete
              </button>
            </div>
          </div>
        </div> 
      </div>
    )
}

export default Card;