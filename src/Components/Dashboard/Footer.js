import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="main-footer">
                    <strong>Copyright © 2021 <a href="http://gis.mahapocra.gov.in/controlpanel/">PoCRA</a>.</strong> All rights reserved.
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b> 1.0.0

                    </div>
                </footer>

            </div>
        )
    }
}
