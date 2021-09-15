import React from 'react'
import { Link, useLocation, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


class NavBar extends React.Component {
    render(){
        // const { location } = props
        const { location } = this.props
        return(

            <Menu>
                <Link to='/'>
                  <Menu.Item active={location.pathname === '/'} >
                    Home
                  </Menu.Item >
                </Link>
                <Link to='/appointments'>
                  <Menu.Item active={location.pathname === '/appointments'} >
                    Appointments  
                 </Menu.Item >
                </Link>
                <Link to='/doctors'>
                  <Menu.Item active={location.pathname === '/doctors'} >
                    Doctors  
                 </Menu.Item >
                </Link>
                <Link to='/users'>
                  <Menu.Item active={location.pathname === '/users'} >
                    Users  
                 </Menu.Item >
                </Link>
            </Menu>
        )

    }
}

export default withRouter(NavBar)