import React, { Fragment } from "react";

export default function Footer() {

    return (

        <Fragment>
            <footer className="bg-dark text-center text-white">
                <div className="container p-4">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/daniel-alberto-urrego-leon-b6abb9247/" role="button"
                        ><i class="bi bi-linkedin"></i>
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/DanielUrregoL" role="button">
                            <i class="bi bi-github"></i>
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1"  href="/cuentas" role="button">
                        <i class="bi bi-coin"></i>
                        </a>
                    </section>

                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>

                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example2" className="form-control" />
                                        <label className="form-label" for="form5Example2">Email address</label>
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>

                    <section className="text-end">
                        <p>
                           Author: Daniel Alberto Urrego Leon
                        </p>
                    </section>
                </div>
            </footer>
        </Fragment>
    );
};