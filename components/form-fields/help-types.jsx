import React from "react";
import DynamicCheckboxGroup from "./dynamic-checkbox-group.jsx";
import Service from "../../js/service";

class HelpTypesField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: [] };

    Service.helpTypes.get().then((options) => {
      this.setState({ options: options.map((option) => option.name) });
    });
  }

  render() {
    return (
      <DynamicCheckboxGroup
        options={this.state.options}
        onChange={this.props.onChange}
      />
    );
  }
}

export default HelpTypesField;
