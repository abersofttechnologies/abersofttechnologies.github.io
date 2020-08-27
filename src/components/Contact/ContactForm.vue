<template>
    <div>
        <Card :hoverable="false" class="contact-card">
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <b-alert variant="success" :show="isSuccess">Ditt meddelande har skickats! Vi kommer att
                            kontakta dig inom kort.
                        </b-alert>
                        <b-alert variant="danger" :show="isError">{{errorMessage}}</b-alert>
                    </b-col>
                    <b-col cols="12">
                        <b-form @submit="onSubmit"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                name="contact-us"
                                method="post">
                            <input type="hidden" name="form-name" value="contact-us"/>
                            <b-form-group
                                    id="input-group-1"
                                    label="Namn:*"
                                    label-for="name"
                                    class="label">
                                <b-form-input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Fyll i namn"
                                        v-model="form.name"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                    id="input-group-2"
                                    label="Email address:*"
                                    label-for="email"
                                    description="Vi kommer aldrig dela din email med någon."
                                    class="label">
                                <b-form-input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="Fyll i email"
                                        v-model="form.email"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                    id="input-group-3"
                                    label="Företag:"
                                    label-for="company"
                                    class="label">
                                <b-form-input
                                        id="company"
                                        name="company"
                                        type="text"
                                        placeholder="Fyll i företag"
                                        v-model="form.company"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                    id="input-group-4"
                                    label="Telefonnumer:"
                                    label-for="phone"
                                    class="label">
                                <b-form-input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="Fyll i telefonnumer"
                                        v-model="form.phone"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                    id="input-group-5"
                                    label="Meddelande:*"
                                    label-for="message"
                                    class="label">
                                <b-form-textarea
                                        id="message"
                                        name="message"
                                        placeholder="Fyll i meddelande"
                                        rows="5"
                                        v-model="form.message"
                                ></b-form-textarea>
                            </b-form-group>
                            <b-button type="submit" class="default-button">Godkänn</b-button>
                        </b-form>
                    </b-col>
                </b-row>
            </b-container>
        </Card>
    </div>
</template>

<script>
    import Card from "../Card";
    import NProgress from "nprogress";
    import axios from "axios";

    export default {
        name: "Form",
        components: {Card},
        methods: {
            onSubmit: function (evt) {
                evt.preventDefault();
                NProgress.start();

                const axiosConfig = {
                    header: {"Content-Type": "application/x-www-form-urlencoded"}
                };
                axios.post(
                    "/",
                    this.encode({
                        "form-name": "contact-us",
                        ...this.form
                    }),
                    axiosConfig
                )
                    .then((response) => {
                        console.log(response);
                        this.isSuccess = true;
                        this.isError = false;
                        NProgress.done();
                        this.onReset(evt);
                    })
                    .catch((error) => {
                        console.log(error);
                        this.isSuccess = false;
                        this.isError = true;
                        this.errorMessage = error;
                        NProgress.done();
                    });
            },
            onReset(evt) {
                evt.preventDefault();
                // Reset our form values
                this.form.email = '';
                this.form.name = '';
                this.form.company = '';
                this.form.phone = '';
                this.form.message = '';
                // Trick to reset/clear native browser form validation state
                this.show = false;
                this.$nextTick(() => this.show = true)
            },
            encode(data) {
                return Object.keys(data)
                    .map(
                        key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
                    )
                    .join("&");
            },
        },
        data: function () {
            return {
                form: {
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    message: '',
                },
                isSuccess: false,
                isError: false,
                errorMessage: String
            }
        }
    }
</script>

<style scoped>

</style>
