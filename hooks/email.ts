const sendPasswordResetEmail = async (email: string, resetLink: string) => {
    try {
      const response = await fetch('http://localhost:3010/send-reset-pass', { // Replace with your backend endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          resetLink,
        }),
      });
  
      return response.ok; 
    } catch (error) {
      console.error('Error sending email:', error);
      return false; // Return false in case of error
    }
  };
  
  export default sendPasswordResetEmail;