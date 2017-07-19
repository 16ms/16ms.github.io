import { h, Component } from 'preact';
import Hero from './hero';
import LinksSection from '../../components/LinksSection';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <LinksSection />
      </div>
    );
  }
}
