class ApiResponse {
  constructor(success, message, messages = [], statusCode) {
    this.success = success;
    this.message = message;
    this.messages = messages;
    this.statusCode = statusCode;
  }

  static successResponse(res, statusCode, message, messages = []) {
    const response = new ApiResponse(true, message, messages, statusCode);
    return res.status(statusCode).json(response.toJSON());
  }

  static errorResponse(res, statusCode, message, messages = []) {
    const response = new ApiResponse(false, message, messages, statusCode);
    return res.status(statusCode).json(response.toJSON());
  }

  toJSON() {
    return {
      success: this.success,
      message: this.message,
      messages: this.messages,
    };
  }
}

export default ApiResponse;
