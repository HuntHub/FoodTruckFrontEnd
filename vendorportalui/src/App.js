import React, { useEffect } from 'react';
import './App.css';
import OrdersLists from './orderslists';
import { Auth } from 'aws-amplify'; // Add this import statement

function App() {
  useEffect(() => {
    async function signIn() {
      try {
        const user = await Auth.signIn('testuser2', 'goozannchos1');
        console.log(user);

        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
          const newPassword = 'goozannchos1'; // Provide a new password for the user
          const { requiredAttributes } = user.challengeParam;

          // Handle required attributes, if any
          if (requiredAttributes && requiredAttributes.length > 0) {
            // Prompt the user to provide the required attributes (e.g., email)
            // Set the attribute values as needed
            const attributes = {
              email: 'hunter.hartnett.moseley@gmail.com', // Replace with the user's actual email
            };

            // Complete the new password requirement with required attributes
            const updatedUser = await Auth.completeNewPassword(user, newPassword, attributes);
            console.log('User password updated:', updatedUser);
          } else {
            // Complete the new password requirement without required attributes
            const updatedUser = await Auth.completeNewPassword(user, newPassword);
            console.log('User password updated:', updatedUser);
          }
        }
      } catch (error) {
        console.log('Error signing in:', error);
      }
    }

    signIn();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Orders</h1>
        <OrdersLists />
      </header>
    </div>
  );
}

export default App;
