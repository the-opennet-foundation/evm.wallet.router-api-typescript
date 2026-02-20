// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import EvmWalletRouterAPI from '@paxeer-network/evm.wallet.router-api';

const client = new EvmWalletRouterAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource swap', () => {
  // Mock server tests are disabled
  test.skip('buildApproval: only required params', async () => {
    const responsePromise = client.swap.buildApproval(1, {
      amount: '1000000000',
      owner: '0x742d35Cc6634C0532925a3b844Bc9e7595f5bA12',
      spender: '0x1111111254EEB25477B68fb85Ed929f73A960582',
      tokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('buildApproval: required and optional params', async () => {
    const response = await client.swap.buildApproval(1, {
      amount: '1000000000',
      owner: '0x742d35Cc6634C0532925a3b844Bc9e7595f5bA12',
      spender: '0x1111111254EEB25477B68fb85Ed929f73A960582',
      tokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    });
  });

  // Mock server tests are disabled
  test.skip('buildTransaction: only required params', async () => {
    const responsePromise = client.swap.buildTransaction(1, {
      amountIn: '1000000000000000000',
      recipient: '0x742d35Cc6634C0532925a3b844Bc9e7595f5bA12',
      tokenIn: 'ETH',
      tokenOut: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('buildTransaction: required and optional params', async () => {
    const response = await client.swap.buildTransaction(1, {
      amountIn: '1000000000000000000',
      recipient: '0x742d35Cc6634C0532925a3b844Bc9e7595f5bA12',
      tokenIn: 'ETH',
      tokenOut: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      deadline: 1703318400,
      slippage: 0.5,
      source: 'VeloraDEX',
    });
  });

  // Mock server tests are disabled
  test.skip('executeTransaction: only required params', async () => {
    const responsePromise = client.swap.executeTransaction(1, {
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

  // Mock server tests are disabled
  test.skip('executeTransaction: required and optional params', async () => {
    const response = await client.swap.executeTransaction(1, {
      signedTransaction: '0xf86c0a8502540be400825208...',
    });
  });

  // Mock server tests are disabled
  test.skip('getAllowance: only required params', async () => {
    const responsePromise = client.swap.getAllowance(1, {
      owner: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
      spender: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
      tokenAddress: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getAllowance: required and optional params', async () => {
    const response = await client.swap.getAllowance(1, {
      owner: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
      spender: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
      tokenAddress: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
    });
  });

  // Mock server tests are disabled
  test.skip('getQuote: only required params', async () => {
    const responsePromise = client.swap.getQuote(1, {
      amountIn: '269125115713',
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

  // Mock server tests are disabled
  test.skip('getQuote: required and optional params', async () => {
    const response = await client.swap.getQuote(1, {
      amountIn: '269125115713',
      tokenIn: 'tokenIn',
      tokenOut: 'tokenOut',
      slippage: 0,
      sources: 'sources',
    });
  });

  // Mock server tests are disabled
  test.skip('getSources', async () => {
    const responsePromise = client.swap.getSources(1);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getTransactionStatus: only required params', async () => {
    const responsePromise = client.swap.getTransactionStatus(
      '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
      { chainId: 1 },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getTransactionStatus: required and optional params', async () => {
    const response = await client.swap.getTransactionStatus(
      '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
      { chainId: 1 },
    );
  });
});
