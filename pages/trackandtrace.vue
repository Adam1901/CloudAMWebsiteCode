<template>
  <div>
    <div class="header bg-gradient-success pt-5 pb-7">
      <div class="container">
        <div class="header-body">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="pr-5">
                <h1 class="display-2 text-white font-weight-bold mb-0">{{ title }}</h1>
                <h2 class="display-4 text-white font-weight-light">{{ subtitle }}</h2>

                <div class="mt-5">
                  <base-button class="btn btn-neutral my-2" @click="openNewTab">See a demo here</base-button>
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
                      <h5 class="h3">{{ first.title }}</h5>
                      <p>{{ first.text }}</p>
                      <div>
                        <template v-for="tag in first.tags">
                          <badge type="success" rounded>{{ tag }}</badge>
                        </template>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow mb-4">
                        <i class="ni ni-istanbul"></i>
                      </div>
                      <h5 class="h3">{{ second.title }}</h5>
                      <p>{{ second.text }}</p>

                      <div>
                        <template v-for="tag in second.tags">
                          <badge type="success" rounded>{{ tag }}</badge>
                        </template>
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
                      <h5 class="h3">{{ third.title }}</h5>
                      <p>{{ third.text }}</p>
                      <div>
                        <template v-for="tag in third.tags">
                          <badge type="success" rounded>{{ tag }}</badge>
                        </template>
                      </div>
                    </div>
                  </div>
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-warning text-white rounded-circle shadow mb-4">
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">{{ fourth.title }}</h5>
                      <p>{{ fourth.text }}</p>
                      <div>
                        <template v-for="tag in fourth.tags">
                          <badge type="success" rounded>{{ tag }}</badge>
                        </template>
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

    <section class="py-6 pb-9 bg-default">
      <div class="row justify-content-center text-center">
        <div class="col-md-6">
          <h2 class="display-3 text-white">{{ mid.top.title }}</h2>
          <p class="lead text-white">{{ mid.top.text }}</p>
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
                    <h4 class="h3 text-primary text-uppercase">{{ mid.left.title }}</h4>
                    <p>{{ mid.left.text }}</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape bg-gradient-success text-white rounded-circle mb-4">
                      <i class="ni ni-istanbul"></i>
                    </div>
                    <h4 class="h3 text-success text-uppercase">{{ mid.right.title }}</h4>
                    <p class="description mt-3">{{ mid.right.text }}</p>
                  </div>
                </div>
              </div>
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
  name: 'que',
  components: {
    [Tooltip.name]: Tooltip
  },
  methods: {
    openNewTab() {
      window.open(this.demoLink, '_blank')
    }
  },
  data() {
    return {
      title: 'Track And Trace',
      subtitle: 'Putting your customers in charge but keeping you in control',
      demoLink: 'http://track.cloudam.co.uk',
      first: {
        title: 'Reporting',
        text: 'We allow you to run reports for how you need them.',
        tags: ['export', 'reporting']
      },
      second: {
        title: 'UK government guidelines',
        text: 'Conforms to the ever changing COVID guidelines and is flexible enough to adapt.',
        tags: ['NHS', 'PUBLIC HEALTH']
      },
      third: {
        title: 'Works for any store or use case',
        text: 'With just a branch code needed any customer can report to any store',
        tags: ['QR', 'NFC', 'URLS']
      },
      fourth: {
        title: 'Easy to use',
        text: 'With a simple design any customer will be able to report',
        tags: ['groups', 'UX', 'simple']
      },
      mid: {
        top: {
          title: 'Why?',
          text: 'We started building track and trace at the beginning of lock down. Always confirming to the latest guidelines and laws. We built it to be easy to deploy and easy to use'
        },
        left: {
          title: 'Secure',
          text: 'Replaces the register at the front of the store which could pose a risk to user data. We want everyone\'s data to be safe and secure.'
        },
        right: {
          title: 'REQUEST A DEMO',
          text: 'Find my contact details on the home screen and ask us for a Demo of what track and trace can do.'
        }
      },

    }
  }
};
</script>
