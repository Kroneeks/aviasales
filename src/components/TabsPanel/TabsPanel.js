import React, { Component } from "react";

import { Tab } from "../Tab";
import { Ticket } from "../Ticket";
import "./TabsPanel.css";

export class TabsPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
      error: null,
      isLoaded: false,
      srcItems: [],
      items: [],
    };
  }

  onClickTabItem = (tab) => {
    if (tab === `Самый дешевый`) {
      this.setState({
        items: this.state.srcItems.filter((item) => item.price < 30000),
      });
    } else if (tab === `Самый быстрый`) {
      this.setState({
        items: this.state.srcItems.filter(
          (item) =>
            item.segments[0].duration < 1000 && item.segments[1].duration < 1000
        ),
      });
    }
    this.setState({ activeTab: tab });
  };

  componentDidMount() {
    fetch("https://front-test.beta.aviasales.ru/search")
      .then((res) => res.json())
      .then(({ searchId }) => {
        fetch(
          `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
        )
          .then((res) => res.json())
          .then(
            ({ tickets }) => {
              this.setState({
                isLoaded: true,
                srcItems: tickets,
                items: tickets.filter((ticket) => ticket.price < 30000),
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error,
              });
            }
          );
      });
  }

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;
    return (
        <div className="tabs">
          <ul className="tab-list">
            {children.map((child) => {
              const { label } = child.props;

              return (
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  onClick={onClickTabItem}
                />
              );
            })}
          </ul>
          <div className="tab-content">
            {this.state.items.map((item, key) => {
              return <Ticket key={key} item={item} id={key} />;
            })}
          </div>
        </div>
    );
  }
}
