import React, {useEffect, useState} from "react";
import {contacts} from './listContacts';
import Contact from './Contact';

function Contacts() {
    let [contactList, setContactList] = useState(contacts);
    let [inputSearch, setInputSearch] = useState('');
    let [checkMale, setCheckMale] = useState(true);
    let [checkFemale, setCheckFemale] = useState(true);
    

    function inputHandlerChanger(e) {
        setInputSearch(e.target.value)
    }


    useEffect(() => {
            setContactList(
                contacts.map((el) => {
                    if (
                        Object.values(el).filter((val) =>
                            val.toLowerCase().includes(inputSearch)
                        ).length > 0
                    ) {
                        if ((checkFemale && el.gender === "female") || !el.gender) {
                            return el;
                        }
                        if ((checkMale && el.gender === "male") || !el.gender) {
                            return el;
                        }
                    }
                }).filter((val) => val !== undefined)
            )
        },
        [inputSearch, checkMale, checkFemale]);
    const inputHandlerMale = ({ target: { checked } }) => {
        setCheckMale(checked);
    };

    const inputHandlerFemale = ({ target: { checked } }) => {
        setCheckFemale(checked);
    };

    return (
        <div className="container">
            <div className="filter-container">
                <input
                    type="text"
                    className="inputFilter"
                    onChange={inputHandlerChanger}
                />
                <label>
                    <input
                        type="checkbox"
                        onChange={inputHandlerMale}
                        defaultChecked={checkMale}
                    />
                    Male
                </label>
                <label>
                    <input
                        type="checkbox"
                        onChange={inputHandlerFemale}
                        defaultChecked={checkFemale}
                    />
                    Female
                </label>
            </div>
            <div className="phone-list">
                {contactList.map((el, i) => {
                    return <Contact data={el} key={i} />
                })}
            </div>
        </div>
)
}

export default Contacts;
