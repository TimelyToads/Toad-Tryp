import React from 'react';
import { Header, Image, Grid, Container, Card, Icon } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class FeaturedDestinations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      depart: '',
      arrive: '',
      date: '',
      seats: '',
      redirectTo: null,
      trips: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(location) {
    this.setState({ arrive: location });
    this.fetch(location);
  }

  fetch(arrive) {
    axios.get('/api/trips', { 
      params: { arrive: arrive } 
    })
    .then((response) => {
      this.setState({
        redirectTo: '/searchresults',
        trips: response.data
      });
      console.log('Successfully fetched trips in the FeaturedDestinations Component');
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    const { redirectTo, trips, date, depart, arrive } = this.state;
    const currentUser = this.props.currentUser;

    return (
      <Container>
        <br/>
        <Header as='h2' color='grey'>Featured Destinations</Header>
        <Card.Group itemsPerRow={5} >
          <Card onClick={this.handleClick.bind(this, 'San Francisco')}>
            <Image src='https://lh3.googleusercontent.com/SVUYMduJTwXo-ekvtyO_akFNS3Ee083DzKjGtlsNqHo-vlpgmfJXj5EkCqBVVyoXMRTjb9VoTexQJNaX7s09M5pTo4SxKIQJKixDUORKGiqHpWnAUvY1aGl2pBZdJ2dVrhwH_MZhefxyRzeDtdWEl9CCQhLQdCIY4Ckm9HevuJoImESd2v_cPXw6Q8wClO4pC5SroMXvW0ZyJcHCzDiz95uisg1hPoUcXY8Eo450EIyLJL6EQiWG0J5k__c5hx5yeJ840VzALIpWikaruDU609pOaKMXyfEu4UkUcGoh0QUA-gl0U5LjuPHo6e2Io7Fel212TkBk_I7_eny_toDUlSm6-LQ186z4pOSnCLKPBSd6iXw6BpVsebzFWODexGnCKvdJsCU3xhflQ3hisYDt_6jy0IMa3c1U5YMBP5checjOB-OxvzBSYu6P97dmpuC2bArXcOyo7ywIzwcjvoUL9IaEd2y2BG1G_2vOSE1uQK8DYxJHmrcDpo-uFK09oB4j3DpF-Lc2E7WKH55QlXQRYt7NFbhyd-iYDFMvnKuinm4mZg4KGjn8Nt7ln3U3hbj0e9me0oy7hfq9r8PF2POA5KOLgFNDdaLQTsynhf4F5gnxWbNLC8st=w982-h1472-no' />
            <Card.Content>
              <Icon name='map pin'/>San Francisco
            </Card.Content>
            
          </Card>

          <Card onClick={this.handleClick.bind(this, 'Las Vegas')}>
            <Image src='https://lh3.googleusercontent.com/9GC6GSt_WLuZutgVFjPG2Pzw0i0KaaxAgqKNumFpNNJKRuLco5iAJROfS7aWqfAsnjSpLyk4rNvcGeRs4WxqixEaIoEfvjt3fiEBi_RpkAub_gqfe5n2dcchq5EGqZqUCDVC6rVBsMmKXCMYm9_NoNRn8X66TriCjB9IcVFxSzWqw3ZQ9gF02zFqTWepsoaQb_4ovR6nrmRUpJd1M-NlSLFZWMqzrRLC60HOFfqb3Rv6NCcgKF-S1g1AoTN_Y3ldJSQl67xEoKoMJ2qWWpYXj5qcUsfiT1GM4jTsfl4kqEZw4I8ujbXXU9csPrfLVdhTpe32Uo7OjBLYg8vqu9MkV15Ra6-ui59wX-rSs3l6hIMHuzyeXVN-FXRxztunZI-53Y-06bX4XgyG2-x_V5mfTRyeBudQgoVMyTdVb8GjB3P_HIj3nz0zPpTih-W4c8V3zsdZoscS4KxN1JJUoVWrUtEgSCDD6jts_wsUtqKcxN84azXsDRUhgVaZpcoXNc61utKnwgIb_yYESV_mMO6Md_sT9TYwXtc5cywLoCG7HV-k9QtO7RPmw_3MvlqatCST0CKzSSwkqnO2mD2IAYgXcVImLavNrTF7mbBiZpd5xxhJSarWOsEH=w982-h1472-no' />
            <Card.Content>
              <Icon name='map pin'/>Las Vegas
            </Card.Content>
          </Card>

          <Card onClick={this.handleClick.bind(this, 'Seattle')}>
            <Image src='https://lh3.googleusercontent.com/4qi5uf9Saoxq0TJoPOS1ABstnMj05jCE0KgrRW2CYCYL47ZDTVIbdP5SZpy9atAT4L_UqMdvzM_kUwWBm5LSniItSlmlYbftfL0c1MSLObmyNefsBETp3mBoCXWklztDgZ_qCyAb0jFo__lWoN8SB-sDDe1PhGAzijIAWXbhN6Pzc3mOmGUKTMv0GxoErEPFG0GHVwR_JuvEYQu_dKZCLPG8p4VU-qhYFyo2m9NX4Zd77cEwjw3BMXMBoCEXFOXj6Dd-qD6ROgKCsFNYAu9T1X_syPJw4QxPrxvRlI9sYwT41jDXmNKfzpe-Qp_w50-e_EhM_TTeZyafTDEQxOOOtcaPGKf_yDyZhLgvgoLFAZHl6KoaCFtvBKgQB_F_DpP5xi7lv90p0pqHPKkZb_6T72PeEzYrWvVjYb1VDmavFvW2WfVhFBstG4f140A4ufIr4GO9KwRmUOl3HV1Owl2ah2FxiXMbMpi-gbjAhrUIrW81DLMmjMZBnVH7-8atjjkXihf9Dm1tJhYaNT4BRnQryLO8JFTtkhbZqkb-XlEeq2oc9A3UZxYcqW4R2ESiRoYKlzxBfNJ5E2xnopzpwcPUH3U73IflUXHjdd5TZTwndv0w_9epMVd3=w640-h960-no' />
            <Card.Content>
              <Icon name='map pin'/>Seattle
            </Card.Content>
          </Card>

          <Card onClick={this.handleClick.bind(this, 'Denver')}>
            <Image src='https://lh3.googleusercontent.com/b8__xz9So4BUWSGROQXw--XBfPWlCgrVewKihYTVqJY0v8ABwZ-ELrpiRQY3_so7uvURLhB-3GitVYU-_JpJEKJpUP688O4K6lpkZ90iZRugRw5GoZxjR4NcWXNbQ1N3GbLRdH36aZGIQZiYxC6UMuohHbi9GGAOZ3RcNO69a7belR908i1XZ5IFrrCf_y0an_mUbPMv3C_Z42FU-QfJXonGg1zzZJs3cNkcismfDu4rQTt_kAiAeL34FNyH8QpKPs2KLcJr6YhNBGL4Hr4cKozW_T6DzZo2zKfysN1wG1SP4yySwyuhSb_SN6qyemb9xchXgq98XseeZjE3OdqI7GbvHHYjEAQny0Pk5lO9PFFrjiGOzcPsa4a_2Q98wj1Lv5LP_RkfZ2plYYwCBU4NxooHeyFtP1qM272y6bfms8chFEMMWeX3t7whRnjG4LUJ3bLIeRf2sq0ApraKNp1WzZC4mx8uATbq58Ni7AHH-zKRalBqvIyWN0cwAVlY1fiv_VNDrfGmChFh0FmGRomF7Xw8B29hWLNyu8kfQfQUxY7n5009MwnBhRZXayr4mP8GVAyLuuXAHTaiaQqyeFJQAPouFDMOeMI687se6TCKMe0byp_vjEJw=w736-h1104-no' />
            <Card.Content>
              <Icon name='map pin'/>Denver
            </Card.Content>
          </Card>

          <Card onClick={this.handleClick.bind(this, 'Los Angeles')}>
            <Image src='https://lh3.googleusercontent.com/leE1-wercCNFoiniMJ9rwg_kLkqDnHZtbvkxDqF2FKhjrkw3Ag1roLqpL-Z0ayWLeZjZu8iH1S5-MaXcHGS_QSw6YMLS2Qqq-DqbmM2Kz4J1AaIcWkYB6pJ5wCXxZOHMb-CMkZBqDh56wTfAFChj1iQNdi_hI8CAmySjU4OGsubSXccEd_LlThhwi3hb51-Z3mK0j65NJjXUXlQW7e3ASJ1S2YnkCmAAjcvWlWuFk6qB1UayKmCNzOwr6MXSb-UIUYZshYBbjGZZ079dgVAKQ4NB8Elx0esHHiao-a0WnNOeyIamOBeJbQPjEuopcXoxfP4EaMFTEhQOSRk7mKA4fUJJb9n1h9D4dme7VILLpmyEL6Iq5Bx7H9AAqU_DCwOoDF3W6fsWp0aK0ffASSKJssvbTYNqZtO2S2uvYERuJuWJWT0OJo_UYgS2am_gv0bKkRDiBzMMWDMVYZvg-jmr3p9BAMkk4RvnHk3AC76_7BbFTJ7CezIK0Ddqt2EIHzifF9Pliil5mkcSSBC9HECFBVT7M80dN5Kj3IoxnZ9AT44BzsoAXsVv80_ezU5UwluOmC4elfM-O28q-Ot0YdaUWTb0egnJQnjM7VfcxTCR3oLSYHTwBvXm=w600-h900-no' />
            <Card.Content>
              <Icon name='map pin'/>Los Angeles
            </Card.Content>
          </Card>
        </Card.Group>
        {redirectTo && (
          <Redirect from={'/'} push to={{
            pathname: redirectTo,
            state: { trips, depart, arrive, currentUser }
          }}/>
        )}
      </Container>
    );
  }
}

export default FeaturedDestinations;