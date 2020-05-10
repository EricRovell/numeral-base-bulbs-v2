import Navigation from "components/UI/Navigation/Navigation";
import { useModalContext } from "components/Hooks/useModal/useModalContext";

export default function NavigationMobile({ data, href, className }) {

  const [ { open }, dispatch ] = useModalContext();

  const closeModal = event => {
    dispatch({ type: "switch" });
  };

  const preventPropagation = event => {
    event.stopPropagation();
  };

  const openModal = () => {
    if (open) {
      closeModal()
    } else {
      dispatch({
        type: "show",
        contents: (
          <Navigation
            data={data}
            href={href}
            preventPropagation={preventPropagation}
            closeModal={closeModal}
          />
        )
      });
    } 
  };

  return (
    <div
      className={className}
      onClick={openModal}>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.55 58.77">  
        <rect x="1.5" y="1.5" width="11" height="11" rx="0.97" />  
        <rect x="1.5" y="23.88" width="11" height="11" rx="0.97" /> 
        <rect x="1.5" y="46.27" width="11" height="11" rx="0.97" /> 
        <rect x="23.69" y="4.14" width="58.36" height="4.17" rx="1.07"/>
        <rect x="23.69" y="27.3" width="58.36" height="4.17" rx="1.07"/> 
        <rect x="23.69" y="49.68" width="58.36" height="4.17" rx="1.07"/>  
      </svg>
    </div>
  );
}
