import React from "react";
import {
  Card,
  Button,
  Badge,
  Container,
  Row,
  Col,
  Carousel
} from "react-bootstrap";

import "./App.css";

import { getData } from "./api/api";

class App extends React.Component {
  state = {
    cars: []
  };

  componentDidMount = () => {
    this.addCar();
  };

  addCar = async () => {
    const { cars } = this.state;

    const car = await getData();

    this.setState({
      cars: [...cars, car]
    });

    console.log(this.state);
  };

  render() {
    const { cars } = this.state;

    return (
      <Container className="bg-light">
        <Row>
          {cars.map((car, index) => {
            return (
              <Col lg="auto">
                <Card style={{ width: "18rem" }} key={car.index}>
                  {/* <Card.Img
                    variant="top"
                    src={car.nuotraukos && car.nuotraukos[0]}
                  /> */}
                  <Carousel indicators={false} interval={null}>
                    {car.nuotraukos &&
                      car.nuotraukos.map(img => {
                        return (
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={img}
                              alt="Car"
                            />
                          </Carousel.Item>
                        );
                      })}
                  </Carousel>
                  <Card.Body>
                    <Card.Title>{car.marke}</Card.Title>
                    <Card.Text>Modelis: {car.modelis}</Card.Text>
                    <Card.Text>Metai: {car.metai}</Card.Text>
                    <Badge variant="light">{car.kaina} €</Badge>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Button onClick={this.addCar}>Pridėti</Button>
      </Container>
    );
  }
}

export default App;
