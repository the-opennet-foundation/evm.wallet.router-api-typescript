// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SwapAPI from './swap';
import * as ChainsAPI from './chains';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Swap extends APIResource {
  /**
   * Builds a transaction to approve token spending by the swap router.
   *
   * ## When Approval is Needed
   *
   * - When swapping ERC-20 tokens (not native tokens like ETH)
   * - When the current allowance is less than the swap amount
   *
   * ## Approval Amount
   *
   * - Use `amount` for exact approval matching swap amount
   * - Use unlimited approval by setting a very large amount (not recommended for
   *   security)
   *
   * @example
   * ```ts
   * const response = await client.swap.buildApproval(1, {
   *   amount: '1000000000',
   *   owner: '0x742d35Cc6634C0532925a3b844Bc9e7595f5bA12',
   *   spender: '0x1111111254EEB25477B68fb85Ed929f73A960582',
   *   tokenAddress:
   *     '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
   * });
   * ```
   */
  buildApproval(
    chainID: 1 | 8453 | 10 | 137 | 56,
    body: SwapBuildApprovalParams,
    options?: RequestOptions,
  ): APIPromise<SwapBuildApprovalResponse> {
    return this._client.post(path`/v1/swap/${chainID}/approval`, { body, ...options });
  }

  /**
   * Builds a ready-to-sign transaction for executing a swap. The returned
   * transaction can be signed by the user's wallet and submitted to the blockchain.
   *
   * ## Transaction Flow
   *
   * 1. Get quote using `/v1/swap/{chainId}/quote`
   * 2. If needed, approve token spending using `/v1/swap/{chainId}/approval`
   * 3. Build transaction using this endpoint
   * 4. Sign transaction with user's wallet
   * 5. Execute using `/v1/swap/{chainId}/execute` or submit directly to RPC
   *
   * @example
   * ```ts
   * const response = await client.swap.buildTransaction(1, {
   *   amountIn: '1000000000000000000',
   *   recipient: '0x742d35Cc6634C0532925a3b844Bc9e7595f5bA12',
   *   tokenIn: 'ETH',
   *   tokenOut: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
   *   slippage: 0.5,
   *   source: 'VeloraDEX',
   * });
   * ```
   */
  buildTransaction(
    chainID: 1 | 8453 | 10 | 137 | 56,
    body: SwapBuildTransactionParams,
    options?: RequestOptions,
  ): APIPromise<SwapBuildTransactionResponse> {
    return this._client.post(path`/v1/swap/${chainID}/build`, { body, ...options });
  }

  /**
   * Submits a signed transaction to the blockchain for execution.
   *
   * ## Prerequisites
   *
   * - Transaction must be signed by the sender's private key
   * - Sender must have sufficient balance for the swap amount plus gas
   * - If swapping ERC-20 tokens, approval must be granted first
   *
   * @example
   * ```ts
   * const response = await client.swap.executeTransaction(1, {
   *   signedTransaction: '0xf86c0a8502540be400825208...',
   * });
   * ```
   */
  executeTransaction(
    chainID: 1 | 8453 | 10 | 137 | 56,
    body: SwapExecuteTransactionParams,
    options?: RequestOptions,
  ): APIPromise<SwapExecuteTransactionResponse> {
    return this._client.post(path`/v1/swap/${chainID}/execute`, { body, ...options });
  }

  /**
   * Returns the current token allowance for a spender
   *
   * @example
   * ```ts
   * const response = await client.swap.getAllowance(1, {
   *   owner: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
   *   spender: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
   *   tokenAddress:
   *     '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
   * });
   * ```
   */
  getAllowance(
    chainID: 1 | 8453 | 10 | 137 | 56,
    query: SwapGetAllowanceParams,
    options?: RequestOptions,
  ): APIPromise<SwapGetAllowanceResponse> {
    return this._client.get(path`/v1/swap/${chainID}/allowance`, { query, ...options });
  }

  /**
   * Fetches swap quotes from multiple liquidity sources (DEXs and aggregators) and
   * returns the best quote along with all available quotes.
   *
   * ## Token Addresses
   *
   * - Use `ETH`, `BNB`, `MATIC` for native tokens
   * - Use full contract address for ERC-20 tokens (e.g.,
   *   `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48` for USDC on Ethereum)
   *
   * ## Amount Format
   *
   * - All amounts are in wei (smallest unit)
   * - For 1 ETH, use `1000000000000000000`
   * - For 1 USDC (6 decimals), use `1000000`
   *
   * @example
   * ```ts
   * const response = await client.swap.getQuote(1, {
   *   amountIn: '269125115713',
   *   tokenIn: 'tokenIn',
   *   tokenOut: 'tokenOut',
   * });
   * ```
   */
  getQuote(
    chainID: 1 | 8453 | 10 | 137 | 56,
    query: SwapGetQuoteParams,
    options?: RequestOptions,
  ): APIPromise<SwapGetQuoteResponse> {
    return this._client.get(path`/v1/swap/${chainID}/quote`, { query, ...options });
  }

  /**
   * Returns a list of available liquidity sources (DEXs and aggregators) for the
   * specified chain
   *
   * @example
   * ```ts
   * const response = await client.swap.getSources(1);
   * ```
   */
  getSources(
    chainID: 1 | 8453 | 10 | 137 | 56,
    options?: RequestOptions,
  ): APIPromise<SwapGetSourcesResponse> {
    return this._client.get(path`/v1/swap/${chainID}/sources`, options);
  }

  /**
   * Returns the status of a submitted transaction
   *
   * @example
   * ```ts
   * const response = await client.swap.getTransactionStatus(
   *   '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
   *   { chainId: 1 },
   * );
   * ```
   */
  getTransactionStatus(
    txHash: string,
    params: SwapGetTransactionStatusParams,
    options?: RequestOptions,
  ): APIPromise<SwapGetTransactionStatusResponse> {
    const { chainId } = params;
    return this._client.get(path`/v1/swap/${chainId}/tx/${txHash}`, options);
  }
}

export interface Quote {
  /**
   * Output amount in wei
   */
  amountOut: string;

  /**
   * Estimated gas units
   */
  gasEstimate: string;

  /**
   * Price impact percentage
   */
  priceImpact: number;

  /**
   * Liquidity source name
   */
  source: string;

  /**
   * Route steps (if available)
   */
  route?: Array<Quote.Route>;
}

export namespace Quote {
  export interface Route {
    /**
     * Input amount in wei
     */
    amountIn: string;

    /**
     * Output amount in wei
     */
    amountOut: string;

    /**
     * DEX or aggregator name
     */
    dex: string;

    /**
     * Pool or pair address
     */
    pool: string;

    /**
     * Input token address
     */
    tokenIn: string;

    /**
     * Output token address
     */
    tokenOut: string;

    /**
     * Fee tier (in hundredths of a bip)
     */
    fee?: number;
  }
}

export interface TransactionRequest {
  /**
   * Chain ID
   */
  chainId: number;

  /**
   * Transaction calldata (hex encoded)
   */
  data: string;

  /**
   * Transaction recipient (router contract)
   */
  to: string;

  /**
   * Gas limit
   */
  gasLimit?: string;

  /**
   * Gas price in wei (legacy transactions)
   */
  gasPrice?: string;

  /**
   * Max fee per gas in wei (EIP-1559)
   */
  maxFeePerGas?: string;

  /**
   * Max priority fee per gas in wei (EIP-1559)
   */
  maxPriorityFeePerGas?: string;

  /**
   * ETH value to send in wei (for native token swaps)
   */
  value?: string;
}

export interface SwapBuildApprovalResponse extends ChainsAPI.SuccessResponse {
  data: SwapBuildApprovalResponse.Data;
}

export namespace SwapBuildApprovalResponse {
  export interface Data {
    transaction: SwapAPI.TransactionRequest;

    /**
     * Current allowance before approval
     */
    currentAllowance?: string;
  }
}

export interface SwapBuildTransactionResponse extends ChainsAPI.SuccessResponse {
  data: SwapBuildTransactionResponse.Data;
}

export namespace SwapBuildTransactionResponse {
  export interface Data {
    quote: SwapAPI.Quote;

    transaction: SwapAPI.TransactionRequest;

    /**
     * Address that needs token approval (for ERC-20 swaps)
     */
    spender?: string;
  }
}

export interface SwapExecuteTransactionResponse extends ChainsAPI.SuccessResponse {
  data: SwapExecuteTransactionResponse.Data;
}

export namespace SwapExecuteTransactionResponse {
  export interface Data {
    /**
     * Transaction hash
     */
    txHash: string;

    /**
     * Block explorer URL for the transaction
     */
    explorerUrl?: string;
  }
}

export interface SwapGetAllowanceResponse extends ChainsAPI.SuccessResponse {
  data: SwapGetAllowanceResponse.Data;
}

export namespace SwapGetAllowanceResponse {
  export interface Data {
    /**
     * Current allowance in wei
     */
    allowance: string;

    /**
     * Whether the allowance is effectively unlimited
     */
    isUnlimited?: boolean;
  }
}

export interface SwapGetQuoteResponse extends ChainsAPI.SuccessResponse {
  data: SwapGetQuoteResponse.Data;
}

export namespace SwapGetQuoteResponse {
  export interface Data {
    /**
     * All quotes from different sources sorted by output amount
     */
    allQuotes: Array<SwapAPI.Quote>;

    /**
     * Input amount in wei
     */
    amountIn: string;

    bestQuote: SwapAPI.Quote;

    chainId: number;

    tokenIn: ChainsAPI.Token;

    tokenOut: ChainsAPI.Token;
  }
}

export interface SwapGetSourcesResponse extends ChainsAPI.SuccessResponse {
  data: Array<SwapGetSourcesResponse.Data>;
}

export namespace SwapGetSourcesResponse {
  export interface Data {
    /**
     * Source name
     */
    name: string;

    /**
     * Source type
     */
    type: 'dex' | 'aggregator';
  }
}

export interface SwapGetTransactionStatusResponse extends ChainsAPI.SuccessResponse {
  data: SwapGetTransactionStatusResponse.Data;
}

export namespace SwapGetTransactionStatusResponse {
  export interface Data {
    /**
     * Transaction status
     */
    status: 'pending' | 'confirmed' | 'failed';

    txHash: string;

    /**
     * Block number where transaction was included
     */
    blockNumber?: number;

    /**
     * Number of confirmations
     */
    confirmations?: number;

    /**
     * Effective gas price in wei
     */
    effectiveGasPrice?: string;

    /**
     * Actual gas used
     */
    gasUsed?: string;
  }
}

export interface SwapBuildApprovalParams {
  /**
   * Amount to approve in wei. Use max uint256 for unlimited approval.
   */
  amount: string;

  /**
   * Token owner address (transaction sender)
   */
  owner: string;

  /**
   * Address to approve spending (router contract)
   */
  spender: string;

  /**
   * ERC-20 token address to approve
   */
  tokenAddress: string;
}

export interface SwapBuildTransactionParams {
  /**
   * Input amount in wei
   */
  amountIn: string;

  /**
   * Recipient address for output tokens
   */
  recipient: string;

  /**
   * Input token address or symbol
   */
  tokenIn: string;

  /**
   * Output token address
   */
  tokenOut: string;

  /**
   * Transaction deadline (Unix timestamp). Defaults to 20 minutes from now.
   */
  deadline?: number;

  /**
   * Slippage tolerance in percentage
   */
  slippage?: number;

  /**
   * Preferred liquidity source. If not specified, uses the best available.
   */
  source?: string;
}

export interface SwapExecuteTransactionParams {
  /**
   * Signed transaction hex string
   */
  signedTransaction: string;
}

export interface SwapGetAllowanceParams {
  /**
   * Token owner address
   */
  owner: string;

  /**
   * Spender address (router contract)
   */
  spender: string;

  /**
   * Token contract address
   */
  tokenAddress: string;
}

export interface SwapGetQuoteParams {
  /**
   * Amount of input token in wei
   */
  amountIn: string;

  /**
   * Input token address or symbol (ETH, BNB, MATIC for native)
   */
  tokenIn: string;

  /**
   * Output token address
   */
  tokenOut: string;

  /**
   * Maximum slippage tolerance in percentage (default 0.5)
   */
  slippage?: number;

  /**
   * Comma-separated list of sources to query. If empty, queries all available
   * sources.
   */
  sources?: string;
}

export interface SwapGetTransactionStatusParams {
  /**
   * EVM chain ID
   */
  chainId: 1 | 8453 | 10 | 137 | 56;
}

export declare namespace Swap {
  export {
    type Quote as Quote,
    type TransactionRequest as TransactionRequest,
    type SwapBuildApprovalResponse as SwapBuildApprovalResponse,
    type SwapBuildTransactionResponse as SwapBuildTransactionResponse,
    type SwapExecuteTransactionResponse as SwapExecuteTransactionResponse,
    type SwapGetAllowanceResponse as SwapGetAllowanceResponse,
    type SwapGetQuoteResponse as SwapGetQuoteResponse,
    type SwapGetSourcesResponse as SwapGetSourcesResponse,
    type SwapGetTransactionStatusResponse as SwapGetTransactionStatusResponse,
    type SwapBuildApprovalParams as SwapBuildApprovalParams,
    type SwapBuildTransactionParams as SwapBuildTransactionParams,
    type SwapExecuteTransactionParams as SwapExecuteTransactionParams,
    type SwapGetAllowanceParams as SwapGetAllowanceParams,
    type SwapGetQuoteParams as SwapGetQuoteParams,
    type SwapGetTransactionStatusParams as SwapGetTransactionStatusParams,
  };
}
