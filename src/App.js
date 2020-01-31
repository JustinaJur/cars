import React from "react";
import { Card, Button, Container, Row, Col, Carousel } from "react-bootstrap";

import "./App.css";
import { getCars } from "./api/api";

class App extends React.Component {
  state = {
    cars: []
  };

  componentDidMount = () => {
    this.addCar();
  };

  addCar = async () => {
    const { cars } = this.state;

    const car = await getCars();

    this.setState({
      cars: [...cars, car]
    });
  };

  renderCarImage = (img, index) => (
    <Carousel.Item key={index}>
      <img className="d-block w-100" src={img} alt="Car" />
    </Carousel.Item>
  );

  render() {
    const { cars } = this.state;

    if (cars.length < 1) {
      return <h2 className="spinner">Loading...</h2>;
    }

    return (
      <div className="wrapper">
        <Container className="bg-light">
          <Row>
            {cars.map((car, index) => {
              return (
                <Col lg="3" sm="6" xs="12" key={index}>
                  <Card style={{ width: "18rem" }}>
                    <Carousel indicators={false} interval={null}>
                      {car.nuotraukos.map(this.renderCarImage)}
                    </Carousel>
                    <Card.Body>
                      <Card.Title>{car.marke}</Card.Title>
                      <Card.Text>Modelis: {car.modelis}</Card.Text>
                      <Card.Text>Metai: {car.metai}</Card.Text>
                      <Card.Text className="highlighted">
                        {car.kaina} €
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
          <Button onClick={this.addCar}>Pridėti</Button>
        </Container>
      </div>
    );
  }
}

export default App;
