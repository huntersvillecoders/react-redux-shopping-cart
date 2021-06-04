import React from 'react'

export class Navbar extends React.Component {
    render() {
        const { items } = this.props
        console.log("items in navbar ", items);
        return <>
            {/* <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
            <a classNameName="navbar-brand" href="#"><i>E-cart</i></a>
            <div classNameName="ml-auto">      <i className="fa" style={{ 'font-size': "24px" }}>&#xf07a;</i>
                <span className='badge badge-warning' id='lblCartCount'> 5 </span></div> */}

            {/* <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span classNameName="navbar-toggler-icon"></span>
            </button>
            <div classNameName="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div classNameName="navbar-nav">
                    <a classNameName="nav-item nav-link active" href="#">Home <span classNameName="sr-only">(current)</span></a>
                    <a classNameName="nav-item nav-link" href="#">Features</a>
                    <a classNameName="nav-item nav-link" href="#">Pricing</a>
                    <a classNameName="nav-item nav-link disabled" href="#">Disabled</a>
                </div>
            </div> */}
            {/* </nav> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">E-Cart</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    {/* <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
    </ul> */}
                    <span className="navbar-text ml-auto">
                        <i className="fa" style={{ 'font-size': "24px" }}>&#xf07a;</i>
                        <span className='badge badge-warning' id='lblCartCount'> {items.length} </span>    </span>
                </div>
            </nav>
        </>
    }
}