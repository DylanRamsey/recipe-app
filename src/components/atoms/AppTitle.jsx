import forkAndKnife from "../../assets/icons/fork-and-knife.svg"
function AppTitle() {
  return (
    <div className="flex justify-center mb-8 items-center	gap-8">
      <h1 className="text-2xl lg:text-3xl  text-center uppercase font-semibold">ramsey + turner recipes</h1>
      <img className="hidden sm:block" src={forkAndKnife} alt="App Logo of a fork and knife" />
    </div>
  );
}

export default AppTitle;