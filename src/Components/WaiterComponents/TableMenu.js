import React, {useEffect} from "react";
import {Table, Button} from "react-bootstrap";
import {connect} from "react-redux"
import {addAction} from "../../actions/addAction";

const TableMenu = (props) =>{
    
    const item = props.products;
    console.log(item)

    return(
        <div>
            <Table responsive>
                <thead  >
                </thead>
                <tbody>
                {props.data.filter(meal  =>
                    meal.category === props.nameOfMeal).map(meal =>
                    <tr key={meal.id}>
                        <td width="60%">{meal.name} </td>
                        <td width="20%">{meal.price.toFixed(2)}zł</td>
                        <td width="30%"><Button
                        onClick={()=>props.addAction(item,meal)}
                        className="mt-auto font-weight-bold"
                        variant="dark"
                        block>Zamów</Button></td>
                    </tr>)}
                </tbody>
            </Table>
        </div>
        )
};

const mapStateToProps =  state => ({
    products: state.orderState.listOfCurrentThings
})

export default connect(mapStateToProps,{addAction})(TableMenu);