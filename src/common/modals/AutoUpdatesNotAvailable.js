import React, { memo } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';

const AutoUpdatesNotAvailable = () => {
  return (
    <Modal
      css={`
        height: 200px;
        width: 400px;
      `}
      title="Auto Updates Not Available"
    >
      <Container>
        <div>Les mises à jour automatiques ne sont pas disponibles sur cette platforme.</div>
        <div
          css={`
            margin-top: 20px;
          `}
        >
          Veuillez télécharger la nouvelle version <a href="https://github.com/AQRRastiq/arkemysclient">ici</a>
        </div>
      </Container>
    </Modal>
  );
};

export default memo(AutoUpdatesNotAvailable);

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  color: ${props => props.theme.palette.text.primary};
`;
