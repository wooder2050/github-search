/**
 * @generated SignedSource<<a0acb1b1fcfe5ef174dbc4160f642269>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ResultBox_box$data = {
  readonly addStar: {
    readonly starrable: {
      readonly stargazerCount: number;
    } | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ResultBox_box";
};
export type ResultBox_box$key = {
  readonly " $data"?: ResultBox_box$data;
  readonly " $fragmentSpreads": FragmentRefs<"ResultBox_box">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "input"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ResultBox_box",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "input",
          "variableName": "input"
        }
      ],
      "concreteType": "AddStarPayload",
      "kind": "LinkedField",
      "name": "addStar",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "starrable",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "stargazerCount",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Mutation",
  "abstractKey": null
};

(node as any).hash = "fd9168fcf6150a836e2151c96babf02f";

export default node;
