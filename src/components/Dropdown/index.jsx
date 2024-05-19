import React from "react";
import { useState, useMemo, useEffect, useRef } from "react";
import "./index.scss";
import arrowIcon from "../../assets/img/arrow-icon.svg";

function Dropdown(props) {
  const [showing, setShowing] = useState(false);

  const containerRef = useRef(null);

  const showOptions = () => {
    if (showing) {
      setShowing(false);
    } else {
      setShowing(true);
    }
  };

  const closeOptions = () => {
    setShowing(false);
  };

  const selectedOption = useMemo(() => {
    return props.options.find((item) => item.value === props.value);
  }, [props.options, props.value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowing(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const selectOption = (event) => {
    props.onSelect(event.target.dataset.value);
    setShowing(false);
  };

  return (
    <div className="dropdown-conteiner" ref={containerRef}>
      <div
        className={`dropdown-control ${showing ? "open" : ""}`}
        onClick={showOptions}
        isOpen={showing}
      >
        {selectedOption ? (
          <div className="dropdown-control-value ">{selectedOption.label}</div>
        ) : (
          props.placeholder || 'Select option'
        )}
        <img
          className="arow-icon"
          alt=""
          src={arrowIcon}
          onClick={showOptions}
          style={{
            transform: showing ? "rotate(90deg)" : "rotate(270deg)",
          }}
        />
      </div>

      {showing ? (
        <div className="dropdown-options" onClick={closeOptions}>
          {props.options.map((item) => (
            <div
              className={`option ${item.value === props.value ? "active" : ""}`}
              key={item.value}
              onClick={selectOption}
              data-value={item.value}
            >
              {item.label}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Dropdown;
