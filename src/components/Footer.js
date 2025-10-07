import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} My Portfolio | Built with ❤️ by VarshiniV</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#ccc',
    textAlign: 'center',
    padding: '15px 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
};

export default Footer;
