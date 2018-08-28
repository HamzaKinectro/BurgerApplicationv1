import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";
import React, { Component } from "react";

class orderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igkey => {
      return (
        <li key={igkey}>
          <span style={{ textTransform: "capitaliza" }}>{igkey}</span> :
          {this.props.ingredients[igkey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>CheckOut ? </p>
        <Button btnType="Danger" clicked={this.props.purchasedCancel}>
          CANCEL
        </Button>{" "}
        <span />
        <Button btnType="Success" clicked={this.props.purchasedContinue}>
          Continue
        </Button>
      </Aux>
    );
  }
}

export default orderSummary;
