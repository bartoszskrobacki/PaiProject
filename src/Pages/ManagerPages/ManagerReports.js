import React, {useState, useEffect} from "react";

import {db} from "../../config";
import DatePicker from "react-datepicker";
import {Button} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import {SingleOrder} from "../../Components/managerComponents/reportComponents/SingleOrder";


export const ManagerReports = (props) => {


    const [startDate, setStartDate] = useState(new Date(new Date().setHours(0,0,0,0)));
    const [endDate, setEndDate] = useState(new Date(new Date().setHours(23,59,59,59)));
    const [data1, setData] = useState([]);



    const [summary, setSummary] = useState({
        cash: 0.00,
        card: 0.00
    });
    const summaryHandler = (costCash, costCard) => {
        setSummary({cash: costCash,
            card: costCard});
    };

    const orderData = () => {
        let tmp = [];
        let totalCash =0;
        let totalCard =0;
        db.collection('completedOrders')
            .where('createdAt', '>=', startDate)
            .where('createdAt', '<', endDate)
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {tmp.push(doc.data());
                    if(doc.data().payment === "Cash")
                        totalCash = totalCash + doc.data().orderCost;
                    else
                        totalCard = totalCard + doc.data().orderCost;
                });
                summaryHandler(totalCash, totalCard);

                setData(tmp);
            });
    };



    return (
        <div className="container" style={{margin: "auto"}}>
            <div className="container" style={{margin: "auto", fontSize: 20, width: "80%", display: "flex", justifyContent: "space-around"}}>
                <div>
                    Start date:  <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    className="red-border"
                />
                </div>
                <div>
                    End date:
                    <DatePicker dateFormat="dd/MM/yyyy" selected={endDate} onChange={date => setEndDate(date)} /></div>
                <div >
                    <Button
                        className="mt-auto font-weight-bold"
                        variant="dark"
                        onClick={() => { orderData() }}>Wyświetl raport</Button>

                </div>


            </div>
            {data1.length === 0 ? (null) : (
                <div style={{margin: "auto", fontSize: 20, width: "80%", border: "1px solid black", display: "flex", justifyContent: "space-around"}}>
                    <div>
                        Utarg: {(summary.card + summary.cash).toFixed(2)}zł <br/>
                        Ilość zamówień: {data1.length} <br/>
                        Średnia cena zamówienia: {((summary.card + summary.cash)/data1.length).toFixed(2)}zł
                    </div>
                    <div>
                        Gotówka: {summary.cash.toFixed(2)}zł<br/>
                        Karta: {summary.card.toFixed(2)}zł<br/>
                    </div>
                </div>
            )}
            {data1.map(order =>
                <SingleOrder key={order.id} order={order} />

            )

            }
        </div>
    );
}