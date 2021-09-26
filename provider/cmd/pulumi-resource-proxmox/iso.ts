import * as pulumi from '@pulumi/pulumi';

export type ChecksumAlgorithms = 'md5' | 'sha1' | 'sha224' | 'sha256' | 'sha384' | 'sha512';

export type ContentTypes = 'iso' | 'vztmpl';

export interface IsoArgs {
    /**
     * Content type.
     */
    content: pulumi.Input<ContentTypes>;

    /**
     * The name of the file to create. Caution: This will be normalized!
     */
    filename: pulumi.Input<string>;

    /**
     * The cluster node name.
     */
    node: pulumi.Input<string>;

    /**
     * The storage identifier.
     */
    storage: pulumi.Input<string>;

    /**
     * The URL to download the file from.
     */
    url: pulumi.Input<string>;
    
    /**
     * The expected checksum of the file
     */
    checksum?: pulumi.Input<string>;

    /**
     * The algorithm to calculate the checksum of the file.
     */
    checksumAlgorithm?: pulumi.Input<ChecksumAlgorithms>;

    /**
     * If false, no SSL/TLS certificates will be verified.
     */
    verifyCertificates?: pulumi.Input<boolean>;
}

export class Iso extends pulumi.CustomResource {
    constructor(name: string, args: IsoArgs, opts?: pulumi.CustomResourceOptions) {
        super('proxmox:index:Iso', name, args, opts);
    }
}
