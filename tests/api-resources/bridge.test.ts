// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import EvmWalletRouterAPI from 'evm.wallet.router-api';

const client = new EvmWalletRouterAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bridge', () => {
  // Prism tests are disabled
  test.skip('buildTransaction: only required params', async () => {
    const responsePromise = client.bridge.buildTransaction({
      amountIn: '1000000000000000000',
      fromAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f5bA12',
      fromChainId: 1,
      toAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f5bA12',
      toChainId: 137,
      tokenIn: 'ETH',
      tokenOut: 'MATIC',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('buildTransaction: required and optional params', async () => {
    const response = await client.bridge.buildTransaction({
      amountIn: '1000000000000000000',
      fromAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f5bA12',
      fromChainId: 1,
      toAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f5bA12',
      toChainId: 137,
      tokenIn: 'ETH',
      tokenOut: 'MATIC',
      slippage: 1,
      source: 'lifi',
    });
  });

  // Prism tests are disabled
  test.skip('executeTransaction: only required params', async () => {
    const responsePromise = client.bridge.executeTransaction({
      chainId: 1,
      signedTransaction: '0xf86c0a8502540be400825208...',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('executeTransaction: required and optional params', async () => {
    const response = await client.bridge.executeTransaction({
      chainId: 1,
      signedTransaction: '0xf86c0a8502540be400825208...',
    });
  });

  // Prism tests are disabled
  test.skip('listSources', async () => {
    const responsePromise = client.bridge.listSources();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveQuote: only required params', async () => {
    const responsePromise = client.bridge.retrieveQuote({
      amountIn: '269125115713',
      fromAddress: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
      fromChainId: 0,
      toAddress: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
      toChainId: 0,
      tokenIn: 'tokenIn',
      tokenOut: 'tokenOut',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveQuote: required and optional params', async () => {
    const response = await client.bridge.retrieveQuote({
      amountIn: '269125115713',
      fromAddress: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
      fromChainId: 0,
      toAddress: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
      toChainId: 0,
      tokenIn: 'tokenIn',
      tokenOut: 'tokenOut',
      slippage: 0,
    });
  });
});
