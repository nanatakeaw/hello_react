import React from 'react';

class SearchTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            mycar: "all"
        }
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    search = (event) => {
        this.setState({ "name": "Narongsak" });
    }
    render() {
        const tableHeaderStyle = {
            color: "black",
            backgroundColor: "white",
            fontFamily: "Arial",
            width: "40%"
        };
        return (
            <form>
                <table style={tableHeaderStyle}>
                    <tr>
                        <td colSpan="2" align="left"><h2>{this.state.name}</h2> drive a {this.state.mycar} car  </td>
                    </tr>
                    <tr>
                        <td>Name :</td>
                        <td align="left"><input type="text" name="name" onChange={this.myChangeHandler} /></td>
                    </tr>
                    <tr>
                        <td>Car :</td>
                        <td align="left">
                            <select name="mycar" value={this.state.mycar} onChange={this.myChangeHandler}>
                                <option value="all">All</option>
                                <option value="Ford">Ford</option>
                                <option value="Volvo">Volvo</option>
                                <option value="MG">MG</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="left"><input type="button" id="seachBt" value="Search" onClick={this.search} /></td>
                    </tr>
                </table>
            </form>
        )
    }
}

export default SearchTest