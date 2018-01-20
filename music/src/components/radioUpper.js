import React, { Component } from "react";
import { Row, Col, Card, Avatar, Icon } from "antd";
import "./radio.css";
export default class RadioUpper extends Component {
  render() {
    return (
      <div>
        <Row style={{ marginTop: "2vh" }} className="container">
          <Col span={2}/>
          <Col span={20} className="container">
            <h1 className="head1">RADIO</h1>
          </Col>
         
          <Col span={2} className="avatar">
            <Avatar
              src={
                "https://cdn1.iconfinder.com/data/icons/media-volume-1/48/042-512.png"
              }
            />
          </Col>
        </Row>
        {/* ------------------------ */}
        <Row className="container">
          <Col span={24} className="container">
            <h6 className="head6">ONLINE MUSIC</h6>
          </Col>
        </Row>
        {/* ------------------------ */}
        <Row style={{ marginTop: "12vh" }} className="container">
        <Col span={1}/>
        <Col span={1}>
            <Icon type="left-circle-o"  className="icon1"/>
          </Col>
          <Col span={4} className="avatar">
            <Avatar
              src={
                "https://cdn2.iconfinder.com/data/icons/audio-4/500/Microphone_audio_communication_music_record_sound-512.png"
              }
            />
          </Col>
          <Col span={4} className="avatar">
            <Avatar
              src={
                "https://cdn3.iconfinder.com/data/icons/activity-add-on-vol-1/48/v-20-512.png"
              }
              />
          </Col>
          <Col span={4} className="avatar">
            <Avatar
              src={
                "https://cdn1.iconfinder.com/data/icons/media-volume-1/48/042-512.png"
              }
              />
          </Col>
          <Col span={4} className="avatar">
            <Avatar
              src={
                "https://cdn1.iconfinder.com/data/icons/video-controls/32/sound_on-512.png"
              }
             />
          </Col>
          <Col span={4} className="avatar">
            <Avatar
              src={
                "http://downloadicons.net/sites/default/files/music-symbol-icons-85700.png"
              }
             />
          </Col>
          <Col span={1}>
          
            <Icon type="right-circle-o"  className="icon1"/>
          </Col>
          <Col span={1}/>
        </Row>
        {/* ------------------------ */}
        <Row style={{ marginTop: "2vh" }} className="container">
          <h3 className="head3">DANCE</h3>
        </Row>
        {/* ------------------------ */}
        <Row style={{ marginTop: "2vh" }} >
        <div className="color" />
        </Row>

        {/* ------------------------ */}

        <Card />
        {/* ------------------------ */}
        <Row style={{ marginTop: "2vh" }} className="container">
        <Col span={1}/>
          <Col span={2}>
            <Icon type="caret-right" className="icon2"/>
          </Col>

          <Col span={4} className="container">
            <h4 className="head4">0:00</h4>
          </Col>

          <Col span={10} className="container">
            <h4 className="head4">Tycho-Awake</h4>
          </Col>

          <Col span={4} className="container">
            <h4 className="head4">-4:10</h4>
          </Col>

          <Col span={2} className="avatar1">
            <Avatar src={"https://cdn1.iconfinder.com/data/icons/video-controls/32/sound_on-512.png"}/>
          </Col>
          <Col span={1}/>
        </Row>
      </div>
    );
  }
}
