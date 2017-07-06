import React from 'react';
import { Segment, Container, Header, Button, Checkbox, Form, Input, Select, Icon } from 'semantic-ui-react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

class AutoCompleteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    this.initAutocomplete();
  }

  initAutocomplete() {
    var departureAutocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('dep_autocomplete')),
        {types: ['geocode']});
    var arrivalAutocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('arrival_autocomplete')),
        {types: ['geocode']});
    departureAutocomplete.addListener('place_changed', departureFillInAddress);
    arrivalAutocomplete.addListener('place_changed', arrivalFillInAddress);
    
    function departureFillInAddress() {
      let place = departureAutocomplete.getPlace();

      var componentForm = {
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        postal_code: 'short_name'
      };

      for (var component in componentForm) {
        document.getElementById(component).value = '';
      }

      for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
          var val = place.address_components[i][componentForm[addressType]];
          document.getElementById(addressType).value = val;
        }
      }
    }

    // trip.arrival_date
    // trip.arrival_time
    // arrival_address_line1
    // arrival_city
    // arrival_state
    // arrival_zip


    function arrivalFillInAddress() {
      let place = arrivalAutocomplete.getPlace();

      let componentForm = {
        arrival_locality: 'long_name',
        arrival_administrative_area_level_1: 'short_name',
        arrival_postal_code: 'short_name'
      };

      for (let component in componentForm) {
        document.getElementById(component).value = '';
      }

      for (let i = 0; i < place.address_components.length; i++) {
        var addressType = 'arrival_'+place.address_components[i].types[0];
        if (componentForm[addressType]) {
          var val = place.address_components[i][componentForm[addressType]];
          document.getElementById(addressType).value = val;
        }
      }
    }

  }

  // geolocate() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       var geolocation = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       };
  //       var circle = new google.maps.Circle({
  //         center: geolocation,
  //         radius: position.coords.accuracy
  //       });
  //       autocomplete.setBounds(circle.getBounds());
  //     });
  //   }
  // }

  render() {

    const options = [
      {key: '1', text: '1', value: '1'},
      {key: '2', text: '2', value: '2'},
      {key: '3', text: '3', value: '3'},
      {key: '4', text: '4', value: '4'},
      {key: '5', text: '5', value: '5'}
    ];

    return (
      <form onSubmit={this.props.handleSubmit} className="ui form">
        <div id="locationField">
          <input id="dep_autocomplete" name='departure_address_line1' placeholder="Enter your address" type="text"></input>
        </div>

        <table id="address">
          <tr>
            <td className="label">City</td>
            <td className="wideField" colspan="3">
              <input className="field" name='departure_city' id="locality"></input>
            </td>
          </tr>
          <tr>
            <td className="label">State</td>
            <td className="slimField">
              <input className="field" name="departure_state" id="administrative_area_level_1"></input>
            </td>
            <td className="label">Zip code</td>
            <td className="wideField">
              <input className="field" name="departure_zip" id="postal_code"></input>
            </td>
          </tr>
          <tr>
            <td className="label">Departure Date</td>
            <Form.Field width={3}>
             <SingleDatePicker date={this.state.departureDate} name="departure_date" id="departure_date" onDateChange={departureDate => this.setState({ departureDate })} focused={this.state.focused} onFocusChange={({ focused }) => this.setState({ focused })} />
            </Form.Field>
          </tr>
          <tr>
            <td className="label">Depart Time</td>
            <td className="wideField" colspan="3">
              <input className="field" name="departure_time" id="departure_time"></input>
            </td>
          </tr>
          <tr>
            <td className="label">Price</td>
            <td className="wideField" colspan="3">
              <input className="field" name="price" id="price"></input>
            </td>
          </tr>
          <tr>
            <td className="label">Seats</td>
            <td className="wideField" colspan="3">
              <Form.Field size='small' name='seats' control={Select} id="seats" options={options}/>
            </td>
          </tr>
        </table>
        <div id="arrival_locationField">
          <input id="arrival_autocomplete" name='arrival_address_line1' placeholder="Arrival Address" type="text"></input>
        </div>
        <table id="arrival_address">
          <tr>
            <td className="label">Arrival City</td>
            <td className="wideField" colspan="3">
              <input className="field" name='arrival_city' id="arrival_locality"></input>
            </td>
          </tr>
          <tr>
            <td className="label">Arrival State</td>
            <td className="slimField">
              <input className="field" name="arrival_state" id="arrival_administrative_area_level_1"></input>
            </td>
          </tr>
          <tr>
            <td className="label">Arrival Zip code</td>
            <td className="wideField">
              <input className="field" name="arrival_zip" id="arrival_postal_code"></input>
            </td>
          </tr>
        </table>
      </form>
    )
  }
}

export default AutoCompleteForm;

/*
<td className="label">Depart Date</td>
            <td className="wideField" colspan="3">
              <input className="field" name="departure_date" id="departure_date"></input>
            </td>
*/