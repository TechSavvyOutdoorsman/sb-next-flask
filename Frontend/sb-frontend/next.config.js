module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/test/:path*",
        destination: "http://127.0.0.1:5000/api/test/login",
      },
      {
        source: '/balance/:path*',
        destination: 'http://127.0.0.1:5000/api/test/home'
      },
      {
        source: '/status/:path*',
        destination: 'http://127.0.0.1:5000/api/test/login_status'
      },
      {
        source: '/register/:path*',
        destination: 'http://127.0.0.1:5000/api/test/register_info'
      },
      {
        source: '/verify/:path*',
        destination: 'http://127.0.0.1:5000/api/test/email_verification'
      },
      {
        source: '/resend/:path*',
        destination: 'http://127.0.0.1:5000/api/test/resend_email_verification'
      },
      {
        source: '/loginCheck/:path*',
        destination: 'http://127.0.0.1:5000/api/test/login_check'
      },
      {
        source: '/api/account/:path*',
        destination: 'http://127.0.0.1:5000/api/test/account_page'
      },
      {
        source: '/api/send/:path*',
        destination: 'http://127.0.0.1:5000/api/test/send_currency'
      },
      {
        source: '/api/convert/:path*',
        destination: 'http://127.0.0.1:5000/api/test/deposit'
      },
      {
        source: '/api/withdraw/:path*',
        destination: 'http://127.0.0.1:5000/api/test/withdrawl'
      },
      {
        source: '/api/feedback/:path*',
        destination: 'http://127.0.0.1:5000/api/test/feedback'
      },
      {
        source: '/api/inbox/:path*',
        destination: 'http://127.0.0.1:5000/api/test/inbox'
      },
      {
        source: '/api/fortnite/:path*',
        destination: 'http://127.0.0.1:5000/api/test/add_fortnite_account'
      },
      {
        source: '/api/valorant/:path*',
        destination: 'http://127.0.0.1:5000/api/test/add_valorant_account'
      }
    ];
  };

  return {
    rewrites,
  };
};