import React, {useState, useEffect} from "react";

import {db} from "../../config";

import "react-datepicker/dist/react-datepicker.css";
import {SingleOrder} from "../../Components/managerComponents/reportComponents/SingleOrder";


export const ManagerDailyReport = (props) => {



    const [data1, setData] = useState([]);
    const [summary, setSummary] = useState(0.00);

    const startDate = new Date(new Date().setHours(0,0,0,0));
    const endDate = new Date(new Date().setHours(23,59,59,59));

    const summaryHandler = (cost) => {
        setSummary(cost);
    };

    const orderData = () => {
        let tmp = [];
        let totalCost =0;
        db.collection('completedOrders')
            .where('createdAt', '>=', startDate)
            .where('createdAt', '<=', endDate)
            .get()
            .then(querySnapshot => {
                querySnapshot.docs.map(doc => {tmp.push(doc.data());
                    totalCost = totalCost + doc.data().orderCost;
                });
                summaryHandler(totalCost);
                setData(tmp);
            });
    };

    useEffect( () => {
        orderData()
    }, []);



    return (
        <div className="container" style={{margin: "auto"}}>
            {data1.length === 0 ? (null) : (<div>
                Utarg: {summary.toFixed(2)}zł <br/>
                Ilość zamówień: {data1.length}<br/>
                Średnia cena zamówienia: {(summary/data1.length).toFixed(2)}zł
            </div>)}
            {data1.map(order =>
                <SingleOrder key={order.id} order={order} />

            )

            }
        </div>
    );
}