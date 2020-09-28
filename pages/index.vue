<template>
  <div>
    <!--Header-->
    <div class="header bg-gradient-primary pt-5 pb-7">
      <div class="container">
        <div class="header-body">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="pr-5">
                <h1 class="display-2 text-white font-weight-bold mb-0">CloudAM LTD</h1>
                <h2 class="display-4 text-white font-weight-light">A professional developer skilled in the latest AWS and Java technologies</h2>

                <div class="mt-5">
                  <base-button v-scroll-to="'#contactme'" class="btn btn-neutral my-2">Contact Me</base-button>
                  <base-dropdown>
                    <base-button slot="title-container" type="success" class="dropdown-toggle">
                      CV
                    </base-button>
                    <a target="_blank" class="dropdown-item" href="/CV/AdamMeadows.html">Web</a>
                    <a target="_blank" class="dropdown-item" href="/CV/AdamMeadows.pdf">PDF</a>
                  </base-dropdown>
                  <base-button v-scroll-to="'#id-about-me'" class="btn btn-neutral my-2">About me</base-button>
                </div>

                <div class="mt-5">
                  <nuxt-link to="/que" class="btn btn-neutral my-2">Que</nuxt-link>
                  <nuxt-link to="/trackandtrace" class="btn btn-neutral my-2">Track and Trace</nuxt-link>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row pt-5">
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow mb-4">
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">Projects</h5>
                      <p>Currently working and supporting a major government project.</p>
                      <p>Actively marketing and developing customer journey management and track and trace systems.</p>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow mb-4">
                        <i class="ni ni-istanbul"></i>
                      </div>
                      <h5 class="h3">UK Based</h5>
                      <p>Based in Central Milton Keynes, UK with easy access to
                        London. With the ability to remote work anywhere in the
                        world.</p>
                      <div>
                        <badge type="success" rounded>business</badge>
                        <badge type="success" rounded>vision</badge>
                        <badge type="success" rounded>success</badge>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 pt-lg-5 pt-4">
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-success text-white rounded-circle shadow mb-4">
                        <i class="ni ni-planet"></i>
                      </div>
                      <h5 class="h3">Well prepared</h5>
                      <p>With multiple projects under my belt I am well versed in deadlines and delivering high quality maintainable code. </p>
                      <div>
                        <badge type="warning" rounded>marketing</badge>
                        <badge type="warning" rounded>product</badge>
                        <badge type="warning" rounded>launch</badge>
                      </div>
                    </div>
                  </div>
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-warning text-white rounded-circle shadow mb-4">
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">Proven success</h5>
                      <p>I have worked in a plethora of different work environments from side projects, startup's, SME and major government projects.</p>
                      <div>
                        <badge type="primary" rounded>design</badge>
                        <badge type="primary" rounded>system</badge>
                        <badge type="primary" rounded>creative</badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <section id="id-about-me" class="py-6 pb-9 bg-default">
      <div class="row justify-content-center text-center">
        <div class="col-md-6">
          <h2 class="display-3 text-white">About me</h2>
          <p class="lead text-white">
            Professionalism and client rapport is something I consider to be very important within a business environment.<br>
            Therefore I will take every single request made seriously while building a relationship with customers.
          </p>
          <p class="lead text-white">I started CloudAM after a wanting to work for myself in a flexible environment to exercise my passion of technology, making and designing software and collaborating with like minded people.</p>
        </div>
      </div>
    </section>
    <section class="section section-lg pt-lg-0 mt--7">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape bg-gradient-primary text-white rounded-circle mb-4">
                      <i class="ni ni-check-bold"></i>
                    </div>
                    <h4 class="h3 text-primary text-uppercase">Friendly Support</h4>
                    <p>When I create something not only do I put a lot of thought into how to build
                      it, but how it is going to be used. And if things do go wrong, I will make it my highest priority to get things up and running again.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape bg-gradient-success text-white rounded-circle mb-4">
                      <i class="ni ni-istanbul"></i>
                    </div>
                    <h4 class="h3 text-success text-uppercase">Agile practises</h4>
                    <p class="description mt-3">I am well practised in modern containerised microservices and the latest AWS
                      technologies. I've deployed multiple production ready applications which are
                      still running inside AWS and other cloud platforms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-6 bg-secondary">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <img src="~/static/img/theme/track.png" class="img-fluid marketing" alt="Landing image">
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <h1>Track and Trace</h1>
              <p>In these unprecedented times businesses need help and support to meeting Public Health England new and changing requirements.</p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-success mr-3">
                        <i class="ni ni-settings-gear-65"></i>
                      </div>
                    </div>
                    <div>
                      <h4 class="mb-0">Conforms to government guidelines</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-success mr-3">
                        <i class="ni ni-html5"></i>
                      </div>
                    </div>
                    <div>
                      <h4 class="mb-0">Put the customers in charge</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-success mr-3">
                        <i class="ni ni-satisfied"></i>
                      </div>
                    </div>
                    <div>
                      <h4 class="mb-0">Super friendly support</h4>
                    </div>
                  </div>
                </li>
              </ul>
              <nuxt-link to="/trackandtrace" class="font-weight-bold text-info mt-5">Explore Track and Trace further</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-6">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <img src="~/static/img/theme/que.png" class="img-fluid marketing" alt="Landing image 3">
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <h1>Que</h1>
              <p>Que allows you to manage customers in store</p>
              <nuxt-link to="/que" class="font-weight-bold text-info mt-5">Explore Que further</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-6">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <div class="col-md-6 order-md-2">
              <a class="avatar avatar-xxxl rounded-circle">
                <img alt="Image placeholder" src="/img/brand/me.jpg">
              </a>
            </div>
          </div>
          <div id='contactme' class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <h1>Contact me (or my wife)</h1>
              <ul>
                <li>Via email on: <a href="mailto:adam@cloudam.co.uk">adam@cloudam.co.uk</a></li>
                <li>Via phone: <a href="tel:+447700022012">+447700022012</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {Tooltip} from 'element-ui'

export default {
  layout: 'AuthLayout',
  name: 'home-page',
  components: {
    [Tooltip.name]: Tooltip
  }
};
</script>

<style scoped>
.marketing {
  border: 1px solid #ddd;
  border-radius: 4px;
  height: auto;
  transform: skew(0deg, -3deg);
}

.marketing:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
</style>
