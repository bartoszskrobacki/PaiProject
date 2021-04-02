import React, {useState, useEffect} from "react";

import {db} from "../../config";

import "react-datepicker/dist/react-datepicker.css";
import {SingleOrder} from "../../Components/managerComponents/reportComponents/SingleOrder";


export const WaiterDailyReport = (props) => {



    const [data1, setData] = useState([]);
    const [summary, setSummary] = useState({
        cash: 0.00,
        card: 0.00
    });
    const summaryHandler = (costCash, costCard) => {
        setSummary({cash: costCash,
            card: costCard});
    };
    const startDate = new Date(new Date().setHours(0,0,0,0));
    const endDate = new Date(new Date().setHours(23,59,59,59));



    const orderData = () => {
        let tmp = [];
        let totalCard =0;
        let totalCash =0;
        db.collection('completedOrders')
            .where('waiterFirstName', '==', "Alicja")
            .where('waiterLastName', '==', "Kot")
            .where('createdAt', '>=', startDate)
            .where('createdAt', '<=', endDate)
            .get()
            .then(querySnapshot => {
                querySnapshot.docs.map(doc => {tmp.push(doc.data());
                    if(doc.data().payment === "Cash")
                    totalCash = totalCash + doc.data().orderCost;
                    else
                        totalCard = totalCard + doc.data().orderCost;
                });
                summaryHandler(totalCash, totalCard);
                setData(tmp);
            });
    };

    useEffect( () => {
        orderData()
    }, []);

console.log("xd")

    return (
        <div className="container" style={{margin: "auto"}}>
            {data1.length === 0 ? (null) : (<div style={{margin: "auto", fontSize: 20, width: "80%", border: "1px solid black", display: "flex", justifyContent: "space-around"}}>
                <div>
                Utarg: {(summary.card + summary.cash).toFixed(2)}zł <br/>
                    Ilość zamówień: {data1.length} <br/>
                </div>
                <div>
                Gotówka: {summary.cash}zł<br/>
                Karta: {summary.card.toFixed(2)}zł<br/>
                </div>
            </div>)}
            {data1.map(order =>
                <SingleOrder key={order.id} order={order} />

            )

            }
        </div>
    );
}