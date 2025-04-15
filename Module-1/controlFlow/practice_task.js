/*
### Practice task
1. Suppose an organization arranges a "Dietary Services" program to provide diets to its employees and customers, based on a person's weight and day-to-day routine. You need to create an authorization-based code to provide access to people based on their roles in organization, such as employees, enrolled members for "Dietary Services," and subscribers.
    - If the person is an **Employee**, they are authorized to have access to "Dietary Services".
    - If the person is an **Enrolled Member**, they are authorized to have access to "Dietary Services" and one-on-one interaction with a dietician.
    - If the person is a **Subscriber**, they are authorized to have partial access to facilitate "Dietary Services" only.
    - If the person is a **Non-Subscriber**, they need to enroll or at least subscribe first to avail this facility.
        
2. You need to communicate with the user by printing a message indicating whether that person is eligible to avail which type of services.
*/

let program = "Dietary Services";
let userRole = "Non-Subscriber";
let authorizedAccess;
let interactionPrivilege;

switch (userRole) {
  case "Employee":
    authorizedAccess = "full";
    interactionPrivilege = false;
    break;
  case "Enrolled Member":
    authorizedAccess = "full";
    interactionPrivilege = true;
    break;
  case "Subscriber":
    authorizedAccess = "partial";
    interactionPrivilege = false;
    break;
}

if (userRole === "Non-Subscriber") {
  console.log(`Please enroll or subscribe to have access to this ${program} program.`);
} else {
  console.log(
    `You are authorized to have ${authorizedAccess} access to ${program}. One-on-one interaction with a dietitian is ${interactionPrivilege ? 'available' : 'not available'}. `
  );
}