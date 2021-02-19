import React from "react";
import { Input, Button, Checkbox, Collapse } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./Home.css";
import sample from "../assets/sample.svg";

const { Panel } = Collapse;

const Home = () => {
  const onSearch = (value) => console.log(value);
  return (
    <div className="home">
      <h1 className="main-header">Search for jobs</h1>
      <div className="main-content">
        <Input
          className="search-input"
          placeholder="Search by title or company"
          allowClear
          size="large"
          prefix={<SearchOutlined />}
          suffix={
            <Button onClick={onSearch} className="input-btn" type="primary">
              Search
            </Button>
          }
        />
        <Collapse className="filter" defaultActiveKey={["1"]}>
          <Panel header="Filter">
            <div>
              <div className="filter-content">
                <div className="filter-header">Location</div>
                <Input className="filter-input" placeholder="Add a location" />
                <span className="hr-rule" />
                <div className="filter-header">Skills</div>
                <Input className="filter-input" placeholder="Type to search" />
                <span className="hr-rule" />
                <div className="filter-contract">
                  <Checkbox>Full time</Checkbox>
                  <br />
                  <Checkbox>Contract</Checkbox>
                  <br />
                  <Checkbox>Internship</Checkbox>
                  <br />
                </div>
                <span className="hr-rule" />
                <Checkbox>Remote</Checkbox>
              </div>
            </div>
          </Panel>
        </Collapse>
        <div className="results-display">453 results</div>
        <div className="job-listing">
          <div className="job-list-item">
            <img src={sample} alt="" />
            <div className="card-body">
              <div className="card-body-title">Frontend Developer</div>
              <div className="job-list-salary">$85k – $105k</div>
              <div className="card-body-content">Taikai</div>
              <div className="card-body-content">Matosinhos, Portugal</div>
            </div>
          </div>
          <div className="job-list-item">
            <img src={sample} alt="" />
            <div className="card-body">
              <div className="card-body-title">Frontend Developer</div>
              <div className="job-list-salary">$85k – $105k</div>
              <div className="card-body-content">Taikai</div>
              <div className="card-body-content">Matosinhos, Portugal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
