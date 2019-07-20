import React from 'react';

export default class Footer extends React.Component{

    render(){
        return(
            <footer className="footer-area footer--light">
                <div className="footer-big">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-4">
                        <div className="footer-widget">
                            <div className="footer-menu footer-menu--1">
                            <h4 className="footer-widget-title">Popular Category</h4>
                            <ul>
                                <li>
                                <a href="#">Item 1</a>
                                </li>
                                <li>
                                <a href="#">Item 2</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-3 col-sm-4">
                        <div className="footer-widget">
                            <div className="footer-menu">
                            <h4 className="footer-widget-title">Our Company</h4>
                            <ul>
                                <li>
                                <a href="#">Item 1</a>
                                </li>
                                <li>
                                <a href="#">Item 2</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-3 col-sm-4">
                            <div className="footer-widget">
                                <div className="footer-menu no-padding">
                                <h4 className="footer-widget-title">Help Support</h4>
                                <ul>
                                    <li>
                                    <a href="#">Item 1</a>
                                    </li>
                                    <li>
                                    <a href="#">Item 2</a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-4">
                            <div className="footer-widget">
                                <div className="footer-menu no-padding">
                                <h4 className="footer-widget-title">Help Support</h4>
                                <ul>
                                    <li>
                                    <a href="#">Item 1</a>
                                    </li>
                                    <li>
                                    <a href="#">Item 2</a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
            </footer>
        )
    }
}