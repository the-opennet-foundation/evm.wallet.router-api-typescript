# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# Chains

Types:

- <code><a href="./src/resources/chains.ts">ChainConfig</a></code>
- <code><a href="./src/resources/chains.ts">SuccessResponse</a></code>
- <code><a href="./src/resources/chains.ts">Token</a></code>
- <code><a href="./src/resources/chains.ts">ChainRetrieveResponse</a></code>
- <code><a href="./src/resources/chains.ts">ChainListResponse</a></code>
- <code><a href="./src/resources/chains.ts">ChainListTokensResponse</a></code>

Methods:

- <code title="get /v1/chains/{chainId}">client.chains.<a href="./src/resources/chains.ts">retrieve</a>(chainID) -> ChainRetrieveResponse</code>
- <code title="get /v1/chains">client.chains.<a href="./src/resources/chains.ts">list</a>() -> ChainListResponse</code>
- <code title="get /v1/chains/{chainId}/tokens">client.chains.<a href="./src/resources/chains.ts">listTokens</a>(chainID) -> ChainListTokensResponse</code>

# Swap

Types:

- <code><a href="./src/resources/swap.ts">Quote</a></code>
- <code><a href="./src/resources/swap.ts">TransactionRequest</a></code>
- <code><a href="./src/resources/swap.ts">SwapBuildApprovalResponse</a></code>
- <code><a href="./src/resources/swap.ts">SwapBuildTransactionResponse</a></code>
- <code><a href="./src/resources/swap.ts">SwapExecuteTransactionResponse</a></code>
- <code><a href="./src/resources/swap.ts">SwapGetAllowanceResponse</a></code>
- <code><a href="./src/resources/swap.ts">SwapGetQuoteResponse</a></code>
- <code><a href="./src/resources/swap.ts">SwapGetSourcesResponse</a></code>
- <code><a href="./src/resources/swap.ts">SwapGetTransactionStatusResponse</a></code>

Methods:

- <code title="post /v1/swap/{chainId}/approval">client.swap.<a href="./src/resources/swap.ts">buildApproval</a>(chainID, { ...params }) -> SwapBuildApprovalResponse</code>
- <code title="post /v1/swap/{chainId}/build">client.swap.<a href="./src/resources/swap.ts">buildTransaction</a>(chainID, { ...params }) -> SwapBuildTransactionResponse</code>
- <code title="post /v1/swap/{chainId}/execute">client.swap.<a href="./src/resources/swap.ts">executeTransaction</a>(chainID, { ...params }) -> SwapExecuteTransactionResponse</code>
- <code title="get /v1/swap/{chainId}/allowance">client.swap.<a href="./src/resources/swap.ts">getAllowance</a>(chainID, { ...params }) -> SwapGetAllowanceResponse</code>
- <code title="get /v1/swap/{chainId}/quote">client.swap.<a href="./src/resources/swap.ts">getQuote</a>(chainID, { ...params }) -> SwapGetQuoteResponse</code>
- <code title="get /v1/swap/{chainId}/sources">client.swap.<a href="./src/resources/swap.ts">getSources</a>(chainID) -> SwapGetSourcesResponse</code>
- <code title="get /v1/swap/{chainId}/tx/{txHash}">client.swap.<a href="./src/resources/swap.ts">getTransactionStatus</a>(txHash, { ...params }) -> SwapGetTransactionStatusResponse</code>

# Bridge

Types:

- <code><a href="./src/resources/bridge.ts">BridgeQuote</a></code>
- <code><a href="./src/resources/bridge.ts">BridgeBuildTransactionResponse</a></code>
- <code><a href="./src/resources/bridge.ts">BridgeExecuteTransactionResponse</a></code>
- <code><a href="./src/resources/bridge.ts">BridgeListSourcesResponse</a></code>
- <code><a href="./src/resources/bridge.ts">BridgeRetrieveQuoteResponse</a></code>

Methods:

- <code title="post /v1/bridge/build">client.bridge.<a href="./src/resources/bridge.ts">buildTransaction</a>({ ...params }) -> BridgeBuildTransactionResponse</code>
- <code title="post /v1/bridge/execute">client.bridge.<a href="./src/resources/bridge.ts">executeTransaction</a>({ ...params }) -> BridgeExecuteTransactionResponse</code>
- <code title="get /v1/bridge/sources">client.bridge.<a href="./src/resources/bridge.ts">listSources</a>() -> BridgeListSourcesResponse</code>
- <code title="get /v1/bridge/quote">client.bridge.<a href="./src/resources/bridge.ts">retrieveQuote</a>({ ...params }) -> BridgeRetrieveQuoteResponse</code>
