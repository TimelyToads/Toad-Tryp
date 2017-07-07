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
        <h2 className="ui green dividing header">Pick up</h2>
        <div className="field">
          <label for="dep_autocomplete">Address</label>
          <input id="dep_autocomplete" name='departure_address_line1' placeholder="Enter your address" type="text"></input>
        </div>
        <div className="fields">
          <div className="field">
            <label>City</label>
            <input name='departure_city' id="locality" placeholder="San Francisco"></input>
          </div>
          <div className="field">
            <label>State</label>
              <input name="departure_state" id="administrative_area_level_1" placeholder="CA"></input>
          </div>
          <div className="field">
            <label>Zip</label>
              <input name="departure_zip" id="postal_code" placeholder="94102"></input>
          </div>
        </div>
        <div className="fields">
          <Form.Field width={3}>
            <label>Date</label>
            <SingleDatePicker date={this.state.departureDate} name="departure_date" id="departure_date" onDateChange={departureDate => this.setState({ departureDate })} focused={this.state.focused} onFocusChange={({ focused }) => this.setState({ focused })} />
          </Form.Field>
        </div>
        <div className="fields">
          <div className="field">
            <label>Depart Time</label>
            <input name="departure_time" id="departure_time"></input>
          </div>
          <div className="field">
            <label>Price</label>
            <input name="price" id="price"></input>
          </div>
          <div className="field">
            <label>Seats</label>
            <Form.Field size='small' name='seats' control={Select} id="seats" options={options}/>
          </div>
        </div>

        <h2 className="ui green dividing header">Drop off</h2>
        <div id="field">
          <label for="arrival_autocomplete">Address</label>
          <input id="arrival_autocomplete" name='arrival_address_line1' placeholder="Arrival Address" type="text"></input>
        </div>
        <div className="fields">
          <div className="field">
            <label>City</label>
            <input name='arrival_city' id="arrival_locality" placeholder="San Francisco"></input>
          </div>
          <div className="field">
            <label>State</label>
              <input name="arrival_state" id="arrival_administrative_area_level_1" placeholder="CA"></input>
          </div>
          <div className="field">
            <label>Zip</label>
              <input name="arrival_zip" id="arrival_postal_code" placeholder="94102"></input>
          </div>
        </div>
      </form>
    )
  }
}

export default AutoCompleteForm;
