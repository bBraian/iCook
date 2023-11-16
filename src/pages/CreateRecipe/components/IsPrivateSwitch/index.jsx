import styled from 'styled-components';

export function IsPrivateSwitch({isPrivate, setIsPrivate}) {

  function handleToggle() {
    setIsPrivate(!isPrivate);
  };

  return (
    <SwitchContainer>
      <SwitchButton onClick={handleToggle} ison={isPrivate ? 'y' : 'n'}>
        <SwitchText ison={isPrivate ? 'y' : 'n'}>{isPrivate ? 'Privada' : 'Pública'}</SwitchText>
        <SwitchBall ison={isPrivate ? 'y' : 'n'} />
      </SwitchButton>
    </SwitchContainer>
  );
};


const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SwitchButton = styled.div`
  position: relative;
  width: 120px;
  height: 44px;
  border-radius: 50px;
  background-color: ${(props) => (props.ison == 'y' ? '#f44336' : '#4CAF50')};
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 2px;
  margin-right: 10px;
`;

const SwitchBall = styled.div`
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #fff;
  transform: ${(props) => (props.ison == 'y' ? 'translateX(84px)' : 'translateX(6px)')};
  transition: transform 0.2s ease-in-out;
`;

const SwitchText = styled.p`
  position: absolute;
  margin: 0 10px;
  left: ${(props) => (props.ison == 'y' ? '0px' : '36px')};
  color: white;
  font-weight: bold;
`;
