import DoNotDisturbIcon from 'mdi-react/DoNotDisturbIcon'
import WebIcon from 'mdi-react/WebIcon'
import * as React from 'react'
import * as GQL from '../../../../packages/webapp/src/backend/graphqlschema'
import { LinkOrSpan } from '../../../../packages/webapp/src/components/LinkOrSpan'

export const RegistryExtensionSourceBadge: React.SFC<{
    extension: Pick<GQL.IRegistryExtension, 'remoteURL' | 'registryName' | 'isLocal'>
    showIcon?: boolean
    showText?: boolean
    showRegistryName?: boolean
    className?: string
}> = ({ extension, showIcon, showText, showRegistryName, className = '' }) => (
    <LinkOrSpan
        to={extension.remoteURL}
        target="_blank"
        className={`text-muted text-nowrap d-inline-flex align-items-center ${className}`}
        data-tooltip={
            extension.isLocal
                ? 'Published on this site'
                : `Published on external extension registry ${extension.registryName}`
        }
    >
        {showIcon &&
            (extension.isLocal ? (
                <DoNotDisturbIcon className="icon-inline mr-1" />
            ) : (
                <WebIcon className="icon-inline mr-1" />
            ))}
        {showText && (extension.isLocal ? 'Local' : showRegistryName ? extension.registryName : 'External')}
    </LinkOrSpan>
)
