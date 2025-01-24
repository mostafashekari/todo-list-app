import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // به روزرسانی state برای نمایش پیام خطا
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // اینجا می‌توانید خطا را لاگ کنید یا به سرور ارسال کنید
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
