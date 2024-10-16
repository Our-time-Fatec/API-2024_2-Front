const sendPasswordResetEmail = async (email: string) => {
  const resetLink = `http://localhost:8081/recuperar-senha?email=${encodeURIComponent(email)}`;
    try {
      const response = await fetch('http://localhost:3010/send-reset-pass', { 
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
      return false; 
    }
  };
  
  export default sendPasswordResetEmail;