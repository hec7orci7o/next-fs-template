export const setStatus = (req, errorCode, errorMessage) => {
  return {
    status: {
      timestamp: new Date().toISOString(),
      error_code: errorCode,
      error_message: errorMessage,
      elapsed: 0, // elapsed: Math.floor(performance.now() - Number(req.headers['X-Request-Time'])),
    },
  };
};
