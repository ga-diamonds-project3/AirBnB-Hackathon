import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>

        <div id="selectors">
          <div className="nav-bar">
            <div className="nav-div">
              <h3> Where </h3>
              <select id='neighborhood' onChange={this.props.onSelectChange}>
                <option value="0"> Alphabet City </option>
                <option value="1"> Battery Park City </option>
                <option value="2"> Bay Ridge </option>
                <option value="3"> Bedford-Stuyvesant </option>
                <option value="4"> Bensonhurst </option>
                <option value="5"> Boerum Hill </option>
                <option value="6"> Brooklyn Heights </option>
                <option value="7"> Bushwick </option>
                <option value="8"> Canarsie </option>
                <option value="9"> Carroll Gardens </option>
                <option value="10"> Chelsea </option>
                <option value="11"> Chinatown </option>
                <option value="12"> Clinton Hill </option>
                <option value="13"> Crown Heights </option>
                <option value="14"> DUMBO </option>
                <option value="15"> Downtown Brooklyn </option>
                <option value="16"> Dyker Heights </option>
                <option value="17"> East Flatbush </option>
                <option value="18"> East Harlem </option>
                <option value="19"> East New York  </option>
                <option value="20"> East Village  </option>
                <option value="21"> East Williamsburg  </option>
                <option value="22"> Financial District  </option>
                <option value="23"> Flatbush </option>
                <option value="24"> Flatiron District </option>
                <option value="25"> Fort Greene </option>
                <option value="26"> Gramercy Park </option>
                <option value="27"> Greenpoint </option>
                <option value="28"> Greenwich Village </option>
                <option value="29"> Harlem </option>
                <option value="30"> Hell's Kitchen </option>
                <option value="31"> Inwood </option>
                <option value="32"> Kips Bay </option>
                <option value="33"> Little Italy </option>
                <option value="34"> Lower East Side </option>
                <option value="35"> Meatpacking District </option>
                <option value="36"> Midtown </option>
                <option value="37"> Midtown East </option>
                <option value="38"> Midwood </option>
                <option value="39"> Morningside Heights </option>
                <option value="40"> Murray Hill </option>
                <option value="41"> Noho </option>
                <option value="42"> Nolita </option>
                <option value="43"> Park Slope </option>
                <option value="44"> Prospect Heights </option>
                <option value="45"> Sheepshead Bay </option>
                <option value="46"> Soho </option>
                <option value="47"> South Williamsburg </option>
                <option value="48"> Sunset Park </option>
                <option value="49"> Times Square/Theatre District </option>
                <option value="50"> Tribeca </option>
                <option value="51"> Union Square </option>
                <option value="52"> Upper East Side </option>
                <option value="53"> Upper West Side </option>
                <option value="54"> Washington Heights </option>
                <option value="55"> West Village </option>
                <option value="56"> Williamsburg </option>
                <option value="57"> Windsor Terrace </option>
                <option value="58"> Yorkville </option>
              </select>
            </div>
            <div className="nav-div" id="middle">
            <h3> When </h3>
              <select id='month' onChange={this.props.onSelectChange}>
                <option value="1"> January </option>
                <option value="2"> Febuary </option>
                <option value="3"> March </option>
                <option value="4"> April </option>
                <option value="5"> May </option>
                <option value="6"> June </option>
                <option value="7"> July </option>
                <option value="8"> August </option>
                <option value="9"> Setpember </option>
                <option value="10"> October </option>
                <option value="11"> November </option>
                <option value="12"> December </option>
              </select>
            </div>
             <div className="nav-div">
              <h3>Rooms</h3>
              <select id='room' onChange={this.props.onSelectChange}>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
              </select>
            </div>
            <div className="nav-div" id="rating">
              <h3> Rating </h3>
                <input id="rating" onChange={this.props.onSelectChange} placeholder="50 - 100" type="number" name="points" step="5" min="50" max="100" />
            </div>
            <div className="nav-div" id="reviews">
              <h3> # of Reviews </h3>
                <input id="reviews" onChange={this.props.onSelectChange} placeholder="10 - 200" type="number" name="points" step="10" min="10" max="200" />
            </div>
          </div>

        </div>

          <button>Search</button>
        </form>
    )
  }
}

