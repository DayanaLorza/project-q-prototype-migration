import React, { useContext } from "react";
import EventContext from "../../../context/eventbrite/eventContext";
import AlertContext from "../../../context/alert/alertContext";
import { Button, Input, Row, Col } from "reactstrap";

// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

const SearchEvents = () => {
  const eventContext = useContext(EventContext);
  const alertContext = useContext(AlertContext);
  const { location, keyword, within } = eventContext;

  const onSubmit = e => {
    e.preventDefault();

    if (location === "") {
      alertContext.setAlert("Please enter a Location", "danger");
    } else {
      eventContext.searchEvents(location, keyword, within);
      if (!eventContext.loading) {
        scrollAfterSearch();
      }
    }
  };

  const onSelectRange = e => {
    e.preventDefault();
    eventContext.setWithin(e.target.value);
  };

  const onSelectKeyword = e => {
    e.preventDefault();
    eventContext.setKeyword(e.target.value);
  };

  const updateLocation = location => {
    eventContext.setLocation(location);
  };

  const clearEvents = () => {
    eventContext.clearEvents();
  };

  const onChange = e => {
    e.preventDefault();
    updateLocation(e.target.value);
  };

  //Scroll to events section after a seach has been submitted
  const scrollAfterSearch = () => {
    document.getElementById("events-container").scrollIntoView({
      behavior: "smooth",
      alignToTop: true
    });
  };

  return (
    <div className="search">
      <form onSubmit={onSubmit}>
        <Row>
          <Col sm="8">
            <Input
              type="text"
              name="text"
              placeholder="Enter a location..."
              value={location}
              onChange={onChange}
            />
            {/* <Input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          /> */}
          </Col>
          <Col sm="4">
            <Button color="primary" value="search" type="submit">
              Queeery
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="col-sm">
            <p className="category">Within miles:</p>
            <select onChange={onSelectRange} value={within}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </Col>
          <Col className="col-sm">
            <p className="category">Keyword:</p>
            <select onChange={onSelectKeyword} value={keyword}>
              <option value="queer">Queer</option>
              <option value="lesbian">Lesbian</option>
              <option value="lgbt">LGBT</option>
              <option value="gay">gay</option>
            </select>
            {/* <button className="btn btn-light btn-block" onClick={clearEvents}>
              Clear
            </button> */}
          </Col>
          <Col className="col-sm">
            <p className="category">Is Free?</p>
            <Switch
              defaultValue={false}
              offColor=""
              offText=""
              onColor=""
              onText=""
            />
            <br />
            {/* {showClear && ( */}
            {/* <button className="btn btn-light btn-block" onClick={clearEvents}>
              Clear
            </button> */}
            {/* )} */}
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default SearchEvents;
