const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/login",
  createProxyMiddleware({
    target: "https://app-auth-staging.pipefy.net",
    changeOrigin: true,
    secure: false,
    cookieDomainRewrite: "localhost",
  })
);

app.use(
  "/organizations",
  createProxyMiddleware({
    target: "http://localhost:3456",
  })
);

app.use(
  "/_next",
  createProxyMiddleware({
    target: "http://localhost:3456",
  })
);

app.use(
  "/",
  createProxyMiddleware({
    target: "https://staging.pipefy.net",
    changeOrigin: true,
    secure: false,
    cookieDomainRewrite: "localhost",
  })
);

app.listen(4001);
