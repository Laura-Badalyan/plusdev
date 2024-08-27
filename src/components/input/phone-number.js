import { Input } from '.';

export const PhoneNumber = (props) => {
  const handleKeyPress = (event) => {
    // Get the key code or character value of the pressed key
    const keyCode = event.which || event.keyCode || event.charCode;
    const char = String.fromCharCode(keyCode);

    // Check if the key is a number or the "+" sign
    if (!/^[\d+]$/.test(char)) {
      event.preventDefault();
    }
  };

  return (
    <Input
      style={{ width: '100%' }}
      maxLength={12}
      type="tel"
      placeholder="+374XXXXXXXX"
      onKeyPress={handleKeyPress}
      {...props}
    />
  );
};
