// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { EvmWalletRouterAPI } from '../client';

export abstract class APIResource {
  protected _client: EvmWalletRouterAPI;

  constructor(client: EvmWalletRouterAPI) {
    this._client = client;
  }
}
