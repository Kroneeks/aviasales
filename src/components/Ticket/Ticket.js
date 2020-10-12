import React, { Component } from "react";

import "./Ticket.css";

export class Ticket extends Component {
  convertDateToTime(standartFormatDate, duration) {
    const date = new Date(standartFormatDate);
    const arrivalTime = new Date(Date.parse(date) + duration * 1e4);
    return `${("0" + date.getHours()).slice(-2)}:${(
      "0" + date.getMinutes()
    ).slice(-2)} - ${("0" + arrivalTime.getHours()).slice(-2)}:${(
      "0" + arrivalTime.getMinutes()
    ).slice(-2)}`;
  }

  convertUnixDurationTime(duration) {
    const time = new Date(duration * 1e4).toISOString().slice(-13, -5);
    return `${time.slice(0, 2)}ч ${time.slice(3, 5)}м`;
  }

  render() {
    const { price, segments } = this.props.item;

    return (
      <div className="ticket">
        <div className="ticket__header">
          <p className="ticket__price">{`${String(price).slice(0, 2)} ${String(
            price
          ).slice(2)} Р`}</p>
          <img
            src={`//pics.avs.io/99/36/${this.props.item.carrier}.png`}
            alt={this.props.id}
          />
        </div>
        <div className="ticket__content">
          <div className="ticket__segment">
            <div className="ticket__destination">
              <p className="ticket__content_header">{`${segments[0].origin} - ${segments[0].destination}`}</p>
              <p className="ticket__content_text">
                {this.convertDateToTime(
                  this.props.item.segments[0].date,
                  this.props.item.segments[0].duration
                )}
              </p>
            </div>
            <div className="ticket__duration">
              <p className="ticket__content_header">в пути</p>
              <p className="ticket__content_text">
                {this.convertUnixDurationTime(
                  this.props.item.segments[0].duration
                )}
              </p>
            </div>
            <div className="ticket__stops">
              <p className="ticket__content_header">пересадки</p>
              <p className="ticket__content_text">
                {segments[0].stops.length === 0
                  ? "-"
                  : segments[0].stops.join(",  ")}
              </p>
            </div>
          </div>
          <div className="ticket__segment">
            <div className="ticket__destination">
              <p className="ticket__content_header">{`${segments[1].origin} - ${segments[1].destination}`}</p>
              <p className="ticket__content_text">
                {this.convertDateToTime(
                  this.props.item.segments[1].date,
                  this.props.item.segments[1].duration
                )}
              </p>
            </div>
            <div className="ticket__duration">
              <p className="ticket__content_header">в пути</p>
              <p className="ticket__content_text">
                {this.convertUnixDurationTime(
                  this.props.item.segments[1].duration
                )}
              </p>
            </div>
            <div className="ticket__stops">
              <p className="ticket__content_header">пересадки</p>
              <p className="ticket__content_text">
                {segments[1].stops.length === 0
                  ? "-"
                  : segments[1].stops.join(",  ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
