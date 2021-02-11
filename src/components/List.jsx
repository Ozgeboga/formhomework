import React from "react";
import { Button, Card } from "react-bootstrap";

function List(props) {
  return (
    <div>
      {props.inputs.map((item, index) => {
        return (
          <div>
            <Card className="border-0 mt-3">
              <p>
                <strong>FirstName: </strong>
                {item.firstname}
              </p>
              <p>
                <strong>LastName: </strong>
                {item.lastname}
              </p>
              <p>
                <strong>Email: </strong>
                {item.email}
              </p>
              <p>
                <strong>Info : </strong>
                {item.info}
              </p>

              <Button
                type="submit"
                className="btn btn-danger w-25"
                onClick={() => props.deleteButton(index)}
              >
                Delete
              </Button>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default List;
