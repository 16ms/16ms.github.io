import { h, Component } from 'preact';

export default class Hero extends Component {
  render() {
    return (
      <section class="section section-hero bg-gray">
        <div class="caption">Shot in 1000fps</div>
        <div class="fullscreen-bg">
          <video
            loop
            muted
            autoplay
            poster="/assets/media/insta.jpg"
            class="fullscreen-bg__video">
            <source src="/assets/media/insta.webm" type="video/webm" />
            <source src="/assets/media/insta.mp4" type="video/mp4" />
            <source src="/assets/media/insta.ogv" type="video/ogg" />
          </video>
        </div>
        <section id="overview" class="grid-hero container grid-960 text-center">

          <div class="header">
            <h1>Dreaming of 16ms</h1>
            <h3>Tools and practices for predictable UI performance</h3>

            <p>
              Watch regressions on CI:{' '}
              <a href="https://github.com/GoogleChrome/lighthouse">
                LightHouse
              </a>
            </p>
            {/* <div class="columns">
              <div class="column col-4 col-xs-12">
                <div class="card text-center">
                  <div class="card-header">
                    <span class="card-title">Watch regressions</span>
                  </div>
                  <div class="card-body">
                    Do performance tests on CI with
                    <a href="https://github.com/GoogleChrome/lighthouse">
                      LightHouse
                    </a>,
                    <a href="https://16ms.github.com/videotape">Videotape</a>,
                    and <a href="#tools">more</a>
                  </div>
                </div>
              </div>
              <div class="column col-4 col-xs-12">
                <div class="card text-center">
                  <div class="card-header">
                    <span class="card-title">Measure</span>
                  </div>
                  <div class="card-body">
                    Get insights into what causes dropped frames and latency
                    using
                    <a href="#tools">variety</a> of tools
                  </div>
                </div>
              </div>
              <div class="column col-4 col-xs-12">
                <div class="card text-center">
                  <div class="card-header">
                    <span class="card-title">Fix</span>
                  </div>
                  <div class="card-body">
                    Find simular story about how to eliminate your bottleneck if
                    you can't
                  </div>
                </div>
              </div>
            </div> */}
          </div>

        </section>
      </section>
    );
  }
}
