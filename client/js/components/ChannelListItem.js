import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class ChannelListItem extends Component {

  render() {
    const { channel } = this.props;
    const { channel: selectedChannel, onShow } = this.props;
    return (
      <a className={classnames({ selected: channel === selectedChannel })}
         style={{ cursor: 'hand'}}
         onClick={() => onShow(channel)}>
        <li className="channel-list-item">
          <h5 className="channel-name">{channel.name}</h5>
        </li>
      </a>
    );
  }
}
