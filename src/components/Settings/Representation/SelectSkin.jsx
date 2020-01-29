import { Fragment } from "react";

const Representation = ({ type, mode, handleMode }) => (
  < >
    <input
      type="radio"
      name="repr"
      onChange={handleMode}
      value={type}
      checked={(mode === type)}
      id={`set-${type}`} />
    <label htmlFor={`set-${type}`}>
      <span>{type}</span>
    </label>
  </>
);

const RepresentationSkins = ({ type, skin: selected, mode, skins, handleSkin }) => (
  <select
    name={type}
    onChange={handleSkin}
    value={selected}
    disabled={(type !== mode)}>
      {skins.map(skin => (
        <option
          value={skin}
          key={skin}
          data-skin={skin}>
            {skin}
        </option>
      ))}
  </select>
);

const SelectSkin = ({ data, mode, skin, handleMode, handleSkin }) => (
  <form>
    {data.map((element, index) => (
      <Fragment key={index} >
        <Representation
          type={element.representation}
          mode={mode}
          handleMode={handleMode} />
        <RepresentationSkins
          type={element.representation}
          handleSkin={handleSkin}
          skin={skin}
          mode={mode}
          skins={element.skins} />
      </Fragment>
    ))}    
  </form>
);

export default SelectSkin;
