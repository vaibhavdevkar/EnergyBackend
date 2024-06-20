import React from 'react'

const Footer = () => {
  return (
        <div className="footer text-center text-white"
                style={{
                    position: 'fixed',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    backgroundColor: '#ff6600',
                    padding: '0px 0',
                    borderRadius: '10px 10px 0 0',
                    zIndex: 9999 // Ensure it's above other content if necessary
                }}>
                
                © DEVELOPED BY THETAVEGA TECH PRIVATE LIMITED
    </div>
  )
}

export default Footer