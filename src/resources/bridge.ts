// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BridgeAPI from './bridge';
import * as ChainsAPI from './chains';
import * as SwapAPI from './swap';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Bridge extends APIResource {
  /**
   * Builds a ready-to-sign transaction for executing a cross-chain bridge
   *
   * @example
   * ```ts
   * const response = await client.bridge.buildTransaction({
   *   amountIn: '1000000000000000000',
   *   fromAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f5bA12',
   *   fromChainId: 1,
   *   toAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f5bA12',
   *   toChainId: 137,
   *   tokenIn: 'ETH',
   *   tokenOut: 'MATIC',
   *   slippage: 1,
   *   source: 'lifi',
   * });
   * ```
   */
  buildTransaction(
    body: BridgeBuildTransactionParams,
    options?: RequestOptions,
  ): APIPromise<BridgeBuildTransactionResponse> {
    return this._client.post('/v1/bridge/build', { body, ...options });
  }

  /**
   * Submits a signed bridge transaction to the source chain
   *
   * @example
   * ```ts
   * const response = await client.bridge.executeTransaction({
   *   chainId: 1,
   *   signedTransaction: '0xf86c0a8502540be400825208...',
   * });
   * ```
   */
  executeTransaction(
    body: BridgeExecuteTransactionParams,
    options?: RequestOptions,
  ): APIPromise<BridgeExecuteTransactionResponse> {
    return this._client.post('/v1/bridge/execute', { body, ...options });
  }

  /**
   * Returns a list of available cross-chain bridge providers
   *
   * @example
   * ```ts
   * const response = await client.bridge.listSources();
   * ```
   */
  listSources(options?: RequestOptions): APIPromise<BridgeListSourcesResponse> {
    return this._client.get('/v1/bridge/sources', options);
  }

  /**
   * Fetches quotes for bridging tokens between different chains.
   *
   * ## Supported Bridges
   *
   * - LI.FI (aggregates multiple bridges)
   * - Socket (aggregates multiple bridges)
   *
   * ## Notes
   *
   * - Bridge transactions typically take 10-30 minutes to complete
   * - Minimum amounts may apply depending on the bridge
   *
   * @example
   * ```ts
   * const response = await client.bridge.retrieveQuote({
   *   amountIn: '269125115713',
   *   fromAddress: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
   *   fromChainId: 0,
   *   toAddress: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
   *   toChainId: 0,
   *   tokenIn: 'tokenIn',
   *   tokenOut: 'tokenOut',
   * });
   * ```
   */
  retrieveQuote(
    query: BridgeRetrieveQuoteParams,
    options?: RequestOptions,
  ): APIPromise<BridgeRetrieveQuoteResponse> {
    return this._client.get('/v1/bridge/quote', { query, ...options });
  }
}

export interface BridgeQuote {
  /**
   * Expected output amount in wei
   */
  amountOut: string;

  /**
   * Estimated bridge time in seconds
   */
  estimatedTime: number;

  fees: BridgeQuote.Fees;

  /**
   * Bridge provider name
   */
  source: string;

  steps?: Array<BridgeQuote.Step>;
}

export namespace BridgeQuote {
  export interface Fees {
    /**
     * Bridge fee in wei
     */
    bridgeFee?: string;

    /**
     * Estimated gas fee in wei
     */
    gasFee?: string;
  }

  export interface Step {
    fromChainId?: number;

    toChainId?: number;

    tokenIn?: string;

    tokenOut?: string;

    tool?: string;

    type?: 'swap' | 'bridge';
  }
}

export interface BridgeBuildTransactionResponse extends ChainsAPI.SuccessResponse {
  data: BridgeBuildTransactionResponse.Data;
}

export namespace BridgeBuildTransactionResponse {
  export interface Data {
    quote: BridgeAPI.BridgeQuote;

    transaction: SwapAPI.TransactionRequest;

    /**
     * Whether token approval is needed before bridging
     */
    approvalNeeded?: boolean;

    /**
     * Address that needs token approval
     */
    spender?: string;
  }
}

export interface BridgeExecuteTransactionResponse extends ChainsAPI.SuccessResponse {
  data: BridgeExecuteTransactionResponse.Data;
}

export namespace BridgeExecuteTransactionResponse {
  export interface Data {
    /**
     * Bridge tracking ID for status updates
     */
    bridgeId: string;

    /**
     * Source chain transaction hash
     */
    txHash: string;

    /**
     * Estimated completion time in seconds
     */
    estimatedCompletionTime?: number;

    /**
     * Block explorer URL
     */
    explorerUrl?: string;
  }
}

export interface BridgeListSourcesResponse extends ChainsAPI.SuccessResponse {
  data: Array<string>;
}

export interface BridgeRetrieveQuoteResponse extends ChainsAPI.SuccessResponse {
  data: BridgeRetrieveQuoteResponse.Data;
}

export namespace BridgeRetrieveQuoteResponse {
  export interface Data {
    allQuotes: Array<BridgeAPI.BridgeQuote>;

    amountIn: string;

    bestQuote: BridgeAPI.BridgeQuote;

    fromChainId: number;

    toChainId: number;

    tokenIn: ChainsAPI.Token;

    tokenOut: ChainsAPI.Token;
  }
}

export interface BridgeBuildTransactionParams {
  /**
   * Input amount in wei
   */
  amountIn: string;

  /**
   * Sender address on source chain
   */
  fromAddress: string;

  /**
   * Source chain ID
   */
  fromChainId: number;

  /**
   * Recipient address on destination chain
   */
  toAddress: string;

  /**
   * Destination chain ID
   */
  toChainId: number;

  /**
   * Input token address or symbol
   */
  tokenIn: string;

  /**
   * Output token address or symbol
   */
  tokenOut: string;

  /**
   * Slippage tolerance in percentage
   */
  slippage?: number;

  /**
   * Preferred bridge source
   */
  source?: string;
}

export interface BridgeExecuteTransactionParams {
  /**
   * Source chain ID
   */
  chainId: number;

  /**
   * Signed transaction hex string
   */
  signedTransaction: string;
}

export interface BridgeRetrieveQuoteParams {
  /**
   * Amount of input token in wei
   */
  amountIn: string;

  /**
   * Sender address on source chain
   */
  fromAddress: string;

  /**
   * Source chain ID
   */
  fromChainId: number;

  /**
   * Recipient address on destination chain
   */
  toAddress: string;

  /**
   * Destination chain ID
   */
  toChainId: number;

  /**
   * Input token address on source chain
   */
  tokenIn: string;

  /**
   * Output token address on destination chain
   */
  tokenOut: string;

  /**
   * Maximum slippage tolerance in percentage
   */
  slippage?: number;
}

export declare namespace Bridge {
  export {
    type BridgeQuote as BridgeQuote,
    type BridgeBuildTransactionResponse as BridgeBuildTransactionResponse,
    type BridgeExecuteTransactionResponse as BridgeExecuteTransactionResponse,
    type BridgeListSourcesResponse as BridgeListSourcesResponse,
    type BridgeRetrieveQuoteResponse as BridgeRetrieveQuoteResponse,
    type BridgeBuildTransactionParams as BridgeBuildTransactionParams,
    type BridgeExecuteTransactionParams as BridgeExecuteTransactionParams,
    type BridgeRetrieveQuoteParams as BridgeRetrieveQuoteParams,
  };
}
