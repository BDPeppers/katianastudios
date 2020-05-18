import React from 'react'

//3rd party components
import {BrowserRouter} from 'react-router-dom';
//desktop nav
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";

class Nav extends React.Component {

    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }

    render(){
        return(
            <>
                 <BrowserRouter>
     
                    <MDBNavbar className='nav' color="indigo" dark expand="lg">
                        <MDBNavbarBrand>
                          <strong className="home-text">Katiana Studios</strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse} />
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                          <MDBNavbarNav left>
                            <MDBNavItem active>
                              <MDBNavLink to="#!">About</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                              <MDBNavLink to="#!">Gallery</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                              <MDBNavLink to="#!">Work with Me</MDBNavLink>
                            </MDBNavItem>
                            
                          </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
 
                </BrowserRouter>


              

            </>
         );
    }
   
}


export default Nav;