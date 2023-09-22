import Stocks from "../components/stocks";


const Stock = (stocks) => {
    return (
        <div>
        <h1>Stock</h1>
        <p>This is the individual stock page</p>
     
       <Stocks>
       <h1>{stocks.change}</h1>
       </Stocks>
  
        </div>
    );
    }
    export default Stock;