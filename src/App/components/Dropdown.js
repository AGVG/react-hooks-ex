import React from "react";
import styled from "styled-components";
import List from "./List";

const Container = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  width: 20rem;
`;

const DisplayedValue = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
`;

class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      showDropdown: false,
      displayedValue: "Select a value"
    };
    this.dropdownRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick);
  }

  handleOutsideClick = event => {
    this.dropdownRef.current &&
      !this.dropdownRef.current.contains(event.target) &&
      this.setState({ showDropdown: false });
  };

  onDropdownClick = () => this.setState({ showDropdown: true });

  onElementClick = value => () =>
    this.setState({ displayedValue: value, showDropdown: false });

  render() {
    const { showDropdown, displayedValue } = this.state;
    return (
      <Container ref={this.dropdownRef} onClick={this.onDropdownClick}>
        <DisplayedValue>{displayedValue}</DisplayedValue>
        {showDropdown && <List onClick={this.onElementClick} />}
      </Container>
    );
  }
}

export default Dropdown;
