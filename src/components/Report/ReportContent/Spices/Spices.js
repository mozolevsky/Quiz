import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TopImg from '../Shared/TopImg/TopImg';
import ContinueBtn from '../Shared/ContinueBtn/ContinueBtn';
import ColumnList from '../Shared/ColumnList/ColumnList';

const tempDataListColumn = [
    "Asafetida", 
    "Ajwan", 
    "Anise", 
    "Basil", 
    "Bay Leaves", 
    "Black pepper", 
    "Cardamom", 
    "Caraway", 
    "Cayenne", 
    "Ceylon ", 
    "Chili", 
    "Cloves", 
    "Coriander", 
    "Cumin", 
    "Dill", 
    "Fennel", 
    "Fenugreek", 
    "Ginger", 
    "Juniper", 
    "Marjoram", 
    "Mint", 
    "Mustard", 
    "Neem", 
    "Nutmeg", 
    "Oregano", 
    "Paprika", 
    "Parsley", 
    "Pippali", 
    "Poppy seeds", 
    "Rosemary", 
    "Cinnamon", 
    "Saffron", 
    "Savory", 
    "Sage", 
    "Tarragon", 
    "Trikatu", 
    "Turmeric", 
    "Vanilla", 
];

class Spices extends Component {
    render() {
        return (
           <div>
                <TopImg 
                    source="http://via.placeholder.com/801x329" 
                    desc="pics for img"
                    offset="right"
                />
                <h1 className="title">Recommended Spices for Vata</h1>
                <p>Cras semper nisi vitae arcu congue euismod. In sit amet varius nisi. Nullam eu orci hendrerit lorem aliquet blandit. Pellentesque ac hendrerit nibh. Cras semper nisi vitae arcu congue euismod. In sit amet varius nisi. Nullam eu orci hendrerit lorem aliquet blandit. Pellentesque ac hendrerit nibh.</p>

                <ColumnList 
                    list={tempDataListColumn} 
                    style={{marginBottom: 37}}
                    type="purple"
                />

                <ContinueBtn link="/report/aromatherapy" txt="Recommended Oils"/>
           </div>
        );
    }
}

export default Spices;
