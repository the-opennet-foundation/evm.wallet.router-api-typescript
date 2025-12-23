// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Chains extends APIResource {
  /**
   * Returns detailed information about a specific chain including DEX configurations
   *
   * @example
   * ```ts
   * const chain = await client.chains.retrieve(1);
   * ```
   */
  retrieve(chainID: 1 | 8453 | 10 | 137 | 56, options?: RequestOptions): APIPromise<ChainRetrieveResponse> {
    return this._client.get(path`/v1/chains/${chainID}`, options);
  }

  /**
   * Returns a list of all supported EVM chains with their configurations
   *
   * @example
   * ```ts
   * const chains = await client.chains.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ChainListResponse> {
    return this._client.get('/v1/chains', options);
  }

  /**
   * Returns a list of commonly traded tokens on the specified chain
   *
   * @example
   * ```ts
   * const response = await client.chains.listTokens(1);
   * ```
   */
  listTokens(
    chainID: 1 | 8453 | 10 | 137 | 56,
    options?: RequestOptions,
  ): APIPromise<ChainListTokensResponse> {
    return this._client.get(path`/v1/chains/${chainID}/tokens`, options);
  }
}

export interface ChainConfig {
  /**
   * EVM chain ID
   */
  chainId: number;

  /**
   * Available DEXs on this chain
   */
  dexes: Array<ChainConfig.Dex>;

  /**
   * Block explorer URL
   */
  explorerUrl: string;

  /**
   * Chain name
   */
  name: string;

  nativeToken: Token;

  /**
   * RPC endpoint URL
   */
  rpcUrl: string;

  /**
   * Short chain identifier
   */
  shortName: string;

  wrappedNativeToken: Token;

  /**
   * Average block time in seconds
   */
  blockTime?: number;

  /**
   * Multicall3 contract address
   */
  multicallAddress?: string;

  /**
   * WebSocket RPC endpoint URL
   */
  rpcUrlWss?: string;
}

export namespace ChainConfig {
  export interface Dex {
    /**
     * Factory contract address
     */
    factoryAddress: string;

    /**
     * DEX name
     */
    name: string;

    /**
     * Router contract address
     */
    routerAddress: string;

    /**
     * DEX type/version
     */
    type: 'uniswap-v2' | 'uniswap-v3';

    /**
     * Default fee (V2 only, in hundredths of a bip)
     */
    defaultFee?: number;

    /**
     * Available fee tiers (V3 only, in hundredths of a bip)
     */
    fees?: Array<number>;

    /**
     * Init code hash for pair address calculation (V2 only)
     */
    initCodeHash?: string;

    /**
     * Quoter contract address (V3 only)
     */
    quoterAddress?: string;
  }
}

export interface SuccessResponse {
  success: boolean;
}

export interface Token {
  /**
   * Token contract address (0x0000...0000 for native tokens)
   */
  address: string;

  /**
   * Chain ID where the token exists
   */
  chainId: number;

  /**
   * Token decimals
   */
  decimals: number;

  /**
   * Token name
   */
  name: string;

  /**
   * Token symbol
   */
  symbol: string;

  /**
   * Whether this is the native token (ETH, MATIC, BNB)
   */
  isNative?: boolean;

  /**
   * Token logo URL
   */
  logoURI?: string;
}

export interface ChainRetrieveResponse extends SuccessResponse {
  data: ChainConfig;
}

export interface ChainListResponse extends SuccessResponse {
  data: Array<ChainConfig>;
}

export interface ChainListTokensResponse extends SuccessResponse {
  data: Array<Token>;
}

export declare namespace Chains {
  export {
    type ChainConfig as ChainConfig,
    type SuccessResponse as SuccessResponse,
    type Token as Token,
    type ChainRetrieveResponse as ChainRetrieveResponse,
    type ChainListResponse as ChainListResponse,
    type ChainListTokensResponse as ChainListTokensResponse,
  };
}
