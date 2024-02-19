import PropTypes from "prop-types";
import { useMemo } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import styled from "styled-components";

const SelectComponent = styled(Select)`
  width: 100%;
  margin-bottom: 1rem;
  background-color: mediumaquamarine;
`;

const formatGroupLabel = (data) => {
  return (
    <div>
      <span>{data.label}</span>
      <span>{data.options.length}</span>
    </div>
  );
};

// const colorStyles = {};

const ControlledInput = ({ control, name }) => {
  const options = useMemo(
    () => [
      {
        label: "Names",
        options: [
          { value: "chocolate", label: "Chocolate", color: "pink" },
          { value: "strawberry", label: "Strawberry", color: "hotpink" },
        ],
      },
      { value: "vanilla", label: "Vanilla", color: "yellow" },
    ],
    []
  );
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <SelectComponent
          isMulti
          {...field}
          options={options}
          defaultValue={[{ label: "tomas" }, { label: "ester" }]}
          formatGroupLabel={formatGroupLabel}
          closeMenuOnSelect={false}
          styles={{
            control: (styles) => ({
              ...styles,
              backgroundColor: "#fff",
            }),
            option: (styles, { data, isDisabled, isSelected, isFocused }) => {
              console.log(data);
              return {
                ...styles,
                backgroundColor: isDisabled
                  ? "#ccc"
                  : isSelected
                  ? "orangered"
                  : isFocused
                  ? "green"
                  : data.color,
              };
            },
            // container: ({ styles }) => ({
            //   ...styles,
            //   // border: "2px solid green",
            // }),
            // input: ({ styles }) => ({
            //   ...styles,
            //   backgroundColor: "yellow",
            //   padding:"0.7rem 0"
            // }),
          }}
        />
      )}
    />
  );
};

ControlledInput.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
};

export default ControlledInput;
