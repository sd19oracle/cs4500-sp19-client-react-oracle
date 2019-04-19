import React from 'react'
import ServiceProvider from './ServiceProvider'
const ServiceProviderList = ({serviceProviders}) =>
    <div>
        {
            serviceProviders.map(serviceProvider =>
                <ServiceProvider
                    serviceProvider={serviceProvider}/>
            )
        }
    </div>

export default ServiceProviderList