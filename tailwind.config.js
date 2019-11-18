module.exports = {
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '256': '64rem',
      },
      boxShadow: {
        'all-direction-lg': '0 1px 6px 0 rgba(32,33,36,0.28)',
        'all-direction-lg-themed': 'var(--box-shadow)',
      },
      colors: {
        'google-gray': {
          light: '#f2f2f2',
        },
        background: {
          primary: 'var(--background-primary)',
          secondary: 'var(--background-secondary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
      },
      borderRadius: {
        xl: '1.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
