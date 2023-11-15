import localStorageKullan from "./localStorageKullan";
function useDarkMode() {
  const [geceModu, setGeceModu] = localStorageKullan("geceModu", false);

  const geceModunaGecis = () => {
    setGeceModu(!geceModu);
  };
  return [geceModu, geceModunaGecis];
}
export default useDarkMode;
