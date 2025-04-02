export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  /*This consts or variable is needed, with uppercase, to let the system now that we want to Use is as a custom component below and not to look for a build in component*/
  /*OR like I will do, I pass the prop UpperCase so i dont have to create a new varaible or const*/
  //const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
