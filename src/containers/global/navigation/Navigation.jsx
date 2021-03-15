import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import SignedInNavigation from './SignedInNavigation';
import SignedOutNavigation from './SignedOutNavigation'
import * as timeHelper from '../../../helpers/timeHelper'
import * as urlHelper from '../../../helpers/urlHelper'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchNav: false,
        }
        this.toggleSearchNav = this.toggleSearchNav.bind(this);
    }
    toggleSearchNav() {
        var box = document.querySelector(".navigation-search-btn");
        box.classList.toggle("navigation-search-btn-active");
        this.setState({searchNav: box.classList.contains("navigation-search-btn-active")})
    }
    renderSearchTopbar() {
        if (this.props.searchOptions !== null) {
                return (
                   <NavItem style={{ flex: 1, color: 'black', textAlign: 'center'}}>
                       
                       {this.state.searchNav && urlHelper.isFrontpage() ? <span style={{display: "block"}}>Edit your search options:</span>: null}
                       
                        <Button style={{flex: 0}} className="navigation-search-btn" onClick={this.toggleSearchNav}>
                        <div className="space-between">
                        <div className="search-item-container">{this.state.searchNav ? <div className="label-text">Departure city</div>: null}
                            <span>{this.props.searchOptions.departure}</span> </div>
                            <div className="search-item-container">{this.state.searchNav ? <div className="label-text">Start date</div>: null}
                            <span>{this.props.searchOptions.startDate}</span></div>
                            <div className="search-item-container">{this.state.searchNav ? <div className="label-text">End date</div>: null}
                            <span>{this.props.searchOptions.endDate}</span></div>
                            
                            {this.state.searchNav ? <Button className="search-icon-text-btn"><FontAwesomeIcon icon={faSearch} size="xs" /> Search trip</Button>: 
                                <div className="search-icon"><FontAwesomeIcon icon={faSearch} size="sm" /></div>
                                }
                        </div></Button>
                        
                    </NavItem>
                )
        }
        return;
    }
    render() {
        return (
            <Navbar variant="light" bg="light" sticky="top">
                <Navbar.Brand><Link to='/'>Nordico</Link></Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                </Nav>
                {this.renderSearchTopbar()}
                {console.log(window.location.pathname)}
                {this.props.signedIn ? <SignedInNavigation /> : <SignedOutNavigation />}
                {this.props.reservedTime !== undefined ?
                <Nav>
                    <NavItem className="nav-link purchase-nav-item">
                        <Link to={'/Purchase/' + (this.props.trip ? this.props.trip.id : '')}>
                            <li style={{color: 'white'}}>{timeHelper.convertSecondsToClock(this.props.counter, 'MMSS')} <FontAwesomeIcon icon={faShoppingCart} size="xs" /></li>
                        </Link>
                    </NavItem>
                </Nav> : null
                }
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        signedIn: state.auth.signedIn,
        reservedTime: state.trip.reservedTime,
        counter: state.trip.timer.counter,
        trip: state.trip.trip,
        searchOptions: state.trip.searchOptions
    }
}
export default connect(mapStateToProps)(Navigation);