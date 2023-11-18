/**
 * @generated SignedSource<<27895795ce1c86a368031a6048df8417>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ResultBox_addStar$data = {
  readonly addStar: {
    readonly starrable: {
      readonly stargazerCount: number;
    } | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ResultBox_addStar";
};
export type ResultBox_addStar$key = {
  readonly " $data"?: ResultBox_addStar$data;
  readonly " $fragmentSpreads": FragmentRefs<"ResultBox_addStar">;
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
  "name": "ResultBox_addStar",
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

(node as any).hash = "7a437b46ad6e5e900b43619891cc06a6";

export default node;
