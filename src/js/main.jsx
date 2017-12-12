import ReactDOM from "react-dom";
import React from "react";
import {contacts} from "./contacts";
import { Contactlist, Contactdetails } from "./lib";


let state = {};
function setState(changes){
    state = Object.assign({},state,changes);
    let user,MainView;
    let location = state.location.replace(/^#\/?|\/$/g, "").split("/");

    if (location[0] === "contact" ){
        user = state.items.find(item => item.id == location[1] ? true : false);
    }
    MainView = (
        <div className="section">
            <Contactlist items = {state.items} />
            <Contactdetails item = {user}/>
        </div>
    );
    ReactDOM.render(MainView, document.getElementById("react-app"));
}

setState({
    items: contacts,
    location: location.hash
});

window.addEventListener("hashchange", ()=>setState({location: location.hash}));

