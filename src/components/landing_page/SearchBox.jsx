import React, { Component } from 'react';
// eslint-disable-next-line
import { withRouter } from 'react-router-dom';
import { InputGroup, Button, Container, Col, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            city: 'Copenhagen',
            country: 'DK',
            stayLength: 14,
            locale: 'en-US',
            currency: 'CNY'
        }
    }
    searchTrip() {
        //Format datetimes: 'YYYY-MM-DD'
        let startDate = this.state.startDate.toISOString().slice(0, 10);
        let endDate = this.state.endDate.toISOString().slice(0, 10);

        this.props.history.push({
            pathname: `/Browse/${startDate}/${endDate}/${this.state.city}/${this.state.stayLength}/${this.state.country}/`,
            res: "response",
        })
    }
    render() {
        return (
            <Container className="search-container" fluid>
                <Container className="search-box">
                    <Form inline onSubmit={e => {
                        e.preventDefault()
                    }}>
                        <Form.Group>
                            <div className="search-title">
                                <h5>
                                    Start exploring
                                </h5>
                            </div>
                            <Form.Label htmlFor="input-city">Where?</Form.Label>
                            <InputGroup>
 <Autocomplete 
                                                                          className="mx-sm-2"
                                    id="input-city"
                                    aria-describedby="city-help"
                                    defaultValue={this.state.city}
                                    onChange={(event) => this.setState({ city: event.target.value })}
        dataSource={['Tirana','Yerevan','Gyumri','Innsbruck','Salzburg','Vienna','Baku','Minsk','Brussels','Sarajevo','Tuzla','Banja Luka','Mostar','Sofia','Plovdiv','Burgas','Varna','Split','Zagreb','Dubrovnik','Pula','Zadar','Osijek ','Lošinj ','Brač ','Rijeka','Larnaca','Nicosia','Paphos','Prague','Brno','Ostrava','Karlovy Vary','Pardubice','Copenhagen ','Billund','Aarhus','Aalborg','Odense','Tallin','Tartu','Helsinki','Inari','Kittilä','Kokkola','Kuopio','Kuusamo','Lappeenranta','Ajaccio','Bastia','Béziers','Biarritz','Bordeaux','Brest','Brive-la-Gaillarde','Calvi','Carcassonne','Clermont-Ferrand','Deauville','Dole','Figari','Grenoble','La Rochelle','Lille','Limoges','Lorient','Lourdes, Tarbes','Lyon','Marseille','Montpellier','Nantes','Nice','Nîmes','Paris','Perpignan','Poitiers','Rennes','Rodez','Saint-Étienne','Saint-Malo, Dinard','Strasbourg','Beauvais','Toulouse','Tours','Tbilisi','Kutaisi','Berlin','Bremen','Cologne/Bonn','Dresden','Dortmund','Frankfurt','Friedrichshafen','Hamburg','Hannover','Karlsruhe/Baden-Baden','Leipzig/Halle (Saale)','Lübeck','Memmingen','Munich','Nuremberg','Stuttgart','Weeze','Athens','Cephalonia','Crete','Corfu','Kalamata','Kos','Mykonos Island','Preveza/Lefkada','Rhodes','Santorini','Thessaloniki','Volos','Zakynthos','Budapest','Debrecen','Reykjavík','Dublin','Cork','Alghero','Ancona','Bari','Bergamo','Bologna','Brindisi','Cagliari','Catania','Comiso','Crotone','Cuneo','Forlì','Genoa','Lamezia Terme','Milan','Naples','Olbia','Palermo','Parma','Perugia','Pescara','Pisa','San Marino','Rome','Trapani','Trieste','Turin','Venice','Verona','Almaty','Pristina','Riga','Kaunas','Palanga','Vilnius','Luxembourg City','Luqa','Chişinău','Tivat','Podgorica','Amsterdam','Eindhoven','Groningen','Maastricht/Aachen','Skopje','Alesund','Bergen','Bodø','Haugesund','Kristiansand','Molde','Oslo','Sandefjord','Stavanger','Trondheim','Tromsø','Bydgoszcz','Gdańsk','Katowice','Kraków','Łódź','Lublin','Olsztyn','Poznań','Rzeszów','Szczecin','Warsaw','Wrocław','Faro','Porto','Lisboa','Funchal','Ponta Delgada','Terceira Island','Bucharest','Craiova','Cluj-Napoca','Constanta','Iași','Satu Mare','Sibiu','Suceava','Târgu Mureş','Timişoara','Kazan','Moscow','Saint Petersburg','Belgrade','Niš','Bratislava','Košice','Poprad','Ljubljana','Alicante','Almería','Bilbao','Ibiza','Menorca','Palma de Mallorca','Barcelona','La Palma','Lanzarote','Las Palmas','Fuerteventura','Granada','Madrid','Málaga','Murcia','Oviedo Gijón','Santiago de Compostela','Seville','Tenerife','Valencia','Åre','Gothenburg','Karlstad','Kiruna','Luleå','Malmö','Stockholm','Umeå','Växjö','Visby','Basel','Geneva','Zurich','Antalya','Dalaman','Istanbul','Donetsk','Kharkiv','Kiev','Luhansk','Simferopol','Lviv','Odessa','Zaporizhia','Aberdeen','Belfast','Birmingham','Bournemouth','Bristol','Cardiff','Derry','Exeter','Nottingham','Edinburgh','Glasgow','Inverness','Leeds / Bradford','Liverpool','London','Manchester','Newcastle','Newquay','Southampton','Dubai']}
      />
                            </InputGroup>
                            <Form.Label htmlFor="input-start-date">From?</Form.Label>
                            <InputGroup>
                                <DatePicker
                                    className="mx-sm-2 form-control"
                                    selected={this.state.startDate}
                                    onChange={date => this.setState({ startDate: date })}
                                    placeholderText="Select start date"
                                    minDate={new Date()}
                                />
                            </InputGroup>
                            <Form.Label htmlFor="input-end-date">To?</Form.Label>
                            <InputGroup>
                                <DatePicker
                                    className="mx-sm-2 form-control"
                                    selected={this.state.endDate}
                                    onChange={date => this.setState({ endDate: date })}
                                    placeholderText="Select end date"
                                    minDate={this.state.startDate}
                                />
                            </InputGroup>

                            <Col xs="auto">
                                <Button type="submit" className="mb-2 search-trips-button" onClick={() => this.searchTrip()}>
                                    Search
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Container>
            </Container>
        )
    }
}

export default withRouter(SearchBox)
