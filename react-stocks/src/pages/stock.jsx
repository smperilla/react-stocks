import React from 'react';
import {useParams} from 'react-router-dom';



const Stock = ({stockData}) => {
    const params = useParams();
    const stock = stockData.find((s) => {
        return s.symbol === params.symbol;
    });
   
    return (
        <div>
        <h1>{stock.name}</h1>
        <p>This is the individual stock page</p>
        {stock.symbol} <br />
        {stock.name} <br />
        ${stock.lastPrice} <br />
        {stock.change} <br />
        ${stock.high} <br />
        ${stock.low} <br />
        ${stock.open} <br />

      
  
        </div>
    );
    }
    export default Stock;