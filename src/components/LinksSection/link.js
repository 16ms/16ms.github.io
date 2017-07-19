import { h, Component } from 'preact';
import style from './style';

export default class Link extends Component {
  render() {
    const { previewImage, title, linkTo, tags, createdAt } = this.props;

    return (
      <div class="columns">
        <div class="column col-9 col-sm-12">
          <p>{createdAt}</p>
          <div class={style.link}>
            <h4
              class="card-title"
              style={{
                marginBottom: 0,
                alignItems: 'center',
                verticalAlign: 'center',
              }}>
              <a href={linkTo}>{title}</a>
              <p class={style.linkText}><a href={linkTo}>{linkTo}</a></p>
            </h4>
          </div>

          {tags.map(tag => <label class="chip">{tag}</label>)}
          {/* </div>
          </div> */}
        </div>
      </div>
    );
  }
}
