import { h, Component } from 'preact';
import Link from './link';
import Links from '../../links';

export default class LinkSection extends Component {
  render() {
    return (
      <section class="container grid-960">
        <div class="columns">
          <div class="column col-9 col-sm-12">
            <h1>Links collection</h1>
            <p>
              Click on a tag to filter,{' '}
              <a href="https://github.com/16ms/16ms.github.io/src/links.json">
                add a story
              </a>{' '}
              to the list on GitHub.
            </p>
          </div>
        </div>
        {Links.map(l => <Link {...l} />)}

      </section>
    );
  }
}
