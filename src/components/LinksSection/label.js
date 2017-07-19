import { h, Component } from 'preact';

export default class Label extends Component {
  render() {
    return (
      <label class="chip">
        {this.props.name}
        <button class="btn btn-clear" />
      </label>
    );
  }
}
