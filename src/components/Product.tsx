import React from 'react';
import Mobile from './Mobile';
import Dashboard from './Dashboard';
import ERP from './EPP';
import HIS from './HIS';

const Product = () => {
    return (
        <section id="product" className="bg-white">
            <div>
                <>
                    <HIS />
                    <ERP />
                    <Dashboard />
                    <Mobile />
                </>
            </div>
        </section>
    );
};

export default Product;
