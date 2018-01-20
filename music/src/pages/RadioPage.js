import React, { Component } from "react";
import Header from "../components/Header";
import DeviceSelector from '../components/DeviceSelector'
import SongVisualizer from '../components/SongVisualizer'
export default class RadioPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <DeviceSelector />
          <SongVisualizer/>
      </div>
    )
  }
}
