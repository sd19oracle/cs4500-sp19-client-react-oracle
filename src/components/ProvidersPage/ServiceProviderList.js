import React from 'react'
import ServiceProvider from './ServiceProvider'
const ServiceProviderList = ({serviceProviders}) =>
    <div>
        {
            serviceProviders.map((serviceProvider, index) =>
                <ServiceProvider key={index}
                    serviceProvider={serviceProvider}
                    index={index}/>
            )
        }
    </div>

export default ServiceProviderList