<template>
    <div>
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">CloudAM LTD</h1>
                                <p class="lead  text-white">A professional developer skilled in the latest AWS and Java
                                    technologies</p>
                                <div class="btn-wrapper">
                                    <base-button tag="a"
                                                 class="mb-3 mb-sm-0"
                                                 type="white"
                                                 icon="ni ni-send"
                                                 v-scroll-to="'#contactme'">
                                        Contact
                                    </base-button>
                                    <dropdown>
                                        <base-button icon="ni ni-paper-diploma" slot="title" type="success"
                                                     class="dropdown-toggle mb-3 mb-sm-0">
                                            CV
                                        </base-button>
                                        <a target="_blank" class="dropdown-item" href="/CV/AdamMeadows.html">Web</a>
                                        <a target="_blank" class="dropdown-item" href="/CV/AdamMeadows.pdf">PDF</a>
                                    </dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Proven success</h6>
                                    <p class="description mt-3">I have worked in a plethora of different work
                                        environments from side projects, startup's to SME.</p>
                                    <div>
                                        <badge type="primary" rounded>design</badge>
                                        <badge type="primary" rounded>system</badge>
                                        <badge type="primary" rounded>creative</badge>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">UK Based</h6>
                                    <p class="description mt-3">Based in central Milton Keynes, UK with easy access to
                                        London. With the ability to remote work anywhere in the
                                        world.</p>
                                    <div>
                                        <badge type="success" rounded>business</badge>
                                        <badge type="success" rounded>vision</badge>
                                        <badge type="success" rounded>success</badge>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">Prepare Launch</h6>
                                    <p class="description mt-3">With multiple projects under my belt I am well versed in
                                        deadlines and delivering high quality code. </p>
                                    <div>
                                        <badge type="warning" rounded>marketing</badge>
                                        <badge type="warning" rounded>product</badge>
                                        <badge type="warning" rounded>launch</badge>
                                    </div>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-1 bg-gradient-warning shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container py-0">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-lg-2 ml-lg-auto">
                        <div class="position-relative pl-md-5">
                            <img src="img/ill/ill-2.svg" class="img-center img-fluid">
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="d-flex px-3">
                            <div>
                                <icon name="ni ni-building" size="lg" class="bg-gradient-white" color="primary" shadow
                                      rounded></icon>
                            </div>
                            <div class="pl-4">
                                <h4 class="display-3 text-white">Modern technologies</h4>
                            </div>
                        </div>
                        <card hover shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-satisfied" gradient="success" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-success">Awesome Support</h5>
                                    <p>When I create something not only do I put a lot of thought into how to build
                                        something, but how it is going to be used. And if things do go wrong, I will
                                        always fix them.</p>
                                    <a v-scroll-to="'#contactme'" class="text-success">Contact me</a>
                                </div>
                            </div>
                        </card>
                        <card hover shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-active-40" gradient="warning" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-warning">Modular Components</h5>
                                    <p>I am well practised in modern containerised microservices and the latest AWS
                                        technologies. I've deployed multiple production ready applications which are
                                        still running inside AWS and other cloud platforms.</p>
                                    <a v-scroll-to="'#contactme'" class="text-warning">Contact me</a>
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-3 bg-gradient-default shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-lg pb-300">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="display-3 text-white">Build something</h2>
                        <p class="lead text-white">I will take every single request made very professionally, building
                            relationships with customers and clients is very important to me.</p>
                    </div>
                </div>
                <div class="row row-grid mt-5">
                    <div class="col-lg-6">
                        <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Building tools</h5>
                        <p class="text-white mt-3">I am well versed in the most modern cloud technologies from AWS and
                            have over 10 years of programming experience, of building well tested readable code.</p>
                    </div>
                    <div class="col-lg-6">
                        <icon name="ni ni-ruler-pencil" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Grow your market</h5>
                        <p class="text-white mt-3">With many client facing meetings under my belt I am great
                            in front of clients in my areas of expertise.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-0 section-contact-us" id="contactme">
            <div class="container">
                <div class="row justify-content-center mt--300">
                    <div class="col-lg-8">
                        <card gradient="secondary" shadow body-classes="p-lg-5">
                            <base-alert type="success" dismissible v-if="messageSent">
                                <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
                                <span class="alert-inner--text">Message Sent</span>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close"
                                        @click="dismissNYI">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </base-alert>
                            <h4 class="mb-1">Want to contact me?</h4>
                            <base-input class="mt-5"
                                        alternative
                                        placeholder="Your name"
                                        addon-left-icon="ni ni-user-run"
                                        v-model="name">
                            </base-input>
                            <base-input alternative
                                        placeholder="Email address"
                                        addon-left-icon="ni ni-email-83"
                                        v-model="email">
                            </base-input>
                            <base-input class="mb-4">
                                    <textarea class="form-control form-control-alternative" name="name" rows="4"
                                              cols="80" placeholder="Type a message..."
                                              v-model="message"></textarea>
                            </base-input>
                            <base-button type="default" round block size="lg"
                                         @click="sendMessage()">
                                Send Message
                            </base-button>
                        </card>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>

    import dropdown from '../components/BaseDropdown';

    export default {
        name: "home",
        components: {dropdown},
        data() {
            return {
                messageSent: false,
                name: null,
                email: null,
                message: null
            }
        },
        methods: {
            sendMessage() {

                Email.send({
                    SecureToken: "b17221ef-6393-4a3e-b247-c6593ab2a9c0",
                    To: 'adam@cloudam.co.uk',
                    From: 'adam@cloudam.co.uk',
                    Subject: "CONTACT FORM FROM CLOUDAM.CO.UK",
                    Body: this.email + "\n\n" + this.message
                }).then(
                    message => {
                        if ('OK' === message) {
                            this.messageSent = true;
                            this.name = null;
                            this.email = null;
                            this.message = null;
                        } else
                            console.log(message);
                    }
                );
            },
        }
    };
</script>
