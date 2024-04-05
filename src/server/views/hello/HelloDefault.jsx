import React from 'react'
import { useServerContext, getNodeProps } from '@jahia/js-server-core'

export const HelloDefault = () => {
    const { currentNode } = useServerContext();
    const props = getNodeProps(currentNode, ['textHello']);
    return (
        <div>
            <h2>{props.textHello}</h2>
        </div>
    )
}

HelloDefault.jahiaComponent = { // this object is used to register the view in Jahia
    nodeType: 'solidTemplate:hello', // The content node type the template applies to
    displayName: 'Hello (default)', // The display name of the view
    componentType: 'view' // the component type is set to view (as opposed to template component types)
}
