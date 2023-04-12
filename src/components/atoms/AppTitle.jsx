import forkAndKnife from "../../assets/icons/fork-and-knife.svg"
function AppTitle() {
  return (
    <div className="flex justify-center items-start	gap-8">
      <h1 data-element="app__title" className="text-3xl mb-8 text-center uppercase font-semibold">ramsey + turner recipes</h1>
      <img src={forkAndKnife} alt="App Logo of a fork and knife" />
    </div>
  );
}

export default AppTitle;