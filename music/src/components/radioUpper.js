import React, { Component } from "react";
import { Row, Col, Card, Avatar, Icon } from "antd";
import "./radio.css";
export default class RadioUpper extends Component {
  render() {
    return (
      <div>
        <Row style={{ marginTop: "2vh" }}>
          <Col span={18}>
            <h1>RADIO</h1>
          </Col>
          <Col span={6}>
            <Avatar
              src={
                "https://cdn1.iconfinder.com/data/icons/media-volume-1/48/042-512.png"
              }
            />
          </Col>
        </Row>
        {/* ------------------------ */}
        <Row style={{ marginTop: "2vh" }}>
          <Col span={24}>
            <h6>ONLINE MUSIC</h6>
          </Col>
        </Row>
        {/* ------------------------ */}
        <Row style={{ marginTop: "2vh" }}>
          <Col span={2}>
            <Icon type="left-circle-o" />
          </Col>
          <Col span={4}>
            <Avatar
              src={
                "https://cdn2.iconfinder.com/data/icons/audio-4/500/Microphone_audio_communication_music_record_sound-512.png"
              }
            />
          </Col>
          <Col span={4}>
            <Avatar
              src={
                "https://cdn3.iconfinder.com/data/icons/activity-add-on-vol-1/48/v-20-512.png"
              }
            />
          </Col>
          <Col span={4}>
            <Avatar
              src={
                "https://cdn1.iconfinder.com/data/icons/media-volume-1/48/042-512.png"
              }
            />
          </Col>
          <Col span={4}>
            <Avatar
              src={
                "https://cdn1.iconfinder.com/data/icons/video-controls/32/sound_on-512.png"
              }
            />
          </Col>
          <Col span={4}>
            <Avatar
              src={
                "http://downloadicons.net/sites/default/files/music-symbol-icons-85700.png"
              }
            />
          </Col>
          <Col span={2}>
            <Icon type="right-circle-o" />
          </Col>
        </Row>
        {/* ------------------------ */}
        <Row style={{ marginTop: "2vh" }}>
          <h3>DANCE</h3>
        </Row>
        {/* ------------------------ */}
        <Row className="color" style={{ marginTop: "2vh" }} />
        {/* ------------------------ */}

        <Card />
        {/* ------------------------ */}
        <Row style={{ marginTop: "2vh" }}>
          <Col span={3}>
            <Icon type="caret-right" />
          </Col>

          <Col span={6}>
            <h4>0:00</h4>
          </Col>

          <Col span={6}>
            <h4>Tycho-Awake</h4>
          </Col>

          <Col span={6}>
            <h4>-4:10</h4>
          </Col>

          <Col span={3}>
            <Avatar src={"https://pixabay.com/p-937654/?no_redirect"} />
          </Col>
        </Row>
      </div>
    );
  }
}
