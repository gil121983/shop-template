import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { InputContainer } from "../StyledInput";
import { DropdownMenu } from "../StyledDropdown";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";

class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array),
  };

  static defaultProps = {
    suggestions: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
    };
  }

  // handle the input value 
  onChange = (e) => {
    const { products } = this.props.value;
    const suggestions = products;
    const userInput = e.currentTarget.value;
    console.log(suggestions, this.props);

    // Filter suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
    });
  };

  // Event fired when the user presses a key down 
  onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
      });
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
      },
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <Link
                  to="./details"
                  className={className}
                  key={suggestion.id}
                  onClick={() => {
                    this.props.value.handleDetail(suggestion.id);
                    this.props.closeNavbar();
                    this.setState({
                      activeSuggestion: 0,
                      filteredSuggestions: [],
                      showSuggestions: false,
                      userInput: "",
                    });
                  }}
                >
                  <div className="dropdown-item">{suggestion.title}</div>
                </Link>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions dropdown-item">
            <em>No suggestions...</em>
          </div>
        );
      }
    }

    const searchIcon = (
      <i
        className="fas fa-search nav-link"
        style={{ position: "absolute", top: "25px" }}
      />
    );
    return (
      <Fragment>
        <InputContainer
          className="nav-link"
          type="text"
          placeholder="search"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        <span className="input-group-append"></span>

        <DropdownMenu style={suggestionsStyle}>
          {suggestionsListComponent}
        </DropdownMenu>
      </Fragment>
    );
  }
}

const suggestionsStyle = {
  position: "absolute",
};

export default Autocomplete;
