import React, { Component } from 'react'
import './DeviceSelector.css'
export default class DeviceSelector extends Component {
  render() {
    return (
      <div className="DeviceSelector" >
        <SideButtonLeft/>
          <div className="devices" ></div>
        <SideButtonRight/>
      </div>
    )
  }
}

const SideButtonLeft = () => (
  <div className="sideButton" ><i className="material-icons">keyboard_arrow_left</i></div>
)
const SideButtonRight = () => <div className="sideButton" ><i className="material-icons">keyboard_arrow_right</i></div>