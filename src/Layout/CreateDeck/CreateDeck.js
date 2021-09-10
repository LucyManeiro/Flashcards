import CreateDeckForm from "./CreateDeckForm";
import React from "react";

function CreateNewDeck(){

  return (
    //breadcrumb navigation at top of page
    <div>
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Create Deck</li>
          </ol>
        </nav>
      </div>
      {/* Component for form to create new deck */}
      <CreateDeckForm/>
    </div>
  );
}

export default CreateNewDeck;