/**
 * @generated SignedSource<<a2f2af832b7fff4531167dceb83a0702>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ResultBox_removeStar$data = {
  readonly removeStar: {
    readonly starrable: {
      readonly stargazerCount: number;
    } | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ResultBox_removeStar";
};
export type ResultBox_removeStar$key = {
  readonly " $data"?: ResultBox_removeStar$data;
  readonly " $fragmentSpreads": FragmentRefs<"ResultBox_removeStar">;
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
  "name": "ResultBox_removeStar",
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
      "concreteType": "RemoveStarPayload",
      "kind": "LinkedField",
      "name": "removeStar",
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

(node as any).hash = "5b8de756d82a393c21f8dd5d2b9e08ce";

export default node;
