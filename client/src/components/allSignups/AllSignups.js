import React, { Component } from 'react';
import axios from 'axios';
import { SERVER_URL, TIME_FRAMES } from '../../constants/constants';
import { BeatLoader } from 'react-spinners';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import './AllSignups.scss';

export default class AllSignups extends Component {
  state = {
    signups: null,
    loading: false
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true }); 
      const httpRes = await axios.get(SERVER_URL);
      this.setState({ signups: httpRes.data, loading: false })
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { signups, loading } = this.state;
    return (
      <div className='signups'>
        <Table selectable={false}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Last Name</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn>Timeframe</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              <div style={{ textAlign: 'center' }}>
              <BeatLoader loading={loading} />
              </div>
            }
            {
              signups &&
              signups.map(user => (
                <TableRow>
                  <TableRowColumn>{user.firstName}</TableRowColumn>
                  <TableRowColumn>{user.lastName}</TableRowColumn>
                  <TableRowColumn>{user.email}</TableRowColumn>
                  <TableRowColumn>{TIME_FRAMES[user.timeFrame]}</TableRowColumn>
                </TableRow>
              ))
            }

          </TableBody>
        </Table>
      </div>
    );
  }
}
