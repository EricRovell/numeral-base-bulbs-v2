const SettingsSection = ({ children, name }) => (
  <div>
    <header>{name}</header>
    {children}
  </div>
);

export default SettingsSection;
