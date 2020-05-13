export default function WrongInput({
  className,
  message = "Wrong input...",
  tip = "Check the base values, please."
}) {

  return (
    <div className={className} title={tip}>
      {message}
    </div>
  );
}
