import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Dashboard from '../Components/Dashboard';
const SecondPage = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <div class="container-fluid" id="main" >
                <div class="row row-offcanvas row-offcanvas-left">
                    {/* <Sidebar /> */}
                    <Dashboard />
                </div>
            </div>
        </div>
    );
}
export default SecondPage