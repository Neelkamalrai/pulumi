// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

import * as pulumiKubernetes from "@pulumi/kubernetes";

export class Component extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'foo:index:Component';

    /**
     * Returns true if the given object is an instance of Component.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Component {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Component.__pulumiType;
    }

    public readonly eniConfig!: pulumi.Output<{[key: string]: outputs.crd.k8s.amazonaws.com.v1alpha1.ENIConfigSpec} | undefined>;
    public readonly pod!: pulumi.Output<pulumiKubernetes.types.output.core.v1.Pod | undefined>;

    /**
     * Create a Component resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ComponentArgs, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["eniConfig"] = args ? args.eniConfig : undefined;
            resourceInputs["pod"] = args ? args.pod : undefined;
        } else {
            resourceInputs["eniConfig"] = undefined /*out*/;
            resourceInputs["pod"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Component.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a Component resource.
 */
export interface ComponentArgs {
    eniConfig?: pulumi.Input<{[key: string]: pulumi.Input<inputs.crd.k8s.amazonaws.com.v1alpha1.ENIConfigSpecArgs>}>;
    pod?: pulumi.Input<pulumiKubernetes.types.input.core.v1.Pod>;
}
