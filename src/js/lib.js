import React, {Component} from "react";
import PropTypes from "prop-types";
import {formatDOB, formateAddress, formateAge, formatName} from "./func";

export class Contactlist extends Component {
    render() {
        return (
            <div className='section-left list'>
                <span className='list-note'>Scroll for more contacts</span>
                <ul>
                    {this.props.items.map( item => (
                        <li className='contact-small' key={item.key} >
                            <a href={"#contact/" + item.id}>
                                <figure>
                                    <img src={item.picture.thumbnail} alt={formatName(item.name)} />
                                    <figcaption>{formatName(item.name)} - {formateAge(item.dob)} yr</figcaption>
                                </figure>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

Contactlist.propTypes = {
    items: PropTypes.array
};

export class Contactdetails extends Component {
    render() {
        if (!this.props.item){
            return (
                <div className='section-right details'>
                    <p>Please select a contact</p>
                </div>
            );
        } else {
            return (
                <div className='section-right details'>
                    <div>
                        <h2>{formatName(this.props.item.name, true)}</h2>
                        <figure>
                            <img src={this.props.item.picture.large} alt={formatName(this.props.item.name)} />
                            <figcaption>{formateAge(this.props.item.dob)} years old </figcaption>
                        </figure>
                        <p>Gender: {this.props.item.gender}</p>
                        <p>Birthday: {formatDOB(this.props.item.dob)}</p>
                        <p>Email: {this.props.item.email}</p>
                        <p>Phone: {this.props.item.phone}</p>
                        <p>Cell: {this.props.item.cell}</p>
                        <p className='address'>{formateAddress(this.props.item.location)}</p>
                    </div>
                </div>
            );
        }
    }
}

Contactdetails.propTypes = {
    item: PropTypes.object
};
